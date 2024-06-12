/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

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
	const {attributes} = props;
	let myClass = `text-with-icon--vertical-align-${attributes.vertical_alignment}`;
	let styles = {
	  "--icon-size": `${attributes.icon_size}px`
	};

	return (
		<div { ...useBlockProps.save({style: styles, className: myClass}) }>
			{ attributes.iconID && <img className="text-with-icon__icon" src={attributes.iconURL} /> }
			<div className="text-with-icon__content">
				<InnerBlocks.Content />
			</div>
		</div>
	);
}
