import { Button, ButtonGroup } from '@mui/material';

const dataButtons = [
	{
		title: "Print Report"
	},
	{
		title: "Search"
	}
]

export const ButtonBar = () => {
	return (
		<ButtonGroup variant='contained' disableRipple>
			{dataButtons.map((dataButton, index) => {
				return (
					<Button
						key={index}
						sx={{
							backgroundColor: 'info.main',
							'&:hover': {
								backgroundColor: 'info.dark',
							},
						}}
					>{dataButton.title}</Button>
				)
			})}
		</ButtonGroup>
	)
}