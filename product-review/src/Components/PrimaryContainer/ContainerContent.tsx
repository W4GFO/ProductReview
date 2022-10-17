import './Styles/ContainerContent.scss'

type ContainerContentProps = {
	className:string
}

export const ContainerContent = ({className}: ContainerContentProps) => {
	const fullClassName:string = className + ' content-container'

	return (
		<div className={fullClassName}>
			
		</div>
	)
}