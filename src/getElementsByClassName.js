// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // your code here
  // create nodes vairable holding the document.body
  // create empty array of classNames
  // check classname of current node, see if it matches then add to array
  // Check for children
  // If there are children iterate this function recursively
  // return array of classNames

  // Assignment: Recursion Review
  // Issue: Max call stack size exceeded
  // Cause: Infinite loop
  // Action Taken:
  // Possible SOlution:

  // var nodes = current || document.body;
  // var elements = [];

  // if (nodes.classList.contains(className)) {
  //   elements.concat(nodes);
  // }

  // if (nodes.childNodes) {
  //   var children = nodes.childNodes;
  //   for (var i = 0; i < children.length; i++) {
  //     var current = children[i];
  //     elements = elements.concat(getElementsByClassName(current));
  //     return elements;
  //   }
  // }

  var nodes = document.body;
  var elements = [];

  var containClass = function(nodes) {
    if (nodes.classList && nodes.classList.contains(className)) {
      elements.push(nodes);
    }

    if (nodes.childNodes) {
      var children = nodes.childNodes;
      for (var i = 0; i < children.length; i++) {
        var current = children[i];
        containClass(current);
      }
    }

    return elements;
  };

  return containClass(nodes);
};
