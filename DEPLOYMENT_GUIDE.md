# 🚀 Vertaxes Technologies — Complete Deployment Guide

## Overview
This guide covers deploying the Vertaxes Technologies website with:
- ✅ **Eleventy** (Static Site Generator)
- ✅ **Decap CMS** (Admin Panel at `/admin`)
- ✅ **Netlify Forms** (Contact & AMC forms with email notifications)
- ✅ **MP4 Video Player** (Direct video, no YouTube)
- ✅ **Netlify Identity** (Secure admin login)

---

## 📦 Project Structure

```
vionix-website/
├── _data/                  # CMS-managed JSON data files
│   ├── site.json          # Global settings (email, phone, WhatsApp)
│   ├── home.json          # Home page content
│   ├── about.json         # About page content
│   ├── services.json      # Services list
│   ├── projects.json      # Projects portfolio
│   └── testimonials.json  # Client reviews
├── src/                    # Eleventy source templates
│   ├── _includes/
│   │   └── base.njk       # Base layout (navbar, footer)
│   ├── index.njk          # Home page
│   ├── about.njk          # About page
│   ├── services.njk       # Services page
│   ├── server-amc.njk     # Server AMC page
│   ├── projects.njk       # Projects page
│   └── contact.njk        # Contact page
├── admin/                  # Decap CMS admin panel
│   ├── index.html         # CMS entry point
│   └── config.yml         # CMS configuration
├── css/                    # Stylesheets
├── js/                     # JavaScript
├── images/                 # Static images
├── videos/                 # MP4 videos
├── .eleventy.js           # Eleventy configuration
├── netlify.toml           # Netlify build & deploy config
└── package.json           # Dependencies
```

---

## 🌐 Step 1: Push to GitHub

### First Time Setup
```bash
cd vionix-website
git init
git add .
git commit -m "Initial commit: Vertaxes Technologies website with CMS"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/vionix-website.git
git push -u origin main
```

### If Already Connected
```bash
git add .
git commit -m "Add Eleventy, Decap CMS, video player, Netlify Forms"
git push origin main
```

---

## 🔗 Step 2: Deploy to Netlify

1. Go to **[netlify.com](https://netlify.com)** and log in
2. Click **"Add New Site" → "Import an existing project"**
3. Choose **GitHub** and select your `vionix-website` repository
4. Netlify will auto-detect settings from `netlify.toml`:
   - **Build Command:** `npx @11ty/eleventy`
   - **Publish Directory:** `_site`
5. Click **"Deploy Site"**

---

## 🔐 Step 3: Enable Netlify Identity (For Admin Panel)

**This is REQUIRED for the `/admin` CMS panel to work.**

1. In Netlify Dashboard → Go to your site
2. Click **"Integrations"** → Search for **"Identity"**
3. Click **"Enable Identity"**
4. Go to **Settings → Identity → Registration**
   - Set to **"Invite Only"** (recommended for security)
5. Go to **Settings → Identity → Services → Git Gateway**
   - Click **"Enable Git Gateway"**
6. Go to **Identity → Invite Users**
   - Enter your email: `subashrishid@gmail.com`
   - Click **"Send Invite"**
7. Check your email and **accept the invitation**
8. Set your admin password

### Now access the admin panel:
```
https://vertaxestechnologies.netlify.app/admin/
```

---

## 📧 Step 4: Configure Form Email Notifications

1. In Netlify Dashboard → **Forms**
2. You should see forms: `contact`, `consultation`, `amc-request`
3. Click on each form → **Settings → Form Notifications**
4. Click **"Add notification" → "Email notification"**
5. Configure:
   - **Email to notify:** `subashrishid@gmail.com`
   - **Custom subject:** `New Enquiry from Vertaxes Website`
6. Repeat for each form

---

## 🎬 Step 5: Add Your Company Video

1. Record or prepare a company intro video (MP4 format)
2. Recommended: 720p or 1080p, under 50MB
3. Save the file as `videos/intro.mp4` in your project
4. Push to GitHub:
```bash
git add videos/intro.mp4
git commit -m "Add company intro video"
git push
```
5. Alternatively, upload via Admin Panel → Settings → Video File Path

---

## 🌍 Step 6: Custom Domain (Optional)

1. In Netlify Dashboard → **Domain Settings**
2. Click **"Add custom domain"**
3. Enter your domain (e.g., `vertaxes.com`)
4. Configure DNS:
   - Add a **CNAME record** pointing to `YOUR-SITE.netlify.app`
   - Or use Netlify DNS for automatic SSL
5. SSL is automatically provisioned by Netlify

---

## 🛠️ Using the Admin Panel (CMS)

### Accessing the Admin
1. Go to `https://vertaxestechnologies.netlify.app/admin/`
2. Log in with your Netlify Identity credentials

### What You Can Edit

| Section | What You Can Change |
|---------|-------------------|
| ⚙️ **Site Settings** | Phone, Email, WhatsApp, Social links, Video |
| 🏠 **Home Page** | Hero text, badges, stats counters |
| ℹ️ **About Page** | Company intro, mission, vision |
| 🛠️ **Services** | Add/edit/remove services with icons and features |
| 📁 **Projects** | Add/edit/remove portfolio projects |
| ⭐ **Testimonials** | Add client reviews (shows empty state until added) |

### How It Works
1. Make changes in the CMS
2. Click **"Publish"**
3. Decap CMS commits changes to GitHub
4. Netlify auto-rebuilds and deploys (takes ~30 seconds)

---

## 📋 Forms Available

| Form Name | Location | Fields |
|-----------|----------|--------|
| `consultation` | Home page | Name, Company, Phone, Email, Service, Message |
| `contact` | Contact page | Name, Email, Phone, Service, Message |
| `amc-request` | Server AMC page | Name, Company, Phone, Email, Server Count, Requirements |

All forms include:
- ✅ Netlify form processing
- ✅ Bot protection (honeypot)
- ✅ Success message display
- ✅ Email notifications (configured in Step 4)

---

## 🔄 Making Code Changes

```bash
# Pull latest (in case CMS made changes)
git pull

# Make your changes
# ...

# Build locally (requires Node.js)
npx @11ty/eleventy --serve

# Push changes
git add .
git commit -m "Your change description"
git push
```

---

## ❓ Troubleshooting

### Admin panel shows "Your site configuration was not found"
- Make sure `admin/` folder is being deployed (check `_site` output)
- Verify `admin/config.yml` exists with proper configuration

### Admin panel login not working
- Ensure Netlify Identity is enabled
- Ensure Git Gateway is enabled
- Check that you've accepted the invite email

### Forms not working
- Forms ONLY work when deployed to Netlify (not locally)
- Ensure `data-netlify="true"` is on the `<form>` tag
- Check the hidden `form-name` input matches the form's `name` attribute

### Video not playing
- Ensure the video file exists at the path specified in Settings
- MP4 with H.264 codec is the most compatible format
- Check file size is under 100MB (Netlify limit)

### Build failing on Netlify
- Check Netlify build logs for errors
- Ensure Node.js version in `netlify.toml` matches (18+)
- Verify all template files have valid frontmatter

---

## 📊 Performance Tips

1. **Optimize images** — Use compressed JPEG/WebP for service images
2. **Compress videos** — Use HandBrake to compress MP4 under 30MB
3. **Enable CDN** — Netlify CDN is automatic
4. **Monitor** — Use Netlify Analytics for visitor insights

---

**Built with ❤️ by Vertaxes Technologies**
**Tech Stack:** Eleventy + Decap CMS + Netlify Forms + Vanilla CSS/JS
