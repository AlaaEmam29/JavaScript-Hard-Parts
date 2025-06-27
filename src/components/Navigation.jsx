import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';

export default function Navigation({ sections, activeSection, setActiveSection, sectionOrder }) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Navigation */}
      <div className="lg:hidden bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <Button
            variant="ghost"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full justify-between py-4"
          >
            <span className="font-medium">
              {sections[activeSection]?.title || 'Select Section'}
            </span>
            {isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
          </Button>
          
          {isOpen && (
            <div className="pb-4">
              {sectionOrder.map((sectionId) => {
                const section = sections[sectionId];
                return (
                  <button
                    key={sectionId}
                    onClick={() => scrollToSection(sectionId)}
                    className={`w-full text-left px-4 py-3 rounded-lg mb-2 transition-colors ${
                      activeSection === sectionId
                        ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-500'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{section.icon}</span>
                      <div>
                        <div className="font-medium">{section.title}</div>
                        <div className="text-sm text-gray-500">{section.resources.length} resources</div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:block w-80 bg-white border-r border-gray-200 h-screen sticky top-0 overflow-y-auto">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Course Sections</h2>
          <div className="space-y-2">
            {sectionOrder.map((sectionId) => {
              const section = sections[sectionId];
              return (
                <button
                  key={sectionId}
                  onClick={() => scrollToSection(sectionId)}
                  className={`w-full text-left p-4 rounded-lg transition-colors ${
                    activeSection === sectionId
                      ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-500'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{section.icon}</span>
                    <div>
                      <div className="font-medium">{section.title}</div>
                      <div className="text-sm text-gray-500 mt-1">{section.subtitle}</div>
                      <div className="text-xs text-gray-400 mt-1">{section.resources.length} resources</div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
          
          <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
            <h3 className="font-medium text-gray-900 mb-2">Learning Path</h3>
            <p className="text-sm text-gray-600 mb-3">
              Follow the structured path from beginner to expert level
            </p>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => scrollToSection('learning-path')}
              className="w-full"
            >
              View Learning Path
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
}

