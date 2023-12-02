const baseURL = "https://yourgithubusername.github.io/wdd230/";
const linksURL = "https://yourgithubusername.github.io/wdd230/data/links.json";
const lists = document.querySelector("li");

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
    displayLinks(data);
}

getLinks();

const displayLinks = (weeks) => {
    weeks.forEach((week) => {
        let aLink = document.createElement("a");
        
        
    })
}