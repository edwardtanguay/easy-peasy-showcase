import { Button, ButtonGroup } from '@mui/material';
import { StatusButtonInfo } from '../types';

interface IProps {
	buttonInfo: StatusButtonInfo,
	stateVarValue: string,
	stateVarFunc: React.Dispatch<React.SetStateAction<string>>
}

export const StatusButtonBar = ({ buttonInfo, stateVarValue, stateVarFunc }: IProps) => {

	const handleClick = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, value: string) => {
		const buttonElem = e.target as HTMLButtonElement;
		buttonElem.style.opacity = '0.6';
		buttonElem.disabled = true;
		stateVarFunc(value);
		buttonElem.style.opacity = '1';
		buttonElem.disabled = false;
	};

	return (
		<ButtonGroup variant='contained' disableRipple size="small">
			{buttonInfo.buttons.map((dataButton, index) => {
				return (
					<Button
						key={index}
						sx={{
							backgroundColor: dataButton.value === stateVarValue ? `${buttonInfo.color}.dark` : `${buttonInfo.color}.main`,
							'&:hover': {
								backgroundColor: dataButton.value === stateVarValue ? `${buttonInfo.color}.dark` : `${buttonInfo.color}.main`,
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