const usersOnline = document.getElementById("current-online");
const usersAway = document.getElementById("current-away");
const usersOffLine = document.getElementById("current-offline");


var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        var memberList = JSON.parse(xhr.responseText);
        var listItem;
        for( var i = 0; 0 < memberList.length; i++ ){
            if( memberList[i].status === "online"){
                console.log(memberList[i].name);
                console.log(memberList[i].status);
                
            }else if( memberList[i].status === "away"){
                console.log(memberList[i].name);
                console.log(memberList[i].status);
            }else{
                console.log(memberList[i].name);
                console.log(memberList[i].status);
            }
        }
    }
};
xhr.open("GET","../data/userStatus.json");
xhr.send()