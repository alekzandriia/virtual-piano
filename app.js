const piano = document.getElementById('piano')
const keys = document.getElementsByClassName('key')

for (const key of keys) {
  key.addEventListener('click', () => {
    let num = key.dataset.key
    new Audio(`./audio/key${num}.mp3`).play()
  });
} 




