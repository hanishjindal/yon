const HomeNav = ({ SetPage, SetShowHome }) => {
  return (
    <div className="homeNav">
      <div
        className="brandname"
        onClick={() => {
          SetPage(true);
          SetShowHome(true);
        }}
      >
        YON
      </div>
      <div className="navmenu">
        <div
          className="links"
          onClick={() => {
            SetPage(true);
            SetShowHome(true);
          }}
        >
          Home
        </div>
        <div
          className="links"
          onClick={() => {
            SetPage(false);
            SetShowHome(true);
          }}
        >
          About
        </div>
      </div>
    </div>
  );
};
export default HomeNav;
