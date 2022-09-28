function Select(position){
    selectedPos = [position[0],position[1]]
    func = "Lepes"
    Update(sorok)
}
function Lepes(newPosition) {
    if (sorok[newPosition[0]][newPosition[1]] == "none") {
        sorok[newPosition[0]][newPosition[1]] = sorok[selectedPos[0]][selectedPos[1]]
        sorok[selectedPos[0]][selectedPos[1]] = "none"
    }
    func = "Select"
    Update(sorok)
}