import React, { Component } from 'react';


import CRouter from './router/Router'
import './App.css';


import logo from './logo.svg';

//

class App extends Component {
    constructor(props) {
      super(props);

    }
  render() {
    return (
      <div className="App">
        {/*<header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Practice</h1>
        </header>
        <div className="App-intro">
          刘龙山的react框架项目实践，几个简单组件的拼接。

          <TodoApp/>
          <Swiper option={this.state.option}/>

        </div>*/}
        <CRouter></CRouter>
      </div>
    );
  }
}

export default App;
