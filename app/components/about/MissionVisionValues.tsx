export default function MissionVisionValues() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold tracking-wider text-secondary uppercase mb-2">Who We Are</h2>
          <h3 className="section-title text-center">Mission, Vision & Values</h3>
          <p className="section-subtitle text-center">
            The principles that guide our operations and define our culture
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mission */}
          <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-all duration-300">
            <div className="bg-primary/10 p-4 rounded-full inline-block mb-6">
              <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="text-2xl font-bold text-primary mb-4">Our Mission</h4>
            <p className="text-gray-600">
              To deliver exceptional value to our clients, partners, and communities through innovative solutions, sustainable practices, and a commitment to excellence in everything we do.
            </p>
          </div>
          
          {/* Vision */}
          <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-all duration-300">
            <div className="bg-primary/10 p-4 rounded-full inline-block mb-6">
              <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h4 className="text-2xl font-bold text-primary mb-4">Our Vision</h4>
            <p className="text-gray-600">
              To be the most trusted and respected business group in Pakistan, known for our innovation, quality, and positive impact on society, while expanding our global footprint.
            </p>
          </div>
          
          {/* Values */}
          <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-all duration-300">
            <div className="bg-primary/10 p-4 rounded-full inline-block mb-6">
              <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h4 className="text-2xl font-bold text-primary mb-4">Our Values</h4>
            <ul className="text-gray-600 space-y-2">
              <li>• Integrity and Ethical Conduct</li>
              <li>• Excellence and Quality</li>
              <li>• Innovation and Adaptability</li>
              <li>• Sustainability and Social Responsibility</li>
              <li>• Collaboration and Teamwork</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
} 