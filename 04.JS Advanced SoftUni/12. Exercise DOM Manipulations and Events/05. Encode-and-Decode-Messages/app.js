// 5. Encode and Decode Messages

// In this problem, you should create a JS functionality that encodes and decodes some messages which travel to

// the network.
// This program should contain two functionalities.

// The first one is to encode the given message and send it to the receiver.

// The second one is to decode the received message and read it (display it).

// When the [Encode and send it] button is clicked, you should get the given message from the first textarea. When you get the current message, you should encode it as follows:
// · Change the ASCII CODE on every single character in that message when you add 1 to the current ASCII NUMBER, that represents the current character in that message

// · Clear the sender textarea and add the encoded message to the receiver textarea
// After that, when the [Decode and read it] button is clicked. You need to get the encoded message from the receiver textarea and do the opposite logic from encoding:

// · Subtract 1 from the current ASCII NUMBER, that represents the current character in that message

// · Replace the encoded message with the already decoded message in the receiver textarea, to make it readable
function encodeAndDecodeMessages() {
  //get the buttons for encoding and decoding the message
  let encodeBtn = document.getElementsByTagName("button")[0];
  let decodeBtn = document.getElementsByTagName("button")[1];

  //add event listeners to the both buttons
  encodeBtn.addEventListener("click", encode);
  decodeBtn.addEventListener("click", decode);

  //create variable to store the encoded text
  let encodedText = "";

  //Get the text from the message
  let textFromEncodingField = document.getElementsByTagName("textarea")[0];
  let textFromDecodingField = document.getElementsByTagName("textarea")[1];

  //function for encoding
  function encode() {
    //Create an array with every symbol of the message
    let textForEncoding = textFromEncodingField.value.split("");

    //Create an array to store the encoded values
    let arrFromEncodedSybols = [];

    //loop through all symbols from the message
    for (let each of textForEncoding) {
      let curSymbol = each.charCodeAt(0);
      arrFromEncodedSybols.push(String.fromCharCode(curSymbol + 1));
    }
    encodedText = arrFromEncodedSybols.join("");
    textFromEncodingField.value = "";
    textFromDecodingField.value = encodedText;
  }

  //function for decoding
  function decode() {
    //Create an array with every symbol of the message
    let textForDecoding = textFromDecodingField.value.split("");

    //Create an array to store the encoded values
    let arrFromDecodedSybols = [];

    //loop through all symbols from the message
    for (let each of textForDecoding) {
      let curSymbol = each.charCodeAt(0);
      arrFromDecodedSybols.push(String.fromCharCode(curSymbol - 1));
    }
    encodedText = arrFromDecodedSybols.join("");
    textFromDecodingField.value = encodedText;
  }
}
