import './Styles/ContainerImage.scss'
import {ImageDisplay} from '../DisplayElements/ImageDisplay'

type ContainerImageProps = {
	className:string
}

export const ContainerImage = ({className}: ContainerImageProps) => {
	const fullClassName = className + ' image-container'

	return (
		<div className={fullClassName}>
			<ImageDisplay />
		</div>
	)
}