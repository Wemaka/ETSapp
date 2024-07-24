export default function initRailroad() {
	function canvasTwoArrow(context, fromx, fromy, tox, toy) {
		var headlen = 10;
		var dx = tox - fromx;
		var dy = toy - fromy;
		var angle = Math.atan2(dy, dx);

		context.moveTo(fromx, fromy);
		context.lineTo(
			fromx + headlen * Math.cos(angle - Math.PI / 6),
			fromy + headlen * Math.sin(angle - Math.PI / 6),
		);

		context.moveTo(fromx, fromy);
		context.lineTo(
			fromx + headlen * Math.cos(angle + Math.PI / 6),
			fromy + headlen * Math.sin(angle + Math.PI / 6),
		);

		context.moveTo(fromx, fromy);
		context.lineTo(tox, toy);
		context.lineTo(
			tox - headlen * Math.cos(angle - Math.PI / 6),
			toy - headlen * Math.sin(angle - Math.PI / 6),
		);
		context.moveTo(tox, toy);
		context.lineTo(
			tox - headlen * Math.cos(angle + Math.PI / 6),
			toy - headlen * Math.sin(angle + Math.PI / 6),
		);
	}

	const canvasOne = document.querySelector(".platform-one-canvas");
	if (canvasOne !== null) {
		const ctx = canvasOne.getContext("2d");

		let typePfControls = document.querySelector(".task__one .type-platform");
		let typesPf = typePfControls.getElementsByTagName("input");
		let typePlatformOne = 1745;

		let parentWidthPlatfrom = document.querySelector(".task__one .width-platform");
		let widthsPf = parentWidthPlatfrom.querySelector(".range__input");
		let widthPfText = parentWidthPlatfrom.querySelector(".range__text");

		let widthValuePlatform = 6;
		widthsPf.addEventListener("change", function () {
			widthValuePlatform = widthsPf.value;
			drawOne();
		});

		widthsPf.addEventListener("input", function () {
			widthPfText.textContent = widthsPf.value;
		});

		function drawOne() {
			let pd = 30;
			let x1 = typePlatformOne / 50; // x2
			let heightPlatform = (widthValuePlatform * 1000) / 50;

			let cx = 480;
			let cy = pd + x1 + heightPlatform + x1 + pd + 10;
			canvasOne.width = cx;
			canvasOne.height = cy;

			ctx.strokeRect(0, 0, cx, x1 + pd * 2 + heightPlatform + x1);

			ctx.fillRect(0 + pd, 0 + pd, cx - pd * 2, 2);
			ctx.strokeRect(50 + pd, x1 + pd, cx - 50 * 2 - pd * 2, heightPlatform);
			ctx.fillRect(0 + pd, pd + x1 + heightPlatform + x1, cx - pd * 2, 2);

			ctx.beginPath();
			canvasTwoArrow(ctx, cx - pd * 2, 0 + pd, cx - pd * 2, pd + x1 + heightPlatform + x1);
			ctx.stroke();

			ctx.font = "normal 50px helvetica";
			ctx.textAlign = "center";
			ctx.textBaseline = "middle";
			ctx.fillStyle = "#2e6ec3";
			ctx.fillText("e", cx - pd - 10, (pd + x1 + heightPlatform + x1 + pd) / 2);
		}
		drawOne();

		typePfControls.addEventListener("change", function () {
			if (typesPf[0].checked && typesPf[0].value === "низкая") {
				typePlatformOne = 1745;
			} else {
				typePlatformOne = 1920;
			}
			drawOne();
		});

		let btnTaskOne = document.querySelector(".task-one__button");
		btnTaskOne.addEventListener("click", function () {
			let resultContainer = document.querySelector(".one-result");

			let e = typePlatformOne * 2 + widthValuePlatform * 1000;

			resultContainer.classList.add("active");
			resultContainer.querySelector(".one-result__one").textContent = "e = " + e + "мм";
		});
	}

	const canvasTwo = document.querySelector(".platform-two-canvas");
	if (canvasTwo !== null) {
		const ctx = canvasTwo.getContext("2d");

		let typePfControlsTwo = document.querySelector(".task__two .type-platform");
		let typesPf = typePfControlsTwo.getElementsByTagName("input");
		let typePlatformTwo = 1745;

		let widthValuePlatform = 6;
		function drawTwo() {
			let pd = 30;
			let x1 = typePlatformTwo / 50; // x2
			let heightPlatform = (widthValuePlatform * 1000) / 50;

			let cx = 480;
			let cy = pd + x1 + heightPlatform + x1 + pd + 10;
			canvasTwo.width = cx;
			canvasTwo.height = cy;

			ctx.strokeRect(0, 0, cx, x1 + pd * 2 + heightPlatform + x1);

			ctx.fillRect(0 + pd, 0 + pd, cx - pd * 2, 2);
			ctx.strokeRect(50 + pd, pd + x1, cx - 50 * 2 - pd * 2, heightPlatform);
			ctx.fillRect(0 + pd, pd + x1 + heightPlatform + x1, cx - pd * 2, 2);

			ctx.beginPath();
			canvasTwoArrow(
				ctx,
				cx - 50 * 2 - pd * 2,
				pd + x1,
				cx - 50 * 2 - pd * 2,
				pd + x1 + heightPlatform,
			);
			ctx.stroke();

			ctx.font = "normal 28px helvetica";
			ctx.textAlign = "center";
			ctx.textBaseline = "middle";
			ctx.fillStyle = "#2e6ec3";
			ctx.fillText("ширина", cx - 40 - pd * 2, (pd + x1 + heightPlatform + x1 + pd) / 2 - 15);
			ctx.fillText(
				"платформы",
				cx - 20 - pd * 2,
				(pd + x1 + heightPlatform + x1 + pd) / 2 + 15,
			);
		}
		drawTwo();

		function validCheckInp(input) {
			let value = Number(input.value);

			if (
				14840 >= value &&
				value >= 9490 &&
				((typePlatformTwo == 1745 && input.value.slice(-3) === "490") ||
					(typePlatformTwo == 1920 && input.value.slice(-3) === "840"))
			) {
				btnTaskTwo.disabled = false;

				intertrack = value;
				input.classList.remove("error-input");
				input.classList.add("success-input");
			} else {
				btnTaskTwo.disabled = true;

				input.classList.remove("success-input");
				input.classList.add("error-input");
			}
		}

		let intertrackInput = document.querySelector(".task__two .intertrack");
		let intertrack = intertrackInput.value;

		typePfControlsTwo.addEventListener("change", function () {
			if (typesPf[0].checked && typesPf[0].value === "низкая") {
				typePlatformTwo = 1745;
			} else {
				typePlatformTwo = 1920;
			}
			validCheckInp(intertrackInput);
			drawTwo();
		});

		intertrackInput.addEventListener("input", function () {
			validCheckInp(intertrackInput);
		});

		let btnTaskTwo = document.querySelector(".task-two__button");
		btnTaskTwo.addEventListener("click", function () {
			let resultContainer = document.querySelector(".two-result");

			widthValuePlatform = (intertrack - typePlatformTwo * 2) / 1000;
			drawTwo();

			resultContainer.classList.add("active");
			resultContainer.querySelector(".two-result__one").textContent =
				"Ширина платформы = " + widthValuePlatform + "м";
		});
	}

	const canvasThree = document.querySelector(".platform-three-canvas");
	if (canvasThree !== null) {
		const ctx = canvasThree.getContext("2d");

		let btnTaskThree = document.querySelector(".task-three__button");

		function validCheckInp(input) {
			let value = Number(input.value);

			if (
				1745 * 2 + widthValuePlatform * 1000 == value ||
				1920 * 2 + widthValuePlatform * 1000 == value
			) {
				btnTaskThree.disabled = false;

				intertrack = value;
				input.classList.remove("error-input");
				input.classList.add("success-input");
			} else {
				btnTaskThree.disabled = true;

				input.classList.remove("success-input");
				input.classList.add("error-input");
			}
		}

		let intertrackInput = document.querySelector(".task__three .intertrack");
		let intertrack = intertrackInput.value;

		intertrackInput.addEventListener("input", function () {
			validCheckInp(intertrackInput);
		});

		let parentWidthPlatfrom = document.querySelector(".task__three .width-platform");
		let widthsPf = parentWidthPlatfrom.querySelector(".range__input");
		let widthPfText = parentWidthPlatfrom.querySelector(".range__text");

		let widthValuePlatform = 6;
		widthsPf.addEventListener("change", function () {
			widthValuePlatform = widthsPf.value;
			drawThree();
			validCheckInp(intertrackInput);
		});
		widthsPf.addEventListener("input", function () {
			widthPfText.textContent = widthsPf.value;
		});

		let typePlatform = 1745;
		function drawThree() {
			let pd = 30;
			let x1 = typePlatform / 50; // x2
			let heightPlatform = (widthValuePlatform * 1000) / 50;

			let cx = 480;
			let cy = pd + x1 + heightPlatform + x1 + pd + 10;
			canvasThree.width = cx;
			canvasThree.height = cy;

			ctx.strokeRect(0, 0, cx, x1 + pd * 2 + heightPlatform + x1);

			ctx.fillRect(0 + pd, 0 + pd, cx - pd * 2, 2);
			ctx.strokeRect(50 + pd, pd + x1, cx - 50 * 2 - pd * 2, heightPlatform);
			ctx.fillRect(0 + pd, pd + x1 + heightPlatform + x1, cx - pd * 2, 2);

			ctx.beginPath();
			canvasTwoArrow(ctx, cx - 50 * 2 - pd * 2, 0 + pd, cx - 50 * 2 - pd * 2, pd + x1);
			canvasTwoArrow(
				ctx,
				cx - 50 * 2 - pd * 2,
				pd + x1 + heightPlatform,
				cx - 50 * 2 - pd * 2,
				pd + x1 + heightPlatform + x1,
			);
			ctx.stroke();

			ctx.font = "normal 28px helvetica";
			ctx.textAlign = "center";
			ctx.textBaseline = "middle";
			ctx.fillStyle = "#2e6ec3";
			ctx.fillText("тип", cx - 70 - pd * 2, (pd + x1 + heightPlatform + x1 + pd) / 2 - 15);
			ctx.fillText(
				"платформы",
				cx - 20 - pd * 2,
				(pd + x1 + heightPlatform + x1 + pd) / 2 + 15,
			);
		}
		drawThree();

		btnTaskThree.addEventListener("click", function () {
			let resultContainer = document.querySelector(".three-result");

			typePlatform = (intertrack - widthValuePlatform * 1000) / 2;
			drawThree();

			resultContainer.classList.add("active");
			resultContainer.querySelector(".three-result__one").textContent =
				"тип платформы = " + (typePlatform == 1745 ? "нпл" : "впл");
		});
	}
}
