import React, { useContext } from "react"
import { Info, Repos, User, Navbar } from "../components"
import loadingImage from "../images/preloader.gif"
import { GithubContext } from "../context/context.js"

const SearchResult = () => {
	const { isLoading } = useContext(GithubContext)
	if (isLoading) {
		return (
			<main>
				<img src={loadingImage} className="loading-img" alt="loding" />
			</main>
		)
	}
	return (
		<main>
			<Navbar></Navbar>
			<Info />
			<User />
			<Repos />
		</main>
	)
}
export default SearchResult
