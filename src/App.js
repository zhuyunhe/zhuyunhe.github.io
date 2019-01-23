import React, { Component } from 'react';
import './App.css';
import {Button} from 'antd'  
import CountDown from './components/CountDown'
import Weather from './components/Weather'
import FancyButton from './components/FancyButton'

const MyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="MyButton">
    {props.children}
  </button>
));

// 通过ref可以直接操作<button>元素:
const ref = React.createRef();
class Welcome extends React.Component{
  render(){
    const ref = React.createRef()
    return  <header className="App-header">
              <Button type="primary">primary</Button>
              <h1 className="App-title">Welcome to My Home</h1>
              <CountDown startCount={20}>
              {
                ( count ) => <div>{count > 0 ? count : '新年快乐~'}</div>
              }
              </CountDown>
              <Weather></Weather>
              <MyButton ref={ref}>Click me!</MyButton>
              <FancyButton>click me!</FancyButton>
            </header>
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <Welcome></Welcome>
      </div>
    );
  }
}

export default App;
