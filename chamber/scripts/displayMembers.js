const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

const members = document.querySelector(".members");
const url = "https://ainanaval.github.io/wdd230/chamber/data/members.json";

async function getMembers() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    displayMembers(data.members);
}

getMembers();

function displayMembers(members) {
    members.forEach((member) => {
        let newImg = document.createElement("img");
        let newH3 = document.createElement("h3");
        let newP = document.createElement("p");
        let newSection = document.createElement("section");
        let newDiv = document.createElement("div");
        display.appendChild(newSection);

        newH3.textContent = member.name;
        newP.textContent = `Membership Level: ${member.membershiplevel}`
        newImg.setAttribute('src', member.photo);
        newImg.setAttribute('src', `${member.name}'s photo`);

        newSection.appendChild(newDiv);
        newDiv.appendChild(newImg);
        newSection.appendChild(newH3);
        newSection.appendChild(newP);
    });
}


// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}

