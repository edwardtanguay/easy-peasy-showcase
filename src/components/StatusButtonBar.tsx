import { Button, ButtonGroup } from '@mui/material';
import { StatusButtonInfo } from '../types';

interface IProps {
	buttonInfo: StatusButtonInfo
}

const handleClick = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, value: string) => {
	const buttonElem = e.target as HTMLButtonElement;
	buttonElem.style.opacity = '0.6';
	buttonElem.disabled = true;
	console.log(111, value);
	buttonElem.style.opacity = '1';
	buttonElem.disabled = false;
};

export const StatusButtonBar = ({ buttonInfo }: IProps) => {
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
						onClick={(e) => handleClick(e, dataButton.value)}
					>{dataButton.title}</Button>
				)
			})}
		</ButtonGroup>
	)
}