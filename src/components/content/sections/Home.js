import React from "react";
export default function Home() {
  return (
    <section className="animated-section start-page ps section-active">
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2 style={{ fontSize: "50px" }}>Hayk Grigoryan</h2>
        <h4 style={{ fontSize: "22px", fontWeight: "100" }}>
          Frontnd Developer
        </h4>
      </div>
    </section>
  );
}
