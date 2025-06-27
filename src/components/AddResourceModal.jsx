import { useState } from 'react';

const AddResourceModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    url: '',
    author: '',
    section: 'javascript-principles',
    type: 'Visual Understanding',
    description: '',
    whyEssential: ''
  });

  const sections = [
    { id: 'javascript-principles', name: 'JavaScript Principles' },
    { id: 'functions-callbacks', name: 'Functions & Callbacks' },
    { id: 'closure', name: 'Closure' },
    { id: 'asynchronous', name: 'Asynchronous JavaScript' },
    { id: 'promises', name: 'Promises' },
    { id: 'classes-prototypes', name: 'Classes & Prototypes' },
    { id: 'advanced-concepts', name: 'Advanced ES6+ Concepts' }
  ];

  const resourceTypes = [
    'Visual Understanding',
    'Engine-Level Technical',
    'Specification Level',
    'Practical Application',
    'Official Documentation',
    'Video Tutorial',
    'Interactive Guide'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create GitHub issue content
    const issueTitle = `Add Resource: ${formData.title}`;
    const issueBody = `## New Resource Suggestion

**Title:** ${formData.title}
**URL:** ${formData.url}
**Author:** ${formData.author}
**Section:** ${formData.section}
**Type:** ${formData.type}

**Description:**
${formData.description}

**Why Essential:**
${formData.whyEssential}

---
*Submitted via website form*`;

    // Create GitHub issue URL
    const githubUrl = `https://github.com/AlaaEmam29/JavaScript-Hard-Parts/issues/new?title=${encodeURIComponent(issueTitle)}&body=${encodeURIComponent(issueBody)}`;
    
    // Open GitHub in new tab
    window.open(githubUrl, '_blank');
    
    // Reset form and close modal
    setFormData({
      title: '',
      url: '',
      author: '',
      section: 'javascript-principles',
      type: 'Visual Understanding',
      description: '',
      whyEssential: ''
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Add New Resource</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
            >
              ×
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Resource Title *
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., Understanding JavaScript Closures"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                URL *
              </label>
              <input
                type="url"
                name="url"
                value={formData.url}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="https://example.com/article"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Author
              </label>
              <input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., Kyle Simpson, Lydia Hallie"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Section *
                </label>
                <select
                  name="section"
                  value={formData.section}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {sections.map(section => (
                    <option key={section.id} value={section.id}>
                      {section.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Resource Type *
                </label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {resourceTypes.map(type => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description *
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Brief description of what this resource covers..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Why Essential *
              </label>
              <textarea
                name="whyEssential"
                value={formData.whyEssential}
                onChange={handleInputChange}
                required
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Explain why this resource is important and what unique value it provides..."
              />
            </div>

            <div className="bg-blue-50 p-4 rounded-md">
              <p className="text-sm text-blue-700">
                <strong>How it works:</strong> Clicking "Submit Resource" will open GitHub with a pre-filled issue containing your suggestion. This helps maintain quality and allows for community discussion before adding resources.
              </p>
            </div>

            <div className="flex justify-end space-x-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Submit Resource
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddResourceModal;

