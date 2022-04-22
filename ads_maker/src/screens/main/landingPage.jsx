const LandingPage = () => {
  return (
    <div className="main">
      <div className="button_container">
        <a href="/login">
          <button className="landing_button">Login</button>
        </a>
        <a href="/register">
          <button className="landing_button ">Register</button>
        </a>
      </div>
    </div>
  );
};
export default LandingPage;
