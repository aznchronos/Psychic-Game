$(document).ready(function() {
    function genCharArray(charA, charZ) {
        var a = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0)
        for (; i <= j; ++i) {
            a.push(String.fromCharCode(i));
        }
        return a;
    }
    genCharArray('a', 'z'); // ["a", ..., "z"]
    
    function newGame(){
        
      }
      
      //calls the newGame function
      newGame()

      // Here we create the on click event that gets the user's pick
      $(".btn-choice").on("click", function() {
            //"this" apparently is how the computer is able to differentiate numbers associated with buttons
        if(computerGuess == $(this).val()){
          $("#result").text("Winner Winner!");
          newGame();
        }
        else{
          $("#result").text("Nope!")
        newGame();
        }
          alert(computerGuess == $(this).val());
          })
})