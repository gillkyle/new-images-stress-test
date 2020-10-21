import React from "react";

const TestCase = ({ title, notes, looksCorrect, children }) => (
  <section>
    <div>
      <h3>
        <span style={{ fontSize: 16, marginRight: 8 }}>
          {looksCorrect ? `✅` : `❗️`}
        </span>
        {title}
      </h3>
      <p>{notes}</p>
    </div>
    <div
      style={{
        display: `flex`,
        flexDirection: `row`,
        padding: 10,
        background: `
  linear-gradient(90deg, #ededed 2.50%, transparent 2.50%, transparent 25%, #bdbdbd 25%, #bdbdbd 27.50%, transparent 27.50%, transparent 50%, #ededed 50%, #ededed 52.50%, transparent 52.50%, transparent 75%, #bdbdbd 75%, #bdbdbd 77.50%, transparent 77.50%, transparent 100%),
  linear-gradient(0deg, #ededed 2.50%, transparent 2.50%, transparent 25%, #bdbdbd 25%, #bdbdbd 27.50%, transparent 27.50%, transparent 50%, #ededed 50%, #ededed 52.50%, transparent 52.50%, transparent 75%, #bdbdbd 75%, #bdbdbd 77.50%, transparent 77.50%, transparent 100%)`,
        backgroundSize: "40.00px 40.00px",
      }}
    >
      {children}
    </div>
  </section>
);

export default TestCase;
