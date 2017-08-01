// define constant that holds the content of <main> in index.html
// as template literal
// each person is a div: name, email, street, city, state, zip, number, ssn
// start with one individual: customers.results[0]

// Grab html element that I will return content to
const main_content = document.getElementById("main_content")

// forloop all the individuals
// btw, customers.results.length returns 12
for (let i = 0; i < customers.results.length; i++){

// each time, I have to create a new div that I populate with more html content
// this will create a div inside a div, but I don't really care at this point
let customerDIV = document.createElement("div");
customerDIV.classList.add("c-indiv", "f-indiv", "s-indiv")
let customerContent =
`
  <img src=${customers.results[i].picture.large} class="ctmImg">
  <h4 class="ctmName"> ${customers.results[i].name.first} ${customers.results[i].name.last}</h4>
  <p class="ctmEmail"> ${customers.results[i].email}</p>
  <p class="ctmLocation"> ${customers.results[i].location.street}</p>
  <span class="ctmLocation"> ${customers.results[i].location.city} </span>
  <span class="ctmLocation"> ${customers.results[i].location.state}</span>
  <span class="ctmLocation"> ${customers.results[i].location.postcode}</span>
  <p class="ctmLocation"> ${customers.results[i].phone} </p>
  <p class="ctmSSN"> ${customers.results[i].id.value} </p>
`
// Put everything back in the div
customerDIV.innerHTML = customerContent;
// return the div in the <main> every time
main_content.appendChild(customerDIV);
}
