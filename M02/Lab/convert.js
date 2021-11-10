/*
   window.addEventListener("DOMContentLoaded", domLoaded);

   function domLoaded() {
      //clear fInput
      document.getElementById("cInput").addEventListener("focus",function(){
         document.getElementById("fInput").value=""
      })
      //clear cInput
      document.getElementById("fInput").addEventListener("focus",function(){
         document.getElementById("cInput").value=""
      })


      document.getElementById("convertButton").addEventListener("click",function(){
         cel=document.getElementById("cInput").value
         fah=document.getElementById("fInput").value
         if (parseFloat(cel)){
            convertCtoF(cel)
         }
         else if(parseFloat(fah)){
            convertFtoC(fah)
         }
         else{
            document.getElementById("errorMessage").innerHTML="This is not a number"
         }
      })   
   }

   function convertCtoF(degreesCelsius) {
      console.log("convert c to f")
      cel=document.getElementById("cInput").value
      console.log(cel)
      results = cel*9/5+32
      console.log(results)
      document.getElementById("fInput").value=results

      // TODO: Complete the function
      if (cel <= 0){
         //set cold.png
         document.getElementById("weatherImage").src = "cold.png"
      }
      else if (cel <= 10 && cel>0){
         //cool.png
         document.getElementById("weatherImage").src = "cool.png"
      }
      else{
         //warm.png
         document.getElementById("weatherImage").src = "warm.png"
      }
      return results
   }

   function convertFtoC(degreesFahrenheit) {
      console.log("convert f to c")
      fah=document.getElementById("fInput").value
      console.log(fah)
      results = (fah-32)*5/9
      console.log(results)
      document.getElementById("cInput").value=results

      // TODO: Complete the function
      if (fah <= 32){
         //set cold.png
         document.getElementById("weatherImage").src = "cold.png"
      }
      else if (fah <= 50 && fah>32){
         //cool.png
         document.getElementById("weatherImage").src = "cool.png"
      }
      else{
         //warm.png
         document.getElementById("weatherImage").src = "warm.png"
      }
      return results
   }
*/
window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
   // TODO: Complete the function
   // Register the click event for the "Convert" button
   var btn = document.getElementById("convertButton");
   btn.addEventListener("click", convertButtonClicked);

   var celsInput = document.getElementById("cInput");
   var fahrInput = document.getElementById("fInput");

   // Add appropriate event listeners
   celsInput.addEventListener("input", function () { clearTextbox(fahrInput); });
   fahrInput.addEventListener("input", function () { clearTextbox(celsInput); });


}

function clearTextbox(textInput){
    textInput.value = "";
}

function convertCtoF(degreesCelsius) {
   // TODO: Complete the function
   return degreesCelsius*9/5+32
}

function convertFtoC(degreesFahrenheit) {
   // TODO: Complete the function
   return (degreesFahrenheit-32)*5/9
}

function convertButtonClicked(){

   //get two input text boxes, image, and the error div
   cel=document.getElementById("cInput").value
   fah=document.getElementById("fInput").value
   errMsg=document.getElementById("errorMessage")

    //convert based on which box has text in it

      //if celsInput value has a length greater than 0
      if (cel.length >0){
         //var celsius equals the parsed celsInput
         var celsius = parseFloat(cel)
         //if !isNan(celsius)
         if (!isNaN(celsius)){
            //call convert function ctof
            var ctoF = convertCtoF(celsius)
            document.getElementById("fInput").value=ctoF
            console.log(ctoF)
            //errMsg innerhtml would be blank ""
            errMsg.innerHTML=""
            if (ctoF <= 32){
               document.getElementById("weatherImage").src = "cold.png"
            }
            else if (ctoF <= 50 && ctoF>32){
               document.getElementById("weatherImage").src = "cool.png"
            }
            else{
               document.getElementById("weatherImage").src = "warm.png"
            }
         }
         //else
         else{
            //err msg innerhtml = cels.inputvalue + is not a number
            errMsg.innerHTML="This is not a number"
         }
      }
      else if (fah.length >0){
         var fahrenheit = parseFloat(fah)
         if (!isNaN(fahrenheit)){
            var ftoC = convertFtoC(fahrenheit)
            document.getElementById("cInput").value=ftoC
            errMsg.innerHTML=""
            if (ftoC<=0){
               document.getElementById("weatherImage").src = "cold.png"
            }
            else if (ftoC<=10 && ftoC>0){
               document.getElementById("weatherImage").src = "cool.png"
            }
            else{
               document.getElementById("weatherImage").src = "warm.png"
            }
         }
         else{
            errMsg.innerHTML="This is not a number"
         }
      }


}