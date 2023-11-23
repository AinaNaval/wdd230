const date = new Date();
const year = date.getFullYear();

document.querySelector("#year").textContent = year;
document.querySelector("#lastModified").textContent = "Last modification: " + document.lastModified;