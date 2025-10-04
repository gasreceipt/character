import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About AI Content Generator
          </h1>
          <p className="text-xl text-blue-100">
            Revolutionizing content creation with the power of artificial intelligence
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Mission */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <div className="prose prose-lg text-gray-600">
              <p className="text-xl leading-relaxed mb-6">
                We believe that everyone should have access to powerful content creation tools. 
                Our AI Content Generator democratizes high-quality writing by making advanced 
                AI technology accessible to creators, businesses, and individuals worldwide.
              </p>
              <p className="text-lg leading-relaxed">
                Whether you're a blogger struggling with writer's block, a small business owner 
                needing marketing copy, or a content creator looking to scale your output, 
                our platform empowers you to create compelling content effortlessly.
              </p>
            </div>
          </div>

          {/* Technology */}
          <div className="mb-16 bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Powered by Cutting-Edge AI</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-blue-600 mb-4">Google Gemini 2.5 Flash</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our platform leverages Google's most advanced language model, Gemini 2.5 Flash, 
                  which delivers exceptional performance in understanding context, maintaining 
                  consistency, and generating human-like content across various formats and styles.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-purple-600 mb-4">Advanced Processing</h3>
                <p className="text-gray-600 leading-relaxed">
                  With support for over 1 million tokens and sophisticated reasoning capabilities, 
                  our AI can handle complex prompts, maintain context across long-form content, 
                  and adapt to your specific tone and style requirements.
                </p>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">What Makes Us Different</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Instant Results</h3>
                  <p className="text-gray-600">
                    Generate professional-quality content in seconds, not hours. 
                    Our optimized infrastructure ensures lightning-fast response times.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Highly Customizable</h3>
                  <p className="text-gray-600">
                    Fine-tune your content with precise controls for tone, length, and format. 
                    Get exactly what you need for your specific use case.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Assured</h3>
                  <p className="text-gray-600">
                    Every piece of content is generated using advanced AI that understands 
                    context, grammar, and style to ensure professional results.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Versatile Formats</h3>
                  <p className="text-gray-600">
                    From blog posts to social media content, emails to marketing copy - 
                    create any type of content you need with intelligent formatting.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Use Cases */}
          <div className="mb-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Who Benefits</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✍️</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Content Creators</h3>
                <p className="text-gray-600 text-sm">
                  Bloggers, writers, and content marketers looking to scale their output 
                  and overcome creative blocks.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏢</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Businesses</h3>
                <p className="text-gray-600 text-sm">
                  Small to medium businesses needing marketing content, product descriptions, 
                  and customer communications.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎓</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Students & Professionals</h3>
                <p className="text-gray-600 text-sm">
                  Anyone needing help with writing projects, presentations, 
                  or professional communications.
                </p>
              </div>
            </div>
          </div>

          {/* Technical Details */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Built with Modern Technology</h2>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Frontend</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Next.js 15 with App Router</li>
                    <li>• TypeScript for type safety</li>
                    <li>• Tailwind CSS for styling</li>
                    <li>• React with modern hooks</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">AI & Backend</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Google Gemini 2.5 Flash</li>
                    <li>• Serverless API architecture</li>
                    <li>• Real-time content generation</li>
                    <li>• Secure API key management</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Ready to Experience the Future of Content Creation?</h2>
            <p className="text-blue-100 mb-6">
              Join the revolution and start creating amazing content with AI today.
            </p>
            <Link
              href="/generate"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Generating Content
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}