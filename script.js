const container = document.getElementById("container")

console.log(container)

// function createDiv() {
    
    
//     for (let i = 0; i < 16; i++) {
//         const grid_div = document.createElement('div')
//         grid_div.classList.add('box')
//         container.appendChild(grid_div)
//     }
// }

// createDiv()

function createGrid() {
    for (let i = 0; i < 16; i++){
        const row = document.createElement('div')
        row.classList.add(`row-${i+1}`)
        container.appendChild(row)
        
        for (let j = 0; j < 16; j++) {
            const box = document.createElement('div')
            box.classList.add('box')
            row.append(box)

        }
    }
}

createGrid()