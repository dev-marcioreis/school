const openMenuBtn = document.querySelector('.openBtn')
const closeMenuBtn =  document.querySelector('.closeBtn')
const menuNavbar = document.querySelector('.navbar__links')
const overlay = document.querySelector('.overlay')

// Open menu navbar on click
const showMenu = () => {
    menuNavbar.style.display = 'flex'
    openMenuBtn.style.display = 'none'
    closeMenuBtn.style.display = 'block'
}

// Close menu navbar on click
const hideMenu = () => {
    menuNavbar.style.display = 'none'
    closeMenuBtn.style.display = 'none'
    openMenuBtn.style.display = 'block'
}

openMenuBtn.addEventListener('click', showMenu)
closeMenuBtn.addEventListener('click', hideMenu)
overlay.addEventListener('click', hideMenu)

// Close menu navbar when clicking any option
if(window.innerWidth < 1024) {
    document.querySelectorAll('.navbar__links .navbar__link').forEach(nav => {
        nav.addEventListener('click', () => {
            hideMenu()
        })
    })
}

// Change navbar color when scrolling
window.addEventListener('scroll', () => {
    document.querySelector('.header').classList.toggle('scrolling', window.scrollY)
})


// Open menu Register / Login
const openMenuLogin = document.getElementById('openRegister')
const closeMenuLogin = document.getElementById('registerBtn')
const menuLogin = document.querySelector('.register') // used twice

const showMenuLogin = () => {
    menuLogin.style.right = '0'
}

const hideMenuLogin = () => {
    menuLogin.style.right = '-100%'
}

openMenuLogin.addEventListener('click', showMenuLogin)
closeMenuLogin.addEventListener('click', hideMenuLogin)

// Switch from login to signup
const forms = document.querySelector('.forms')
const links = document.querySelectorAll('.link')

links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault()
        forms.classList.toggle('show__signup')
    })
})


// Buttons to open the Register section
const registerBtn = document.querySelector('.btnRegister')
const homeBtn = document.querySelector('.homeBtn')
const ctaBtn = document.querySelector('.ctaBtn')
const footerBtn = document.querySelector('.footerBtn')

const openRegisterSection = () => {
    menuLogin.style.right = '0'
} // used twice

registerBtn.addEventListener('click', openRegisterSection)
homeBtn.addEventListener('click', openRegisterSection)
ctaBtn.addEventListener('click', openRegisterSection)
footerBtn.addEventListener('click', openRegisterSection)