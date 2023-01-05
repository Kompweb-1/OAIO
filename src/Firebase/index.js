const express = require("express");
const session = require("express-session");
const firebase = require("firebase-admin");
// import firebase from "./API/firebase";

const app = express();

// Use express-session middleware to manage sessions
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
  })
);

// Initialize Firebase
// firebase.initializeApp({
// credential: firebase.credential.cert("./path/to/private/key.json"),
// databaseURL: "https://your-firebase-project.firebaseio.com",
// });

// Set up the login route
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Check that the email and password are not empty
  if (!email || !password) {
    res.send("Email and password are required");
    return;
  }

  // Sign in with Firebase
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((user) => {
      // If the login is successful, set the user id in the session
      req.session.userId = user.uid;
      res.send("Success");
    })
    .catch((error) => {
      res.send("Invalid email or password");
    });
});

// Set up the logout route
app.get("/logout", (req, res) => {
  // Sign out with Firebase
  firebase
    .auth()
    .signOut()
    .then(() => {
      // Destroy the session
      req.session.destroy((error) => {
        if (error) throw error;
        res.send("Success");
      });
    })
    .catch((error) => {
      res.send("Error signing out");
    });
});

// Start the server
app.listen(8080, () => {
  console.log("Listening on port 8080");
});
