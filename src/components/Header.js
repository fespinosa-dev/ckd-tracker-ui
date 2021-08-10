import DaySelect from "./DaySelect";

const Header = () => {
  return (
    <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content">
      <div className="navbar-start"></div>
      <div className="navbar-center ">
        <DaySelect />
      </div>
      <div className="navbar-end"></div>
    </div>
  );
};

export default Header;
