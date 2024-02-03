$(function () {
    const headerContent = document.querySelector('.header-content')
    const nav = document.querySelector('.site-nav')
    const meetMonsters = document.querySelector('#meet')
    const navHeight = nav.scrollHeight

    const headerCue = document.querySelector('.header-cue')
    function moveHeader() {
        let top = window.scrollY
        const mainOnTop = meetMonsters.getBoundingClientRect().top - navHeight
        mainOnTop < 0
            ? nav.classList.add('in-body')
            : nav.classList.remove('in-body')
        const currentCuePosition = headerContent.getBoundingClientRect().top

        currentCuePosition < 0
            ? headerCue.classList.add('d-none')
            : headerCue.classList.remove('d-none')

        headerContent.style.transform = `translateY(-${top / 1.5}px)`
        headerContent.style.opacity = 1 - Math.max(top / (window.innerHeight * .2), 0)


        window.requestAnimationFrame(moveHeader)
    }

    window.requestAnimationFrame(moveHeader)
})