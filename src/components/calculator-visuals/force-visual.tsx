export function ForceVisual() {
  return (
    <div
      className="force-visual"
      aria-label="Force calculation relationship"
    >
      <div className="force-visual__box">
        <span>Force</span>
        <strong>F = m × a</strong>
      </div>

      <div className="force-visual__flow">
        <div>
          <span>Mass</span>
          <strong>m</strong>
        </div>

        <span>×</span>

        <div>
          <span>Acceleration</span>
          <strong>a</strong>
        </div>
      </div>

      <p>
        Force increases when mass or acceleration increases.
      </p>
    </div>
  );
}
