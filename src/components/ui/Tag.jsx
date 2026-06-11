export function Tag({ children }) {
  return (
    <span
      style={{
        display: "inline-block",
        fontSize: "clamp(9px, 3vw, 10px)",
        letterSpacing: "0.18em",
        color: "#6366f1",
        textTransform: "uppercase",
        marginBottom: 10,
        padding: "5px 14px",
        borderRadius: 99,
        background: "rgba(99,102,241,0.1)",
        border: "1px solid rgba(99,102,241,0.2)",
      }}
    >
      {children}
    </span>
  );
}