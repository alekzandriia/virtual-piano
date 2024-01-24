const piano = document.getElementById('piano')
const keys = document.getElementsByClassName('key')

for (const key of keys) {
  key.addEventListener('click', () => {
    let num = key.dataset.key
    new Audio(`./audio/key${num}.mp3`).play()
  });
}

const modal = document.querySelector('.modal')
const openBtn = document.querySelector('.open')

openBtn.addEventListener('click', () => {
  modal.showModal()
})

const closeBtn = document.querySelector('.close')

closeBtn.addEventListener('click', () => {
  modal.close()
})

const mainPage = document.getElementById('homepage')
const infoPage = document.getElementById('infopage')

const infoBtn = document.querySelector('.info-page')
infoBtn.addEventListener('click', () => {
  mainPage.classList.remove('show')
  mainPage.classList.add('hide')
  infoPage.classList.remove('hide')
  infoPage.classList.add('show')

})

const logo = document.getElementById('logo')
logo.addEventListener('click', () => {
  mainPage.classList.remove('hide')
  mainPage.classList.add('show')
  infoPage.classList.remove('show')
  infoPage.classList.add('hide')
})

const backBtn = document.querySelector('.back')
backBtn.addEventListener('click', () => {
  mainPage.classList.remove('hide')
  mainPage.classList.add('show')
  infoPage.classList.remove('show')
  infoPage.classList.add('hide')
})
