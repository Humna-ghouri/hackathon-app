// // Import necessary Firebase modules
// import { initializeApp } from "firebase/app";
// import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
// import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

// // Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyCtulJ9m1ipfy900f6KpHdMNWTw802KxrE",
//     authDomain: "form-validation-bc314.firebaseapp.com",
//     projectId: "form-validation-bc314",
//     storageBucket: "form-validation-bc314.firebasestorage.app",
//     messagingSenderId: "312529142492",
//     appId: "1:312529142492:web:500aa6e38c52851467ea19",
//     measurementId: "G-3CW57Q1WL8"
//   };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);

// // Function to create a new user and save profile data
// async function createUser (email, password, displayName) {
//   try {
//     const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//     const user = userCredential.user;

//     // Save user profile data to Firestore
//     await setDoc(doc(db, "users", user.uid), {
//       displayName: displayName,
//       email: email
//     });

//     console.log("User  profile saved to Firestore");
//   } catch (error) {
//     console.error("Error creating user: ", error);
//   }
// }

// // Function to display user profile data
// async function displayUserProfile() {
//   const user = auth.currentUser ;

//   if (user) {
//     const docRef = doc(db, "users", user.uid);
//     const docSnap = await getDoc(docRef);

//     if (docSnap.exists()) {
//       const userData = docSnap.data();
//       console.log("User  Profile Data: ", userData);
//       // Here you can update your UI with userData
//     } else {
//       console.log("No such document!");
//     }
//   } else {
//     console.log("No user is signed in.");
//   }
// }

// // Set up an observer on the Auth object to listen for user state changes
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     displayUserProfile();
//   } else {
//     console.log("User  is signed out.");
//   }
// });

// Example usage
// createUser ("user@example.com", "securePassword", "Jane Doe")

// Firebase imports
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
// import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
// import { getFirestore, doc, setDoc, getDoc, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";

// // Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCtulJ9m1ipfy900f6KpHdMNWTw802KxrE",
//   authDomain: "form-validation-bc314.firebaseapp.com",
//   projectId: "form-validation-bc314",
//   storageBucket: "form-validation-bc314.firebasestorage.app",
//   messagingSenderId: "312529142492",
//   appId: "1:312529142492:web:500aa6e38c52851467ea19",
//   measurementId: "G-3CW57Q1WL8"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);

// // Function to handle the post form submission
// document.getElementById('postForm').addEventListener('submit', async function(e) {
//     e.preventDefault(); // Prevent form from submitting normally
  
//     // Get values from input fields
//     const title = document.getElementById('title').value;
//     const description = document.getElementById('description').value;
  
//     // Check if the user is logged in
//     const user = auth.currentUser;
  
//     if (!user) {
//       // Show SweetAlert if the user is not logged in
//       Swal.fire({
//         icon: 'error',
//         title: 'Please sign up or log in first',
//         text: 'You need to be logged in to create a post.'
//       });
//       return;
//     }
  
//     try {
//       // Save the post to Firestore
//       await addDoc(collection(db, "posts"), {
//         title: title,
//         description: description,
//         userId: user.uid,  // Link the post to the current user
//         createdAt: new Date()
//       });
  
//       Swal.fire({
//         icon: 'success',
//         title: 'Post Created',
//         text: 'Your post has been created successfully!'
//       });
  
//       // Optionally, reset the form after posting
//       document.getElementById('postForm').reset();
//     } catch (error) {
//       console.error("Error creating post: ", error);
//       Swal.fire({
//         icon: 'error',
//         title: 'Error',
//         text: 'There was an error creating your post. Please try again.'
//       });
//     }
//   });

//   // Function to fetch and display posts
// async function displayPosts() {
//     const querySnapshot = await getDocs(collection(db, "posts"));
//     const postsList = document.getElementById("postsList");
//     postsList.innerHTML = '';  // Clear existing posts
  
//     querySnapshot.forEach((doc) => {
//       const post = doc.data();
//       const postElement = document.createElement("div");
//       postElement.classList.add("post");
//       postElement.innerHTML = `
//         <h3>${post.title}</h3>
//         <p>${post.description}</p>
//       `;
//       postsList.appendChild(postElement);
//     });
//   }
  
//   // Call displayPosts when the page loads
//   window.onload = function() {
//     displayPosts();
//   };
// // Listen for user authentication state changes
// onAuthStateChanged(auth, (user) => {
//     if (user) {
//       console.log("User is signed in:", user);
//       // Optionally display user profile
//     } else {
//       console.log("User is signed out.");
//     }
//   });
    
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
// import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
// import { getFirestore, doc, setDoc, getDoc, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";

// // Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCtulJ9m1ipfy900f6KpHdMNWTw802KxrE",
//   authDomain: "form-validation-bc314.firebaseapp.com",
//   projectId: "form-validation-bc314",
//   storageBucket: "form-validation-bc314.firebasestorage.app",
//   messagingSenderId: "312529142492",
//   appId: "1:312529142492:web:500aa6e38c52851467ea19",
//   measurementId: "G-3CW57Q1WL8"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);

