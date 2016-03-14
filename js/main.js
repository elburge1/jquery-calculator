// create two strings to hold user input
// create an if/else tree to hold string of operators
// return the strings to numbers/operators to create a total
// get the calculator to display the total on the screen

$(document).ready(function(){
  'use strict';

  var leftInput = '';

  var rightInput = '';

  var operand = '';

  var displayTotal = ' ' + leftInput + ' ' + operand + ' ' + rightInput + '';

  $('span').on('click', function(){
    if ($(this).attr('id') === 'calc') {
      leftInput = parseInt(leftInput);
      rightInput = parseInt(rightInput);
      if (operand = 'x') {
        console.log(leftInput * rightInput);
      }
      else if (operand = '+'){
        console.log(leftInput + rightInput);
      }
      else if (operand = '-'){
        console.log(leftInput - rightInput);
      }
      else {
        console.log(leftInput / rightInput);
      }
      rightInput = '';
      leftInput = '';
      operand = '';
    }
    else if ($(this).hasClass('operator'))  {
      operand += $(this).text();
    }
    else if (operand === '') {
        leftInput += $(this).text();
        console.log(leftInput);
    }
    else if (operand !== '') {
      rightInput += $(this).text();
      console.log(leftInput + operand + rightInput);
    }
  })
});
