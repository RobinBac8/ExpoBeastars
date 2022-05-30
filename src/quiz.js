let id
let resQ1
function reveal(a, b, c) {
    id = document.getElementById(`${b}`)
    if (id.classList.contains("clicked")){
        return
    }else{
        id.classList.add("clicked")
    }

}