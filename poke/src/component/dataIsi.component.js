import React, { Component } from "react";

class dataIsi extends Component {
  // constructor (props) {
  //   super(props);
  //   this.state = {
  //     pageNumberHit: 1
  //   };
  // }

  // getDefaultProps () {  // #2 is only supported for classes created using React.createClass.
  //   this.setState({pageNumberHit: 2});
  //   console.log('getDefaultProps ', this.state.pageNumberHit);
  // }
  // getInitialState () {  // #1 is only supported for classes created using React.createClass.
  //   this.setState({pageNumberHit: 3});
  //   console.log('getInitialState ', this.state.pageNumberHit);
  // }
  // componentWillMount () { // #3x => Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode
  //   this.setState({pageNumberHit: 4});
  //   console.log('componentWillMount ', this.state.pageNumberHit);
  // }
  // componentDidMount () { // #4x => set initial state in the constructor
  //   this.setState({pageNumberHit: 5});
  //   console.log('componentDidMount ', this.state.pageNumberHit);
  // }
  // componentWillReceiveProps () { // #5x
  //   this.setState({pageNumberHit: 6});
  //   console.log('componentWillReceiveProps ', this.state.pageNumberHit);
  // }
  // shouldComponentUpdate () { // #6x => return true / false
  //   this.setState({pageNumberHit: 7});
  //   if (this.state.pageNumberHit == 7) {
  //     return;
  //     // console.log('shouldComponentUpdate ', this.state.pageNumberHit);
  //   }
  // }
  // componentWillUpdate () { // # => Move data fetching code or side effects to componentDidUpdate
  //   this.setState({pageNumberHit: 8});
  //   console.log('componentWillUpdate ', this.state.pageNumberHit);
  // }
  // componentDidUpdate () { // # => Move data fetching code or side effects to componentDidUpdate
  //   this.setState({pageNumberHit: 9});
  //   console.log('componentDidUpdate ', this.state.pageNumberHit);
  // }

  render() {
    return (
      <div className="App">
        INI data ISI Component
      </div>
    );
  }
}
    
export default dataIsi;
