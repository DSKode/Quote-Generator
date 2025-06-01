
 //////   JSON - API Examples ////

 const button = document.getElementById("fetchQuote");
 const quoteDisplay = document.getElementById("quoteDisplay")

 button.addEventListener("click" , () => {
  quoteDisplay.textContent = "Loading .......";

  fetch("http://api.quotable.io/random")



 .then(response => {
  return response.json();
 })


 .then(data => {
  quoteDisplay.textContent = data.content;

 })

 .catch(error => {
  quoteDisplay.textContent = "Something went wrong. Try again";
  console.log("Error fetching the quote", error);
 })

})


// const button = document.getElementById("fetchQuote");
// const quoteDisplay = document.getElementById("quoteDisplay");

// button.addEventListener("click", () => {
//   quoteDisplay.textContent = "Loading .......";

//   fetch("https://api.quotable.io/quotes/random")
//     .then(response => response.json())
//     .then(data => {
//       quoteDisplay.textContent = data[0].content;
//     })
//     .catch(error => {
//       quoteDisplay.textContent = "Something went wrong. Try again";
//       console.log("Error fetching the quote", error);
//     });
// });