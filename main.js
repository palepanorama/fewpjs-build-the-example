const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const div = document.getElementById('modal')


document.addEventListener("DOMContentLoaded", () => {
  div.className = "hidden"
  like() 
})

function like(e) {
  
  const hearts = document.querySelectorAll('.like-glyph')
  hearts.forEach(heartGlyph => {
    heartGlyph.addEventListener('click', mimicServerCall)
      .then(resp => resp.json()) 
      .catch(error => addError(error))
        
    let heart = e.target
    if (heart.innerHTML === EMPTY_HEART) {
      heart.className = 'activated-heart'
      heart.innerHTML = FULL_HEART
    } else { 
      heart.innerHTML = EMPTY_HEART
    }
  })
}

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}