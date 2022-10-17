import './Styles/ContentDisplayStyle.scss'

import * as DATA from '../../defs'
import * as BsIcons from 'react-icons/bs'

type ContentDisplayProps = {}

export const ContentDisplay = (props: ContentDisplayProps) => {
	const priceItemFlexItemClassname:string = 'price-flex-item'
	const contentFlexItemClassname:string = 'content-flex-item'
	const articleFlexItemClassname:string = 'article-flex-item'

	return (
		<>
			<div className='content-display'>
				<article className={{contentFlexItemClassname} + ' article-container'}>
					<p className={{articleFlexItemClassname} + ' product-type'}>{DATA.PROD_TYPE}</p>
					<p className={{articleFlexItemClassname} + ' product-title'}>{DATA.TITLE}</p>
					<p className={{articleFlexItemClassname} + ' product-message'}>{DATA.MSG}</p>

					<div className={{articleFlexItemClassname} + ' price-items'}>
						<span className={{priceItemFlexItemClassname} + ' new-price'}>${DATA.CURRENT_PRICE}</span>
						<span className={{priceItemFlexItemClassname} + ' old-price'}>${DATA.OLD_PRICE}</span>
					</div>
				</article>

				<button className={{contentFlexItemClassname} + ' add-cart-btn'} onClick={() => console.log("Added to cart")}>
					<BsIcons.BsCart2 className='btn-icon'></BsIcons.BsCart2>
					<span className='btn-text'>{DATA.BTN_PROMPT}</span>
				</button>
			</div>
		</>
	)
}