var selectedPos = [0,0]
var func = "Select"
function Main(sorok){
    Update(sorok)
}
function Update(sorok) {
    for (let sor = 0; sor < 8; sor++) {
        document.getElementById("sor"+sor).innerHTML = ""
    }
    for (let sor = 0; sor < 8; sor++) {
        for (let cella = 0; cella < 8; cella++) {
            document.getElementById("sor"+sor).innerHTML += "<div onclick='"+func+"(["+sor+","+cella+"])' class='cella "+sorok[sor][cella]+"' ></div>"
        }
    }
}
Main(sorok)