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
    await axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => this.setState ({
      produk: response.data
    }))
  }

  handleSelectUser (email, id, name, company) {
    alert(id +' '+ name +' '+ email);
    console.log(company);
  }

  render() {
    const renderData=this.state.produk.map((isi)=>{
      return (
          <div className="Isi"
            onClick={() => this.handleSelectUser(isi.email, isi.id, isi.name, isi.company)}
            key={isi.id} >
            {isi.name}
          </div>
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
