export default function DecorativeMark({
  src,
  alt = "",
  className = "",
  style,
}: {
  src: string;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <img
      src={src}
      alt={alt}
      aria-hidden="true"
      draggable={false}
      className={`decorative-mark ${className}`}
      style={style}
    />
  );
}
