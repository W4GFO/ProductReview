import './Styles/PrimaryContainerStyle.scss'

import {ContainerImage} from './ContainerImage'
import {ContainerContent} from './ContainerContent'

type PrimaryContainerProps = {}

export const PrimaryContainer = (props: PrimaryContainerProps) => {
	return (
		<div className='primary-container'>
			<ContainerImage className='item'/>
			<ContainerContent className='item'/>
		</div>
	)
}