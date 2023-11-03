import { Typography, Grid, CssBaseline, Box, Avatar, Button, ButtonGroup } from "@mui/material"
import { useEffect, useState } from "react"
import Comment from "./components/Comment"
import Subcomment from "./components/Subcomment"
import { createTheme, ThemeProvider } from "@mui/material"

const theme = createTheme({
	palette: {
		background: { default: "#f5f6fa" },
	},
})

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
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Grid container direction="row" sx={{ marginTop: "50px;" }}>
				<Grid xs={3} itemType=""></Grid>
				<Grid xs={6} container item direction="column" justifyContent="center" alignContent={"center"}>
					<Comment />
					<Subcomment />
				</Grid>
				<Grid xs={3} item></Grid>
				{/* <Typography variant="h1">Interactive Comments Section</Typography>
			{data ? <Typography variant="body1">{JSON.stringify(data)}</Typography> : <Typography>No Data</Typography>} */}
			</Grid>
		</ThemeProvider>
	)
}

export default App
