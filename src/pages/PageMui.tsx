import { Box, Button, ButtonGroup, Container } from '@mui/material';
import { Typography } from "@mui/material";
import { SectionHeader } from '../components/SectionHeader';
import ConstructionIcon from '@mui/icons-material/Construction';
import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined';

export const PageMui = () => {
	return (
		<section className='page pageMui'>
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
				<ConstructionOutlinedIcon color="secondary"/>
				<ConstructionOutlinedIcon color="primary" fontSize="large"/>
				<ConstructionOutlinedIcon color="primary" fontSize="small"/>
			</Container>

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