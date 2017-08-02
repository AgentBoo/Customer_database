// start with one individual: customers.results[0]
// define constant that holds the content of <main> in index.html
// to be template literal
// each person is a div: name, email, street, city, state, zip, number, ssn


// Grab html element that I will return content to
const main_content = document.getElementById("main_content")

// forloop all the individuals
// btw, customers.results.length returns 12
for (let i = 0; i < customers.results.length; i++){

// each time, I have to create a new div that I populate with more html content
let empDIV = document.createElement("div");
empDIV.classList.add("c-indiv", "f-indiv", "s-indiv")

const ppldata = customers.results[i];

let empContent =
`
  <img src=${ppldata.picture.large} class="empImg">
  <h4 class="empName"> ${ppldata.name.first} ${ppldata.name.last}</h4>
  <p class="empEmail"> ${ppldata.email}</p>
  <p class="empLocation"> ${ppldata.location.street}</p>
  <p class="empLocation"> ${ppldata.location.city}, ${ppldata.location.state} ${ppldata.location.postcode}</p>
  <p class="empPhone empLocation"> ${ppldata.phone} </p>
  <p class="empSSN"> ${ppldata.id.value} </p>
`
// Put everything back in the div
empDIV.innerHTML = empContent;
// return the div in the <main> every time
main_content.appendChild(empDIV);
}

// Hover using javascript
// const onHover = document.querySelector(".ctmSSN");
// onHover.addEventListener("mouseover", function(event){
//   if (event.onmouseover === true){
//   } onHover.classList.add("ctmSSN-hover--js");
// })
