import { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import Navigation from './components/Navigation.jsx';
import SectionView from './components/SectionView.jsx';
import LearningPath from './components/LearningPath.jsx';
import Footer from './components/Footer.jsx';
import AddResourceModal from './components/AddResourceModal.jsx';
import { resourcesData, sectionOrder, learningPath } from './data/resources.js';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSection, setActiveSection] = useState('javascript-principles');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // Calculate total resources
  const totalResources = Object.values(resourcesData).reduce(
    (total, section) => total + section.resources.length, 
    0
  );

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = sectionOrder.map(id => document.getElementById(id)).filter(Boolean);
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].offsetTop <= scrollPosition) {
          setActiveSection(sectionOrder[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm}
        totalResources={totalResources}
        onAddResource={() => setIsAddModalOpen(true)}
      />
      
      <div className="flex">
        <Navigation 
          sections={resourcesData}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          sectionOrder={sectionOrder}
        />
        
        <main className="flex-1 lg:ml-0">
          <div className="container mx-auto px-4 py-8">
            {sectionOrder.map(sectionId => (
              <SectionView
                key={sectionId}
                section={resourcesData[sectionId]}
                sectionId={sectionId}
                searchTerm={searchTerm}
              />
            ))}
            
            <LearningPath learningPath={learningPath} />
          </div>
        </main>
      </div>
      
      <Footer />
      
      <AddResourceModal 
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
      />
    </div>
  );
}

export default App;
