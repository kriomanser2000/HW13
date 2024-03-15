document.getElementById("messageForm").addEventListener("submit", function(event) 
{
    event.preventDefault();
    var author = document.getElementById("author").value;
    var message = document.getElementById("message").value;
    var newMessage = document.createElement("div");
    newMessage.className = "message";
    newMessage.innerHTML = "<strong>" + author + ":</strong> " + message;
    document.getElementById("messages").appendChild(newMessage);
    document.getElementById("author").value = "";
    document.getElementById("message").value = "";
});