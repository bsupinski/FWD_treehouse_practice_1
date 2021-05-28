const chatBox = document.getElementById("current-messages");
const sendMessage = document.getElementById("send");
const inputValue = document.getElementById("message-input");


//Send input if Sned key entered.
sendMessage.addEventListener("click", e =>{
    if(inputValue.value == ""){
        return false;
    }else{
        chatBox.innerHTML += `<div class="new-message"><span> Current User:</span>${inputValue.value}</div>`;
        inputValue.value="";
    }
});

//Send input if enter is hit on keyboard

inputValue.addEventListener("keyup", (e)=> {
    if ( e.keycode === 13) {
        if(inputValue.value == ""){
            return false;
        }else{
            chatBox.innerHTML += `<div class="new-message"><span> Current User:</span>${inputValue.value}</div>`;
            inputValue.value="";
        }
    }
})
