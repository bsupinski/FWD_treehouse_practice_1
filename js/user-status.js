const statusSelect = document.getElementById("standard-select");
const statusColor = document.getElementById("user-status");

// console.log(statusSelect)
// function statusCheck(){
//     if (statusSelect === "online") {
//         statusColor.style.backgroundColor = "#94f6d3";
//     }else if (statusSelect === "away") {
//         statusColor.style.backgroundColor = "#fcd7a1";
//     } else{
//         statusColor.style.backgroundColor = "#cfd8d4";
//     }
// }
// statusCheck()
// setInterval(statusCheck(), 1000)



statusSelect.addEventListener("click",() => {
    if (statusSelect.value === "online") {
        statusColor.style.backgroundColor = "#94f6d3";
    }else if (statusSelect.value === "away") {
        statusColor.style.backgroundColor = "#fcd7a1";
    } else{
        statusColor.style.backgroundColor = "#cfd8d4";
    }
})
statusSelect.addEventListener("load",() => {
    if (statusSelect.value === "online") {
        statusColor.style.backgroundColor = "#94f6d3";
    }else if (statusSelect.value === "away") {
        statusColor.style.backgroundColor = "#fcd7a1";
    } else{
        statusColor.style.backgroundColor = "#cfd8d4";
    }
})

