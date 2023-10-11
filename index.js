document.addEventListener("DOMContentLoaded", function () {
    // Your JavaScript code here
  
    let countryList = document.getElementById("countryList");

fetch("https://restcountries.com/v3.1/all")
.then(res => res.json())
.then(data => {
    console.log(data);
    data.forEach(country => {
        console.log(country.name.common);
        let col = document.createElement("div");
        col.classList.add("col");
        col.innerHTML = `
        <a href="country.html?name=${country.name.common}" class="card-link text-decoration-none">
        <div class="card h-100 rounded-4 overflow-hidden pb-3">
            <img src="${country.flags.svg}" class="card-img-top img-fluid rounded-top-4" alt="...">
            <div class="card-body">
              <h5 class="card-title fs-3">${country.name.common}</h5>
              <p class="card-text fs-5"><b>Region: </b>${country.region}</p>
              <p class="card-text fs-5"><b>Population: </b>${country.population}</p>
              <p class="card-text fs-5"><b>Capital: </b>${country.capital}</p>
            </div>
        </div>
        </a>
            `;
        countryList.appendChild(col);
        return ;
    });
    })
    .catch(err => console.log(err));
    // console.log(country);
  
    

    











});
  
