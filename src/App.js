import React, { Component } from "react";
import { modules } from "./data/content/modules";
import { sections } from "./data/content/sections";
import { lessons } from "./data/content/lessons";

import Modules from "./components/Modules";

class App extends Component {
  state = { modules, sections, lessons };
  render() {
    return (
      <div>
        <Modules
          modules={this.state.modules}
          sections={this.state.sections}
          lessons={this.state.lessons}
        />
      </div>
    );
  }
}

export default App;
