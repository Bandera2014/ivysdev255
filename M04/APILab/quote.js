window.addEventListener("DOMContentLoaded", function () {
   document.querySelector("#fetchQuotesBtn").addEventListener("click", function () {

      // Get values from drop-downs
      const topicDropdown = document.querySelector("#topicSelection");
      const selectedTopic = topicDropdown.options[topicDropdown.selectedIndex].value;
      const countDropdown = document.querySelector("#countSelection");
      const selectedCount = countDropdown.options[countDropdown.selectedIndex].value;
   
      // Get and display quotes
      fetchQuotes(selectedTopic, selectedCount);	   
   });
});

// TODO: Modify to use Fetch API
function fetchQuotes(topic, count) {
   
   site = "https://wp.zybooks.com/quotes.php?topic="+topic+"&count="+count;
   
   fetch(site)
      .then(response => response.json())
      .then(data => 
         writeHTML(data));

}

function writeHTML(data){
   // console.log(typeof data)
   // console.log(data)
   // console.log(data[0])
   // console.log(data[0].quote)
   console.log(data)
   let html = "<ol>";
   if(data.error){
      html=data.error
   }
   else{
      for (let c = 0; c <= data.length-1; c++) {
         html += "<li>" + data[c].quote +" - "+ data[c].source + "</li>"
         // console.log(c)
      }
      html += "</ol>";
   }
   console.log(html)

   document.querySelector("#quotes").innerHTML = html;
}