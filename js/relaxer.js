const container = document.getElementById('container')
const text = document.getElementById('text')


function breathAnimation() {
    text.innerHTML = 'Breath In'
    container.classList.add(grow)
}