// // Function to handle the post form submission
// document.getElementById('postForm').addEventListener('submit', async function(e) {
//     e.preventDefault(); // Prevent form from submitting normally
  
//     // Get values from input fields
//     const title = document.getElementById('title').value;
//     const description = document.getElementById('description').value;
  
//     // Check if the user is logged in
//     const user = auth.currentUser;
  
//     if (!user) {
//       // Show SweetAlert if the user is not logged in
//       Swal.fire({
//         icon: 'error',
//         title: 'Please sign up or log in first',
//         text: 'You need to be logged in to create a post.'
//       });
//       return;
//     }
  
//     try {
//       // Save the post to Firestore
//       await addDoc(collection(db, "posts"), {
//         title: title,
//         description: description,
//         userId: user.uid,  // Link the post to the current user
//         createdAt: new Date()
//       });
  
//       Swal.fire({
//         icon: 'success',
//         title: 'Post Created',
//         text: 'Your post has been created successfully!'
//       });
  
//       // Optionally, reset the form after posting
//       document.getElementById('postForm').reset();
  
//       // Re-fetch posts after a new one is created
//       displayPosts();
//     } catch (error) {
//       console.error("Error creating post: ", error);
//       Swal.fire({
//         icon: 'error',
//         title: 'Error',
//         text: 'There was an error creating your post. Please try again.'
//       });
//     }
//   });

//   // Function to fetch and display posts
// async function displayPosts() {
//     const querySnapshot = await getDocs(collection(db, "posts"));
//     const postsList = document.getElementById("postsList");
//     postsList.innerHTML = '';  // Clear existing posts
  
//     querySnapshot.forEach((doc) => {
//       const post = doc.data();
//       const postElement = document.createElement("div");
//       postElement.classList.add("post");
//       postElement.innerHTML = `
//         <h3>${post.title}</h3>
//         <p>${post.description}</p>
//       `;
//       postsList.appendChild(postElement);
//     });
//   }
  
//   // Call displayPosts when the page loads
//   window.onload = function() {
//     displayPosts();
//   };

// // Listen for user authentication state changes
// onAuthStateChanged(auth, (user) => {
//     if (user) {
//       console.log("User is signed in:", user);
//       // Optionally display user profile
//     } else {
//       console.log("User is signed out.");
//     }
// });
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { getFirestore, collection, getDocs, addDoc } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCtulJ9m1ipfy900f6KpHdMNWTw802KxrE",
    authDomain: "form-validation-bc314.firebaseapp.com",
    projectId: "form-validation-bc314",
    storageBucket: "form-validation-bc314.firebasestorage.app",
    messagingSenderId: "312529142492",
    appId: "1:312529142492:web:500aa6e38c52851467ea19",
    measurementId: "G-3CW57Q1WL8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Handle form submission
document.getElementById('postForm').addEventListener('submit', async function(e) {
    e.preventDefault(); // Prevent form from submitting normally

    // Get values from the form
    const title = document.getElementById('title').value.trim();
    const description = document.getElementById('description').value.trim();
    const category = document.getElementById('category').value;

    // Validate the form inputs
    if (!category || !title || !description) {
        Swal.fire({
            icon: 'error',
            title: 'Validation Error',
            text: 'Please select a category and provide both title and description for the post.'
        });
        return;
    }

    // Check if the user is logged in
    const user = auth.currentUser;

    if (!user) {
        // Show SweetAlert if the user is not logged in
        Swal.fire({
            icon: 'error',
            title: 'Please sign up or log in first',
            text: 'You need to be logged in to create a post.'
        });
        return;
    }

    try {
        // Save the post to the selected category's Firestore collection
        await addDoc(collection(db, category), {
            title: title,
            description: description,
            userId: user.uid,  // Link the post to the current user
            createdAt: new Date()
        });

        Swal.fire({
            icon: 'success',
            title: 'Post Created',
            text: 'Your post has been created successfully!'
        });

        // Optionally, reset the form after posting
        document.getElementById('postForm').reset();

        // Reload posts to display the newly added post
        displayPosts();
    } catch (error) {
        console.error("Error creating post: ", error);
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'There was an error creating your post. Please try again.'
        });
    }
});

// Function to display posts from Firestore
async function displayPosts() {
    const postsList = document.getElementById("postsList");
    postsList.innerHTML = ''; // Clear existing posts

    // Fetch posts from both Educational and General categories
    const categories = ['educational', 'general'];

    for (const category of categories) {
        const querySnapshot = await getDocs(collection(db, category));

        const categoryHeader = document.createElement("h2");
        categoryHeader.innerHTML = category.charAt(0).toUpperCase() + category.slice(1) + " Posts";
        postsList.appendChild(categoryHeader);

        querySnapshot.forEach((doc) => {
            const post = doc.data();
            const postElement = document.createElement("div");
            postElement.classList.add("post");
            postElement.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.description}</p>
            `;
            postsList.appendChild(postElement);
        });
    }
}

// Call displayPosts when the page loads to show posts
window.onload = function() {
    displayPosts();
};

// Listen for user authentication state changes
onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("User is signed in:", user);
    } else {
        console.log("User is signed out.");
    }
});