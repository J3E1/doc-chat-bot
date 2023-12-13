import ProjectItem from './ProjectItem';

export default function ProjectList() {
	return (
		<div className='grid md:grid-cols-3 grid-cols-2 gap-3'>
			<ProjectItem />
			<ProjectItem />
			<ProjectItem />
			<ProjectItem />
			<ProjectItem />
			<ProjectItem />
			<ProjectItem />
		</div>
	);
}
