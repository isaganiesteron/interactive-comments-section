import { Typography } from "@mui/material"
import { useEffect, useState } from "react"

function App() {
	const [data, setData] = useState()
	const getData = () => {
		fetch("data.json", {
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
		})
			.then((response) => response.json())
			.then((myJson) => {
				console.log(myJson)
				setData(myJson)
			})
	}

	useEffect(() => {
		getData()
	}, [])

	return (
		<>
			<Typography variant="h1">Interactive Comments Section</Typography>
			{data ? <Typography variant="body1">{JSON.stringify(data)}</Typography> : <Typography>No Data</Typography>}
		</>
	)
}

export default App
