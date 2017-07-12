import _ from 'lodash';
import './style.sass';
import Icon from './images/icon_1x.png';
require("font-awesome-webpack");
import xmlData from './data/data.xml';
import csvData from './data/insurance.csv';

function fahrenheitToCelsius(fahrenheitTemp) {
  return Math.round((fahrenheitTemp - 32) * 5 /9);
}

function component() {
  const element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack', '!!!!!'], ' ');
  element.classList.add('hello');
  // Add the image
  const myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);
  return element;
}

function createIcon(iconClass) {
  const iconElement = document.createElement('i');
  iconElement.classList.add('fa');
  iconElement.classList.add(iconClass);
  return iconElement;
}

console.log('XML: ', xmlData.note.body.toString());
console.log(csvData);
console.log('102 Fahrenheit is: ', fahrenheitToCelsius(102), 'C');

document.body.appendChild(component());
document.body.appendChild(createIcon('fa-address-book'));