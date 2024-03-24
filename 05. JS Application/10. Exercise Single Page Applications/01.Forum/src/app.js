// const cancelBtn = document.getElementsByClassName("cancel")[0];
// cancelBtn.addEventListener("click", onCancel);
// const postBtn = document.getElementsByClassName("public")[0];
// postBtn.addEventListener("click", onPost);
// const titleRef = document.getElementById("topicName");
// const usernameRef = document.getElementById("username");
// const postRef = document.querySelector('textarea[name="postText"]');
// const url = "http://localhost:3030/jsonstore/collections/myboard/posts";
// const commentsURL =
//   "http://localhost:3030/jsonstore/collections/myboard/comments";
// const topicDiv = document.getElementsByClassName("topic-container")[0];
// loadPost();

// function onCancel(e) {
//   e.preventDefault();
//   titleRef.value = "";
//   usernameRef.value = "";
//   postRef.value = "";
// }

// async function onPost(e) {
//   e.preventDefault();
//   let title = titleRef.value;
//   let username = usernameRef.value;
//   let post = postRef.value;

//   if (!title || !username || !post) {
//     return;
//   }

//   const data = {
//     method: "POST",
//     headers: {
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify({ title, username, post }),
//   };

//   try {
//     const response = await fetch(url, data);
//     if (!response.ok) {
//       throw new Error("Network response was not ok.");
//     }
//     titleRef.value = "";
//     usernameRef.value = "";
//     postRef.value = "";
//   } catch (error) {
//     console.error("Error:", error.message);
//   }
//   loadPost();
// }

// async function loadPost() {
//   let response = await fetch(url);
//   let data = await response.json();
//   topicDiv.innerHTML = "";
//   Object.values(data).forEach((rec) => {
//     createAndAppendTopic(rec);
//   });
// }

// async function createAndAppendTopic(data) {
//   let div = document.createElement("div");
//   div.classList.add("topic-container");
//   div.innerHTML = `<div class="topic-name-wrapper">
//       <div class="topic-name">
//           <a href="${data._id}" class="normal">
//               <h2>${data.title}</h2>
//           </a>
//           <div class="columns">
//               <div>
//                   <p>Date: <time>2020-10-10T12:08:28.451Z</time></p>
//                   <div class="nick-name">
//                       <p>Username: <span>${data.username}</span></p>
//                   </div>
//               </div>
//           </div>
//       </div>
//   </div>`;
//   topicDiv.appendChild(div);
// }
// import { showComments, getDate } from "./appFunctions.js";

// const mainSection = document.getElementById("main-section");
// const commentSection = document.getElementById("comment-section");
// const topicContainer = document.querySelector(
//   'div[class="main-topic-container"]'
// );
// const topicFormSection = document.getElementById("topic-form");
// const homeBtn = document.querySelector("header nav a");
// const postBtn = document.querySelector('button[class="public"]');
// const cancelBtn = document.querySelector('button[class="cancel"]');
// const url = `http://localhost:3030/jsonstore/collections/myboard/posts`;

// commentSection.style.display = "none";

// addEvents();

// fetchAllTopics();

// function addEvents() {
//   homeBtn.addEventListener("click", () => {
//     mainSection.style.display = "";
//     commentSection.style.display = "none";
//     fetchAllTopics();
//   });

//   topicContainer.addEventListener("click", (ev) => {
//     ev.preventDefault();

//     if (ev.target.tagName == "H2") {
//       const id = ev.target.dataset.id;
//       showComments(id);
//     }
//   });

//   topicFormSection.addEventListener("submit", (ev) => {
//     ev.preventDefault();
//   });

//   cancelBtn.addEventListener("click", (ev) => {
//     const form = ev.target.parentElement.parentElement;
//     form.reset();
//   });

//   postBtn.addEventListener("click", async (ev) => {
//     const form = ev.target.parentElement.parentElement;
//     const topic = formTopicData(form);

//     if (topic === undefined) {
//       alert("All fields must be completed!");
//       form.reset();
//       return;
//     }

