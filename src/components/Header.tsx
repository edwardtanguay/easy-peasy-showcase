import { Typography } from "@mui/material";
import { Nav } from "./Nav";

export const Header = () => {
	return (
		<>
			<Typography variant="h5" gutterBottom color="primary">New-Tech Showcase</Typography>
			<Nav/>
		</>
	);
};
