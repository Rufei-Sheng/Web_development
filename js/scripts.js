alert('hi there');

var name = 'fei'  // identify a variable
// var age = 22

console.log(name) //log into console variable
$('#alertButton').on('click', function() {
	alert('Chris Whong');
});

$('#red-button').on('click', function() {
  $('body').css('background', 'red');
});

$('#green-button').on('click', function() {
  $('body').css('background', 'green');
});

$('#blue-button').on('click', function() {
  $('body').css('background', 'blue');
});

$('.joes-pizza').on('click', function() {
  $('#pizza-shop-info').text('Joes Pizza is the best in NYC');
});

$('.dominos-pizza').on('click', function() {
  $('#pizza-shop-info').text('Dominos is delicious');
});

$('.papa-johns').on('click', function() {
  $('#pizza-shop-info').text('Papa Johns is mediocre');
});

$('#ageSubmit').on('click', function(){
  var age = $('#ageInput').val();
  age = parseInt(age); //parse the number from string
  console.log('Read the age from:'. age, age.length)
})

var arrayOfString = ['chirs', 'maggie', 'chrital']

console.log(arrayOfString[0])

// objects:like the dictionary on python
var object = {}
