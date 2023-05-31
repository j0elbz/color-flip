function makeHex(){
    let letters = "0123456789abcdef";
    var string_lenght = 6;
    var hexCode = "#";
    for (let Number = 0; Number < string_lenght; Number++) {
        const element = letters[Math.floor(Math.random() * letters.length)];
        hexCode = hexCode + element;
    }
    return hexCode;
    
}


function flipColor() {
    let hexColor = makeHex();
    document.body.style.backgroundColor = hexColor;
    document.getElementById('flipper').textContent = hexColor;
}