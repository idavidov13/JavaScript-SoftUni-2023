// 1. Messenger

// Write a JS program that records and displays messages. The user can post a message, supplying a name and content and retrieve all currently recorded messages.

// The url for the requests - http://localhost:3030/jsonstore/messenger

// When [Send] button is clicked you should create a new object and send a post request to the given url. Use the following message structure:

// {

// author: authorName,

// content: msgText,

// }

// If you click over [Refresh] button you should get all messages with GET request and display them into the textarea. Use the following message format: "{author}: {message}"
function attachEvents() {
  const url = "http://localhost:3030/jsonstore/messenger";
  document.getElementById("refresh").addEventListener("click", onLoadMsg);
  document.getElementById("submit").addEventListener("click", onSubmit);

  async function onSubmit(e) {
    let nameRef = document.querySelector("input[name='author']");
    let textRef = document.querySelector("input[name='content']");
    let name = nameRef.value;
    let text = textRef.value;

    let data = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ author: name, content: text }),
    };

    await fetch(url, data);
    nameRef.value = "";
    textRef.value = "";
  }

  async function onLoadMsg(e) {
    let textAreaRef = document.getElementById("messages");
    textAreaRef.value = "";
    let response = await fetch(url);
    let data = await response.json();
    Object.values(data).forEach((rec) => {
      textAreaRef.value += `${rec.author}: ${rec.content}\n`;
    });
    textAreaRef.value = textAreaRef.value.trim();
  }
}

attachEvents();
