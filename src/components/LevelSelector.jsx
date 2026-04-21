import { levels } from "../data/data";

function LevelSelector({ selectedLevel, setSelectedLevel }) {
  return (
    <div className="card">
      <h3 className="section-title">🌶️ Tingkat Kepedasan</h3>
      <div className="pill-group">
        {levels.map((lvl) => (
          <div
            key={lvl.id}
            className={`pill-button ${selectedLevel === lvl ? "active" : ""}`}
            onClick={() => setSelectedLevel(lvl)}
          >
            {lvl.nama}
          </div>
        ))}
      </div>
    </div>
  );
}

export default LevelSelector;
