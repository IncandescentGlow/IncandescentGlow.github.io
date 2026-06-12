import React from "react";
import pink_aurora from "../components/images/pink-aurora.png";
import { projectConst } from "../components/Constants.jsx";
import Image from "next/image";

export default function Projects() {
	return (
		<div className="relative min-h-screen">
			<div
				style={{ backgroundImage: `url(${pink_aurora.src})` }}
				className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
			/>
			<div className="w-full min-h-screen flex flex-col pt-[130px] py-30 gap-12 px-13 md:px-50 relative z-10 overflow-hidden">
				<h2 className="tracking-tight font-bold pt-10">my projects</h2>

				<div className="grid grid-cols-4 gap-6">
					{projectConst.map((project, index) => (
						<div
							key={index}
							className={`flex relative group overflow-hidden rounded-4xl bg-primary/10 backdrop-blur-3xl border border-primary/10 transition-all duration-300 ${project.className}`}
						>
							<div
								className={`relative w-full h-100 overflow-hidden flex items-center justify-center`}
							>
								<Image
									src={project.image}
									alt={project.alt}
									className={`transition-all duration-300 ${project.layout === "P" ? "h-full w-auto object-contain p-3" : "w-full h-full object-cover"}`}
								/>
							</div>
							<section
								className="absolute -bottom-full group-hover:bottom-0 px-5 py-3 
                                bg-hayley-500 w-full transition-all duration-300 text-primary"
							>
								<h4 className="font-bold tracking-wide text-md">
									{project.title}
								</h4>
								<p className="py-2">{project.description}</p>
								<a
									href={project.link}
									target="_blank"
									rel="noopener noreferrer"
									className="underline font-semibold underline-offset-5 text-right justify-end self-end items-end"
								>
									view project →
								</a>
							</section>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
