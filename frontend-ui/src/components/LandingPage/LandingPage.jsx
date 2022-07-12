import "./LandingPage.css";

const tileData = [
  { label: "Fitness", image: workout, id: 1 },
  { label: "Food", image: porridge, id: 2 },
  { label: "Rest", image: resting, id: 3 },
  { label: "Planner", image: planner, id: 4 },
];

export default function LandingPage() {
  return (
    <div className="Landing">
      <div className="hero">
        <img src={trackerImage} alt="hero img" />
        <h1>Life Tracker</h1>
        <p>Helping you take back control of your world</p>
      </div>

      <div className="tiles">
        {tileData.map(({ label, image, id }) => (
          <div className="tile" key={id}>
            <img src={image} alt={label} />
            <p>{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
