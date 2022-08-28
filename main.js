// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
// adding the class 'hidden' to the modal error

const modalClass = document.querySelector('#modal')
modalClass.classList.add("hidden")

// selecting the likes
let likeHearts = document.querySelectorAll('.like-glyph')

// setting onclick listener
for(element of likeHearts){
  if(element === EMPTY_HEART){
    element.addEventListener("click", event =>{
      mimicServerCall()
      .then(res =>{
        //check response
        if(res === 200){
          //change color of the liker
          modalClass.className = "activated-heart"
        }
      })
      .catch(error =>{
       modalClass.className = "" 
       setTimeout(()=>{
        modalClass.classList.add("hidden")
       }, 3000)
      })
    })
  }else{
    modalClass.className = "hidden"
  }
}





//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
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
