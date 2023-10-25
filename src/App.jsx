import { Typography, Grid, CssBaseline, Box, Avatar, Button, ButtonGroup } from "@mui/material"
import { useEffect, useState } from "react"
import Comment from "./components/Comment"

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
			<CssBaseline />
			<Grid container direction="row" sx={{ marginTop: "50px;" }}>
				<Grid xs={3} itemType=""></Grid>
				<Grid xs={6} container item direction="column" justifyContent="center">
					<Comment />
				</Grid>
				<Grid xs={3} item></Grid>
				{/* <Typography variant="h1">Interactive Comments Section</Typography>
			{data ? <Typography variant="body1">{JSON.stringify(data)}</Typography> : <Typography>No Data</Typography>} */}
			</Grid>
		</>
	)
}

export default App
