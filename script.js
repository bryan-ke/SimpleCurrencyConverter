let amount;
let base = 56.46;
document.getElementById("mySubmit").onclick = function() {
    amount = document.getElementById("value").value;
    let show = amount * base;
    document.getElementById("output").innerHTML = show;
}