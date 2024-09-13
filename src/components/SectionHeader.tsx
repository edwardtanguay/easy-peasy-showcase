import { Typography } from "@mui/material"

interface IProps {
	title: string;
	marginTop?: string;
}

export const SectionHeader = ({ title = '(NO TITLE)', marginTop = '1rem' }: IProps) => {
	return (
		<Typography variant="h5" gutterBottom className='backgroundHighlight' sx={{
			padding: '.3rem',
			borderRadius: '.3rem',
			marginTop
		}}>{title}</Typography>
	)
}