function logoHidden(){

    document.getElementById("c-sharp").setAttribute("class", "hidden");
    document.getElementById("javascript").setAttribute("class", "hidden");
    document.getElementById("python").setAttribute("class", "hidden");


}

 function newResults(event) {
    event.preventDefault();
    logoHidden();
   
      let questionOne = document.querySelector("input[name='pick-letter']:checked")
      let questionTwo = document.querySelector("input[name='color-combo']:checked")
      let questionThree = document.querySelector("input[name='pick-difficulty']:checked")
      let questionFour = document.querySelector("input[name='pick-object']:checked")
      let questionFive = document.querySelector("input[name='pick-time']:checked")


    if (questionOne === "C" && questionTwo === "Purple and white" && questionThree === "Easy" && questionFour === "Man" && questionFive === "Mornings") {
    document.getElementById("c-sharp").removeAttribute("class");
        }
    else if (questionOne === "J" && questionTwo === "Black and Yellow" && questionThree === "Intermediate" && questionFour === "Computer" && questionFive === "Afternoons") {
    document.getElementById("javascript").removeAttribute("class");
        } 
    else if (questionOne === "P" && questionTwo === "Light Blue and White" && questionThree === "Difficult" && questionFour === "Snake" && questionFive === "Evenings") {
    document.getElementById("python").removeAttribute("class");
        }          
    else {
    document.getElementById("python").removeAttribute("class");
    }
}

    window.addEventListener("load", function(event){
        document.getElementById("quiz-button").addEventListener("click", newResults);
        
    
    });

