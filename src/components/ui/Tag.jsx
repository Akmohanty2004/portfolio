export function Tag({ children, isDayMode }) {
  return (
    <span
      style={{
        display: "inline-block",
        fontSize: "clamp(9px, 3vw, 10px)",
        letterSpacing: "0.18em",
        color: isDayMode ? "#d97706" : "#6366f1",
        textTransform: "uppercase",
        marginBottom: 10,
        padding: "5px 14px",
        borderRadius: 99,
        background: isDayMode ? "rgba(234,179,8,0.12)" : "rgba(99,102,241,0.1)",
        border: isDayMode ? "1px solid rgba(234,179,8,0.25)" : "1px solid rgba(99,102,241,0.2)",
      }}
    >
      {children}
    </span>
  );
}