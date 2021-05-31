const usersOnline = document.getElementById("current-online");
const usersAway = document.getElementById("current-away");
const usersOffLine = document.getElementById("current-offline");


var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        var memberList = JSON.parse(xhr.responseText);
        var listItem;
        for( var i = 0; i < memberList.length; i++ ){
            if( memberList[i].status === "online"){
                listItem = `<li><div class="online indicator"></div>${memberList[i].name}</li>`
                usersOnline.innerHTML+=listItem;
                
            }else if( memberList[i].status === "away"){
                listItem = `<li><div class="away indicator"></div>${memberList[i].name}</li>`
                usersAway.innerHTML+=listItem;
            }else{
                listItem = `<li><div class="offline indicator"></div>${memberList[i].name}</li>`
                usersOffLine.innerHTML+= listItem;
            }
        }
    }
};
xhr.open("GET","./data/userStatus.json");
xhr.send()