
let questionsFormEl = document.getElementById("questionsForm");
let submitBtnEl = document.getElementById("submitBtn");
let resultMsgEl = document.getElementById("resultMsg");


let cityHyderabadEl = document.getElementById("cityHyderabad");
let cityChennaiEl = document.getElementById("cityChennai");
let cityDelhiEl = document.getElementById("cityDelhi");
let cityMumbaiEl = document.getElementById("cityMumbai");


questionsFormEl.addEventListener("submit", function(event){
    event.preventDefault();
});

let citySelected = "";
cityHyderabadEl.addEventListener("change", function(event){
    citySelected = event.target.value;
    
});
cityChennaiEl.addEventListener("change", function(event){
    citySelected = event.target.value;
    
});
cityDelhiEl.addEventListener("change", function(event){
    citySelected = event.target.value;
    
});
cityMumbaiEl.addEventListener("change", function(event){
    citySelected = event.target.value;
    
});

submitBtnEl.addEventListener("click", function(){
   if(citySelected === "Delhi"){
       resultMsgEl.textContent = "Correct Answer!";
       resultMsgEl.style.color = "green"
   }
   else if(citySelected === ""){
       resultMsgEl.textContent = "Please select the Answer!";
       resultMsgEl.style.color = "red"
   }
   else{
       resultMsgEl.textContent = "Wrong Answer!";
       resultMsgEl.style.color = "red"
   }
   
});




