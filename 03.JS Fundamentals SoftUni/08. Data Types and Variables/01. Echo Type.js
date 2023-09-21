//1. Echo Type

// Write a JS function that takes one parameter and prints on two lines the type of the parameter and then one of the following:

// · If the parameter type is either string or number, print its value

// · Otherwise, print the text 'Parameter is not suitable for printing'
function echo(param) {
  let type = typeof param;
  if (type == "string" || type == "number") {
    console.log(type);
    console.log(param);
  } else {
    console.log(type);
    console.log(`Parameter is not suitable for printing`);
  }
}
echo("Hello, JavaScript!");
