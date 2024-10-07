import { useState } from "react"
import { PropTestBox } from "../components/PropTestBox"

export const PagePropTest = () => {
	const [showTheBox, setShowTheBox] = useState(true);

	const toggleShowTheBox = () => {
		setShowTheBox(!showTheBox);
	}

	return (
		<>
			<h2>Below is a component which changes a variable in its parent.</h2>
			<PropTestBox title="This is the title" visible={showTheBox} toggleVisible={toggleShowTheBox} />
		</>
	)
}
