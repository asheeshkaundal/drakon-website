import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  fullName: string;
  companyName?: string;
  email: string;
  phone: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validate required fields
    if (!body.fullName || !body.email || !body.phone) {
      return NextResponse.json(
        {
          error:
            "Missing required fields: Full Name, Email, and Phone are required",
        },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Create email template
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>New Contact Form Submission - Drakon Sports</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #1a2332; color: white; padding: 20px; text-align: center; }
            .content { background-color: #f9f9f9; padding: 30px; }
            .field { margin-bottom: 20px; }
            .label { font-weight: bold; color: #1a2332; display: block; margin-bottom: 5px; }
            .value { background-color: white; padding: 10px; border-left: 4px solid #4a9b9b; }
            .footer { background-color: #c41e3a; color: white; padding: 15px; text-align: center; }
            .highlight { color: #c41e3a; font-weight: bold; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🏏 New Contact Form Submission</h1>
              <p>Drakon Sports - Cricket Equipment Excellence</p>
            </div>
            
            <div class="content">
              <h2>Contact Details</h2>
              
              <div class="field">
                <span class="label">Full Name:</span>
                <div class="value">${body.fullName}</div>
              </div>
              
              ${
                body.companyName
                  ? `
              <div class="field">
                <span class="label">Company Name:</span>
                <div class="value">${body.companyName}</div>
              </div>
              `
                  : ""
              }
              
              <div class="field">
                <span class="label">Email Address:</span>
                <div class="value"><a href="mailto:${
                  body.email
                }" class="highlight">${body.email}</a></div>
              </div>
              
              <div class="field">
                <span class="label">Phone Number:</span>
                <div class="value"><a href="tel:${
                  body.phone
                }" class="highlight">${body.phone}</a></div>
              </div>
              
              ${
                body.message
                  ? `
              <div class="field">
                <span class="label">Message:</span>
                <div class="value">${body.message.replace(/\n/g, "<br>")}</div>
              </div>
              `
                  : ""
              }
            </div>
            
            <div class="footer">
              <p>This inquiry was submitted through the Drakon Sports contact form</p>
              <p>Please respond within 24 hours for the best customer experience</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send email using Resend
    const emailResponse = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "asheesh.kaundal@drakonsports.com",
      subject: `New Contact Form Submission from ${body.fullName}${
        body.companyName ? ` (${body.companyName})` : ""
      }`,
      html: emailHtml,
      replyTo: body.email,
    });

    console.log("Email sent successfully:", emailResponse);

    return NextResponse.json(
      {
        success: true,
        message:
          "Your message has been sent successfully! We will get back to you soon.",
        id: emailResponse.data?.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);

    return NextResponse.json(
      {
        error:
          "Failed to send message. Please try again later or contact us directly.",
        details: process.env.NODE_ENV === "development" ? error : undefined,
      },
      { status: 500 }
    );
  }
}
