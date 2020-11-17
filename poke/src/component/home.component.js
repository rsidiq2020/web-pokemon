import React, { Component } from 'react';
import axios from "axios";

class home extends Component {
  state = {
    produk: [],
  };

  async componentDidMount() {
    await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) =>
        this.setState({
          produk: response.data,
        })
      );
  }

  handleSelectUser(email, id, name, company) {
    alert(id + " " + name + " " + email);
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
        {renderData}
      </div>
    );
  }
}
  
export default home;