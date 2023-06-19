function logoHidden(){

    document.getElementById("c-sharp").setAttribute("class", "hidden");
    document.getElementById("javascript").setAttribute("class", "hidden");
    document.getElementById("python").setAttribute("class", "hidden");
    document.getElementById("swift").setAttribute("class", "hidden");


}

window.addEventListener("load", function() {
    let form = document.getElementById("Quiz-questions");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        logoHidden();   

      let questionOne = parseInt(document.getElementById("questionOne").value);
      let questionTwo = parseInt(document.getElementById("questionTwo").value);
      let questionThree = parseInt(document.getElementById("questionThree").value);
      let questionFour = parseInt(document.getElementById("questionFour").value);
      let questionFive = parseInt(document.getElementById("questionFive").value);
   
      let newResult = questionOne + questionTwo + questionThree + questionFour + questionFive;


    if (newResult <= 5){
        document.getElementById("c-sharp").removeAttribute("class", "hidden");
    }
    else if (newResult <= 10){
        document.getElementById("python").removeAttribute("class", "hidden");
    }
    else if (newResult <=15){
        document.getElementById("javascript").removeAttribute("class", "hidden");
    }


    
    const btn = document.querySelector("#refresh");
    btn.addEventListener("click", function(){
        location.reload();
    })
    })
});

