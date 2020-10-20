import React from "react"

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
    <div style={{ display: `flex`, flexDirection: `row` }}>{children}</div>
  </section>
)

export default TestCase
