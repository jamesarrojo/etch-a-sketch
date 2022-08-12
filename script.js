const container = document.getElementById("container")

// console.log(container)

// function createDiv() {
    
    
//     for (let i = 0; i < 16; i++) {
//         const grid_div = document.createElement('div')
//         grid_div.classList.add('box')
//         container.appendChild(grid_div)
//     }
// }

// createDiv()




function createGrid(dimension) {
    for (let i = 0; i < dimension; i++){
        const row = document.createElement('div')
        row.classList.add(`column-${i+1}`)
        container.appendChild(row)
        
        for (let j = 0; j < dimension; j++) {
            const box = document.createElement('div')
            box.style.setProperty("width", `${35 / dimension}vw`)
            box.style.setProperty("height", `${35 / dimension}vw`)
            box.classList.add('box')
            // box.setAttribute("data-key", `${i}${j}`)
            row.append(box)
            // const boxTwo = document.querySelector('.box')
            // console.log(boxTwo)
            // console.log(box)


        }
    }
}

function main() {
    // const userInput = Number(prompt('Please enter the grid dimensions'))
    let userInput = 16
    createGrid(userInput)
}



main()



const box = document.querySelectorAll(".box")
function changeColor() {
    this.classList.add('colored')
    // console.log(this.getAttribute('data-key'))
}
box.forEach(e => {
    e.addEventListener("mouseover", changeColor)
})