import Link from "next/link";
import React from "react";

export default function NotFound() {
	return (
		<main className="relative min-h-screen flex flex-col justify-center items-center text-center">
			<div className="flex flex-col gap-4">
				<h2 className="text-3xl p-6 md:p-8">Oops!</h2>
				<p>The page you were looking for doesn't exists.</p>
				<p>
					Let's get you back to
				</p>
                <Link href="/" className="rounded-btn border-decor-dark">The Home Page</Link>
			</div>
		</main>
	);
}
