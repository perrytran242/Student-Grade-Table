// Load in Firebase module and Firebase config
const fb = require('firebase');
const firebaseConfig = {
    apiKey: "AIzaSyDVBebDhHO0WLL3K46N2y26s26hJJkwa4c",
    authDomain: "sgt-react-redux.firebaseapp.com",
    databaseURL: "https://sgt-react-redux.firebaseio.com",
    projectId: "sgt-react-redux",
    storageBucket: "sgt-react-redux.appspot.com",
    messagingSenderId: "623770012617"
}

// Initializes the database with the specified configuration
fb.initializeApp(firebaseConfig);

// Stores reference in db variable
const db = fb.database();

// Storage of students we will use to repopulate Firebase DB
const refreshedStudents = [
    {
        grade: "66",
        name: "Mary",
        subject: "Data Structures & Algorithms"
    },
    {
        grade: "100",
        name: "Torie",
        subject: "Math"
    },
    {
        grade: "98",
        name: "Bartholomewt",
        subject: "Computer Science"
    },
    {
        grade: "89",
        name: "Jon",
        subject: "Sociology"
    },
    {
        grade: "66",
        name: "Peter",
        subject: "Psychology"
    },
    {
        grade: "84",
        name: "Danny",
        subject: "American Studies"
    },
    {
        grade: "92",
        name: "Rachel",
        subject: "Accounting"
    },
    {
        grade: "75",
        name: "David",
        subject: "Anatomy & Physiology"
    }
];

// References the students object and removes it
db.ref('/students').remove();

// Adds in each student object to our object of students
for (let student of refreshedStudents) {
    db.ref('/students').push(student);
}

console.log("Running Firebase cron job script");
