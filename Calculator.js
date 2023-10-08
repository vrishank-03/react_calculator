import React, { Component } from 'react';
import './App.css';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      display: '0',
      currentValue: '',
      previousValue: '',
      operator: '',
    };
  }

  handleButtonClick = (value) => {
    const { display, currentValue, operator } = this.state;
  
    if (value === '+' || value === '-' || value === '*' || value === '/') {
      if (currentValue !== '') {
        this.setState({
          operator: value,
          previousValue: currentValue,
          currentValue: '',
        });
      }
    } else if (value === '=') {
      if (currentValue !== '' && operator !== '') {
        const result = this.calculateResult();
        this.setState({
          display: result,
          currentValue: result,
          operator: '',
          previousValue: '',
        });
      }
    } else if (value === 'C') {
      this.setState({
        display: '0',
        currentValue: '',
        previousValue: '',
        operator: '',
      });
    } else {
      if (display === '0' || operator === '') {
        this.setState({
          display: value,
          currentValue: value,
        });
      } else {
        this.setState((prevState) => ({
          display: prevState.display + value,
          currentValue: prevState.currentValue + value,
        }));
      }
    }
  };
  
  

  calculateResult = () => {
    const { operator, previousValue, currentValue } = this.state;
    switch (operator) {
      case '+':
        return String(parseFloat(previousValue) + parseFloat(currentValue));
      case '-':
        return String(parseFloat(previousValue) - parseFloat(currentValue));
      case '*':
        return String(parseFloat(previousValue) * parseFloat(currentValue));
      case '/':
        return String(parseFloat(previousValue) / parseFloat(currentValue));
      default:
        return '';
    }
  };

  render() {
    return (
      <div className="calculator">
        <div className="display">{this.state.display}</div>
        <div className="buttons">
          <button onClick={() => this.handleButtonClick('7')}>7</button>
          <button onClick={() => this.handleButtonClick('8')}>8</button>
          <button onClick={() => this.handleButtonClick('9')}>9</button>
          <button onClick={() => this.handleButtonClick('+')}>+</button>

          <button onClick={() => this.handleButtonClick('4')}>4</button>
          <button onClick={() => this.handleButtonClick('5')}>5</button>
          <button onClick={() => this.handleButtonClick('6')}>6</button>
          <button onClick={() => this.handleButtonClick('-')}>-</button>

          <button onClick={() => this.handleButtonClick('1')}>1</button>
          <button onClick={() => this.handleButtonClick('2')}>2</button>
          <button onClick={() => this.handleButtonClick('3')}>3</button>
          <button onClick={() => this.handleButtonClick('*')}>*</button>

          <button onClick={() => this.handleButtonClick('0')}>0</button>
          <button onClick={() => this.handleButtonClick('=')}>=</button>
          <button onClick={() => this.handleButtonClick('C')}>C</button>
          <button onClick={() => this.handleButtonClick('/')}>/</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
