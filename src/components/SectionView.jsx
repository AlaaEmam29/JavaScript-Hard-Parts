import ResourceCard from './ResourceCard.jsx';

export default function SectionView({ section, sectionId, searchTerm }) {
  const filteredResources = section.resources.filter(resource =>
    resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    resource.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
    resource.focus.toLowerCase().includes(searchTerm.toLowerCase()) ||
    resource.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id={sectionId} className="mb-16">
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-4xl">{section.icon}</span>
          <div>
            <h2 className="text-3xl font-bold text-gray-900">{section.title}</h2>
            <p className="text-lg text-gray-600">{section.subtitle}</p>
          </div>
        </div>
        <p className="text-gray-700 mb-4">{section.description}</p>
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <span>{filteredResources.length} of {section.resources.length} resources</span>
          {searchTerm && (
            <span className="text-blue-600">Filtered by: "{searchTerm}"</span>
          )}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredResources.map((resource, index) => (
          <ResourceCard 
            key={resource.id} 
            resource={resource} 
            index={index}
          />
        ))}
      </div>
      
      {filteredResources.length === 0 && searchTerm && (
        <div className="text-center py-12">
          <p className="text-gray-500">No resources found matching "{searchTerm}" in this section.</p>
        </div>
      )}
    </section>
  );
}

