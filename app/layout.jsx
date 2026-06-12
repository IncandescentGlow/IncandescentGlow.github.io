import { Bricolage_Grotesque, DM_Sans, Imbue } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const bricolage_grotesque = Bricolage_Grotesque({
	subsets: ["latin"],
	display: "swap",
});

const dm_sans = DM_Sans({
	subsets: ["latin"],
	display: "swap",
});

const imbue = Imbue({
	subsets: ["latin"],
	display: "swap",
});

export default function RootLayout({ children }) {
	return (
		<html
			lang="en"
			className={`${bricolage_grotesque.variable} ${dm_sans.variable} ${imbue.variable} antialiased scroll-smooth`}
		>
			<body className="min-h-screen bg-[#fcfaf2] text-[#3c1e29] relative font-sans">
				<div className="absolute top-0 left-0 right-0 z-50 pointer-events-none">
					<div className="pointer-events-auto">
						<Navbar />
					</div>
				</div>
				{children}
				<Footer />
			</body>
		</html>
	);
}
