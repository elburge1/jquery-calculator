// create two strings to hold user input
// create an if/else tree to hold string of operators
// return the strings to numbers/operators to create a total
// get the calculator to display the total on the screen

$(document).ready(function(){
  'use strict';

  var leftInput = '';

  var rightInput = '';

  var operand = '';

  var displayTotal = '0';

  $('#screen').text(displayTotal);

  $('span').on('click', function(){
    if ($(this).attr('id') === 'cancel'){
      leftInput = '';
      rightInput = '';
      operand = '';
       $('#screen').text('0');
    }
    else if ($(this).attr('id') === 'calc') {
      leftInput = parseInt(leftInput);
      rightInput = parseInt(rightInput);
      if (operand === 'x') {
        $('#screen').text(leftInput * rightInput);
      }
      else if (operand === '+'){
        $('#screen').text(leftInput + rightInput);
      }
      else if (operand === '-'){
        $('#screen').text(leftInput - rightInput);
      }
      else{
        $('#screen').text(leftInput / rightInput);
      }
      rightInput = '';
      leftInput = '';
      operand = '';
    }
    else if ($(this).hasClass('operator'))  {
      operand += $(this).text();
      $('#screen').text(leftInput + operand);
    }
    else if (operand === '') {
      leftInput += $(this).text();
      $('#screen').text(leftInput);
    }
    else if (operand !== '') {
      rightInput += $(this).text();
      $('#screen').text(leftInput + operand + rightInput);
    }
  })
});
