const colorName = document.getElementById("colorName")
const buttonEL = document.getElementById("button")
const colorContainerEL = document.getElementById("colorContainer")
const bodyEl = document.body

buttonEL.addEventListener("click", ()=>{
    const color1 = getRandomColor()
    const color2 = getRandomColor()
    const color3 = getRandomColor()

    const randomColor = `rgb(${color1},${color2},${color3})`
    if(bodyEl === `rgb(${0},${0},${0})`){
        colorName.style.color = 'white'
    }
    if(bodyEl === `rgb(${255},${255},${255})`){
        colorName.style.color = 'black'
        colorContainerEL.style.borderColor = "white"
    }

    bodyEl.style.background = randomColor
    colorName.innerText = randomColor
})

function getRandomColor(){
    return Math.floor(Math.random() * 256)
}

