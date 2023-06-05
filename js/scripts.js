function logoHidden(){
    document.getElementById("C-#").setAttribute("class", "hidden");
    document.getElementById("Javascript").setAttribute("class", "hidden");
    document.getElementById("Python").setAttribute("class", "hidden");
}

window.onload = function() {
    hideResults();
    document.querySelector("form").onsubmit = function(event) {
      event.preventDefault();
      hideResults();

      let questionOne = document.querySelector("div#questionOne");
      let questionTwo = document.querySelector("div#questionTwo");
      let questionThree = document.querySelector("div#questionThree");
      let questionFour = document.querySelector("div#questionFour");
      let questionFive = document.querySelector("div#questionFive");
    

      

    }
}
