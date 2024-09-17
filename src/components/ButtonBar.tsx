import { Button, ButtonGroup } from '@mui/material';
import { ButtonInfo } from '../types';

interface IProps {
	buttonInfo: ButtonInfo
}

const handleClick = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, func: () => Promise<unknown>) => {
	await func();

	const buttonElem = e.target as HTMLButtonElement;
	buttonElem.style.backgroundColor = 'red';

};

export const ButtonBar = ({ buttonInfo }: IProps) => {
	return (
		<ButtonGroup variant='contained' disableRipple>
			{buttonInfo.buttons.map((dataButton, index) => {
				return (
					<Button
						key={index}
						sx={{
							backgroundColor: `${buttonInfo.color}.main`,
							'&:hover': {
								// backgroundColor: `${buttonInfo.color}.dark`,
								backgroundColor: `${buttonInfo.color}.main`,
								boxShadow: 'none',
							},
						}}
						onClick={(e) => handleClick(e, dataButton.func)}
					>{dataButton.title}</Button>
				)
			})}
		</ButtonGroup>
	)
}