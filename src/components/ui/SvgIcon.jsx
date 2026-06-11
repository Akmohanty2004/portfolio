export function SvgIcon({ svg, size = 34 }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      dangerouslySetInnerHTML={{
        __html: svg.replace("<svg ", `<svg width="${size}" height="${size}" `),
      }}
    />
  );
}