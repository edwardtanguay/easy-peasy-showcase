import { Box, Button } from '@mui/material';

export const PageMui = () => {
	return (
		<section className='page pageMui'>
			<h2>Button</h2>
			<Button variant="contained" color="primary">Test</Button>
			<h2>Box</h2>
			<Box sx={{
				width: '100%',
				display: 'flex',
				justifyContent: 'center',
				border: '1px solid #888'

			}}>inside the box</Box>
		</section>
	)
}
