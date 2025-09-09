# State of Retail — Starter

A production-ready Next.js (App Router + TypeScript + Tailwind) site with Markdown content and Decap CMS.
Perfect for case studies, articles, mini classes, and resources.

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Visit your site:**
   - Main site: http://localhost:3000
   - CMS admin: http://localhost:3000/admin

## Deployment

### Option A: Netlify (Recommended for CMS)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/state-of-retail.git
   git push -u origin main
   ```

2. **Deploy to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repo
   - Build settings: `npm run build`
   - Publish directory: `.next`

3. **Enable CMS:**
   - Go to Site Settings → Identity
   - Enable Identity
   - Go to Site Settings → Identity → Services → Git Gateway
   - Enable Git Gateway

4. **Access CMS:**
   - Visit `yoursite.netlify.app/admin`
   - Sign up with your email
   - Start creating content!

### Option B: Vercel

1. **Push to GitHub** (same as above)

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repo
   - Framework: Next.js (auto-detected)
   - Deploy!

**Note:** For Vercel, you'll need to use a headless CMS like Sanity or Contentful instead of Decap CMS, or edit markdown files directly in Git.

## Custom Domain

1. **In your hosting platform:**
   - Add your domain (e.g., stateofretail.com)
   - Follow DNS setup instructions

2. **At your domain registrar:**
   - Point DNS to your hosting platform
   - Wait for SSL certificate (automatic)

## Content Management

### Via CMS (Netlify only)
- Visit `/admin` on your live site
- Create/edit content through the web interface
- Changes are automatically committed to Git

### Via Markdown Files
- Edit files in `/content/` folders
- Commit and push to Git
- Site rebuilds automatically

## Project Structure

```
state-of-retail/
├── app/                    # Next.js pages
│   ├── case-studies/      # Case study pages
│   ├── articles/          # Article pages
│   ├── classes/           # Mini class pages
│   ├── resources/         # Resource pages
│   └── api/               # API routes
├── components/            # React components
├── content/               # Markdown content
│   ├── case-studies/
│   ├── articles/
│   ├── mini-classes/
│   └── resources/
├── lib/                   # Utilities
├── public/                # Static assets
│   ├── admin/             # Decap CMS
│   └── uploads/           # Media files
└── Configuration files
```

## Next Steps

- [ ] Connect newsletter to your ESP (Mailchimp, ConvertKit)
- [ ] Add analytics (Plausible, Google Analytics)
- [ ] Customize branding and colors
- [ ] Add more content sections
- [ ] Set up search functionality
- [ ] Add RSS feed and sitemap

## Support

For questions or issues, check the [Next.js docs](https://nextjs.org/docs) or [Decap CMS docs](https://decapcms.org/docs/).
