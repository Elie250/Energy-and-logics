export default function HomePage() {
  return (
    <section className="space-y-16">
      {/* Hero */}
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold">
          Energy & Logics Ltd
        </h1>
        <p className="text-xl text-gray-600">
          Engineering your Sustainability
        </p>
      </div>

      {/* Services Preview */}
      <div className="grid md:grid-cols-3 gap-8">
        {[
          "PCB Design & Printing",
          "IoT & Embedded Systems",
          "Training & Consultancy",
        ].map((service) => (
          <div
            key={service}
            className="bg-white p-6 rounded-xl shadow"
          >
            <h3 className="font-semibold text-lg">{service}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
