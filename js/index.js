document.addEventListener("DOMContentLoaded", () => {
	// DOM Elements
	const loader = document.querySelector(".cssload-box-loading");
	const mainContent = document.querySelector("#main-content");
	const searchInput = document.querySelector("#search-input");
	const resetBtn = document.querySelector("#reset-btn");
	const form = document.querySelector("form");
	const mapImg = document.querySelector("#map-img");
	const invalidText = document.querySelector("#invalid");

	function setImageSrc(input) {
		const facility = input.split(" ")[0];
		mapImg.setAttribute("src", `images/${facility}.png`);
	}

	function findImages(input) {
		const search = input.toLowerCase();

		switch (search) {
			case "hs":
			case "hs building":
				invalidText.style.display = "none";
				invalidText.innerText = "";
				setImageSrc(search);
				break;

			case "cashier":
				invalidText.style.display = "none";
				invalidText.innerText = "";
				setImageSrc(search);
				break;

			case "registrar":
				invalidText.style.display = "none";
				invalidText.innerText = "";
				setImageSrc(search);
				break;

			case "cas":
			case "cas building":
				invalidText.style.display = "none";
				invalidText.innerText = "";
				setImageSrc(search);
				break;

			case "canteen":
				invalidText.style.display = "none";
				invalidText.innerText = "";
				setImageSrc(search);
				break;

			case "stage":
				invalidText.style.display = "none";
				invalidText.innerText = "";
				setImageSrc(search);
				break;

			case "vsb":
			case "vsb building":
				invalidText.style.display = "none";
				invalidText.innerText = "";
				setImageSrc(search);
				break;

			case "admission":
			case "admission office":
				invalidText.style.display = "none";
				invalidText.innerText = "";
				setImageSrc(search);
				break;

			default:
				invalidText.style.display = "block";
				invalidText.innerText = `sorry cannot find ${search}`;
		}
	}

	// set loader
	setTimeout(() => {
		loader.style.display = "none";
		loader.style.opacity = 0;
		mainContent.style.display = "block";
		mainContent.style.opacity = 1;
	}, 5000);

	form.addEventListener("submit", (e) => {
		e.preventDefault();
		// check if search input is empty
		if (searchInput.value === "" || searchInput.value === null) return;
		findImages(searchInput.value);
	});

	resetBtn.addEventListener("click", () => {
		mapImg.setAttribute("src", `images/default.png`);
		invalidText.style.display = "none";
		invalidText.innerText = "";
	});
});
