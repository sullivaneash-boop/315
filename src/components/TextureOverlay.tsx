export default function TextureOverlay() {
  return (
    <div aria-hidden="true" className="grain scanlines pointer-events-none fixed inset-0 z-50">
      <div className="vignette pointer-events-none fixed inset-0" />
    </div>
  );
}
