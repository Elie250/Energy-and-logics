export default function HomePage() {
  return (
    <section className="space-y-20">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24 rounded-2xl">
        <div className="max-w-5xl mx-auto text-center px-6 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold">
            Energy & Logics Ltd
          </h1>
          <p className="text-xl md:text-2xl text-blue-100">
            Engineering your Sustainability
          </p>
          <p className="max-w-3xl mx-auto text-blue-200">
            We design innovative electronic systems, IoT solutions, and provide
            professional engineering training to power sustainable development.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="space-y-12">
        <h2 className="text-3xl font-bold text-center">
          Our Core Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-3">
              PCB Design & Printing
            </h3>
            <p className="text-gray-600">
              Professional PCB design, prototyping, and manufacturing for
              industrial and custom applications.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-3">
              IoT & Embedded Systems
            </h3>
            <p className="text-gray-600">
              Smart IoT solutions, automation, and embedded system development
              tailored to real-world challenges.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-3">
              Training & Consultancy
            </h3>
            <p className="text-gray-600">
              Hands-on technical training, mentorship, and engineering
              consultancy for individuals and organizations.
            </p>
          </div>
        </div>
      </section>

    </section>
  );
}
