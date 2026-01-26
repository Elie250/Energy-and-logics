export default function ServicesPage() {
  return (
    <section className="space-y-10">
      <h1 className="text-3xl font-bold">Our Services</h1>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold">PCB Design & Printing</h2>
          <p className="text-gray-600 mt-2">
            Professional PCB design, prototyping, and manufacturing.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold">IoT & Embedded Systems</h2>
          <p className="text-gray-600 mt-2">
            Smart automation and connected systems.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold">Consultancy</h2>
          <p className="text-gray-600 mt-2">
            Engineering advisory and project support.
          </p>
        </div>
      </div>
    </section>
  );
}
