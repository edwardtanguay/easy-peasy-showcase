interface IProps {
	title: string;
	visible: boolean;
}
export const PropTestBox = ({title, visible}: IProps) => {
	return (
		<div className="bg-gray-600 text-gray-200 mt-3 p-3 w-[12rem]">
			<h3 className="text-xl font-bold">{title}</h3>
			<p>Value of visible is: <span className="text-yellow-300">{visible ? 'TRUE' : 'false'}</span></p>
		</div>
	)
}