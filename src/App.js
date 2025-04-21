import React from "react";

export default function App() {
  return (
    <main
      style={{
        fontFamily: "sans-serif",
        padding: "2rem",
        background: "#f9fafb",
      }}
    >
      <section style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
          HIJRAH | Timeless Thobes
        </h1>
        <p style={{ maxWidth: "600px", margin: "1rem auto", color: "#555" }}>
          Explore premium thobes that blend tradition and modern elegance.
          Designed for the believer who walks with purpose.
        </p>
        <button
          style={{
            padding: "1rem 2rem",
            background: "black",
            color: "white",
            fontSize: "1rem",
            borderRadius: "1rem",
            marginTop: "1rem",
            cursor: "pointer",
          }}
        >
          Shop Now
        </button>
      </section>

      <section
        style={{
          display: "flex",
          gap: "2rem",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            style={{
              width: "300px",
              background: "white",
              padding: "1rem",
              borderRadius: "1rem",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={`https://via.placeholder.com/300x400?text=Thobe+${item}`}
              alt={`Thobe ${item}`}
              style={{
                width: "100%",
                borderRadius: "0.75rem",
                marginBottom: "1rem",
              }}
            />
            <h2 style={{ fontSize: "1.25rem", fontWeight: "bold" }}>
              Classic Gray Thobe
            </h2>
            <p
              style={{
                fontSize: "0.9rem",
                color: "#666",
                marginBottom: "1rem",
              }}
            >
              A refined look with modern cut, stitched with care and spiritual
              essence.
            </p>
            <button
              style={{
                width: "100%",
                background: "#333",
                color: "white",
                padding: "0.75rem",
                borderRadius: "0.75rem",
                cursor: "pointer",
              }}
            >
              View Product
            </button>
          </div>
        ))}
      </section>

      <section style={{ textAlign: "center", marginTop: "4rem" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>
          Join the Movement
        </h2>
        <p style={{ color: "#666", marginBottom: "1rem" }}>
          Be the first to know about drops, restocks, and special offers.
        </p>
        <input
          type="email"
          placeholder="Enter your email"
          style={{
            padding: "0.75rem",
            width: "250px",
            borderRadius: "0.75rem",
            marginRight: "1rem",
            border: "1px solid #ccc",
          }}
        />
        <button
          style={{
            padding: "0.75rem 1.5rem",
            background: "black",
            color: "white",
            borderRadius: "0.75rem",
            cursor: "pointer",
          }}
        >
          Subscribe
        </button>
      </section>

      <footer
        style={{
          marginTop: "4rem",
          textAlign: "center",
          color: "#999",
          fontSize: "0.85rem",
        }}
      >
        &copy; {new Date().getFullYear()} HIJRAH. All rights reserved.
      </footer>
    </main>
  );
}
