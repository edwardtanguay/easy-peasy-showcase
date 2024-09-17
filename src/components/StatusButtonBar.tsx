import { Button, ButtonGroup } from '@mui/material';
import { ProcessButtonInfo } from '../types';

interface IProps {
	buttonInfo: ProcessButtonInfo
}

const handleClick = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, func: () => Promise<unknown>) => {
	const buttonElem = e.target as HTMLButtonElement;
	buttonElem.style.opacity = '0.6';
	buttonElem.disabled = true;
	await func();
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
						onClick={(e) => handleClick(e, dataButton.func)}
					>{dataButton.title}</Button>
				)
			})}
		</ButtonGroup>
	)
}