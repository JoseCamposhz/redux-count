import React from 'react';
import { connect } from 'react-redux'
import { incrementar, decrementar, multiplicar, dividir, reset, getFactorial } from './reducers';
import logo from './logo.svg';
import './App.css';

function App(props) {
  const {
    state,
    factorial,
    incrementar,
    decrementar,
    multiplicar,
    dividir,
    reset
  } = props

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {factorial}
        <p>
          Contador: {state}
        </p>
        <button onClick={incrementar}>Incrementar</button>
        <button onClick={decrementar}>Decrementar</button>
        <button onClick={multiplicar}>Multiplicar</button>
        <button onClick={dividir}>Dividir</button>
        <button onClick={reset}>Reset</button>
      </header>
    </div>
  );
}

const mapStateToPros = state => {
  return {
    state,
    factorial: getFactorial(state)
  }
}

const mapDispatchToProps = dispatch => ({
  incrementar: () => dispatch(incrementar()),
  decrementar: () => dispatch(decrementar()),
  multiplicar: () => dispatch(multiplicar()),
  dividir: () => dispatch(dividir()),
  reset: () => dispatch(reset())
})

export default connect(mapStateToPros, mapDispatchToProps)(App);
