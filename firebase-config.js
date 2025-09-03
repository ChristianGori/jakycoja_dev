// firebase-config.js
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js';
import { getAuth, onAuthStateChanged, signOut } from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js';

const firebaseConfig = {
  apiKey: "AIzaSyBWwMBwWwog_CE4H18VPGJbJFGaBzrEi2c",
  authDomain: "jaky-coja-app.firebaseapp.com",
  projectId: "jaky-coja-app",
  storageBucket: "jaky-coja-app.firebasestorage.app",
  messagingSenderId: "893850040157",
  appId: "1:893850040157:web:d7bc187ae1f2507041dab4",
  measurementId: "G-GR80VMRGJW"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Controlla autenticazione e reindirizza se necessario
onAuthStateChanged(auth, (user) => {
  if (!user) {
    // Se non autenticato, torna alla homepage
    window.location.href = 'index.html';
  } else {
    console.log('User authenticated:', user.email);
  }
});

// Funzione logout globale
window.logout = async () => {
  try {
    await signOut(auth);
    window.location.href = 'index.html';
  } catch (error) {
    console.error('Logout error:', error);
  }
};

export { auth };
