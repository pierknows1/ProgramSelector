function logoHidden(){
    document.getElementById("C-sharp").setAttribute("class", "hidden");
    document.getElementById("Javascript").setAttribute("class", "hidden");
    document.getElementById("Python").setAttribute("class", "hidden");
}

function submitResult(event){
    event.preventDefault();
    logoHidden();


      let questionOne = document.querySelector("div#questionOne")
      let questionTwo = document.querySelector("div#questionTwo")
      let questionThree = document.querySelector("div#questionThree")
      let questionFour = document.querySelector("div#questionFour")
      let questionFive = document.querySelector("div#questionFive")

        
    if (questionOne === "C" && questionTwo === "Purple and white" && questionThree === "Easy" && questionFour === "Man" && questionThree === "Mornings") {
        document.getElementById("C-sharp").removeAttribute("class");
    }
    else if (questionOne === "J" && questionTwo === "Black and Yellow" && questionThree === "Intermediate" && questionFour === "Computer" && questionThree === "Afternoons") {
        document.getElementById("Javascript").removeAttribute("class");
    } 
    else if (questionOne === "P" && questionTwo === "Light Blue and White" && questionThree === "Difficult" && questionFour === "Snake" && questionThree === "Evenings") {
        document.getElementById("Python").removeAttribute("class");

    }

}

window.onload = function() {
    document.querySelector("form").onsubmit = submitResult
}
