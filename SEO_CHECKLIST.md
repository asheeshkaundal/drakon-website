# SEO Update Checklist

## ✅ Pre-Deployment Checklist

- [ ] Verify `footer-logo-final.png` exists in `/public` folder
- [ ] Verify image is at least 1200x630 pixels
- [ ] Image file size is under 1MB
- [ ] Image is clear and high quality
- [ ] Run `npm run build` successfully
- [ ] Test website locally with `npm run dev`
- [ ] Check no build errors or warnings

## ✅ Post-Deployment Checklist

### Immediate Actions (Day 1)

- [ ] Deploy to production (Vercel/hosting platform)
- [ ] Visit https://www.drakonsports.com and verify it loads
- [ ] View page source and verify meta tags are present
- [ ] Test Open Graph: https://developers.facebook.com/tools/debug/
- [ ] Test Twitter Card: https://cards-dev.twitter.com/validator
- [ ] Test Rich Results: https://search.google.com/test/rich-results
- [ ] Verify sitemap accessible: https://www.drakonsports.com/sitemap.xml
- [ ] Verify robots.txt accessible: https://www.drakonsports.com/robots.txt

### Google Search Console Setup (Day 1-2)

- [ ] Sign up at https://search.google.com/search-console
- [ ] Add property: https://www.drakonsports.com
- [ ] Verify ownership (use DNS or HTML tag method)
- [ ] Add Google verification code to layout.tsx
- [ ] Submit sitemap: https://www.drakonsports.com/sitemap.xml
- [ ] Request indexing for homepage
- [ ] Request indexing for key pages (about, products, contact)

### Testing & Validation (Day 2-3)

- [ ] Check structured data with Schema Validator: https://validator.schema.org/
- [ ] Test mobile-friendliness: https://search.google.com/test/mobile-friendly
- [ ] Test page speed: https://pagespeed.web.dev/
- [ ] Verify all internal links work
- [ ] Test social sharing on WhatsApp
- [ ] Test social sharing on Facebook
- [ ] Test social sharing on Twitter/X

### Monitoring (Week 1-4)

- [ ] Week 1: Check Google Search Console for crawl errors
- [ ] Week 1: Monitor coverage report
- [ ] Week 2: Check if pages are indexed (search: site:drakonsports.com)
- [ ] Week 2: Verify image appears in Google Images
- [ ] Week 3: Monitor impressions and clicks in Search Console
- [ ] Week 4: Check if title and description appear in search results

### Optional Enhancements

- [ ] Create Google My Business profile
- [ ] Add business to Google Maps
- [ ] Create/update social media profiles with new branding
- [ ] Add FAQ schema for common questions
- [ ] Add Product schema for cricket equipment pages
- [ ] Create blog content for SEO
- [ ] Build backlinks from cricket forums/sites

## 📊 Expected Timeline

| Week   | Expected Results                   |
| ------ | ---------------------------------- |
| Week 1 | Site crawled, pages discovered     |
| Week 2 | Pages indexed, sitemap processed   |
| Week 3 | Rich results may appear            |
| Week 4 | Updated snippets visible in search |

## 🎯 Success Metrics

Track these in Google Search Console:

- [ ] Total impressions increasing
- [ ] Average position improving
- [ ] Click-through rate (CTR) above 2%
- [ ] Pages indexed = all important pages
- [ ] Zero coverage errors
- [ ] Rich results appearing

## 🚨 Common Issues & Solutions

### Issue: Image not showing

**Solution:**

- Ensure image is publicly accessible
- Check image dimensions (min 1200px wide)
- Force Facebook/Twitter to re-scrape

### Issue: Old title still showing in Google

**Solution:**

- Use URL Inspection tool in Search Console
- Request re-indexing
- Wait 2-4 weeks for natural re-crawl

### Issue: Rich results not appearing

**Solution:**

- Test structured data at search.google.com/test/rich-results
- Fix any errors shown
- Re-submit to Search Console

### Issue: Sitemap not detected

**Solution:**

- Verify sitemap.xml is accessible
- Submit manually in Search Console
- Check for XML format errors

## 📝 Notes

- Google updates can take 1-4 weeks
- Not all searches will show rich results
- Keep content fresh and updated
- Build quality backlinks over time
- Monitor Search Console weekly

## 🎉 Completion

Once all items are checked:

- [ ] Document completion date: ******\_\_\_******
- [ ] Save before/after screenshots
- [ ] Monitor results monthly
- [ ] Update SEO strategy quarterly

---

**Created:** November 7, 2025  
**Status:** Ready for deployment
