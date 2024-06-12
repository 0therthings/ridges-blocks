/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { 
	useBlockProps,
	RichText 
} from '@wordpress/block-editor';

import { useState } from '@wordpress/element';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save(props) {
	const { attributes } = props;

	let myClass = `alignfull`;

	let styles = {
	  "background-image": `url(${attributes.backgroundURL})`
	};

	return (
		<div { ...useBlockProps.save({style: styles, className: myClass}) }>
			<div className="container">
				<div className="focus-area-hero__title-container">
					{ attributes.iconID && <img className="focus-area-hero__icon" src={attributes.iconURL} /> }
					<RichText.Content tagName="h1" value={ attributes.pageTitle } />
				</div>
			</div>
		</div>
	);
}
