function Features() {
  return (
    <section className="py-28 bg-gradient-to-b from-green-50 to-white">

      {/* ========== WHY THIS IS NEEDED SECTION ========== */}
      <div 
        data-aos="fade-up"
        className="max-w-6xl mx-auto px-8 text-center mb-24"
      >
        <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
          Why Farmers Need Smart Prediction 🌾
        </h2>

        <p className="text-gray-600 text-lg leading-relaxed">
          Many farmers still rely on traditional estimation methods which can
          lead to unexpected losses. Climate change, unpredictable rainfall,
          and soil variation make farming more challenging every year.
          Our AI-powered system helps farmers make data-driven decisions
          before planting crops.
        </p>
      </div>

      {/* ========== BENEFITS SECTION ========== */}
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-28">

        <div data-aos="fade-right" className="bg-green-600 text-white p-10 rounded-3xl shadow-xl hover:scale-105 transition duration-300">
          <h3 className="text-2xl font-bold mb-4">🌧 Weather-Based Insights</h3>
          <p>Predict crop yield based on rainfall and temperature conditions to avoid unexpected production loss.</p>
        </div>

        <div data-aos="fade-up" className="bg-green-700 text-white p-10 rounded-3xl shadow-xl hover:scale-105 transition duration-300">
          <h3 className="text-2xl font-bold mb-4">📊 Data-Driven Decisions</h3>
          <p>Our AI model analyzes historical agricultural data to provide accurate yield estimation before cultivation.</p>
        </div>

        <div data-aos="fade-left" className="bg-green-800 text-white p-10 rounded-3xl shadow-xl hover:scale-105 transition duration-300">
          <h3 className="text-2xl font-bold mb-4">💰 Increase Profitability</h3>
          <p>By predicting production early, farmers can plan better, reduce risk and maximize their earnings.</p>
        </div>

        <div data-aos="zoom-in" data-aos-delay="100" className="bg-green-500 text-white p-10 rounded-3xl shadow-xl hover:scale-105 transition duration-300">
          <h3 className="text-2xl font-bold mb-4">🌱 Soil Health Monitoring</h3>
          <p>Analyze soil nutrients and fertility levels to recommend the most suitable crops for maximum productivity.</p>
        </div>

        <div data-aos="zoom-in" data-aos-delay="200" className="bg-green-600 text-white p-10 rounded-3xl shadow-xl hover:scale-105 transition duration-300">
          <h3 className="text-2xl font-bold mb-4">📡 Satellite Monitoring</h3>
          <p>Integration with satellite imagery to track crop growth and detect risks like drought or pest attacks.</p>
        </div>

        <div data-aos="zoom-in" data-aos-delay="300" className="bg-green-700 text-white p-10 rounded-3xl shadow-xl hover:scale-105 transition duration-300">
          <h3 className="text-2xl font-bold mb-4">📱 Mobile Friendly</h3>
          <p>Fully responsive design that works smoothly on smartphones used by farmers in rural areas.</p>
        </div>

        <div data-aos="zoom-in" data-aos-delay="400" className="bg-green-800 text-white p-10 rounded-3xl shadow-xl hover:scale-105 transition duration-300">
          <h3 className="text-2xl font-bold mb-4">🤖 Smart AI Suggestions</h3>
          <p>Get intelligent recommendations for crop planning, harvesting strategies, and risk reduction.</p>
        </div>

        <div data-aos="zoom-in" data-aos-delay="500" className="bg-green-900 text-white p-10 rounded-3xl shadow-xl hover:scale-105 transition duration-300">
          <h3 className="text-2xl font-bold mb-4">📈 Market Trend Analysis</h3>
          <p>Future integration with market price trends to help farmers choose profitable crops.</p>
        </div>

      </div>

      {/* ========== HOW IT WORKS SECTION ========== */}
      <div data-aos="fade-up" className="max-w-6xl mx-auto px-8 text-center mb-24">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
          How It Works ⚙
        </h2>

        <div className="grid md:grid-cols-3 gap-10 text-left">

          <div className="bg-green-100 p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <h4 className="font-bold text-green-700 text-xl mb-3">1️⃣ Enter Details</h4>
            <p>Farmers input rainfall, temperature, and land area details.</p>
          </div>

          <div className="bg-green-200 p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <h4 className="font-bold text-green-800 text-xl mb-3">2️⃣ AI Processing</h4>
            <p>Our trained machine learning model analyzes the data instantly.</p>
          </div>

          <div className="bg-green-300 p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <h4 className="font-bold text-green-900 text-xl mb-3">3️⃣ Get Prediction</h4>
            <p>The system provides an estimated crop yield output.</p>
          </div>

        </div>
      </div>

      {/* ========== FUTURE VISION SECTION ========== */}
      <div data-aos="zoom-in" className="max-w-5xl mx-auto px-8 text-center">
        <div className="bg-gradient-to-r from-green-700 to-green-900 text-white p-16 rounded-3xl shadow-2xl">
          <h2 className="text-3xl font-bold mb-6">
            Our Vision for the Future 🌍
          </h2>

          <p className="text-lg leading-relaxed">
            We aim to empower every farmer in India with smart agricultural
            technology. Our future plans include real-time satellite data,
            soil analysis integration, multilingual support for rural
            communities, and real-time AI advisory systems.
          </p>
        </div>
      </div>

    </section>
  );
}

export default Features;
