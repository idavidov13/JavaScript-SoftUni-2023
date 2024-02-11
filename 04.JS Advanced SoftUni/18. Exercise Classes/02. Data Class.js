// 2. Data Class

// Write a class Request that holds data about an HTTP request. It has the following properties:

// · method (String)

// · uri (String)

// · version (String)

// · message (String)

// · response (String)

// · fulfilled (Boolean)

// The first four properties (method, uri, version, message) are set through the constructor, in the listed order. The response property is initialized to undefined and the fulfilled property is initially set to false.

// Constraints

// · The constructor of your class will receive valid parameters.

// · Submit the class definition as is, without wrapping it in any function.
// Hints

// Using ES6 syntax, a class can be defined similar to a function, using the class keyword:
// At this point, the class can already be instantiated, but it won’t hold anything useful, since it doesn’t have a constructor. A constructor is a function that initializes the object’s context and attaches values to it. It is defined with the keyword constructor inside the body of the class definition and it follows the syntax of regular JS functions - it can take arguments and execute logic. Any variables we want to be attached to the instance must be prefixed with this identifier:
// The description mentions some of the properties need to be set via the constructor - this means the constructor must receive them as parameters. We modify it to take four named parameters that we then assign to the local variables:

// Note the input parameters have the same names as the instance variables - this isn’t necessary, but it’s easier to read. There will be no name collision because this identifier tells the interpreter to look for a variable in a different context, so this.method is not the same as the method. Our class is complete and can be submitted to Judge
class Request {
  method;
  uri;
  version;
  message;
  response;
  fulfilled;
  constructor(method, uri, version, message) {
    this.method = method;
    this.uri = uri;
    this.version = version;
    this.message = message;
    this.response = undefined;
    this.fulfilled = false;
  }
}
let myData = new Request("GET", "http://google.com", "HTTP/1.1", "");
console.log(myData);
