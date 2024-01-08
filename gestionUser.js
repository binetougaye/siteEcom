// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase, set, ref, get, child } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBFoU9gDQM7jyW0QZI7ehdGave0ZZOYYy0",
    authDomain: "gestionclient-e3754.firebaseapp.com",
    projectId: "gestionclient-e3754",
    storageBucket: "gestionclient-e3754.appspot.com",
    messagingSenderId: "476484213777",
    appId: "1:476484213777:web:d976f9c9bd8c6a06b565b0"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase();
const auth = getAuth(app);
const dbref = ref(db);

let email = document.getElementById('email');
let nom = document.getElementById('nom');
let prenom = document.getElementById('prenom');
let password = document.getElementById('password');
let registrationForm = document.getElementById('registrationForm');


// PARTIE INSCRIPTION

let registerUser = e => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((credentials) => {
            set(ref(db, 'UserAuthList' + credentials.user.uid), {
                nom: nom.value,
                prenom: prenom.value
            })
        })
        .catch((error) => {
            alert(error.message);
        })
    window.alert('Compte créé avec succes')
    window.location.href = 'connexion.html'
}

registrationForm.addEventListener('submit', registerUser)


// PARTIE CONNEXION

let loginForm = document.getElementById('loginForm')
let loginEmail = document.getElementById('loginEmail')
let loginPassword = document.getElementById('loginPassword')


// Bouton connexion

let signInUser = e => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email.value = loginEmail.value, password.value = loginPassword.value)
        .then((credentials) => {
            get(child(dbref, 'UserAuthList' + credentials.user.uid))
                .then((snapshot) => {
                    if (snapshot.exists) {
                        sessionStorage.setItem('user-info', JSON.stringify({
                            nom: snapshot.val().nom,
                            prenom: snapshot.val().prenom
                        }))

                        sessionStorage.setItem('user-creds', JSON.stringify(credentials.user));
                        window.alert('Utilisateur connecté');
                        window.location.href = 'index.html';
                    }
                })
        })
        .catch((error) => {
            alert(error.message)
        })

}

loginForm.addEventListener('submit', signInUser);

// // Recuperation des infos de connexion sur firebase

// let nomConnexion = document.getElementById('nomConnexion');
// let mailConnexion = document.getElementById('mailConnexion');

// let userCreds = JSON.parse(sessionStorage.getItem('user-creds'))
// let userInfo = JSON.parse(sessionStorage.getItem('user-info'))

// // Verification des infos sur le sessionStorage

// let checkCred = () => {
//     if (!sessionStorage.getItem('user-creds')) {
//         window.location.href = 'index.html'
//     } else {
//         nomConnexion.innerText = `Bienvenue ${userInfo.nom} ${userInfo.prenom}`
//         mailConnexion.innerText = `Votre mail ${userCreds.email}`
//     }
// }

// window.addEventListener('load', checkCred);