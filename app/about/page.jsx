import React from "react";
import pink_aurora from "../components/images/pink-aurora.png";
import { aboutContent } from "../components/Constants.jsx";

export default function About() {
	return (
		<div className="relative min-h-screen">
			<div
				style={{ backgroundImage: `url(${pink_aurora.src})` }}
				className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
			/>
			<div className="w-full lg:w-4/5 min-h-screen flex flex-col pt-[130px] py-30 gap-12 px-13 md:px-50 relative z-10 overflow-hidden">
				<div className="flex flex-col gap-6">
					<h2 className="tracking-tight leading-none font-bold pt-10">
						hello!
					</h2>
				</div>
				<p className="text-primary">
					I’m Lisa, a computer science graduate with a focus on
					application development and data analysis. Experienced in
					machine learning models, multi-platform development, and
					UI/UX design.
				</p>
				{aboutContent.map((content, index) => (
					<section key={index}>
						<div className="mb-2">
							<span className="text-sm font-bold tracking-widest uppercase text-hayley font-sans">
								+ {content.title}
							</span>
						</div>
						<div className="flex flex-col items-start border-l-2 border-dotted border-hayley pl-6 py-2">
							<p
								className={`text-primary mb-2 ${content.additionalContent && "font-semibold"}`}
							>
								{content.content}
							</p>
							{content.additionalContent && (
								<div>
									<span className="rounded-btn border-decor text-sm">
										{content.additionalContent}
									</span>
								</div>
							)}
						</div>
					</section>
				))}
			</div>
		</div>
	);
}
