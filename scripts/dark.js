const modeButton = document.querySelector("#mode");
const section1 = document.querySelector(".card1");
const section2 = document.querySelector(".card2");
const body = document.querySelector("body");
const h2 = document.querySelector("h2");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
        body.style.background = "#000";
		section1.style.background = "#fff";
        section2.style.background = "#fff";
		modeButton.textContent = "🔆";
        h2.style.color = "#fff";
	} else {
        body.style.background = "#fff";
		section1.style.background = "cadetblue";
		section2.style.background = "cadetblue";
		modeButton.textContent = "🕶️";
        h2.style.color = "#000";
	}
});
