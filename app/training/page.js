export default function TrainingPage() {
  return (
    <section className="space-y-8">
      <h1 className="text-3xl font-bold">Training Programs</h1>

      <div className="bg-white p-6 rounded-xl shadow space-y-4">
        <p className="text-gray-600">
          We offer hands-on engineering training in:
        </p>

        <ul className="list-disc list-inside text-gray-700">
          <li>Embedded Systems & Arduino</li>
          <li>PLC & Industrial Automation</li>
          <li>IoT Systems</li>
        </ul>
      </div>
    </section>
  );
}
