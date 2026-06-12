import CashNote from "./images/CashNote.jpg";
import clustering_web from "./images/Clustering Website.png";
import spaceship_shooter_game from "./images/spaceship shooter game.png";
import platformer_2d from "./images/platformer-2d.png";
import butuh_dokter from "./images/ButuhDokter.png";

const projectConst = [
	{
		title: "CashNote: expense tracking app",
		image: CashNote,
		alt: "CashNote Mobile App",
		description:
			"An expense-tracking app I made utilizing local database (with import & export feature). It can track daily, monthly, and annual expense logged by the user.",
		tools: ["Flutter", "Drift", "Dart"],
		device: "Android",
		link: "https://catzurg.itch.io/cash-note",
		layout: "P",
		className: "col-span-3 lg:col-span-2",
	},
	{
		title: "Geospatial Clustering and Analysis",
		image: clustering_web,
		alt: "Geospatial Clustering Website",
		description:
			"I made a web-based data analysis system for clustering commodity datasets and transforming them into more digestible graphs and interactive geospatial maps.",
		tools: ["Python", "Streamlit", "Scikit-learn", "Figma"],
		device: "Website",
		link: "https://clustering-kacang-hijau.streamlit.app/",
		layout: "L",
		className: "col-span-3 lg:col-span-2",
	},
	{
		title: "Spaceship Shooter Mobile Game",
		image: spaceship_shooter_game,
		alt: "Spaceship Shooter Mobile Game",
		description:
			"I love arcade games, so I made this classic spaceship shooter game on mobile as a college project. Earn points by shooting endless meteors and try to beat your high score!",
		tools: ["Unity 2D", "C#"],
		device: "Android",
		link: "https://catzurg.itch.io/spaceship-shooter-game",
		layout: "L",
		className: "col-span-3 lg:col-span-2",
	},
	{
		title: "Butuh Dokter",
		image: butuh_dokter,
		alt: "Aplikasi web 'Butuh Dokter'",
		description:
			"I collaborated in a team of 5 to build a web-based health service and medical appointment system. This project focuses on functionality and built as a frontend prototype.",
		tools: ["Unity 2D", "C#"],
		device: "Android",
		link: "https://github.com/Kelompok-18/Jasa-Dokter",
		layout: "L",
		className: "col-span-3 lg:col-span-2",
	},
];

const aboutContent = [
	{
		title: "Education",
		content: "Bachelor of Computer Science",
		additionalContent: "Graduated in 2026",
	},
	{
		title: "Languages",
		content: (
			<>
				I am a native <span className="highlight">Indonesian</span> speaker and fluent in <span className="highlight">English</span>.
			</>
		),
	},
	{
		title: "Domicile",
		content: "Jakarta Barat, Indonesia",
	},
];

export { projectConst, aboutContent };
