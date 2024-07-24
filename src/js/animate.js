import barba from "@barba/core";
import { gsap } from "gsap";
import initMaritime from "./maritime";
import initRailroad from "./railroad";
import initGts from "./gts";

function animIn(container) {
	// return gsap.to(container.querySelector(".preloader"), {
	// 	transform: "translateX(0)",
	// 	duration: 0.5,
	// });
	return gsap.fromTo(
		container.querySelector(".preloader"),
		{
			transform: "translateX(-100%)",
		},
		{
			transform: "translateX(0)",
		},
	);
}

function animOut(container) {
	// return gsap.from(container.querySelector(".preloader"), {
	// 	transform: "translateX(0)",
	// 	duration: 0.5,
	// });
	return gsap.fromTo(
		container.querySelector(".preloader"),
		{
			transform: "translateX(0)",
		},
		{
			transform: "translateX(100%)",
		},
	);
}

function addTranspForAnim(btn) {
	if (btn == "back" || btn == "forward") {
		console.log(btn);
	} else {
		console.log(btn.getAttribute("data-slug"));
	}
}

barba.init({
	transitions: [
		{
			name: "preloader-transition",
			// при выходе
			async leave(data) {
				// let nextUrl = data.next.url.href;

				// let lastInx = nextUrl.lastIndexOf(".html");
				// let startInx = nextUrl.lastIndexOf("html", lastInx - "html/".length);

				// let nextPage = nextUrl.slice(startInx + "html/".length, lastInx);

				// addTranspForAnim(data.current.container, nextPage);

				// addTranspForAnim(data.trigger);
				// console.log(data.trigger.getAttribute("data-slug"));

				await animIn(data.current.container);
				data.current.container.remove();
			},
			// при входе
			async enter(data) {
				await animOut(data.next.container);
			},
		},
	],

	views: [
		{
			namespace: "maritime",
			beforeEnter() {
				initMaritime();
			},
			afterEnter() {},
		},
		{
			namespace: "railroad",
			beforeEnter() {
				initRailroad();
			},
			afterEnter() {},
		},
		{
			namespace: "gts",
			beforeEnter() {
				initGts();
			},
			afterEnter() {},
		},
	],
});
