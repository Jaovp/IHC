import React, { Component } from 'react';
import './assets/estilo.css';
import cronometro from './assets/cronometro.png';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      numero: 0,
      botao: 'VAI'
    };
    this.timer = null;
    this.ligar = this.ligar.bind(this);
    this.limpar = this.limpar.bind(this);
  }

  ligar(){
    let state = this.state;
    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer = null;
      state.botao = 'VAI';
    } 
    else {
      this.timer = setInterval(() => {
        let state = this.state;
        state.numero += 0.1;
        this.setState(state);
      }, 100);
      state.botao = 'PAUSAR';
    }
    this.setState(state);
  }

  limpar(){
    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer = null;
    }
    let state = this.state;
    state.numero = 0;
    state.botao = 'VAI';
    this.setState(state);
  }

  render(){
    return(
      <div className="container">
        <img src={cronometro} className="img" />
        <a className="timer">{this.state.numero.toFixed(1)}</a>
        <div className="area-btn">
          <a className="btn" onClick={this.ligar}>{this.state.botao}</a>
          <a className="btn" onClick={this.limpar}>LIMPAR</a>
        </div>
      </div>
    );
  }
}

export default App;