const statusSelect = document.getElementById("standard-select");
const statusColor = document.getElementById("user-status");

statusSelect.selectedIndex = localStorage.getItem("user status");

statusSelect.addEventListener("change",() => {
    if (statusSelect.value === "online") {
        statusColor.style.backgroundColor = "#94f6d3";
    }else if (statusSelect.value === "away") {
        statusColor.style.backgroundColor = "#fcd7a1";
    } else{
        statusColor.style.backgroundColor = "#cfd8d4";
    }
    let localUserStatus = statusSelect.selectedIndex;
    localStorage.setItem("user status", localUserStatus);   
})

if (statusSelect.value === "online") {
    statusColor.style.backgroundColor = "#94f6d3";
}else if (statusSelect.value === "away") {
    statusColor.style.backgroundColor = "#fcd7a1";
} else{
    statusColor.style.backgroundColor = "#cfd8d4";
}
