export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Energy & Logics Ltd
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Engineering your Sustainability
          </p>
          <p className="max-w-3xl mx-auto text-lg text-blue-100">
            We design innovative electronic systems, IoT solutions, and provide
            professional engineering training to power sustainable development.
          </p>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Core Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4">
                PCB Design & Printing
              </h3>
              <p className="text-gray-600">
                Professional PCB design, prototyping, and manufacturing for
                industrial and custom applications.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4">
                IoT & Embedded Systems
              </h3>
              <p className="text-gray-600">
                Smart IoT solutions, automation, and embedded system development
                tailored to real-world challenges.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4">
                Training & Consultancy
              </h3>
              <p className="text-gray-600">
                Hands-on technical training, mentorship, and engineering
                consultancy for individuals and organizations.
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