//     const result = postNewTopic(topic);
//     fetchAllTopics();
//     form.reset();
//   });
// }

// async function fetchAllTopics() {
//   const data = await fetch(url);

//   if (data.ok === false) {
//     const error = await data.json();
//     throw new Error(error.message);
//   }

//   const topics = Object.values(await data.json());

//   if (topics.length !== 0) {
//     topicContainer.innerHTML = "";
//     topics.forEach((m) => topicContainer.appendChild(topicCard(m)));
//   }

//   topicContainer.style.display = "";
// }

// function formTopicData(ev) {
//   const form = new FormData(ev);
//   const title = form.get("topicName");
//   const creator = form.get("username");
//   const commentContent = form.get("postText");
//   const date = getDate();

//   // console.log(title, creator, commentContent, date);
//   if (title === "" || creator === "" || commentContent === "") {
//     return undefined;
//   }

//   return { title, creator, commentContent, date };
// }

// async function postNewTopic(topic) {
//   const response = await fetch(url, {
//     method: "post",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(topic),
//   });

//   if (response.ok !== true) {
//     const error = await error.json();
//     throw new Error(error.message);
//   }

//   return await response.json();
// }

// function topicCard(topic) {
//   const element = document.createElement("div");
//   element.classList.add("topic-container");
//   element.innerHTML = `
//     <div class="topic-name-wrapper"">
//         <div class="topic-name">
//             <a href="#" class="normal">
//                 <h2  data-id="${topic._id}">${topic.title}</h2>
//             </a>
//             <div class="columns">
//                 <div>
//                     <p>Date: <time>${topic.date}</time></p>
//                     <div class="nick-name">
//                         <p>Username: <span>${topic.creator}</span></p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//     `;

//   return element;
// }
import {
  createTopic,
  getComments,
  getPosts,
  postComment,
} from "./requestor.js";
import { createCommentsElement, createPostsElement } from "./display.js";
import { isValidData, clearFormFields } from "./helper.js";

const main = document.querySelector("main");
const displayPosts = createPostsElement.bind(undefined, main);
const displayComments = createCommentsElement.bind(undefined, main);
let post = "";

// initial rendering of the posts and the post form
displayPosts(await getPosts());

// add event listener for both 'postForm' and 'commentForm' directly on the document
document.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const deserializedData = Object.fromEntries([...formData.entries()]);

  const forms = {
    postForm: async (e) => {
      if (e.submitter.className === "public") {
        // if all fields are not empty:
        if (isValidData(deserializedData)) {
          // sending fetch with method POST to create post in DataBase:
          await createTopic(deserializedData, Date.now());
          // re-rendering of all posts with new data:
          displayPosts(await getPosts());
        } else {
          alert("Missing fields!");
          return;
        }
      }

      // clearing input fields
      clearFormFields(e.target);
    },
    commentForm: async () => {
      // creating new comment in DataBase with extra fields: creationDate and the post
      // the comment is about. It is by post name so if 2 posts have the same name
      // the comments will be shared. Can implement by ID but not worth extra work:
      await postComment(
        { ...deserializedData, creationDate: Date.now() },
        post.topicName
      );
      // re-rendering of comments
      displayComments(post, await getComments(post.topicName));
    },
  };

  // execute form action by submit form ID
  forms[e.target.id](e);
});

document.addEventListener("click", async (e) => {
  if (e.target.tagName === "H2" && e.path[1].className === "normal") {
    // on clicking post field in main page we need to display all comments about it.
    // we take the post name, send GET http request to DB, get all the data about the post
    // we need and pass it as argument to displayComments, while storing the post itself in
    // global module variable for use in the .addEventListener
    const postName = e.target.textContent;
    const posts = await getPosts();
    post = posts.find((x) => x.topicName === postName);
    const comments = await getComments(postName);

    displayComments(post, comments);
  }
  if (e.target.tagName === "A" && e.target.textContent === "Home") {
    displayPosts(await getPosts());
  }
});
