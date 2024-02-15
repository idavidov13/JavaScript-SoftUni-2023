// 3. Extensible Object

// Create an object that can clone the functionality of another object into itself. Implement an extend(template) function that would copy all of the properties of the template to the parent object and if the property is a function, add it to the object’s prototype instead.

// Input / Output

// Your code should return the extensible object instance. The extend() function of your object will receive a valid object as an input parameter and has no output.

function extensibleObject() {
  let parent = {};
  let childObj = Object.create(parent);

  childObj.extend = function (obj) {
    let objAsArray = Object.entries(obj);
    for (let [key, value] of objAsArray) {
      if (typeof value === "function") {
        parent[key] = value;
      } else {
        childObj[key] = value;
      }
    }
  };
  return childObj;
}

const myObj = extensibleObject();
