import { Box, Button, ButtonGroup, Container } from '@mui/material';
import { Typography } from "@mui/material";
import { SectionHeader } from '../components/SectionHeader';
import ConstructionIcon from '@mui/icons-material/Construction';
import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined';
import SendIcon from '@mui/icons-material/Send';
import { ButtonBar } from '../components/ButtonBar';
// import { useState } from 'react';
import * as qdev from '../qtools/qdev';

export const PageMui = () => {
	// const [buttonBar001Status, setButtonBar001Status] = useState('');
	// const [buttonBar002Status, setButtonBar002Status] = useState('');
	// const [buttonBar003Status, setButtonBar003Status] = useState('');

	return (
		<section className='page pageMui'>
			<h2>Resources:</h2>
			<ul className='ml-6 list-disc mb-6'>
				<li><a className="underline" href="https://www.youtube.com/watch?v=0KEpWHtG10M&list=PL4cUxeGkcC9gjxLvV4VEkZ6H6H4yWuS58&index=1" target="_blank">VIDEO TUTORIAL: Net Ninja</a></li>
				<li><a className="underline" href="https://mui.com/material-ui/all-components" target="_blank">Material UI Documentation</a></li>
			</ul>
			<SectionHeader title="Typography" marginTop='0'></SectionHeader>
			<Container>
				{/* Heading Variants */}
				<Typography
					variant="h1"
					color="primary"
					className='hidden md:block'>H1 Primary</Typography>
				<Typography
					variant="h1"
					color="primary"
					className='md:hidden p-0 m-0'
					sx={{ lineHeight: "3.5rem" }}
				><span className='text-[3.5rem]'>H1 Primary</span></Typography>

				<Typography variant="h2"
					color="secondary"
					className='hidden md:block'>H2 Primary</Typography>
				<Typography
					variant="h2"
					color="secondary"
					className='md:hidden p-0 m-0'
					sx={{ lineHeight: "3rem" }}
				><span className='text-[3rem]'>H2 Primary</span></Typography>

				<Typography variant="h3" color="error">H3 Error </Typography>
				<Typography variant="h4" color="warning">H4 Warning </Typography>
				<Typography variant="h5" color="info">H5 Info </Typography>
				<Typography variant="h6" color="success">H6 Success</Typography>

				{/* Subtitle Variants */}
				<Typography variant="subtitle1" color="textPrimary">Subtitle textPrimary</Typography>
				<Typography variant="subtitle2" color="textSecondary">Subtitle textSecondary</Typography>
				<Typography variant="subtitle2" color="textDisabled">Subtitle textDisabled</Typography>

				{/* Body Text Variants */}
				<Typography variant="body1">
					This is body1 text. It is typically used for longer paragraphs of text.
				</Typography>
				<Typography variant="body2">
					This is body2 text. It is usually smaller than body1 and is great for shorter texts or secondary information.
				</Typography>
				<Typography variant="body2" noWrap>
					<b>nowrap</b>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic natus at alias beatae, sapiente ab unde in asperiores error officiis, ea velit, quis numquam vero aspernatur dicta dolor perferendis culpa.
				</Typography>

				{/* Other Variants */}
				This is <Typography variant="caption">Caption Text</Typography> and this is <Typography variant="overline">Overline Text</Typography> and this is <Typography variant="button">Button Text</Typography>.
			</Container>

			<SectionHeader title="Buttons"></SectionHeader>
			<Container className='flex gap-2 flex-wrap'>
				<Button variant="contained">Default (no color)</Button>
				<Button variant="contained" color="primary">Primary</Button>
				<Button variant="contained" color="secondary">Secondary</Button>
				<Button variant="contained" color="success">Success</Button>
				<Button variant="contained" color="error">Error</Button>
				<Button variant="contained" color="warning">Warning</Button>
				<Button variant="contained" color="warning" disableElevation>Warning (no shadow)</Button>
				<Button variant="contained" color="info" disableTouchRipple>Info (no touch ripple)</Button>
				<Button variant="contained" color="primary" disabled>Primary Disabled</Button>
				<Button variant="contained" color="success" disabled>Success Disabled</Button>
				<Button variant="outlined" color="success">Success</Button>
				<Button variant="outlined" color="error">Error</Button>
			</Container>

			<SectionHeader title="Button Groups"></SectionHeader>
			<section className='flex gap-2 flex-wrap'>
				<ButtonGroup variant='outlined' disableRipple>
					<Button>Save</Button>
					<Button>Delete</Button>
					<Button>Copy</Button>
				</ButtonGroup>
				<ButtonGroup variant='contained' disableRipple>
					<Button
						sx={{
							backgroundColor: 'success.main',
							'&:hover': {
								backgroundColor: 'success.dark',
							},
						}}
					>Save</Button>
					<Button
						sx={{
							backgroundColor: 'error.main',
							'&:hover': {
								backgroundColor: 'error.dark',
							},
						}}
					>Delete</Button>
					<Button
						sx={{
							backgroundColor: 'warning.main',
							'&:hover': {
								backgroundColor: 'warning.dark',
							},
						}}
					>Copy</Button>
				</ButtonGroup>
			</section>

			<SectionHeader title="Icons"></SectionHeader>
			<Container>
				<ConstructionIcon />
				<ConstructionOutlinedIcon color="secondary" />
				<ConstructionOutlinedIcon color="primary" fontSize="large" />
				<ConstructionOutlinedIcon color="primary" fontSize="small" />
				<ConstructionOutlinedIcon color="action" fontSize="small" />
				<h2 className='mb-1'>With Buttons:</h2>
				<section className='flex gap-2'>
					<Button
						sx={{
							backgroundColor: 'primary.main',
							'&:hover': {
								backgroundColor: 'primary.dark',
							},
						}}
						disableRipple startIcon={<SendIcon />} variant="contained">Send</Button>
					<Button
						sx={{
							backgroundColor: 'secondary.main',
							'&:hover': {
								backgroundColor: 'secondary.dark',
							},
						}}
						disableRipple endIcon={<SendIcon />} variant="contained">Send</Button>
				</section>
			</Container>

			<SectionHeader title="Button Components"></SectionHeader>
			<div className='mb-3 flex gap-3 flex-col w-fit'>
				<ButtonBar buttonInfo={{
					color: 'secondary', buttons: [
						{ title: 'Print', func: qdev.wait }
					]
				}} />
				<div>
				{/* {buttonBar001Status && (<div className='flex place-items-center font-semibold'>{buttonBar001Status}</div>)} */}
				</div>	
			</div>
			{/* <div className='mb-3 flex gap-3'>
				<ButtonBar buttonInfo={{
					color: 'info', buttons: [
						{ title: 'James', func: () => { setButtonBar002Status('processing James') } },
						{ title: 'Richard', func: () => { setButtonBar002Status('processing Richard') } },
						{ title: 'Angie', func: () => { setButtonBar002Status('processing Angie...') } },
					]
				}} /> {buttonBar002Status && (<div className='flex place-items-center font-semibold'>{buttonBar002Status}</div>)}
			</div> */}
			{/* <div className='mb-3 flex gap-3'>
				<ButtonBar buttonInfo={{
					color: 'primary', buttons: [
						{ title: 'Weekly', func: () => { setButtonBar003Status('set to weekly') } },
						{ title: 'Monthly', func: () => { setButtonBar003Status('set to monthly') } },
						{ title: 'Yearly', func: () => { setButtonBar003Status('set to yearly') } },
					]
				}} /> {buttonBar003Status && (<div className='flex place-items-center font-semibold'>{buttonBar003Status}</div>)}
			</div> */}
			<div>version 7</div>

			<SectionHeader title="Boxes"></SectionHeader>
			<Box sx={{
				width: '100%',
				display: 'flex',
				justifyContent: 'center',
				border: '1px solid #888'

			}}>inside the box</Box>

		</section>
	)
}
