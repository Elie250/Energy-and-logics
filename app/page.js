export default function HomePage() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif" }}>
      {/* HERO */}
      <section style={{ padding: "80px 40px", textAlign: "center" }}>
        <h1 style={{ fontSize: "48px", marginBottom: "16px" }}>
          Energy & Logics
        </h1>
        <p style={{ fontSize: "20px", marginBottom: "24px", color: "#555" }}>
          Engineering your Sustainability
        </p>
        <p style={{ maxWidth: "700px", margin: "0 auto 32px" }}>
          We design, build, and train in modern engineering solutions —
          from PCB manufacturing to IoT systems and professional training.
        </p>

        <button
          style={{
            padding: "14px 28px",
            fontSize: "16px",
            backgroundColor: "#0f766e",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          Explore Our Services
        </button>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "60px 40px", background: "#f7f7f7" }}>
        <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
          Our Services
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "24px",
            maxWidth: "1000px",
            margin: "0 auto"
          }}
        >
          <ServiceCard
            title="PCB Design & Printing"
            text="Professional schematic design, PCB layout, and manufacturing support."
          />
          <ServiceCard
            title="IoT & Embedded Systems"
            text="Smart devices, automation, sensors, and custom embedded solutions."
          />
          <ServiceCard
            title="Training & Consultancy"
            text="Hands-on engineering training, mentorship, and technical consultancy."
          />
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "60px 40px", textAlign: "center" }}>
        <h2>Let’s Build Sustainable Engineering Together</h2>
        <p style={{ marginBottom: "24px" }}>
          Contact us or register for our professional training programs.
        </p>
        <button
          style={{
            padding: "12px 24px",
            backgroundColor: "#1d4ed8",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          Contact Us
        </button>
      </section>
    </main>
  )
}

function ServiceCard({ title, text }) {
  return (
    <div
      style={{
        padding: "24px",
        background: "white",
        borderRadius: "8px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
      }}
    >
      <h3 style={{ marginBottom: "12px" }}>{title}</h3>
      <p style={{ color: "#555" }}>{text}</p>
    </div>
  )
}
