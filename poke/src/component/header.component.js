import React, { Component } from "react";

class HeadApp extends Component {
  render() {
    return (
      <div className="App-header">
            <div className="contain">
                <div className="navbar-header">
                  <a className='navbar-brand'>icReact</a>
                  <ul className="nav navbar-nav navbar-right">
                      <li><a href="/">Home</a></li>
                      <li><a href="/detil">Detil</a></li>
                      <li><a href="/dataIsi">Data Isi</a></li>
                  </ul>
                </div>
            </div>
      </div>
    );
  }
}

export default HeadApp;
