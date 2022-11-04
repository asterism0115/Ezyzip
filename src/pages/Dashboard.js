import React from "react"
import { Navigate } from "react-router-dom"
import { Search, Navbar } from "../components"
import loadingImage from "../images/preloader.gif"
import { GithubContext } from "../context/context.js"
const Dashboard = () => {
	const { isLoading } = React.useContext(GithubContext)
	if (isLoading) {
		return (
			<main>
				<Navbar />
				<Search />
				<img src={loadingImage} className="loading-img" alt="loding" />
				<Navigate to="/search-result" />
			</main>
		)
	}
	return (
		<main>
			<Search />
		</main>
	)
}

export default Dashboard
