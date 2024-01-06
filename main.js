let element1;
let element2;
const possibleElems = ["fire", "water", "sand", "earth", "steam"];
function elem1(p1) {
    element1 = p1;
    console.log(element1);
}
function elem2(p1) {
    element2 = p1;
    console.log(element2);
}
function combine() {
    console.log("combining");
    if (element1=='water' && element2=='fire') {
        console.log("new element steam");
    }
    if (element1=='fire' && element2=='water') {
        console.log("new element steam");
        document.getElementById("steamList").style.visibility = "visible";
    }
}