const nav = document.querySelector('.nav')

window.addEventlistener('scroll', () => {
    if (window,scrollY > 160){
        nav.classList.add('active')
    }
    else {
        nav.classList.remove('active')
    }
})
