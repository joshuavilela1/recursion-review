// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var result = [];

  if (obj === undefined) {
    return undefined;
  }
  if (obj === null) {
    return 'null';
  }
  if (typeof obj === 'function') {
    return undefined;
  }
  if (obj === true) {
    return 'true';
  }
  if (obj === false) {
    return 'false';
  }
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  if (typeof obj === 'number') {
    return obj.toString();
  }

  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      var cur = obj[i];
      result = result.concat(stringifyJSON(cur));
    }
    return '[' + result + ']';
  } else if (typeof obj === 'object') {
    for (var key in obj) {
      if (stringifyJSON(obj[key]) === undefined || stringifyJSON(key) === undefined) {
        // Do nothing
      } else {
        result = result.concat(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
      }

    }
    return '{' + result + '}';
  }
};
