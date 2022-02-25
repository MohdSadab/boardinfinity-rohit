import './App.css';
import WaterState  from './components/Water';
import React from 'react';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state={toggle:true}
  }

  toggleHandler = ()=>{

    // this.setSTate is asynchronous 
    // this.setState((prevState,prevProps)=>{
    //   return{toggle:!prevState.toggle}
    // })

    // this does not work
    this.state.toggle = !this.state.toggle;
  }

  render() {
    return (
      <div className="App">
          <h1>Hellow World</h1>
          <button onClick={this.toggleHandler}>Toggle</button>
         { this.state.toggle ? <WaterState  title={"Hello"}/> : null}
         {/* we can write the any valid single line javascript  */}
         {/* {2+3 + " "}
         {Math.random()} */}
      </div>
    );
}

}

export default App;
