(function() {
  // Create iframe element
  function createVanBuilderIframe() {
    const iframe = document.createElement('iframe');
    iframe.id = 'chewy-van-builder';
    iframe.src = 'YOUR_VERCEL_DEPLOYMENT_URL'; // Replace with your actual Vercel URL after deployment
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';
    iframe.style.overflow = 'hidden';
    iframe.setAttribute('allowfullscreen', 'true');
    iframe.setAttribute('loading', 'lazy');
    
    // Add to container
    const container = document.getElementById('van-builder-container');
    if (container) {
      container.style.position = 'relative';
      container.style.width = '100%';
      container.style.height = '90vh'; // Adjust height as needed
      container.style.overflow = 'hidden';
      container.appendChild(iframe);
    } else {
      console.error('Container #van-builder-container not found');
    }
  }

  // Initialize when DOM is fully loaded
  if (document.readyState === 'complete') {
    createVanBuilderIframe();
  } else {
    window.addEventListener('load', createVanBuilderIframe);
  }
})(); 