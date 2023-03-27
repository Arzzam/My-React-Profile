import React from "react";
import Left from "./sections/Left";
import Right from "./sections/Right";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const App = () => {
  return (
    <div>
      {/* className="grid grid-rows-none md:grid-cols-2 md:grid md:divide-x-2" className="after:content-[''] after:table after:clear-both" */}
      <Left />
      <Right />
    </div>
  );
};

export default App;
