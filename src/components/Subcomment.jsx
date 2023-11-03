import React from "react"
import { Typography, Grid, Avatar, Button, ButtonGroup } from "@mui/material"

const Subcomment = () => {
	return (
		<Grid container item direction="row" columnSpacing={2} justifyContent={"flex-start"} sx={{ p: "20px 20px 20px 0", marginLeft: "70px", borderRadius: "10px", backgroundColor: "white", width: "535px" }}>
			<Grid container item xs={1} justifyContent={"center"} sx={{ paddingRight: "20px" }}>
				<ButtonGroup variant="outlined" orientation="vertical" disableElevation sx={{ border: "0px", width: "20px", borderRadius: "20px" }}>
					<Button sx={{ border: "0px", backgroundColor: "#faf9fe", "&:hover": { border: "0" } }}>+</Button>
					<Button disabled sx={{ border: "0 !important", color: "black !important", backgroundColor: "#faf9fe", textDecoration: "none", "&:hover": { border: "0" } }}>
						12
					</Button>
					<Button sx={{ border: "0px", backgroundColor: "#faf9fe", "&:hover": { border: "0" } }}>-</Button>
				</ButtonGroup>
			</Grid>
			<Grid container item xs={11} direct="column" justifyContent={"flex-start"}>
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
					<Typography variant="body2">
						Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsivness at various breakpoints works really well. Impressive! Though it seems the drag feature could be improved. But overall it looks
						incredible. You've nailed the design and the responsivness at various breakpoints works really well.Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsivness at various breakpoints works
						really well.
					</Typography>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default Subcomment
