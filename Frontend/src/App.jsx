import React from "react";
import Header from "./components/Header";
import FormStep from "./components/FormStep";
import Footer from "./components/Footer";
import "./styles/udyam.css";

export default function App() {
	return (
		<div className="bg-gray-100 min-h-screen flex flex-col">
			<Header />
			<main className="container mx-auto flex-grow p-4">
				<FormStep />
			</main>
			<Footer />
		</div>
	);
}
