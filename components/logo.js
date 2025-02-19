import mark from '../imgs/mark.svg'

const logo = () => {
    const logoContainer = document.createElement('div')
    const logo = document.createElement('img')
    const text = document.createElement('h1')
    text.textContent="DO IT"
    logo.src = mark;
    logoContainer.classList.add('logo-container')
    logoContainer.appendChild(logo)
    logoContainer.appendChild(text)

    return logoContainer
}

export {logo}