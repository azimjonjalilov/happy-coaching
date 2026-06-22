import { FiBookOpen, FiMessageSquare, FiUsers } from "react-icons/fi";

const services = [
  {
    icon: <FiBookOpen size={36} strokeWidth={1.5} color="#4a5568" />,
    title: "1:1 Coaching",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.",
  },
  {
    icon: <FiMessageSquare size={36} strokeWidth={1.5} color="#4a5568" />,
    title: "Consultation",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.",
  },
  {
    icon: <FiUsers size={36} strokeWidth={1.5} color="#4a5568" />,
    title: "Group Coaching Sessions",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.",
  },
];


export default function CoachingSection() {
  return (
    <section
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "80px 40px",
        fontFamily: "'Segoe UI', sans-serif",
        color: "#1a1a2e",
      }}
    >

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "40px",
          marginBottom: "72px",
          alignItems: "flex-start",
        }}
      >

        <div style={{ flex: "1 1 300px" }}>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: "800",
              color: "#1e2a5e",
              lineHeight: 1.2,
              margin: 0,
            }}
          >
            I can help you in these particular areas.
          </h2>
        </div>

        <div
          style={{
            flex: "1 1 340px",
            color: "#555",
            fontSize: "15px",
            lineHeight: "1.75",
          }}
        >
          <p style={{ marginBottom: "16px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua minim
            veniam.
          </p>
          <p style={{ margin: 0 }}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "40px",
        }}
      >
        {services.map((service) => (
          <div key={service.title} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>

            <div
              style={{
                width: "64px",
                height: "64px",
                border: "1.5px solid #b0b8cc",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {service.icon}
            </div>

            <h3
              style={{
                fontSize: "17px",
                fontWeight: "700",
                color: "#1e2a5e",
                margin: 0,
              }}
            >
              {service.title}
            </h3>

            <p
              style={{
                fontSize: "14px",
                color: "#666",
                lineHeight: "1.7",
                margin: 0,
              }}
            >
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
