import {} from "react-bootstrap";

const Header = () => {
  return (
    <div className="header">
      <h1 className="logo">Adsmaker</h1>

      <h1>
        <a className="logout" href="#action/3.4">
          Logout
        </a>
      </h1>
    </div>
  );
};

export default Header;
