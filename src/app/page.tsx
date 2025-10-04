import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent leading-tight">
              Character Forge
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Create incredibly detailed, unique characters with rich personalities, deep backstories, 
              and intricate details. Perfect for writers, game masters, role-players, and storytellers.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/generate"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Forge a Character →
              </Link>
              <Link
                href="/about"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-200"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute top-0 left-0 right-0 h-full pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 bg-purple-200 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-pink-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-blue-300 rounded-full opacity-20 animate-pulse delay-2000"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Create Living, Breathing Characters
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI crafts incredibly detailed character profiles with rich personalities, 
              complete backstories, and intricate details that bring your characters to life.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Rich Personalities</h3>
              <p className="text-gray-600 leading-relaxed">
                Generate complex characters with detailed personality traits, quirks, fears, 
                motivations, and psychological depth that feel authentic and compelling.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-pink-50 to-pink-100 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m0 0V1a1 1 0 011-1h2a1 1 0 011 1v3M7 4H5a1 1 0 00-1 1v16a1 1 0 001 1h14a1 1 0 001-1V5a1 1 0 00-1-1h-2M7 4h10M9 9h6m-6 4h6m-6 4h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Detailed Backstories</h3>
              <p className="text-gray-600 leading-relaxed">
                Every character comes with a comprehensive history, family background, 
                formative experiences, and life events that shaped who they are today.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Deep Dive Ready</h3>
              <p className="text-gray-600 leading-relaxed">
                Every character aspect can be explored further with AI-powered deep dives. 
                Learn more about their hobbies, relationships, secrets, and hidden depths.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Character Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Perfect for Every Story
            </h2>
            <p className="text-xl text-gray-600">
              Create characters for any genre, setting, or narrative purpose with incredible depth and authenticity.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: 'Fantasy Heroes', icon: '⚔️' },
              { name: 'Modern Professionals', icon: '�' },
              { name: 'Sci-Fi Characters', icon: '🚀' },
              { name: 'Historical Figures', icon: '🏛️' },
              { name: 'Mystery Characters', icon: '🔍' },
              { name: 'Everyday People', icon: '�' }
            ].map((type, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl hover:shadow-md transition-shadow">
                <div className="text-4xl mb-3">{type.icon}</div>
                <h3 className="font-semibold text-gray-900">{type.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Forge Your Perfect Character?
          </h2>
          <p className="text-xl text-purple-100 mb-10 leading-relaxed">
            Join writers, game masters, and storytellers who are creating incredibly detailed, 
            unforgettable characters with the power of AI.
          </p>
          <Link
            href="/generate"
            className="inline-block bg-white text-purple-600 px-10 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Forge Your Character
          </Link>
        </div>
      </section>
    </div>
  );
}