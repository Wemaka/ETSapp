// import barba from "@barba/core";

export default function initMaritime() {
	let addColBtn = document.querySelector(".add-col-btn");

	let tbOneTitleRow = document.querySelector(".table-one__title-row");

	let tbOneLineOne = document.querySelector(".table-one__row-one");
	let tbOneLineTwo = document.querySelector(".table-one__row-two");

	function getNewTableTitle(numStr) {
		let newTh = document.createElement("th");
		newTh.innerHTML = `<span class='table-${numStr}__title-text'></span>`;
		return newTh;
	}

	function getNewInputTable() {
		let newInp = document.createElement("input");
		newInp.className = "table-one__input table-input";
		newInp.setAttribute("type", "number");

		return newInp;
	}

	function getNewTableRow() {
		let newTd = document.createElement("td");
		newTd.append(getNewInputTable());

		return newTd;
	}

	function getColCount() {
		return tbOneTitleRow.getElementsByTagName("th").length;
	}

	function addDelColBtn() {
		if (tbOneTitleRow !== null) {
			let listTitleRow = tbOneTitleRow.querySelectorAll("th");

			for (let titleInx = 2; titleInx < listTitleRow.length - 1; titleInx++) {
				listTitleRow[titleInx].classList.add("changeCol");

				let delBtn = document.createElement("div");
				delBtn.className = "del-col-btn-container";
				delBtn.innerHTML = `
				<button class="del-col-btn button-reset">
					<svg class="del-col-btn__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 4" fill="none">
						<path d="M-1.66669 3.66665V0.333313H21.6666V3.66665H-1.66669Z" fill="#00008B" />
					</svg>
					<svg class="del-col-btn__dot drag-indicator" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 14"
						fill="none">
					<path
						d="M2.14168 12.0581C1.74598 12.0581 1.40725 11.9158 1.12546 11.6311C0.843681 11.3464 0.702789 11.0042 0.702789 10.6045C0.702789 10.2048 0.843681 9.86257 1.12546 9.57791C1.40725 9.29326 1.74598 9.15092 2.14168 9.15092C2.53737 9.15092 2.87611 9.29326 3.15789 9.57791C3.43968 9.86257 3.58057 10.2048 3.58057 10.6045C3.58057 11.0042 3.43968 11.3464 3.15789 11.6311C2.87611 11.9158 2.53737 12.0581 2.14168 12.0581ZM6.45834 12.0581C6.06265 12.0581 5.72391 11.9158 5.44213 11.6311C5.16035 11.3464 5.01946 11.0042 5.01946 10.6045C5.01946 10.2048 5.16035 9.86257 5.44213 9.57791C5.72391 9.29326 6.06265 9.15092 6.45834 9.15092C6.85404 9.15092 7.19278 9.29326 7.47456 9.57791C7.75634 9.86257 7.89723 10.2048 7.89723 10.6045C7.89723 11.0042 7.75634 11.3464 7.47456 11.6311C7.19278 11.9158 6.85404 12.0581 6.45834 12.0581ZM2.14168 7.69734C1.74598 7.69734 1.40725 7.55502 1.12546 7.27036C0.843681 6.9857 0.702789 6.6435 0.702789 6.24376C0.702789 5.84403 0.843681 5.50183 1.12546 5.21717C1.40725 4.93251 1.74598 4.79018 2.14168 4.79018C2.53737 4.79018 2.87611 4.93251 3.15789 5.21717C3.43968 5.50183 3.58057 5.84403 3.58057 6.24376C3.58057 6.6435 3.43968 6.9857 3.15789 7.27036C2.87611 7.55502 2.53737 7.69734 2.14168 7.69734ZM6.45834 7.69734C6.06265 7.69734 5.72391 7.55502 5.44213 7.27036C5.16035 6.9857 5.01946 6.6435 5.01946 6.24376C5.01946 5.84403 5.16035 5.50183 5.44213 5.21717C5.72391 4.93251 6.06265 4.79018 6.45834 4.79018C6.85404 4.79018 7.19278 4.93251 7.47456 5.21717C7.75634 5.50183 7.89723 5.84403 7.89723 6.24376C7.89723 6.6435 7.75634 6.9857 7.47456 7.27036C7.19278 7.55502 6.85404 7.69734 6.45834 7.69734ZM2.14168 3.3366C1.74598 3.3366 1.40725 3.19427 1.12546 2.90961C0.843681 2.62496 0.702789 2.28276 0.702789 1.88302C0.702789 1.48329 0.843681 1.14109 1.12546 0.856433C1.40725 0.571773 1.74598 0.429443 2.14168 0.429443C2.53737 0.429443 2.87611 0.571773 3.15789 0.856433C3.43968 1.14109 3.58057 1.48329 3.58057 1.88302C3.58057 2.28276 3.43968 2.62496 3.15789 2.90961C2.87611 3.19427 2.53737 3.3366 2.14168 3.3366ZM6.45834 3.3366C6.06265 3.3366 5.72391 3.19427 5.44213 2.90961C5.16035 2.62496 5.01946 2.28276 5.01946 1.88302C5.01946 1.48329 5.16035 1.14109 5.44213 0.856433C5.72391 0.571773 6.06265 0.429443 6.45834 0.429443C6.85404 0.429443 7.19278 0.571773 7.47456 0.856433C7.75634 1.14109 7.89723 1.48329 7.89723 1.88302C7.89723 2.28276 7.75634 2.62496 7.47456 2.90961C7.19278 3.19427 6.85404 3.3366 6.45834 3.3366Z"
						fill="#D5D5D5" />
					</svg>
				</button>
			`;

				if (listTitleRow[titleInx].childNodes.length <= 1) {
					listTitleRow[titleInx].append(delBtn);
				}

				delBtn.querySelector(".del-col-btn").addEventListener("click", function (e) {
					let listTitleRow = tbOneTitleRow.querySelectorAll("th");
					let currentTitle = e.target.closest("th");

					let curInx = [...listTitleRow].findIndex(
						(item) =>
							item.querySelector(".table-one__title-text") ==
							currentTitle.querySelector(".table-one__title-text"),
					);

					listTitleRow[curInx].remove();
					tbOneLineOne.querySelectorAll("td")[curInx - 1].remove();
					tbOneLineTwo.querySelectorAll("td")[curInx - 1].remove();
					updateTableTitle();

					tbTwoTitleRow.querySelectorAll("th")[curInx].remove();
					tbTwoLineOne.querySelectorAll("td")[curInx - 1].remove();
					updateTwoTableTitle();
				});
			}

			let table = [tbOneLineOne.querySelectorAll("td"), tbOneLineTwo.querySelectorAll("td")];
			let lenRow = getColCount() - 1;
			for (let i = 0; i < table.length; i++) {
				for (let j = 1; j < lenRow - 1; j++) {
					// table[i][j].classList.add("changeCol");

					table[i][j].addEventListener("mouseenter", function (e) {
						listTitleRow[j + 1]
							.querySelector(".del-col-btn-container")
							.classList.add("active");
					});

					table[i][j].addEventListener("mouseleave", function (e) {
						listTitleRow[j + 1]
							.querySelector(".del-col-btn-container")
							.classList.remove("active");
					});
				}
			}
		}
	}

	function updateOneRow() {
		let listLineOne = tbOneLineOne.querySelectorAll("td");

		for (let element of listLineOne) {
			element.classList.remove("inactive");

			if (element.innerHTML == 0) {
				element.innerHTML = "";
				element.append(getNewInputTable());
			}
		}

		let colCount = getColCount() - 1;

		listLineOne[colCount - 1].classList.add("inactive");
		listLineOne[colCount - 1].innerHTML = "0";
	}

	function updateTableTitle() {
		let alphabet = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";
		let listTitleRow = tbOneTitleRow.querySelectorAll("th");
		for (let i = 1; i < listTitleRow.length; i++) {
			listTitleRow[i].querySelector(".table-one__title-text").textContent = alphabet[i - 1];
		}
	}

	let tbTwoTitleRow = document.querySelector(".table-two__title-row");
	let tbTwoLineOne = document.querySelector(".table-two__row-one");

	function updateTwoTableTitle() {
		let listOneTitleRow = tbOneTitleRow.querySelectorAll("th");
		let listTwoTitleRow = tbTwoTitleRow.querySelectorAll("th");

		for (let i = 1; i < listOneTitleRow.length - 1; i++) {
			if (listTwoTitleRow.length - 1 < listOneTitleRow.length - 1) {
				listTwoTitleRow[i].innerHTML = `
				<span class="table-two__title-text">${
					listOneTitleRow[i].querySelector(".table-one__title-text").textContent
				}-${
					listOneTitleRow[i + 1].querySelector(".table-one__title-text").textContent
				}</span>
			`;
			}
		}
	}

	addDelColBtn();
	if (addColBtn !== null) {
		addColBtn.addEventListener("click", function () {
			tbOneTitleRow.append(getNewTableTitle("one"));
			updateTableTitle();

			tbOneLineOne.append(getNewTableRow());
			updateOneRow();
			tbOneLineTwo.append(getNewTableRow());
			addDelColBtn();

			tbTwoTitleRow.append(getNewTableTitle("two"));
			tbTwoLineOne.append(getNewTableRow());
			updateTwoTableTitle();
		});
	}

	let btnTaskOne = document.querySelector(".task-one__button");
	if (btnTaskOne !== null) {
		btnTaskOne.addEventListener("click", function () {
			let resOne = 0;
			let listLineOne = tbOneLineOne.querySelectorAll("td");
			let listLineTwo = tbOneLineTwo.querySelectorAll("td");
			let listTwoLineOne = tbTwoLineOne.querySelectorAll("td");

			let resultContainer = document.querySelector(".one-result");

			let len = listLineOne.length;

			let volumeOfTraffic = 0;
			let lastCargo = null;
			for (let i = 0; i < len - 1; i++) {
				// debugger;
				let num1 = Number(listLineOne[i].querySelector(".table-input").value);
				let num2 = Number(listLineTwo[i + 1].querySelector(".table-input").value);

				let num3;
				if (listLineOne[i + 1].querySelector(".table-input") === null) {
					num3 = 0;
				} else {
					num3 = Number(listLineOne[i + 1].querySelector(".table-input").value);
				}

				let distance = Number(listTwoLineOne[i].querySelector(".table-input").value);

				if (lastCargo === null) {
					lastCargo = num1 - num2 + num3;
					volumeOfTraffic += lastCargo;
					resOne += lastCargo * distance;
					continue;
				}

				lastCargo = lastCargo - num2 + num3;
				volumeOfTraffic += lastCargo;
				resOne += lastCargo * distance;

				// if (num1 && num2 && num3) {
				// 	if (lastCargo - num2 + num3 >= 0) {
				// 		resOne += (lastCargo - num2 + num3) * distance;
				// 	} else {
				// 		resOne = -1;
				// 		break;
				// 	}
				// }
			}

			resultContainer.classList.add("active");

			resultContainer.querySelector(".one-result__one").textContent =
				"Грузооборот: " + resOne;

			let resTwo = 0;

			if (volumeOfTraffic !== 0) {
				resTwo = Math.round(resOne / volumeOfTraffic);
			}

			resultContainer.querySelector(".one-result__two").textContent =
				"Средняя дальность перевозки 1 т. груза: " + resTwo;
		});
	}

	let btnTaskTwo = document.querySelector(".task-two__button");
	if (btnTaskTwo !== null) {
		btnTaskTwo.addEventListener("click", function () {
			let resultContainer = document.querySelector(".two-result");
			let listLineOne = document
				.querySelector(".table-three__row-one")
				.querySelectorAll("td");

			let tx =
				(Number(listLineOne[0].querySelector(".table-input").value) /
					Number(listLineOne[1].querySelector(".table-input").value)) *
				24;

			let netLoadCapacity = Number(listLineOne[2].querySelector(".table-input").value);
			let tct =
				(netLoadCapacity / Number(listLineOne[3].querySelector(".table-input").value) +
					netLoadCapacity / Number(listLineOne[4].querySelector(".table-input").value)) *
				24;

			let tdop = Number(listLineOne[5].querySelector(".table-input").value) * 24;

			let tp = Math.round(tx + tct + tdop);
			let ex = Math.round(tx / tp);

			if (Number.isNaN(tp) || Number.isNaN(ex)) {
				tp = 0;
				ex = 0;
			}

			resultContainer.classList.add("active");

			resultContainer.querySelector(".two-result__one").textContent =
				"Продолжительность рейса судна из порта А в Б: " + tp + "ч";

			resultContainer.querySelector(".two-result__two").textContent =
				"Коэф. ходового времени: " + (ex < 1 ? "< 1 :(" : ex);
		});
	}

	let btnTaskThree = document.querySelector(".task-three__button");
	if (btnTaskThree !== null) {
		btnTaskThree.addEventListener("click", function () {
			let resOne = 0;
			let resTwo = 0;

			let resultContainer = document.querySelector(".three-result");
			let listLineOne = document.querySelector(".table-four__row-one").querySelectorAll("td");

			let tx =
				(Number(listLineOne[2].querySelector(".table-input").value) /
					Number(listLineOne[1].querySelector(".table-input").value)) *
				24;

			let cargoQuantity = Number(listLineOne[3].querySelector(".table-input").value);
			let tct =
				(cargoQuantity / Number(listLineOne[4].querySelector(".table-input").value) +
					cargoQuantity / Number(listLineOne[5].querySelector(".table-input").value)) *
				24;

			let tp = tx + tct;
			let ex = tx / tp;

			let kz = cargoQuantity / Number(listLineOne[0].querySelector(".table-input").value);

			let u = Math.round(
				kz * Number(listLineOne[1].querySelector(".table-input").value) * ex,
			);

			if (Number.isNaN(kz) || Number.isNaN(u)) {
				kz = 0;
				u = 0;
			}

			resultContainer.classList.add("active");

			resultContainer.querySelector(".three-result__one").textContent =
				"Коэф. загрузки судна: " + Math.round(kz);

			resultContainer.querySelector(".three-result__two").textContent =
				"Производительность 1 т. грузоподъемности судна в сутках: " + u;
		});
	}

	let btnTaskFour = document.querySelector(".task-four__button");
	if (btnTaskFour !== null) {
		btnTaskFour.addEventListener("click", function () {
			let resultContainer = document.querySelector(".four-result");
			let listLineOne = document.querySelector(".table-five__row-one").querySelectorAll("td");

			let cargoQuantity = Number(listLineOne[3].querySelector(".table-input").value);

			let az = cargoQuantity / Number(listLineOne[0].querySelector(".table-input").value);

			let tx =
				Number(listLineOne[2].querySelector(".table-input").value) /
				Number(listLineOne[1].querySelector(".table-input").value);

			let tct =
				cargoQuantity / Number(listLineOne[2].querySelector(".table-input").value) +
				cargoQuantity / Number(listLineOne[5].querySelector(".table-input").value);

			let tp = tx + tct;

			let n = Number(listLineOne[6].querySelector(".table-input").value) / tp;

			let qnt = n * Number(listLineOne[0].querySelector(".table-input").value) * az;

			let nn = Math.round(cargoQuantity / qnt);

			if (Number.isNaN(nn)) {
				nn = 0;
			}

			resultContainer.classList.add("active");

			resultContainer.querySelector(".four-result__one").textContent =
				"Количество судов, необходимое для перевозки заданного количества груза: " + nn;
		});
	}
}

// barba.hooks.after(() => {
// 	const bottomDOM = document.getElementsByTagName("head")[0];
// 	const newScript = document.createElement("script");
// 	const oldScript = document.querySelector(".main-script");
// 	newScript.src = "/ETSuni/ets-app/src/js/maritime.js";
// 	newScript.className = "main-script";
// 	newScript.setAttribute("type", "module");
// 	oldScript.remove();
// 	bottomDOM.appendChild(newScript);

// 	myScriptInit();
// });
