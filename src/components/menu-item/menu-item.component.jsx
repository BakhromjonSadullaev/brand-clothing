import React from "react";
import { withRouter } from "react-router-dom";
import "../menu-item/menu-item.styles.scss";

const Menuitem = ({ title, imageUrl, size, linkUrl, match, history }) => {
  return (
    <div
      onClick={() => history.push(`${match.url}${linkUrl}`)}
      className={`${size} menu-item`}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">Shop Now</span>
      </div>
    </div>
  );
};

export default withRouter(Menuitem);
