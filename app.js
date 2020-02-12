const displayContainer = document.querySelector('.display-container');
const userInput = document.querySelector('.user-input');
const nameButton = document.querySelector('.button-name');

let copy = [...countries];
let filtered = copy;


const display = (arr) => {
    let content = '';

    for (const country of arr) {
        let {
            name,
            capital,
            population,
            languages,
            flag,
        } = country

        content += `<div style="display:flex; flex-direction:column; align-items:center;">
                        <div style="border:1px solid lightgrey; width:45%; margin:15px 0;">
                            <img src=${flag} style="width:100%;">
                        </div>
        
                        <h2>${name}</h2>
                        <div style="display:flex; flex-direction:column; text-align:left; font-size:0.6em;">
                            <p>Capital: ${capital}</p>
                            <p>Languages: ${languages}</p>
                            <p>Population: ${population}</p>
                        </div>
                    </div>`
    }
            //console.log(content)
    displayContainer.innerHTML = content 
}

display(copy);



// const searchByName = (arr) => {
//     const names = arr.map((item) => item.name.toUpperCase());
//     filtered = names.filter(name => name.includes(userInput.value.toUpperCase()));
//     return filtered;
// }

// nameButton.addEventListener('click', () => {
//     display(searchByName(copy));
// })


// countries.filter((country) => {
//     let language = country.language.join();
//     ...

//     return country.name.toUpperCase() || country.capital.toUpperCase() || language.toUpperCase()
// })

//combine button-events    