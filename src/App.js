import React from "react"
import { Dashboard, SearchResult } from "./pages"
import { Routes, Route } from "react-router-dom"

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Dashboard />} />
			<Route path="search-result" element={<SearchResult />} />
		</Routes>
	)
}

export default App
