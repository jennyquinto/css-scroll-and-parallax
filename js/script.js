$(function () {
    const headerContent = document.querySelector('.header-content')
    const headerCue = document.querySelector('.header-cue')
    const nav = document.querySelector('.site-nav')
    const meetMonsters = document.querySelector('#meet')
    const monsterScroll = document.querySelectorAll('#monster-group .monster')

    const navHeight = nav.scrollHeight
    monsterScroll.forEach(monster => monster.style.animationDelay = `${Math.random() * 1 + 0.4}s`)

    function inViewPort(el) {
        const rect = el.getBoundingClientRect()
        return (
            (rect.top <= 0 && rect.bottom >= 0) ||
            (rect.bottom >= window.innerHeight && rect.top <= window.innerHeight) ||
            (rect.top >= 0 && rect.bottom <= window.innerHeight)
        )
    }

    function moveHeader() {
        const top = window.scrollY
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

        monsterScroll.forEach(monster => inViewPort(monster)
            ? monster.classList.add('appear')
            : monster.classList.remove('appear'))

        window.requestAnimationFrame(moveHeader)
    }

    window.requestAnimationFrame(moveHeader)

    //ScrollMagic
    const controller = new ScrollMagic.Controller()
    const friendTextTween = TweenMax.from('.friend-text', {
        y: 400,
        opacity: 0,
        duration: 2,
    })


    new ScrollMagic.Scene({
        triggerElement: '#friend',
        duration: '300px'
    })
        .setTween(friendTextTween)
        .addIndicators({ name: 'friends' })
        .addTo(controller)


})