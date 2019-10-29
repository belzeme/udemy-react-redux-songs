import "semantic-ui-css/semantic.min.css";
import React from "react";
import SongList from "./SongList";

const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongList></SongList>
        </div>
      </div>
    </div>
  );
};

export default App;
