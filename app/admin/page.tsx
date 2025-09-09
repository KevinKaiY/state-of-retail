export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-purple-400">State of Retail CMS</h1>
        
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-purple-300">Content Management</h2>
          <p className="text-gray-300 mb-6">
            Manage your content by editing markdown files directly in your GitHub repository.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-700 rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-3 text-purple-200">Case Studies</h3>
              <p className="text-gray-300 mb-4">Edit case study content</p>
              <a 
                href="https://github.com/KevinKaiY/state-of-retail/tree/main/content/case-studies" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded transition-colors"
              >
                Edit Case Studies
              </a>
            </div>
            
            <div className="bg-gray-700 rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-3 text-purple-200">Articles</h3>
              <p className="text-gray-300 mb-4">Edit article content</p>
              <a 
                href="https://github.com/KevinKaiY/state-of-retail/tree/main/content/articles" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded transition-colors"
              >
                Edit Articles
              </a>
            </div>
            
            <div className="bg-gray-700 rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-3 text-purple-200">Mini Classes</h3>
              <p className="text-gray-300 mb-4">Edit mini class content</p>
              <a 
                href="https://github.com/KevinKaiY/state-of-retail/tree/main/content/mini-classes" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded transition-colors"
              >
                Edit Mini Classes
              </a>
            </div>
            
            <div className="bg-gray-700 rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-3 text-purple-200">Resources</h3>
              <p className="text-gray-300 mb-4">Edit resource content</p>
              <a 
                href="https://github.com/KevinKaiY/state-of-retail/tree/main/content/resources" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded transition-colors"
              >
                Edit Resources
              </a>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-purple-300">Quick Actions</h2>
          <div className="space-y-4">
            <a 
              href="https://github.com/KevinKaiY/state-of-retail" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block bg-gray-700 hover:bg-gray-600 p-4 rounded-lg transition-colors"
            >
              <h3 className="font-semibold text-purple-200">View Repository</h3>
              <p className="text-gray-300 text-sm">Access your GitHub repository</p>
            </a>
            
            <a 
              href="https://fanciful-syrniki-b62a32.netlify.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block bg-gray-700 hover:bg-gray-600 p-4 rounded-lg transition-colors"
            >
              <h3 className="font-semibold text-purple-200">View Live Site</h3>
              <p className="text-gray-300 text-sm">See your published website</p>
            </a>
          </div>
        </div>
        
        <div className="mt-8 bg-blue-900 border border-blue-700 rounded-lg p-4">
          <h3 className="font-semibold text-blue-200 mb-2">How to Edit Content:</h3>
          <ol className="text-blue-100 text-sm space-y-1 list-decimal list-inside">
            <li>Click any "Edit" button above to go to GitHub</li>
            <li>Click the pencil icon to edit a file</li>
            <li>Make your changes in the markdown editor</li>
            <li>Commit your changes with a descriptive message</li>
            <li>Your site will automatically update in a few minutes</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
