const baseURL = "https://ainanaval.github.io/wdd230/";
const linksURL = "https://ainanaval.github.io/wdd230/data/links.json";
const container = document.querySelector("#container");

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
    displayLinks(data.weeks);
}

getLinks();

function displayLinks(weeks) {
    weeks.forEach((week) => {
        let newList = document.createElement('li');
        let liLength = (Object.keys(week.links).length)
        let i = 0;
        container.appendChild(newList);
        let listContent = `${week.week}: `;
        newList.innerHTML += listContent;
        //console.log(week.week)

        while (i < liLength) {
            let newLink = document.createElement('a');
            newLink.setAttribute('href',week.links[i].url);
            newLink.textContent = week.links[i].title + "| ";
            // console.log('url: ' + week.links[i].url + 'title: ' + week.links[i].title)
            newList.appendChild(newLink);
            i++;
        } 
    });
}