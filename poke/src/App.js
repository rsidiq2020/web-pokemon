import React, { Component } from "react";
import "./App.css";
import HeadApp from "../src/component/header.component";
import FootApp from "../src/component/footer.component";
import { BrowserRouter, Route } from "react-router-dom";
import home from "./component/home.component";
import detil from "./component/detil.component";
import dataIsi from "./component/dataIsi.component";

class App extends Component {
  render() {    
    return (
      <div className="App">
        <div className="App-footer">
          <HeadApp />
        </div>

        <div className="Isi">
          <BrowserRouter>
            <div>
              <Route exact path="/" component={home} />
              <Route path="/detil" component={detil} />
              <Route path="/dataIsi" component={dataIsi} />
            </div>
          </BrowserRouter>
        </div>
        
        <div className="App-footer">
          <FootApp />
        </div>
      </div>
    );
  }
}

export default App;
