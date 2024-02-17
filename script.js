
function uploadTime(){
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    const theTime = `${hours}:${minutes}:${seconds}`


    document.getElementById("clock").textContent = theTime;
}

setInterval(uploadTime, 1000)




