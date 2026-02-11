const lengthSlider = document.getElementById('length')
const lenVal = document.getElementById('lenVal')
const passField = document.getElementById('password')

lengthSlider.oninput = () => {
    lenVal.textContent = lengthSlider.value;
}

function generate(){
    const len = +lengthSlider.value;
    const upper = document.getElementById('upper').checked
    const lower = document.getElementById('lower').checked
    const number = document.getElementById('number').checked
    const symbol = document.getElementById('symbol').checked

    const U = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const L = "abcdefghijklmnopqrstuvwxyz";
    const N = "0123456789"
    const S = "!@#$%^&*()_+{}[]?><";

    let chars = "";
    if(upper) chars += U
    if(lower) chars += L
    if(number) chars += N
    if(symbol) chars += S

    if(!chars) {
        alert("Select atleast one option")
        return;
    }

    let pass = ""
    for(let i = 0; i < len; i++){
        pass += chars[Math.floor(Math.random() * chars.length)]
    }
    passField.value = pass;
}

function copyPass(){
    if(!passField.value) return;
    navigator.clipboard.writeText(passField.value);
    alert("Copied!")
}