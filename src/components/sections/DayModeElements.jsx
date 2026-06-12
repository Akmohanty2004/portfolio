export function DayModeElements() {
  return (
    <>
      {/* Sun Glow */}
      <div
        className="sun-glow"
        style={{
          position: "fixed",
          top: "8%",
          right: "5%",
          width: 120,
          height: 120,
          borderRadius: "50%",
          background: "radial-gradient(circle, #fef08a, #fde047, #eab308)",
          boxShadow: "0 0 80px rgba(250, 204, 21, 0.6)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />
      
      {/* Sun Inner */}
      <div
        style={{
          position: "fixed",
          top: "8%",
          right: "5%",
          width: 80,
          height: 80,
          borderRadius: "50%",
          background: "radial-gradient(circle, #fef9c3, #fde047)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      {/* Sun Rays */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          style={{
            position: "fixed",
            top: "8%",
            right: "5%",
            width: 150,
            height: 150,
            borderRadius: "50%",
            zIndex: 0,
            pointerEvents: "none",
            transform: `rotate(${i * 30}deg)`,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: -70,
              left: "50%",
              width: 4,
              height: 40,
              background: "linear-gradient(180deg, #fde047, transparent)",
              transform: "translateX(-50%)",
              borderRadius: 2,
              opacity: 0.6,
              animation: `pulse ${1.5 + i * 0.1}s ease-in-out infinite`,
            }}
          />
        </div>
      ))}

      {/* Birds */}
      <div className="bird bird-1">🐦</div>
      <div className="bird bird-2">🐧</div>
      <div className="bird bird-3">🕊️</div>
      <div className="bird bird-4">🐦‍⬛</div>

      {/* Clouds */}
      <div className="cloud cloud-1">☁️</div>
      <div className="cloud cloud-2">☁️☁️</div>
      <div className="cloud cloud-3">☁️</div>
      <div className="cloud cloud-4">☁️☁️☁️</div>
    </>
  );
}