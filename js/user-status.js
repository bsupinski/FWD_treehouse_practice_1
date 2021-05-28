const statusSelect = document.getElementById("standard-select").value;
const statusColor = document.getElementById("user-status");

console.log(statusSelect)
function statusCheck(){
    if (statusSelect === "online") {
        statusColor.style.backgroundColor = "#94f6d3";
    }else if (statusSelect === "away") {
        statusColor.style.backgroundColor = "#fcd7a1";
    } else{
        statusColor.style.backgroundColor = "#cfd8d4";
    }
}
statusCheck()
setInterval(statusCheck(), 1000)