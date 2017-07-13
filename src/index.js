import _ from 'lodash';
import printMe from './print';
import Library from './library';
import './style.sass';

function fahrenheitToCelsius(fahrenheitTemp) {
  return Math.round((fahrenheitTemp - 32) * 5 /9);
}

function component() {
  const element = document.createElement('div');
  const button = document.createElement('button');
  element.innerHTML = _.join(['Hello', 'webpack', '!!!!!'], ' ');
  button.innerHTML = 'Click and check console';
  button.onclick = printMe;
  element.appendChild(button);
  return element;
}

if (module.hot) {
  module.hot.accept('./library', () => {
    console.log('Accepted the updated library module!');
    Library.log();
  });
}

document.body.appendChild(component());
console.log('85 Fahrenheit is: ', fahrenheitToCelsius(85), 'C');
console.log('it works');
console.log('shit it doesn\'t work!');