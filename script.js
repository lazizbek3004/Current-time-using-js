

function myself(){
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    const millisecods = now.getMilliseconds();
    const yengi = millisecods - (millisecods % 100);
    const result = Number(String(millisecods).slice(0, -2))
    const current = `${hours}:${minutes}:${seconds}:${result}`

    document.getElementById("clock").textContent = current;

}

setInterval(myself, 1)

