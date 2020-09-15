import React, { Component } from 'react';
import './App.css';
import HeadApp from '../src/component/header.component';
import FootApp from '../src/component/footer.component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeadApp/>
        <h2 className="Isi">Ini Isi Halaman Utama</h2>
        <FootApp/>
      </div>
    );
  }
}

export default App;
