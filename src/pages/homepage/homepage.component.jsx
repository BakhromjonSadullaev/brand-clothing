import React from "react";

import Directory from "../../components/directory/directory.component";
import "../../pages/homepage/homepage.styles.scss";

const HomePage = ({ history }) => (
  <div className="homepage">
    <Directory />
    {console.log(history)}
  </div>
);

export default HomePage;
