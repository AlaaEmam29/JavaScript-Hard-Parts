import { CheckCircle, ArrowRight, BookOpen, Target, Trophy } from 'lucide-react';

export default function LearningPath({ learningPath }) {
  const pathLevels = [
    { key: 'beginner', icon: BookOpen, color: 'green' },
    { key: 'intermediate', icon: Target, color: 'blue' },
    { key: 'advanced', icon: Trophy, color: 'purple' }
  ];

  return (
    <section id="learning-path" className="mb-16">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">🎯 Learning Path Recommendations</h2>
        <p className="text-lg text-gray-600">
          Follow this structured path to master JavaScript from fundamentals to expert level
        </p>
      </div>

      <div className="space-y-8">
        {pathLevels.map(({ key, icon: Icon, color }, levelIndex) => {
          const level = learningPath[key];
          const colorClasses = {
            green: {
              bg: 'bg-green-50',
              border: 'border-green-200',
              text: 'text-green-800',
              icon: 'text-green-600'
            },
            blue: {
              bg: 'bg-blue-50', 
              border: 'border-blue-200',
              text: 'text-blue-800',
              icon: 'text-blue-600'
            },
            purple: {
              bg: 'bg-purple-50',
              border: 'border-purple-200', 
              text: 'text-purple-800',
              icon: 'text-purple-600'
            }
          };
          
          const colors = colorClasses[color];
          
          return (
            <div key={key} className={`${colors.bg} ${colors.border} border rounded-lg p-6`}>
              <div className="flex items-center gap-4 mb-6">
                <Icon className={`h-8 w-8 ${colors.icon}`} />
                <div>
                  <h3 className={`text-2xl font-bold ${colors.text}`}>{level.title}</h3>
                  <p className={`text-lg ${colors.text} opacity-80`}>{level.subtitle}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {level.phases.map((phase, phaseIndex) => (
                  <div key={phaseIndex} className="bg-white rounded-lg p-4 border border-gray-200">
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle className={`h-5 w-5 ${colors.icon}`} />
                      <h4 className="font-semibold text-gray-900">{phase.title}</h4>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{phase.description}</p>
                    <ul className="space-y-2">
                      {phase.recommendations.map((rec, recIndex) => (
                        <li key={recIndex} className="flex items-start gap-2">
                          <ArrowRight className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              
              {levelIndex < pathLevels.length - 1 && (
                <div className="flex justify-center mt-6">
                  <ArrowRight className="h-6 w-6 text-gray-400" />
                </div>
              )}
            </div>
          );
        })}
      </div>
      
      <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
        <h3 className="text-xl font-bold text-gray-900 mb-3">🎯 Success Metrics</h3>
        <p className="text-gray-700 mb-4">
          You'll know you've mastered each topic when you can explain the underlying mechanisms, 
          debug complex issues, and implement concepts from scratch.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Technical Understanding:</h4>
            <ul className="space-y-1 text-gray-600">
              <li>• Explain execution context creation step-by-step</li>
              <li>• Predict closure memory retention behavior</li>
              <li>• Debug async timing issues confidently</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Practical Application:</h4>
            <ul className="space-y-1 text-gray-600">
              <li>• Implement Promise from scratch</li>
              <li>• Create custom iterators and generators</li>
              <li>• Optimize code based on engine knowledge</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

