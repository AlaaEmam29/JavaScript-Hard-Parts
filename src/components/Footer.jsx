import { Heart, ExternalLink, BookOpen } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="h-6 w-6" />
              <h3 className="text-lg font-semibold">JavaScript Hard Parts</h3>
            </div>
            <p className="text-gray-300 mb-4">
              A comprehensive collection of deep technical resources for mastering JavaScript fundamentals.
            </p>
            <p className="text-sm text-gray-400">
              Made with <Heart className="h-4 w-4 inline text-red-500" /> for the JavaScript community
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Featured Educators</h4>
            <ul className="space-y-2 text-gray-300">
              <li>• Lydia Hallie - Visual JavaScript Education</li>
              <li>• Kyle Simpson - "You Don't Know JS" Author</li>
              <li>• Jake Archibald - Google Developer Advocate</li>
              <li>• Will Sentance - Codesmith Founder</li>
              <li>• Dan Abramov - React Core Team</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://frontendmasters.com/courses/javascript-hard-parts-v2/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white flex items-center gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  Original Frontend Masters Course
                </a>
              </li>
              <li>
                <a 
                  href="https://frontendmasters.com/courses/javascript-new-hard-parts/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white flex items-center gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  JavaScript: The New Hard Parts
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/getify/You-Dont-Know-JS" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white flex items-center gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  You Don't Know JS Book Series
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 JavaScript Hard Parts Resources. All resources are credited to their original authors.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            This is an educational resource compilation. All external links lead to their respective authors' content.
          </p>
        </div>
      </div>
    </footer>
  );
}

