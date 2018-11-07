import React, { Component } from 'react';
class App extends Component {
  constructor(){
    super()
    this.state={
      flag:false
    }
  }
  person(){
    alert('点击用户按钮')
  }
  con(){
   window.confirm('用户信息')
  }
  componentDidMount(){
    this.renders()
  }
  renders(){
    this.refs.rend.style.display= this.state.flag?'block':'none'

   this.setState({
           flag:!this.state.flag
          })
  }
  render() {
    return (
      <div className="App">
         <button onClick={()=>{this.person()}}> person</button>
         <h2 onClick={()=>{this.renders()}}>北京市<ul ref="rend">
            <li>123</li>
            <li>123</li>
            <li>123</li>
           </ul></h2>
         <button onClick={()=>{this.con()}}> confire</button>
      </div>
    );
  }
}

export default App;
