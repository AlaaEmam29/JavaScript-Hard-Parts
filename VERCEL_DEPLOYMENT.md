# Deploying to Vercel - Complete Guide

This guide will help you deploy your MkDocs Material site to Vercel for free hosting with a custom domain.

## 📋 Prerequisites

- GitHub account
- Vercel account (free)
- Your MkDocs project files

## 🚀 Step-by-Step Deployment

### Step 1: Prepare Your GitHub Repository

1. **Create a new GitHub repository:**
   - Go to [github.com](https://github.com) and create a new repository
   - Name it something like `js-hard-parts-docs` or `javascript-resources`
   - Make it public (required for free Vercel hosting)

2. **Upload your project files:**
   - Upload all files from this project to your GitHub repository
   - Make sure these files are included:
     - `mkdocs.yml`
     - `docs/` directory with all content
     - `requirements.txt`
     - `vercel.json`
     - `.gitignore`

### Step 2: Create Vercel Account

1. **Sign up for Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Sign Up"
   - Choose "Continue with GitHub" for easy integration

2. **Connect your GitHub account:**
   - Authorize Vercel to access your GitHub repositories
   - This allows Vercel to automatically deploy when you push changes

### Step 3: Deploy Your Site

1. **Import your project:**
   - In your Vercel dashboard, click "New Project"
   - Select "Import Git Repository"
   - Choose your GitHub repository

2. **Configure build settings:**
   - **Framework Preset:** Select "Other"
   - **Build Command:** `pip install -r requirements.txt && mkdocs build`
   - **Output Directory:** `site`
   - **Install Command:** `pip install -r requirements.txt`

3. **Deploy:**
   - Click "Deploy"
   - Vercel will build and deploy your site
   - You'll get a URL like `https://your-project.vercel.app`

### Step 4: Custom Domain (Optional)

1. **Add your domain:**
   - In your Vercel project dashboard, go to "Settings" → "Domains"
   - Add your custom domain (e.g., `js-hard-parts.com`)
   - Follow Vercel's DNS configuration instructions

2. **Configure DNS:**
   - Add the CNAME record provided by Vercel to your domain registrar
   - Wait for DNS propagation (usually 5-30 minutes)

## 📁 Required Files

Your repository should contain these files:

```
js-hard-parts-docs/
├── mkdocs.yml              # MkDocs configuration
├── requirements.txt        # Python dependencies
├── vercel.json            # Vercel configuration
├── .gitignore             # Git ignore rules
├── docs/                  # Documentation content
│   ├── index.md
│   ├── getting-started/
│   ├── javascript-principles/
│   ├── functions-callbacks/
│   ├── closure/
│   ├── asynchronous-javascript/
│   ├── promises/
│   ├── classes-prototypes/
│   ├── advanced-concepts/
│   ├── contributing/
│   ├── about/
│   └── stylesheets/
└── README.md              # Project documentation
```

## 🔄 Automatic Deployments

Once set up, Vercel will automatically:
- **Deploy on push:** Every time you push to your main branch
- **Preview deployments:** Create preview URLs for pull requests
- **Build optimization:** Optimize your site for performance

## 🛠️ Configuration Files Explained

### `vercel.json`
```json
{
  "buildCommand": "pip install mkdocs-material && mkdocs build",
  "outputDirectory": "site",
  "installCommand": "pip install mkdocs-material",
  "framework": null
}
```

### `requirements.txt`
```
mkdocs-material==9.6.14
mkdocs==1.6.1
pymdown-extensions==10.16
```

## 🎯 Benefits of Vercel Deployment

- **Free hosting** for open source projects
- **Custom domains** with SSL certificates
- **Global CDN** for fast loading worldwide
- **Automatic deployments** from GitHub
- **Preview deployments** for testing changes
- **Analytics** and performance monitoring

## 🔧 Troubleshooting

### Build Fails
- Check that `requirements.txt` includes all dependencies
- Verify `mkdocs.yml` syntax is correct
- Ensure all referenced files exist

### Site Not Loading
- Check the output directory is set to `site`
- Verify the build command completed successfully
- Check Vercel function logs for errors

### Custom Domain Issues
- Verify DNS records are correctly configured
- Wait for DNS propagation (up to 48 hours)
- Check domain registrar settings

## 📊 Performance Tips

1. **Optimize images:** Use WebP format for better compression
2. **Minimize plugins:** Only use necessary MkDocs plugins
3. **Enable caching:** Vercel automatically handles this
4. **Monitor performance:** Use Vercel Analytics

## 🎉 Success!

Once deployed, your site will be available at:
- **Vercel URL:** `https://your-project.vercel.app`
- **Custom domain:** `https://your-domain.com` (if configured)

Your MkDocs site will automatically rebuild and deploy whenever you push changes to GitHub!

---

**Need help?** Check the [Vercel documentation](https://vercel.com/docs) or [MkDocs Material documentation](https://squidfunk.github.io/mkdocs-material/) for more details.

