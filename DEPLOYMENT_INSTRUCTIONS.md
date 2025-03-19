# Deployment Instructions: Chewy Van Builder

This document guides you through deploying your van builder application to Vercel and embedding it in your Squarespace website.

## 1. Deploy to Vercel

### Prerequisites
- A GitHub account
- A Vercel account (you can sign up for free using your GitHub account)

### Steps to Deploy

1. **Push your code to GitHub**
   - Create a new GitHub repository
   - Push your code to the repository with the following commands:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [Vercel](https://vercel.com) and log in
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect that this is a Vite/React project

3. **Configure the Build**
   - Leave the default settings as Vercel should auto-detect the correct build settings:
     - Framework Preset: Vite
     - Build Command: `npm run build`
     - Output Directory: `dist`
     - Install Command: `npm install`

4. **Deploy**
   - Click "Deploy"
   - Vercel will build and deploy your application
   - Wait for the deployment to complete (usually takes 1-2 minutes)

5. **Get Your Deployment URL**
   - Once deployed, Vercel will provide you with a URL (e.g., `https://your-project.vercel.app`)
   - Make note of this URL as you'll need it for the embedding step

## 2. Update the Embed Script

1. **Update the embed.js file**
   - Open `public/embed.js`
   - Replace `YOUR_VERCEL_DEPLOYMENT_URL` with your actual Vercel deployment URL
   - Redeploy to Vercel to update the script

## 3. Embed in Squarespace

### Method 1: Using Code Block (Preferred)

1. **Create a dedicated page** in your Squarespace site
2. **Add a Code Block**:
   - Click "Add Block" → "Code" → "Code"
   - In the code editor, add:
   ```html
   <div id="van-builder-container"></div>
   <script src="YOUR_VERCEL_DEPLOYMENT_URL/embed.js"></script>
   ```
   - Replace `YOUR_VERCEL_DEPLOYMENT_URL` with your actual Vercel URL
   - Save the block

### Method 2: Using iframe Directly

If you prefer to use a direct iframe, you can add this code instead:

```html
<div style="position: relative; width: 100%; height: 90vh; overflow: hidden;">
  <iframe 
    src="YOUR_VERCEL_DEPLOYMENT_URL" 
    style="width: 100%; height: 100%; border: none;" 
    allowfullscreen
    loading="lazy">
  </iframe>
</div>
```

### Method 3: Using the Squarespace Embed Block

1. **Create a dedicated page** in your Squarespace site
2. **Add an Embed Block**:
   - Click "Add Block" → "Embed" → "Embed"
   - Paste your Vercel URL 
   - Configure the size to be "Full Width" and adjust height as needed

## 4. Styling in Squarespace

To ensure the app displays correctly in Squarespace:

1. **Set Page Layout**:
   - Edit your page settings
   - Set to "Full Width" layout (no sidebar)
   - Remove page header if possible for a cleaner look

2. **Adjust Container Size**:
   - The default height is set to 90vh (90% of viewport height)
   - You can adjust this in the embed.js or in your inline styles if needed

## Troubleshooting

- **App not loading**: Ensure you have CORS headers properly set in vercel.json
- **Inconsistent sizing**: Try adjusting the container height in embed.js
- **Scrollbar issues**: If you see unwanted scrollbars, check the CSS in index.html and embed.js

## Updates and Maintenance

When you need to update your application:

1. Make changes to your code locally
2. Commit and push to GitHub
3. Vercel will automatically detect changes and redeploy

Your Squarespace embedding will automatically show the latest version. 