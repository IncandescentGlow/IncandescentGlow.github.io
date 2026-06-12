// "use client";
// import { useEffect } from "react";
import maroon_bg from "./components/images/maroon-bg.png";
import pink_aurora from "./components/images/pink-aurora.png";
import { projectConst } from "./components/Constants.jsx";
import pink_bow from "./components/pink bow.svg";
import Image from "next/image";

export default function Home() {
	return (
		<div className="relative min-h-screen">
			<div
				style={{ backgroundImage: `url(${pink_aurora.src})` }}
				className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
			/>
			<header className="w-full min-h-screen flex flex-col justify-center items-center pt-[130px] px-6 md:px-30 text-center relative z-10 overflow-hidden">
				<div className="lg:w-[50%] flex flex-col gap-6 max-w-2xl">
					<h1 className="text-6xl md:text-7xl lg:text-8xl tracking-tight leading-none font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
						Lisa Kurniadi
					</h1>
					<span className="text-xs font-bold tracking-[0.2em] uppercase text-strawberry">
						Software Engineer & Data Analyst
					</span>

					<p className="text-primary text-base md:text-lg max-w-xl mx-auto font-light">
						Computer Science graduate with a focus on application
						development and data analysis. Experienced in machine
						learning models, multi-platform development, and UI/UX
						design.
					</p>
				</div>

				{/* HEADER BUTTONS */}
				<div className="w-full min-h-fit flex flex-col sm:flex-row gap-4 justify-center mt-13">
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://www.linkedin.com/in/lisa-kurniadi"
						className="rounded-btn border-decor
                        font-semibold text-sm group hover:pl-10"
					>
						<div className="flex items-center justify-center transition-all duration-300">
							<span>LinkedIn</span>

							<span className="max-w-0 opacity-0 group-hover:max-w-6 group-hover:opacity-100 group-hover:ml-4 transition-all duration-300 ease-out flex items-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="18"
									height="18"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="lucide lucide-external-link"
								>
									<path d="M15 3h6v6" />
									<path d="M10 14 21 3" />
									<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
								</svg>
							</span>
						</div>
					</a>

					<a
						href="mailto:lisakurniadi16@gmail.com"
						target="_blank"
						rel="noopener noreferrer"
						className="rounded-btn sm:w-auto border-decor text-sm font-semibold"
					>
						Email Me
					</a>
				</div>
			</header>

			<main
				id="projects"
				className="relative w-full py-24 px-8 md:px-12 z-20 text-vanilla"
			>
				<div
					style={{ backgroundImage: `url(${maroon_bg.src})` }}
					className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-10"
				/>
				<div className="max-w-7xl mx-auto">
					<h2 className="text-vanilla pb-16 text-center font-bold tracking-tight capitalize">
						featured projects
					</h2>

					{/* <div className="py-10 px-10 min-h-fit"> */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
						{projectConst.slice(0, 3).map((project, index) => (
							<div key={index} className="flex flex-col group">
								<div className="relative bg-vanilla/5 backdrop-blur-3xl w-full aspect-4/3 overflow-hidden rounded-[50px] mb-4 border border-vanilla/10 transition-all duration-300 group-hover:scale-[1.03]">
									<Image
										src={project.image}
										alt={project.alt}
										className={`w-full h-full brightness-95 group-hover:brightness-100 
                                            group-hover:scale-105 transition-all duration-300 ${project.layout === "P" ? "object-contain p-3" : "object-cover"}`}
									/>
								</div>

								{/* <div className="relative -mt-12 mb-2 text-center pointer-events-none z-10">
									<h3 className="text-vanilla outlines text-6xl md:text-[80px] font-bold z-10 transition-all duration-300 group-hover:scale-[1.03] ease-out">
										{project.device}
									</h3>
								</div> */}

								<div className="flex flex-col grow text-center px-4">
									<h4 className="font-bold tracking-wider uppercase text-hayley text-md mb-2">
										{project.title}
									</h4>
									<div className="flex flex-wrap justify-center gap-2 mb-3">
										{project.tools
											.sort((a, b) =>
												a.item > b.item ? 1 : -1,
											)
											.map((tool, index) => (
												<span
													key={index}
													className="px-2.5 py-1 text-[11px] font-medium tracking-wide uppercase text-vanilla/80 bg-vanilla/5 border border-vanilla/10 hover:bg-vanilla/10 hover:border-vanilla/20 rounded-full transition-all duration-300"
												>
													{tool}
												</span>
											))}
									</div>
									<p className="text-vanilla/90 text-center mb-6">
										{project.description}
									</p>
									<a
										href={project.link}
										target="_blank"
										rel="noopener noreferrer"
										className="mt-auto border-decor-dark rounded-btn"
									>
										View Project
									</a>
								</div>
							</div>
						))}
						<div className="col-span-full my-10 pb-12 border-b border-vanilla/10 text-center">
							<h4 className="text-vanilla/90 text-base font-light">
								You can see more of my projects on my{" "}
								<a
									href="https://github.com/IncandescentGlow"
									target="_blank"
									rel="noopener noreferrer"
									className="clickable-text"
								>
									GitHub
								</a>
							</h4>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
