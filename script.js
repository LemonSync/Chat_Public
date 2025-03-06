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

const bannedWords = ["ngentod", "ngentot", "pepek", "kontol", "kntl", "kntol", "kontl", "kontoll", "ppk", "jembut", "jmbt", "jembot"];

function filterMessage(message) {
        let words = message.split(" ");
        for (let i = 0; i < words.length; i++) {
                if (bannedWords.includes(words[i].toLowerCase())) {
                        words[i] = "*****";
                }
        }
        return words.join(" ");
}

document.addEventListener("DOMContentLoaded", function() {
        let nameInput = document.getElementById("name");
        let savedName = localStorage.getItem("chatName");
        
        if (savedName) {
                nameInput.value = savedName;
                nameInput.disabled = true;
        }
        
        nameInput.addEventListener("blur", function() {
                if (!localStorage.getItem("chatName")) {
                        localStorage.setItem("chatName", nameInput.value);
                        nameInput.disabled = true;
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
        if (message === "") {
                alert("Pesan tidak boleh kosong!");
                return;
        }
        
        let filteredMessage = filterMessage(message);
        
        push(chatRef, { name, message: filteredMessage });
        
        document.getElementById("message").value = "";
};

onChildAdded(chatRef, (snapshot) => {
        let data = snapshot.val();
        let chatBox = document.getElementById("chat-box");
        
        let div = document.createElement("div");
        div.classList.add("message");
        div.innerHTML = `<strong>${data.name}:</strong> ${data.message}`;
        
        chatBox.appendChild(div);
        chatBox.scrollTop = chatBox.scrollHeight;
});
