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

function removeGrid() {
    container.innerHTML = ""
}

function changeColor() {
    this.classList.add('colored')
    // console.log(this.getAttribute('data-key'))
}

function clearBoard() {
    // this.classList.remove('colored')
    // console.log(box)
    const coloredBox = document.querySelectorAll(".colored")
    console.log(coloredBox)
    coloredBox.forEach(elem => {
        elem.classList.remove('colored')
    })
}
function main() {
    // const userInput = Number(prompt('Please enter the grid dimensions'))
    // let userInput = 100
    
    const input = document.querySelector('#dimension')
    createGrid(input.value)
    const box = document.querySelectorAll(".box")
    box.forEach(e => {
        // console.log(e)
        e.addEventListener("mouseover", changeColor)
    })
    // console.log(input.value)
    input.addEventListener("change", function(e){
        console.log(e.target.value)
        let userInput = e.target.value
        // console.log(container)
        // if(container) {
        //     container.removeChild()
        // }
        removeGrid()
        createGrid(userInput)
        const box = document.querySelectorAll(".box")
        box.forEach(e => {
            // console.log(e)
            e.addEventListener("mouseover", changeColor)
        })
    })
    // createGrid(userInput)

    const clear = document.querySelector('#clr-btn')
    // console.log(clear)
    clear.addEventListener("click", clearBoard)
}




main()