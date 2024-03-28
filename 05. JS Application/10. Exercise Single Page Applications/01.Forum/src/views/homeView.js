import { dataService } from "../service/dataService.js";
import { html, render } from "../lib.js";

// export async function showAllPosts(ctx) {
//   const allPosts = await dataService.getAllPosts();
//   debugger;
//   render(allPosts.map(catalogTemp));
// }

// const catalogTemp = (post) => html`<div class="topic-container">
//   <div class="topic-name-wrapper">
//     <div class="topic-name">
//       <a href="#" class="normal">
//         <h2>${post.topicName}</h2>
//       </a>
//       <div class="columns">
//         <div>
//           <p>Date: <time>${post.creationDate}</time></p>
//           <div class="nick-name">
//             <p>Username: <span>${post.username}</span></p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>`;
