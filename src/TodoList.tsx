import Task from './Task';

const task1 = { title: 'task title', done: 'true' };

export default function TodoList() {
	return (
		<>
			<Task title="title 1" active={true} />
			<Task title="title 2" active={false} />
			<Task title="title 3" active={false} />
		</>
	);
}