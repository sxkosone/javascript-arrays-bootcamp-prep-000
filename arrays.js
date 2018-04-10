var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

<<<<<<< HEAD
function addElementToBeginningOfArray(array, element) {
  var newArray = [element, ...array];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray (array, element){
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  var newArray = [...array, element];
  return newArray;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function accessElementInArray(array, index) {
  return array[index];
=======
function addElementtoBeginningofArray(list, element) {
  var newArray= [...list, element];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray (list, element){
  list.push(element);
  return list;
}

function accessElementinArray(list, i) {
  return list[i];
>>>>>>> 12985298494f2373d6475ca6bb382b4577076a2e
}

function destructivelyRemoveElementFromBeginningOfArray(list) {
  list.shift();
  return list;
}

function removeElementFromBeginningOfArray(list) {
  return list.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(list) {
  list.pop();
  return list;
}

function removeElementFromEndOfArray(list) {
  return list.slice(0, list.length - 1);
}