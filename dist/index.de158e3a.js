document.addEventListener("DOMContentLoaded", ()=>{
    // Obtener la fecha y hora objetivo: 03:14:07 UTC del 19 de enero de 2038
    const targetDate = new Date(Date.UTC(2038, 0, 19, 3, 14, 7));
    const targetTimestamp = Math.floor(targetDate.getTime() / 1000);
    // Set up FlipDown with dark theme
    const flipdown = new FlipDown(targetTimestamp).start().ifEnded(()=>{
        console.log("\xa1La cuenta regresiva ha terminado!");
    });
    // Mostrar el número de versión
    const ver = document.getElementById("ver");
    ver.innerHTML = flipdown.version;
});
document.getElementById("btnBack").addEventListener("click", function() {
    // Aquí puedes agregar la función que desees realizar al hacer clic en el botón de retroceso
    console.log("Retroceso realizado");
});

//# sourceMappingURL=index.de158e3a.js.map
