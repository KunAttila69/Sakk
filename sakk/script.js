function Main(sorok){
    for (let sor = 0; sor < 8; sor++) {
        for (let cella = 0; cella < 8; cella++) {
            document.getElementById("sor"+sor).innerHTML += "<div class='cella "+sorok[sor][cella]+"' ></div>"
        }
    }
}