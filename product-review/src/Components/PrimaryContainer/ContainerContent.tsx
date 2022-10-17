import './Styles/ContainerContent.scss'
import {ContentDisplay} from '../DisplayElements/ContentDisplay'

type ContainerContentProps = {
	className:string
}

export const ContainerContent = ({className}: ContainerContentProps) => {
	const fullClassName:string = className + ' content-container'

	return (
		<div className={fullClassName}>
			<ContentDisplay />
		</div>
	)
}