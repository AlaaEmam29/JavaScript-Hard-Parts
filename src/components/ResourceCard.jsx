import { ExternalLink, User, Target, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';

const typeColors = {
  "Visual Understanding": "bg-green-100 text-green-800",
  "Engine-Level Technical": "bg-red-100 text-red-800", 
  "Specification Level": "bg-blue-100 text-blue-800",
  "Official Specifications": "bg-purple-100 text-purple-800",
  "Deep Mechanisms": "bg-indigo-100 text-indigo-800",
  "Technical Deep Dives": "bg-orange-100 text-orange-800",
  "Practical Deep Learning": "bg-yellow-100 text-yellow-800",
  "Advanced Function Concepts": "bg-pink-100 text-pink-800",
  "Gold Standard Article": "bg-amber-100 text-amber-800",
  "Advanced Technical Deep Dives": "bg-red-100 text-red-800",
  "Memory Management & Optimization": "bg-gray-100 text-gray-800",
  "Practical Applications": "bg-green-100 text-green-800",
  "Classic Deep Technical Resource": "bg-purple-100 text-purple-800",
  "Engine-Level Deep Dives": "bg-red-100 text-red-800",
  "Official Documentation": "bg-blue-100 text-blue-800",
  "Async Patterns": "bg-indigo-100 text-indigo-800",
  "Advanced Concepts": "bg-orange-100 text-orange-800",
  "Frontend Masters Course": "bg-emerald-100 text-emerald-800",
  "Deep Technical Understanding": "bg-red-100 text-red-800",
  "Mental Models": "bg-cyan-100 text-cyan-800",
  "Advanced Promise Patterns": "bg-violet-100 text-violet-800",
  "Deep OOP Understanding": "bg-blue-100 text-blue-800",
  "Prototype Chain Deep Dives": "bg-indigo-100 text-indigo-800",
  "this Keyword Deep Understanding": "bg-orange-100 text-orange-800",
  "Advanced OOP Patterns": "bg-pink-100 text-pink-800",
  "Iterators Deep Dive": "bg-green-100 text-green-800",
  "Generators Deep Dive": "bg-yellow-100 text-yellow-800",
  "async/await Deep Understanding": "bg-purple-100 text-purple-800",
  "Advanced Pattern Resources": "bg-gray-100 text-gray-800"
};

export default function ResourceCard({ resource, index }) {
  const typeColor = typeColors[resource.type] || "bg-gray-100 text-gray-800";
  
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm font-medium text-gray-500">#{index + 1}</span>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${typeColor}`}>
              {resource.type}
            </span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-tight">
            {resource.title}
          </h3>
        </div>
      </div>
      
      <div className="space-y-3 mb-4">
        <div className="flex items-start gap-2">
          <User className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
          <span className="text-sm text-gray-600">{resource.author}</span>
        </div>
        
        <div className="flex items-start gap-2">
          <Target className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
          <span className="text-sm text-gray-600">{resource.focus}</span>
        </div>
        
        <div className="flex items-start gap-2">
          <Lightbulb className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
          <span className="text-sm text-gray-700 font-medium">{resource.essential}</span>
        </div>
      </div>
      
      <Button 
        onClick={() => window.open(resource.url, '_blank')}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white"
      >
        <ExternalLink className="h-4 w-4 mr-2" />
        Read Article
      </Button>
    </div>
  );
}

