document.addEventListener("keydown", keydown);
function keydown(event) {
    switch (event.keyCode) {
        case 37:
            console.log("Нажато влево");
            break;
        case 38:
            console.log("Нажато вверх");
            break;           
        case 39:
            console.log("Нажато вправо");
            break;
        case 40:
            console.log("Нажато вверх");
            break;           
        default:
            console.log("Нажато непонятно что");
            break;
    }
}