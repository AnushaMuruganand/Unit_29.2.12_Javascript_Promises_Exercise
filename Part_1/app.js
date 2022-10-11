const favNum = 42;
const baseURL = "http://numbersapi.com";

// 1) Make a request to the Numbers API (http://numbersapi.com/) to get a fact about your favorite number. (Make sure you get back JSON by including the json query key, specific to this API.

axios.get(`${baseURL}/${favNum}?json`).then(res => console.log(res.data));

// 2) Figure out how to get data on multiple numbers in a single request. Make that request and when you get the data back, put all of the number facts on the page.

let favNumbers = [7, 11, 22];
axios.get(`${baseURL}/${favNumbers}?json`).then(res => console.log(res.data));

// 3) Use the API to get 4 facts on your favorite number. Once you have them all, put them on the page. It’s okay if some of the facts are repeats.

let factsFour = [];
for (let i = 0; i < 4; i++){
    factsFour.push(axios.get(`${baseURL}/${favNum}?json`));
}

Promise.all(factsFour)
    .then(factsRes => {
        factsRes.forEach(fact => {
            let li = document.createElement("li");
            li.innerText = fact.data.text;
            document.querySelector("body").append(li);
    });
    });