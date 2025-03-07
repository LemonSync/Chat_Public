import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getDatabase, ref, push, onChildAdded } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";
import { getAuth, signInAnonymously, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCX-xAcCqkZg4oH7v58beF7zHR_3AVTWxo",
    authDomain: "chat-app-76e7c.firebaseapp.com",
    databaseURL: "https://chat-app-76e7c-default-rtdb.asia-southeast1.firebasedatabase.app/",
    projectId: "chat-app-76e7c",
    storageBucket: "chat-app-76e7c.appspot.com",
    messagingSenderId: "1048363596708",
    appId: "1:1048363596708:web:15f9d7a077521f0be7df31"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const chatRef = ref(db, "chats");
const auth = getAuth();

// Login pengguna secara anonim
signInAnonymously(auth).catch((error) => {
    console.error("Gagal login anonim:", error);
});

onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("User ID:", user.uid);
    }
});

// Kata-kata yang disensor
const bannedWords = [/ngent[o0]t/i, /kont[o0]l/i, /pepek/i, /kntl/i, /jemb[o0]t/i];

function filterMessage(message) {
    bannedWords.forEach(pattern => {
        message = message.replace(pattern, "*****");
    });
    return message;
}

// Menyimpan nama pengguna di localStorage
document.addEventListener("DOMContentLoaded", function() {
    let nameInput = document.getElementById("name");
    let savedName = localStorage.getItem("chatName");

    if (savedName) {
        nameInput.value = savedName;
        nameInput.disabled = true;
    }

    nameInput.addEventListener("blur", function() {
        let trimmedName = nameInput.value.trim();
        if (trimmedName !== "" && !localStorage.getItem("chatName")) {
            localStorage.setItem("chatName", trimmedName);
            nameInput.disabled = true;
        } else if (trimmedName === "") {
            alert("Nama tidak boleh kosong!");
            nameInput.focus();
        }
    });
});

// Fungsi mengirim pesan
window.sendMessage = function() {
    let name = localStorage.getItem("chatName");
    let message = document.getElementById("message").value.trim();

    if (!name) {
        alert("Silakan masukkan nama terlebih dahulu!");
        return;
    }
    if (message.length < 2) {
        alert("Pesan terlalu pendek!");
        return;
    }

    let filteredMessage = filterMessage(message);

    push(chatRef, { name, message: filteredMessage });

    document.getElementById("message").value = "";
};

// Menampilkan pesan di chat-box
onChildAdded(chatRef, (snapshot) => {
    let data = snapshot.val();
    let chatBox = document.getElementById("chat-box");
    let currentUser = localStorage.getItem("chatName");

    let div = document.createElement("div");
    div.classList.add("message", data.name === currentUser ? "self" : "other");

    if (data.name === currentUser) {
        div.innerHTML = `<div class="bubble">${data.message}</div>`;
    } else {
        div.innerHTML = `<div class="bubble"><span class="name">${data.name}</span><br>${data.message}</div>`;
    }

    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
});
