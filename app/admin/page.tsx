'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    CMS: any;
  }
}

export default function AdminPage() {
  useEffect(() => {
    // Load the CMS script dynamically
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js';
    script.onload = () => {
      // Initialize CMS after script loads
      if (window.CMS) {
        window.CMS.init({
          config: {
            backend: {
              name: 'git-gateway',
              branch: 'main'
            },
            site_url: 'https://fanciful-syrniki-b62a32.netlify.app',
            media_folder: 'public/uploads',
            public_folder: '/uploads',
            collections: [
              {
                name: 'case-studies',
                label: 'Case Studies',
                folder: 'content/case-studies',
                create: true,
                slug: '{{slug}}',
                fields: [
                  { label: 'Title', name: 'title', widget: 'string' },
                  { label: 'Date', name: 'date', widget: 'datetime' },
                  { label: 'Description', name: 'description', widget: 'text' },
                  { label: 'Tags', name: 'tags', widget: 'list', required: false },
                  { label: 'Body', name: 'body', widget: 'markdown' }
                ]
              },
              {
                name: 'articles',
                label: 'Articles',
                folder: 'content/articles',
                create: true,
                slug: '{{slug}}',
                fields: [
                  { label: 'Title', name: 'title', widget: 'string' },
                  { label: 'Date', name: 'date', widget: 'datetime' },
                  { label: 'Description', name: 'description', widget: 'text' },
                  { label: 'Tags', name: 'tags', widget: 'list', required: false },
                  { label: 'Body', name: 'body', widget: 'markdown' }
                ]
              },
              {
                name: 'mini-classes',
                label: 'Mini Classes',
                folder: 'content/mini-classes',
                create: true,
                slug: '{{slug}}',
                fields: [
                  { label: 'Title', name: 'title', widget: 'string' },
                  { label: 'Date', name: 'date', widget: 'datetime' },
                  { label: 'Description', name: 'description', widget: 'text' },
                  { label: 'Tags', name: 'tags', widget: 'list', required: false },
                  { label: 'Body', name: 'body', widget: 'markdown' }
                ]
              },
              {
                name: 'resources',
                label: 'Resources',
                folder: 'content/resources',
                create: true,
                slug: '{{slug}}',
                fields: [
                  { label: 'Title', name: 'title', widget: 'string' },
                  { label: 'Date', name: 'date', widget: 'datetime' },
                  { label: 'Description', name: 'description', widget: 'text' },
                  { label: 'Tags', name: 'tags', widget: 'list', required: false },
                  { label: 'Body', name: 'body', widget: 'markdown' }
                ]
              }
            ]
          }
        });
      }
    };
    document.head.appendChild(script);

    // Add styles
    const style = document.createElement('style');
    style.textContent = `
      body { 
        background: #0b0b10; 
        color: #e8e8ef; 
        margin: 0;
        padding: 0;
      }
      .nc-appHeader { 
        background: #4E2A84; 
      }
    `;
    document.head.appendChild(style);

    return () => {
      // Cleanup
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  return (
    <div>
      <div id="nc-root"></div>
    </div>
  );
}
