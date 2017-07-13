import _ from 'lodash';

const
  array = [1, 2, 3, 4, 5, 6, 7, 8],
  newArray = _.chunk(array, 2);

console.log(newArray);

export default function printMe() {
  console.log('I get called from another-module.js');
}