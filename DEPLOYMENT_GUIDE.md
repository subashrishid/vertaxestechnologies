# Vionix Technologies Website — Deployment Guide

## 🚀 Deploy to Netlify (Free Cloud Hosting)

### Method 1: Drag & Drop (Easiest — No GitHub Needed)

1. **Go to** [https://www.netlify.com](https://www.netlify.com)
2. **Sign up** for a free account (use Google or email)
3. After login, click **"Add new site"** → **"Deploy manually"**
4. **Drag and drop** the entire `vionix-website` folder into the upload area
5. ✅ Your website is live! You'll get a URL like `https://random-name.netlify.app`

#### Rename Your Site URL:
- Go to **Site settings** → **Change site name**
- Change to: `vionix` → Your URL becomes `https://vionix.netlify.app`

---

### Method 2: GitHub + Netlify (Auto-Deploy on Changes)

1. **Create a GitHub account** at [github.com](https://github.com)
2. **Install Git** from [git-scm.com](https://git-scm.com)
3. **Create a new repository** called `vionix-website`
4. **Open terminal** in your project folder and run:

```bash
cd "c:\Users\subas\This PC\vionix-website"
git init
git add .
git commit -m "Initial commit - Vionix Technologies website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/vionix-website.git
git push -u origin main
```

5. Go to **Netlify** → **"Add new site"** → **"Import an existing project"**
6. **Connect GitHub** → Select `vionix-website` repository
7. Click **Deploy site**
8. ✅ Now every push to GitHub auto-deploys your website!

---

## 🌐 Connect Custom Domain (vionix.com)

1. In Netlify, go to **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Enter: `vionix.com`
4. Netlify will ask you to add DNS records:
   - Go to your domain registrar (GoDaddy, Namecheap, etc.)
   - Add a **CNAME record**: `www` → `your-site.netlify.app`
   - Add an **A record**: `@` → Netlify's IP (shown in dashboard)
5. Wait 24-48 hours for DNS to propagate

---

## 🔒 Enable Free SSL Certificate

1. Go to **Site settings** → **Domain management** → **HTTPS**
2. Click **"Verify DNS configuration"**
3. Click **"Provision certificate"**
4. ✅ Free SSL is activated! Your site loads via `https://`

---

## 📧 Configure Form Email Notifications

Your forms use Netlify Forms (built-in). To receive emails:

1. Go to **Site settings** → **Forms**
2. You'll see all form submissions listed there
3. To get email notifications:
   - Go to **Site settings** → **Forms** → **Form notifications**
   - Click **"Add notification"** → **"Email notification"**
   - Enter email: `subashrishid@gmail.com`
   - Select which forms to notify for
4. ✅ Now you'll receive emails for every form submission!

---

## 📂 Files Included

| File | Purpose |
|------|---------|
| `index.html` | Home page |
| `about.html` | About page |
| `services.html` | Detailed services page |
| `server-amc.html` | Server AMC page with request form |
| `projects.html` | Portfolio/projects page |
| `contact.html` | Contact page with form + Google Maps |
| `css/style.css` | Main design system |
| `css/animations.css` | All animations and keyframes |
| `css/responsive.css` | Mobile/tablet/desktop responsive styles |
| `js/main.js` | All JavaScript interactivity |
| `netlify.toml` | Netlify deployment configuration |
| `_redirects` | URL redirect rules |

---

## ⚡ Performance Notes

- All images use lazy loading
- No heavyweight JS frameworks — pure vanilla JS
- CSS is optimized with minimal selectors
- Fonts preloaded with `preconnect`
- Security headers configured in `netlify.toml`
