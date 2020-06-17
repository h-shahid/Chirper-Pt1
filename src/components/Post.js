// import React, { Component } from "react";

// export class Post extends Component {
//   constructor(props) {
//     //rconst shortcut
//     super(props);

//     this.state = {
//       chirp: [
//         {
//           name: "Jackie",
//           message: "Hi! I'm from Mobile",
//         },
//         { name: "Eddie", message: "I was born in Seattle!" },
//         { name: "Rajeeyah", message: "My favorite color is red!" },
//       ],
//       editChirp: false
//     };
//   }

//   render() {
//     return this.state.chirp.map((chirp, index) => {
//       return (
//         <div>
//           {/* //maps needs a unique key for ordering. each child needs a unique key */}
//           <div key={index} className="card">
//             <div className="card-header">Chirps</div>
//             <div className="card-body">
//               <h5 className="card-title">{chirp.name}</h5>
//               <p className="card-text">{chirp.message}</p>
//               <a href="http://google.com" className="btn btn-primary">
//                 Chirp it Up!
//               </a>
//             </div>
//           </div>
//         </div>
//       );
//     });
//   }
// }
// export default Post;

// // rce shortcut
