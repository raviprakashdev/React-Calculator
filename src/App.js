import React from 'react';
import { evaluate } from 'mathjs'
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      equation:"Equation",
      answer:"Answer"
    };
  }

  addtoParseStack(e){
    let mystr = this.state.equation
    if (mystr==="Equation"){
      mystr = ""
    }
    mystr = mystr + e
    let ans;
    try {
      ans = evaluate(mystr)
    } catch (error) {
      ans = error.message
    }
    this.setState({
      equation:mystr,
      answer: ans
    })
  }

  clearStack(){
    this.setState({
      equation:"Equation",
      answer:"Answer"
    })
  }
  answerEqSwitch(){
    this.setState({
      equation:this.state.answer,
      answer:"Answer"
    })
  }
  render(){
    return (
      <div className="App">
        <div class="equation">{this.state.equation}</div>
        <div class="answer">{this.state.answer}</div>
        <div class="grid-container">
          <div class="grid-item" onClick={()=> this.addtoParseStack("1")}>1</div>
          <div class="grid-item" onClick={()=> this.addtoParseStack("2")}>2</div>
          <div class="grid-item" onClick={()=> this.addtoParseStack("3")}>3</div>
          <div class="grid-item" onClick={()=> this.addtoParseStack("/")}>/</div>
          <div class="grid-item" onClick={()=> this.addtoParseStack("4")}>4</div>
          <div class="grid-item" onClick={()=> this.addtoParseStack("5")}>5</div>
          <div class="grid-item" onClick={()=> this.addtoParseStack("6")}>6</div>
          <div class="grid-item" onClick={()=> this.addtoParseStack("*")}>*</div>  
          <div class="grid-item" onClick={()=> this.addtoParseStack("7")}>7</div>
          <div class="grid-item" onClick={()=> this.addtoParseStack("8")}>8</div>
          <div class="grid-item" onClick={()=> this.addtoParseStack("9")}>9</div>
          <div class="grid-item" onClick={()=> this.addtoParseStack("-")}>-</div>  
          <div class="grid-item" onClick={()=> this.clearStack()}>C</div>
          <div class="grid-item" onClick={()=> this.addtoParseStack("0")}>0</div>
          <div class="grid-item" onClick={()=> this.answerEqSwitch()}>=</div>
          <div class="grid-item" onClick={()=> this.addtoParseStack("+")}>+</div>
        </div>
      </div>
    );
  }
}

export default App;
