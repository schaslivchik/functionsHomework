
// Создать функцию isWorkingAgePerson, которая будет проверять, трудоспособного ли человек возраста (от 16 до 65). Функция принимает в качестве параметра возраст человека и возвращает значение булевского типа. 

function isWorkingAgePerson(age) {
  const agePerson = (age >= 16 && age <= 65) ? true : false;
  return agePerson;
}
console.log(isWorkingAgePerson(18));



// функция которая запрашивает число и проверяет простое оно (просто число делиться без остатка на себя и на единицу)

const primeNumber = function(number) {
  let i = 1;
  while (++i <= number) {
    if (number % i === 0) {
      return false;
    } else if (i <= 3) {
      return true;
    } else {
      return true;
    }
  }
}
console.log(primeNumber(11));



// Создать функцию checkMultiplicity, которая принимает два числа и проверяет, делится ли первое на второе нацело:

function checkMultiplicity(a, b) {
  if (a % b === 0) {
    return true;
  } else if (b > a) {
    return false;
  } else {
    return false;
  }
}
console.log(checkMultiplicity(15, 5));



// Проверка возможности треугольника. Создать функцию которая принимает длины треугольника; функция возвращает true, если треугольник возможен, и false, если нет.
function isCorectTriangle(a, b, c) {
  const corectTriangle = (a <= b + c && b <= c + a && c <= b + a) ? true : false;
  return corectTriangle;
}
console.log(isCorectTriangle(5, 6, 8));



// Написать функции расчета площадей (или поверхности) следующих фигур/тел: треугольника, прямоугольника (или конуса, параллелепипеда) в зависимости от переданных размеров фигур. Функция должна возвращать вычисленное значение.

//declaration

/**
 * 
 * @param {Number} width width rectangle
 * @param {Number} height height rectangle
 * @returns {Number} squere rectangle
 */
function getSquereRectangle(width, height) {
  return width * height
}

//expression
const getSquereRectangleExp = function (width, height) {
  return width * height;
}

console.log(getSquereRectangle(10, 3));

//declaration
/**
 * 
 * @param {Numbers} a width first line of triangle
 * @param {Numbers} b width second line of triangle
 * @param {Numbers} c width third line of triangle
 * @param {Numbers} r radius of triangle
 * @returns {Nubers} returns squere of trianle
 */
function squareTriangle(a, b, c, r) {
  if (a <= b + c && b <= c + a && c <= b + a) {
    return r * ((a + b + c) / 2);
  }
  console.log('incorect value');
}


//expression 
const squareTriangleExp = function(a, b, c, r) {
  if (a <= b + c && b <= c + a && c <= b + a) {
    return r * ((a + b + c) / 2);
  }
  console.log('incorect value');
}

console.log(squareTriangle(5, 6, 9, 21));