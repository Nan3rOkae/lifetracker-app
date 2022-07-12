import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div className="Landing">
      <div className="hero">
        <h1>Life Tracker</h1>
        <p>Helping you take back control of your world</p>
        <img
          src="http://codepath-lifetracker.surge.sh/static/media/smartwatch-screen-digital-device.e2983a85.svg"
          alt="hero img"
        />
      </div>

      <div className="tiles"></div>
    </div>
  );
}
