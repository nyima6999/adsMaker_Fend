import React from "react";

const MainPage = ({ title, children }) => {
  return (
    <div className="main_page">
      <div className="ads_page">
        {" "}
        {title && (
          // if there is a title, render this title
          <>
            <h1 className="page_heading">{title}</h1>
            <hr />
          </>
        )}
        {children}
      </div>
    </div>
  );
};

export default MainPage;
