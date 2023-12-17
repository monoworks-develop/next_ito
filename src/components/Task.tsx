export type TaskProps = {
	task: {
		id: number,
		title?: string,
		state?: string
	},
	onArchiveTask: boolean,
	onPinTask: boolean,
}


export default function Task({...props}: TaskProps) {
	return (
		<div>
			<input type="text" value={props.task.title}></input>
		</div>
	)
}