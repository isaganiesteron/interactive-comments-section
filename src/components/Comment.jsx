import React from "react"
import { Typography, Grid, Avatar, Button, ButtonGroup } from "@mui/material"

const Comment = () => {
	return (
		<Grid container item direction="row" justifyContent={"flex-start"} minWidth={"500px"} sx={{ p: "20px 20px 20px 0", m: "10px", border: "1px solid black", borderRadius: "10px", backgroundColor: "white" }}>
			<Grid container item xs={2} justifyContent={"center"} sx={{ paddingRight: "20px" }}>
				<ButtonGroup variant="outlined" orientation="vertical" disableElevation sx={{ width: "20px" }}>
					<Button>+</Button>
					<Button disabled>12</Button>
					<Button>-</Button>
				</ButtonGroup>
			</Grid>
			<Grid container item xs={10} direct="column" justifyContent={"flex-start"} sx={{}}>
				<Grid item container direction="row" justifyContent={"space-between"} sx={{ height: "50px" }}>
					<Grid item container direction="row" alignItems={"center"} sx={{ width: "70%" }}>
						<Avatar alt="Remy Sharp" src="src\assets\images\avatars\image-amyrobson.png" sx={{ marginRight: "15px" }} />
						<Typography sx={{ marginRight: "15px" }}>amyrobson</Typography>
						<Typography sx={{ marginRight: "15px" }}>1 month ago</Typography>
					</Grid>
					<Grid item container direction="row" alignItems={"center"} justifyContent={"flex-end"} sx={{ width: "30%" }}>
						<Typography>Reply</Typography>
					</Grid>
				</Grid>
				<Grid item container direction="column" justifyContent={"flex-start"} sx={{ paddingTop: "10px" }}>
					<Typography variant="body2">Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsivness at various breakpoints works really well. </Typography>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default Comment
