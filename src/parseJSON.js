// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here
  var input = json.split('');
  var arr = [];
  var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  if (json === 'undefined') {
    return undefined;
  }
  if (json === 'null') {
    return null;
  }
  if (json === 'true') {
    return true;
  }
  if (json === 'false') {
    return false;
  }

  if (json[0] === '"' && json[json.length - 1] === '"' ) {
    input.shift();
    input.pop();
    return input.join('');
  }

  if (numbers.includes(input[0]) ) {
    Number(input);
  }
  if (json === '[]') {
    return [];
  }
  if (input[0] === '[' && input[input.length - 1] === ']') {
    input.shift();
    input.pop();
    input.join('');
    input.split(',');
    for (let i = 0; i < input.length; i++) {
      arr.push(parseJSON(input[i]));
    }

    return arr;
  }



};
