const Footer = () => {
  return (
    <div>
      <div className="absolute inset-x-0 bottom-0 h-16 ...">
        <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content ">
          <div className="navbar-start"></div>
          <div className="navbar-center indicator">
            <button className="btn btn-accent">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </button>
          </div>
          <div className="navbar-end"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
