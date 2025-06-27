import { Search, BookOpen, Github, ExternalLink, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';

export default function Header({ searchTerm, setSearchTerm, totalResources, onAddResource }) {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="h-8 w-8" />
            <h1 className="text-4xl font-bold">JavaScript Hard Parts</h1>
          </div>
          <p className="text-xl text-blue-100 mb-2">Deep Learning Resources</p>
          <p className="text-blue-200 max-w-2xl mx-auto">
            Master JavaScript fundamentals with {totalResources} carefully curated deep technical resources 
            following the Frontend Masters course structure
          </p>
        </div>
        
        <div className="max-w-md mx-auto relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search resources..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
          />
        </div>
        
        <div className="flex justify-center gap-4 mt-6">
          <Button 
            variant="outline" 
            className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            onClick={() => window.open('https://frontendmasters.com/courses/javascript-hard-parts-v2/', '_blank')}
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            Original Course
          </Button>
          <Button 
            variant="outline"
            className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            onClick={onAddResource}
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Resource
          </Button>
          <Button 
            variant="outline"
            className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            onClick={() => window.open('https://github.com/AlaaEmam29/JavaScript-Hard-Parts', '_blank')}
          >
            <Github className="h-4 w-4 mr-2" />
            Contribute
          </Button>
        </div>
      </div>
    </header>
  );
}

