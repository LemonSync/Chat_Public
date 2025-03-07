import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getDatabase, ref, push, onChildAdded } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

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

const bannedWords = [/ngent[o0]t/i, /kont[o0]l/i, /pepek/i, /kntl/i, /jemb[o0]t/i];

function filterMessage(message) {
        bannedWords.forEach(pattern => {
                message = message.replace(pattern, "*****");
        });
        return message;
}

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

onChildAdded(chatRef, (snapshot) => {
        let data = snapshot.val();
        let chatBox = document.getElementById("chat-box");
        let currentUser = localStorage.getItem("chatName");
        
        let div = document.createElement("div");
        div.classList.add("message", data.name === currentUser ? "self" : "other");
        
        let bubble = document.createElement("div");
        bubble.classList.add("bubble");
        
        if (data.name !== currentUser) {
        let nameSpan = document.createElement("span");
        nameSpan.classList.add("name");
        nameSpan.textContent = data.name;
        bubble.appendChild(nameSpan);
        
        let lineBreak = document.createElement("br");
        bubble.appendChild(lineBreak);
}
        
        let textSpan = document.createElement("span");
        textSpan.textContent = data.message;
        bubble.appendChild(textSpan);
        
        div.appendChild(bubble);
        chatBox.appendChild(div);
        chatBox.scrollTop = chatBox.scrollHeight;
});
