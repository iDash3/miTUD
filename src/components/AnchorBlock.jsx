import React from "react";

const AnchorBlock = ({ title, href, iconComponent, otherProps }) => {
  return (
    <a href={href}>
      <div
        className="AnchorBlock"
        style={{
          backgroundColor: "#212121",
          height: 110,
          width: 110,
          borderRadius: 10,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: 9,
        }}
      >
        {iconComponent ? (
          iconComponent
        ) : (
          <h1
            style={{ fontSize: 21, color: "#f8f8f8", textDecoration: "none" }}
          >
            {title}
          </h1>
        )}
      </div>
    </a>
  );
};

export default AnchorBlock;
