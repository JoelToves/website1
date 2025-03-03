const element1 = document.getELementById('element1')
const element2 = document.getELementById('element2')

element1.addEventListener('click', ()=>{
    element1.innerHTML = "I've been clicked! <break> Try double clicking me."
})

element1.addEventListener('dblclick', ()=>{
    element1.innerHTML = "I've been double clicked! <break> Try single clickingme."
})

element2.addEventListner('mousover', ()=>{
    element2.style.color = "green"
    element2.style.backgroundColor = "blue"
})

element2.addEventListener('mousout',()=>{
    element2.style.color = "white"
    element2.style.backgroundColor = "#BB33BB"
})
