export default function Home() {
  return (
    <div className="space-y-10">
      <section className="bg-white p-10 rounded-xl shadow">
        <h1 className="text-4xl font-bold text-slate-900">
          Engineering your Sustainability
        </h1>
        <p className="mt-4 text-slate-600 text-lg">
          Smart engineering solutions in energy, automation,
          embedded systems and professional training.
        </p>
      </section>

      <section className="bg-white p-10 rounded-xl shadow">
        <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
        <ul className="space-y-2 text-slate-700">
          <li>✔ PCB Design & Printing</li>
          <li>✔ IoT & Embedded Systems</li>
          <li>✔ Training & Consultancy</li>
        </ul>
      </section>
    </div>
  );
}
