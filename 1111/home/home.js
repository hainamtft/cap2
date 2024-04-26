function startChat() {
    var username = document.getElementById("username").value;
    if (username.trim() !== "") {
        document.getElementById("login-section").style.display = "none";
        document.getElementById("chat-section").style.display = "block";
        document.getElementById("chat-title").innerText = "Chào " + username + ", bắt đầu trò chuyện!";
    } else {
        alert("Vui lòng nhập tên của bạn.");
    }
}

function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    if (userInput.trim() !== "") {
        var chatBox = document.getElementById("chat-box");
        chatBox.innerHTML += "<p><strong>Bạn:</strong> " + userInput + "</p>";
        chatBox.scrollTop = chatBox.scrollHeight;
        document.getElementById("user-input").value = "";
    }
}