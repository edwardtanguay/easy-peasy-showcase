import { FaArrowRightLong } from "react-icons/fa6";

export const PageAbout = () => {
	return (
		<>
		<h2 className="text-2xl mb-3">About This Site</h2>
			<p className="mb-2">See repo for this site here <FaArrowRightLong className="inline-block" /> <a href="https://github.com/edwardtanguay/newtech2024" target="_blank" className="underline">https://github.com/edwardtanguay/newtech2024</a></p>
			<p>See more of my projects here <FaArrowRightLong className="inline-block" /> <a href="https://tanguay-eu.vercel.app/howtos" target="_blank" className="underline">https://tanguay-eu.vercel.app/howtos</a></p>
		</>
	)
}
