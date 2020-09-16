import React, { Component } from 'react';
import './App.css';
import HeadApp from '../src/component/header.component';
import FootApp from '../src/component/footer.component';
import axios from 'axios';

class App extends Component {
  state = {
    produk: []
  }

  async componentDidMount () {
    await axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(response => this.setState ({
      produk: response.data.abilities
    }))

    // console.log(this.state.produk);
  }

  render() {
    const renderData=this.state.produk.map((isi)=>{
      return (
          <div className="Isi" key={isi.slot}>{isi.ability.name}</div>
        )
    })
    return (
      <div className="App">
        <HeadApp/>
        {renderData}
        <FootApp/>
      </div>
    );
  }
}

export default App;
