export default function MapSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Find Us on the Map</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Visit our headquarters or find the nearest SGC office to you
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden h-[500px]">
          {/* Google Maps iFrame would go here in a real implementation */}
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <div className="text-center p-8">
              <svg className="h-16 w-16 text-primary mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h3 className="text-2xl font-bold text-primary mb-2">Interactive Map</h3>
              <p className="text-gray-600 max-w-md mx-auto">
                In a real implementation, an interactive Google Maps or similar map service would be embedded here showing the location of SGC headquarters.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 