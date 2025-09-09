export default function AdminPage() {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>State of Retail CMS</title>
        <script src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js"></script>
        <style dangerouslySetInnerHTML={{
          __html: `
            body { 
              background: #0b0b10; 
              color: #e8e8ef; 
              margin: 0;
              padding: 0;
            }
            .nc-appHeader { 
              background: #4E2A84; 
            }
          `
        }} />
      </head>
      <body>
        <script dangerouslySetInnerHTML={{
          __html: `
            CMS.init({
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
          `
        }} />
      </body>
    </html>
  );
}
