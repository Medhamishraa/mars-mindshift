# 🚀 MARS Mindshift Training Hub — Website

A modern, responsive React website for **MARS Mindshift Training Hub**, a professional training and leadership development firm.

**Live tagline:** *Redefining Mindsets. Rebuilding Potential.*

---

## 📋 Tech Stack

| Tool | Purpose |
|------|---------|
| **React 18** | UI Framework |
| **Vite** | Build tool (fast dev server + optimized builds) |
| **Tailwind CSS 3** | Utility-first CSS styling |
| **Framer Motion** | Smooth animations & transitions |
| **Swiper.js** | Gallery carousel |
| **EmailJS** | Contact form email delivery |
| **React Icons** | Icon library |
| **React Intersection Observer** | Scroll-triggered animations |

---

## 🖥️ How to Run Locally (VS Code)

### Prerequisites
- **Node.js** v18+ installed → [Download here](https://nodejs.org/)
- **VS Code** → [Download here](https://code.visualstudio.com/)

### Steps

```bash
# 1. Extract the ZIP file and open the folder in VS Code
#    File > Open Folder > select "mars-website"

# 2. Open the integrated terminal in VS Code (Ctrl + ` or Cmd + `)

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev

# 5. Open your browser and visit:
#    http://localhost:5173
```

You should see the MARS website running with all sections, animations, and the contact form.

---

## ✉️ EmailJS Setup (Contact Form)

The contact form uses **EmailJS** to send emails without a backend server.

### Step-by-step:

1. **Create an account** at [https://www.emailjs.com/](https://www.emailjs.com/) (free tier = 200 emails/month)

2. **Create an Email Service:**
   - Go to **Email Services** → **Add New Service**
   - Choose **Gmail** (or your preferred provider)
   - Connect your Gmail account (e.g., marsmindshift@gmail.com)
   - Note down the **Service ID** (e.g., `service_abc123`)

3. **Create an Email Template:**
   - Go to **Email Templates** → **Create New Template**
   - Use these template variables in your template body:
     ```
     Name: {{name}}
     Email: {{email}}
     Organization: {{organization}}
     Training Type: {{training_type}}
     Message: {{message}}
     ```
   - Set "To Email" as your receiving email
   - Note down the **Template ID** (e.g., `template_xyz789`)

4. **Get your Public Key:**
   - Go to **Account** → **API Keys**
   - Copy your **Public Key**

5. **Update the code:**
   - Open `src/components/Contact.jsx`
   - Find these three lines and replace:
     ```js
     'YOUR_SERVICE_ID'   → your Service ID
     'YOUR_TEMPLATE_ID'  → your Template ID
     'YOUR_PUBLIC_KEY'    → your Public Key
     ```

6. **Test it!** Fill out the form and check your inbox.

---

## 📁 Project Structure

```
mars-website/
├── public/
│   ├── logo-full.png          # Full MARS logo (horizontal)
│   ├── logo-icon.png          # Logo icon (the 4-heart symbol)
│   └── (add training photos here for the gallery)
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx         # Sticky nav with smooth scroll
│   │   ├── Hero.jsx           # Hero section with animated bg
│   │   ├── About.jsx          # Founder info + stats counters
│   │   ├── Services.jsx       # 4 service cards + modals
│   │   ├── WhyChooseUs.jsx    # Why MARS section
│   │   ├── Clients.jsx        # Scrolling client marquee
│   │   ├── Gallery.jsx        # Flip cards + Swiper carousel
│   │   ├── Contact.jsx        # EmailJS contact form
│   │   ├── Footer.jsx         # Footer with links & socials
│   │   ├── WhatsAppButton.jsx # Floating WhatsApp CTA
│   │   ├── ScrollProgress.jsx # Top scroll progress bar
│   │   └── Preloader.jsx      # Animated loading screen
│   │
│   ├── styles/
│   │   └── global.css         # Tailwind + custom CSS
│   │
│   ├── App.jsx                # Main app layout
│   └── main.jsx               # React entry point
│
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── package.json
└── README.md
```

---

## 🏗️ Building for Production

```bash
# Create an optimized production build
npm run build

# Preview the production build locally
npm run preview
```

The build output goes to the `dist/` folder — this is what you deploy.

---

## 🌐 Deploying to Your Own Domain (e.g., marsmindshift.com)

### Option 1: Traditional Hosting (Recommended for Custom Domains)

This is the best approach for having `marsmindshift.com` as your website address.

#### Step 1: Buy Your Domain
- **Recommended registrars:**
  - [Namecheap](https://www.namecheap.com/) (~₹800/year for .com)
  - [GoDaddy](https://www.godaddy.com/) (~₹999/year)
  - [Google Domains](https://domains.google/) (clean interface)
  - [Hostinger](https://www.hostinger.in/) (good value bundles)
- Search for `marsmindshift.com` or `marsmindshifttraininghub.com`
- Purchase the domain

#### Step 2: Get Web Hosting
- **Recommended hosts (with free SSL):**
  - **Hostinger** — ₹149/mo (best budget, includes free domain)
  - **Bluehost** — ₹199/mo
  - **A2 Hosting** — fast, ₹250/mo
  - **DigitalOcean** — ₹350/mo (more technical, very reliable)
  - **AWS Lightsail** — $3.50/mo (great for tech-savvy users)

#### Step 3: Deploy

**For shared hosting (Hostinger, Bluehost):**
```bash
# 1. Build your project
npm run build

# 2. Upload the contents of the `dist/` folder to your hosting
#    via File Manager or FTP (use FileZilla)
#    Upload to: public_html/ folder

# 3. Point your domain's nameservers to your hosting provider
#    (your host will provide these during signup)
```

**For VPS/Cloud (DigitalOcean, AWS):**
```bash
# 1. SSH into your server
ssh root@your-server-ip

# 2. Install Nginx
sudo apt update && sudo apt install nginx -y

# 3. Build locally and upload dist/ to server
scp -r dist/* root@your-server-ip:/var/www/marsmindshift.com/

# 4. Configure Nginx
sudo nano /etc/nginx/sites-available/marsmindshift.com
```

Nginx config:
```nginx
server {
    listen 80;
    server_name marsmindshift.com www.marsmindshift.com;
    root /var/www/marsmindshift.com;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff2?)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

```bash
# 5. Enable the site
sudo ln -s /etc/nginx/sites-available/marsmindshift.com /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx

# 6. Install free SSL with Let's Encrypt
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d marsmindshift.com -d www.marsmindshift.com
```

### Option 2: Netlify (Free, with Custom Domain)

```bash
# 1. Install Netlify CLI
npm install -g netlify-cli

# 2. Build and deploy
npm run build
netlify deploy --prod --dir=dist

# 3. In Netlify Dashboard:
#    - Go to Domain Settings → Add custom domain
#    - Enter marsmindshift.com
#    - Update your domain's DNS to point to Netlify:
#      A record → 75.2.60.5
#      CNAME www → your-site.netlify.app
#    - Enable HTTPS (automatic with Netlify)
```

### Option 3: Cloudflare Pages (Free, Fast CDN)

```bash
# 1. Push code to GitHub
git init && git add . && git commit -m "Initial commit"
# Create repo on GitHub, then:
git remote add origin https://github.com/yourusername/mars-website.git
git push -u origin main

# 2. Go to https://pages.cloudflare.com/
#    - Connect your GitHub repo
#    - Build command: npm run build
#    - Output directory: dist

# 3. Add custom domain in Cloudflare Pages settings
#    - If domain is on Cloudflare: automatic
#    - If not: update nameservers to Cloudflare's
```

---

## 🔧 DNS Configuration (For Any Hosting)

After you have hosting set up, configure DNS at your domain registrar:

| Type  | Name | Value                        | TTL  |
|-------|------|------------------------------|------|
| A     | @    | Your server IP / hosting IP  | 3600 |
| CNAME | www  | marsmindshift.com            | 3600 |

---

## 🎨 Customization Guide

### Adding Training Photos to Gallery
1. Add photos to `public/` folder
2. In `src/components/Gallery.jsx`, update the `galleryItems` array
3. Replace emoji placeholders with actual `<img>` tags

### Changing Colors
- Edit `tailwind.config.js` → `theme.extend.colors`
- Edit `src/styles/global.css` → CSS variables at the top

### Adding Testimonials (Future Enhancement)
- Create `src/components/Testimonials.jsx`
- Import and add to `App.jsx` between Gallery and Contact

---

## 📈 Business Recommendations

See the included suggestions in the deployment documentation for SEO,
analytics, and growth strategies.

---

## 📄 License

This website is built for MARS Mindshift Training Hub.
All branding, content, and logos are property of MARS.
