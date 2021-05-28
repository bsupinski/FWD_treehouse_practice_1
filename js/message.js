const chatBox = document.getElementById("current-messages");
const sendMessage = document.getElementById("send");
const inputValue = document.getElementById("message-input");



sendMessage.addEventListener("click", e =>{
    if(inputValue.value == ""){
        return false;
    }else{
        chatBox.innerHTML += `<div class="new-message"><span> Current User:</span>${inputValue.value}</div>`;
        inputValue.value="";
    }

   
})
