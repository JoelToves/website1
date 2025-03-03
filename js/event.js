const element1 = document.getELementById('element1')
const element1 = document.getELementById('element1')

element1.addEventListener('click', ()=>{
    element1.innerHTML = "I've been clicked! <break> Try double clicking me."
})

element1.addEventListener('dblclick', ()=>{
    element1.innerHTML = "I've been double clicked! <break> Try single clickingme."
})
