import React, { useState, useEffect } from 'react';

export const PageResponsive = () => {
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);


	useEffect(() => {
		const handleResize = () => {
			setScreenWidth(window.innerWidth);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<div>
			<h1>Screen Width: {screenWidth}px</h1>
			{/* Example usage: Show content based on screen width */}
			{screenWidth > 768 ? (
				<p className='text-green-900'>The screen is larger than 768px (Desktop View).</p>
			) : (
				<p className='text-red-600'>The screen is 768px or smaller (Mobile View).</p>
			)}
		</div>
	)
}
