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




