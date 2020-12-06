import React from 'react';
import './App.css';
import About from './components/about';
import Header from './components/header';
import Home from './components/home';

class App extends React.Component<{}, {windowWidth: any, windowHeight: any}> {
  constructor(props: any) {
    super(props);
    this.state = { windowWidth: window.innerWidth, windowHeight: window.innerHeight };
  }

  handleResize = (e: any) => {
    this.setState({ windowWidth: window.innerWidth,  windowHeight: window.innerHeight});
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.addEventListener("resize", this.handleResize);
  }
  render() {
    return (<div className="App">
      <Header/>
      <div id="home" style={{height: this.state.windowHeight, overflow:'auto', display: 'block', background: '#e3e3e3'}}>
        <Home/>
      </div>
      <div id="about" style={{height: this.state.windowHeight, overflow:'auto', display: 'block', background: 'red'}}>
        <About/>
      </div>
    </div>);
  }
}

export default App;
