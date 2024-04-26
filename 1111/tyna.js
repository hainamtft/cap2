   window.onload = function() {
    var savedMessages = localStorage.getItem("chatMessages");
    if (savedMessages) {
        document.getElementById("chat-box").innerHTML = savedMessages;
    }
}; 
// Gửi tin nhắn
function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    if (userInput.trim() !== "") {
        var chatBox = document.getElementById("chat-box");
        chatBox.innerHTML += "<p><strong>Bạn:</strong> " + userInput + ' <button onclick="deleteMessage(this)">Xóa</button></p>';
        chatBox.scrollTop = chatBox.scrollHeight;
        document.getElementById("user-input").value = "";
        
        localStorage.setItem("chatMessages", chatBox.innerHTML);
    }
}

// function deleteMessage(element) {
//     var message = element.parentElement;
//     message.parentElement.removeChild(message);

//     // Cập nhật lại tin nhắn trong Local Storage sau khi xóa
//     var chatBox = document.getElementById("chat-box");
//     localStorage.setItem("chatMessages", chatBox.innerHTML);
// }   

function startChat() {
    var username = document.getElementById("username").value;
    if (username.trim() !== "") {
        document.getElementById("login-section").style.display = "none";
        document.getElementById("chat-section").style.display = "block";
        document.getElementById("chat-title").innerText = "tôi yêu: " + username + ", bắt đầu trò chuyện!";
    }
}
function startChat() {
    var tennhapvo = document.getElementById("username").value;
    var pass = document.getElementById("hnam").value;
    var tenreal = "NAnh";
    var passreal = "Hnam";

    if(tennhapvo === tenreal && pass === passreal) {
        alert("chắc cậu là ngọc anh nhỉ");
        window.location.href = "../1111/home/home.html";
    }

    else{
        alert("nhìn ở trên kìa ba");
    }
}