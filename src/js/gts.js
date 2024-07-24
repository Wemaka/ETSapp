import Chart from "chart.js/auto";
import { getRelativePosition } from "chart.js/helpers";

export default function initGts() {
	let tbOne = document.querySelector(".table-one");
	let tbOneRows = tbOne.getElementsByTagName("tr");
	let listOneRows = [];

	for (let i = 1; i < tbOneRows.length; i++) {
		let tbOneRow = tbOneRows[i].getElementsByTagName("td");
		let lst = [];

		for (let j = 0; j < tbOneRow.length; j++) {
			lst.push(tbOneRow[j].textContent);
		}

		listOneRows.push(lst);
	}

	let tbTwo = document.querySelector(".table-two");
	let tbTwoRows = tbTwo.getElementsByTagName("tr");

	let resLst = [];

	for (let i = 2; i < tbTwoRows.length; i++) {
		let tbTwoRow = tbTwoRows[i].getElementsByTagName("td");
		let lst = [];

		lst.push(listOneRows[i - 2][0]);

		for (let j = 0; j < tbTwoRow.length; j++) {
			switch (j) {
				case 0:
					tbTwoRow[0].textContent = listOneRows[i - 2][0];
					break;
				case 1:
					tbTwoRow[1].textContent = listOneRows[i - 2][3];
					break;
				case 2:
					tbTwoRow[2].innerHTML =
						tbTwoRow[1].textContent === "-"
							? "-"
							: (
									(1000 * parseFloat(tbTwoRow[1].textContent)) /
									+listOneRows[i - 2][1]
							  ).toFixed(2) + " км/км<sup>2</sup>";
					break;
				case 3:
					tbTwoRow[3].innerHTML =
						tbTwoRow[1].textContent === "-"
							? "-"
							: (
									(10000 * parseFloat(tbTwoRow[1].textContent)) /
									+listOneRows[i - 2][2]
							  ).toFixed(2) + " км/чел";
					break;
				case 4:
					tbTwoRow[4].innerHTML =
						tbTwoRow[1].textContent === "-"
							? "-"
							: (
									parseFloat(tbTwoRow[1].textContent) /
									Math.sqrt(+listOneRows[i - 2][1] * +listOneRows[i - 2][2])
							  ).toFixed(4) + " км-чел";

					tbTwoRow[4].textContent !== "-"
						? lst.push(["железнодорожный", parseFloat(tbTwoRow[4].textContent)])
						: lst.push(0);
					break;
				case 5:
					tbTwoRow[5].textContent = listOneRows[i - 2][4];
					break;
				case 6:
					tbTwoRow[6].innerHTML =
						tbTwoRow[5].textContent === "-"
							? "-"
							: (
									(1000 * parseFloat(tbTwoRow[5].textContent) * 1000) /
									+listOneRows[i - 2][1]
							  ).toFixed(2) + " км/км<sup>2</sup>";
					break;
				case 7:
					tbTwoRow[7].innerHTML =
						tbTwoRow[5].textContent === "-"
							? "-"
							: (
									(10000 * parseFloat(tbTwoRow[5].textContent) * 1000) /
									+listOneRows[i - 2][2]
							  ).toFixed(2) + " км/чел";
					break;
				case 8:
					tbTwoRow[8].innerHTML =
						tbTwoRow[5].textContent === "-"
							? "-"
							: (
									(parseFloat(tbTwoRow[5].textContent) * 1000) /
									Math.sqrt(+listOneRows[i - 2][1] * +listOneRows[i - 2][2])
							  ).toFixed(4) + " км-чел";
					tbTwoRow[8].textContent !== "-"
						? lst.push(["автомобильный", parseFloat(tbTwoRow[8].textContent)])
						: lst.push(0);
					break;
				case 9:
					tbTwoRow[9].textContent = listOneRows[i - 2][5];
					break;
				case 10:
					tbTwoRow[10].innerHTML =
						tbTwoRow[9].textContent === "-"
							? "-"
							: (
									(1000 * parseFloat(tbTwoRow[9].textContent)) /
									+listOneRows[i - 2][1]
							  ).toFixed(2) + " км/км<sup>2</sup>";
					break;
				case 11:
					tbTwoRow[11].innerHTML =
						tbTwoRow[9].textContent === "-"
							? "-"
							: (
									(10000 * parseFloat(tbTwoRow[9].textContent)) /
									+listOneRows[i - 2][2]
							  ).toFixed(2) + " км/чел";
					break;
				case 12:
					tbTwoRow[12].innerHTML =
						tbTwoRow[9].textContent === "-"
							? "-"
							: (
									parseFloat(tbTwoRow[9].textContent) /
									Math.sqrt(+listOneRows[i - 2][1] * +listOneRows[i - 2][2])
							  ).toFixed(4) + " км-чел";
					tbTwoRow[12].textContent !== "-"
						? lst.push(["речной", parseFloat(tbTwoRow[12].textContent)])
						: lst.push(0);
					break;
			}
		}

		resLst.push(lst);
	}

	function maxD(arr) {
		let n = -1;
		let mx;

		for (let item of arr) {
			if (item == 0) {
				continue;
			} else if (item[1] > n) {
				mx = item;
				n = item[1];
			}
		}

		return mx;
	}

	let resultContainer = document.querySelector(".one-result");

	for (let i = 0; i < resLst.length; i++) {
		let div = document.createElement("div");
		div.className = `one-result__${i}`;

		let a = maxD(resLst[i].splice(1))[0];
		div.textContent = `${resLst[i][0]}: самый развитый вид транспорта - ${a}`;

		resultContainer.append(div);
	}

	// времено
	let div = document.createElement("div");
	div.className = `one-result__${resLst.length}`;
	div.textContent = `Из всех стран самый развитый - автомобильный`;
	resultContainer.append(div);

	let div1 = document.createElement("div");
	div1.className = `one-result__${resLst.length + 1}`;
	div1.textContent = `Самая развитая страна это - Боливия`;
	resultContainer.append(div1);

	const ctx = document.getElementById("myChart");

	// в. 18
	let years = [
		1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005,
		2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020,
		2021, 2022, 2023,
	];

	let listH = [
		1167000, 1169000, 1167000, 1161000, 1163000, 1160000, 1158000, 1159000, 1157600, 1148900,
		1138400, 1134016, 1131000, 1132000, 1142800, 1142800, 1138800, 1134700, 1131100, 1129120,
		1154116, 1154121, 1156583, 1160670, 1166092, 1173854, 1178079, 1178391, 1172070, 1164815,
		1154507, 1125695, 1110836,
	];

	let labels = [];
	for (let i = 0; i < years.length; i++) {
		labels.push([years[i] + "г.", listH[i]]);
	}

	let kt = 0.8;
	let pp = 230;
	let ap = 0.7;
	let py = 240;
	let ay = 0.35;
	let kd = 1.05;
	let kkb = 2.3;
	let kp = 1.1;
	let pd = 0.1;

	let listData = [];

	for (let i = 0; i < years.length; i++) {
		let H = listH[i];
		let P1 = H * kt * (pp * ap + py * ay) * kd * kkb * kp;
		let P2 = Math.ceil(pd * P1);

		listData.push(Math.ceil((P1 + 2 * P2) / H));
	}

	new Chart(ctx, {
		type: "line",
		data: {
			labels: labels,
			datasets: [
				{
					label: "Подвижность населения города N, поездок/на чел.",
					data: listData,
					borderWidth: 4,
				},
			],
		},
		options: {
			scales: {
				y: {
					beginAtZero: true,

					ticks: {
						stepSize: 100,
					},
				},
			},
		},
	});
}
