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
	let className = `photo-banner alignfull photo-banner--${attributes.blockAlignment}`;

	return (
		<div { ...useBlockProps.save({className: className}) }>
			<div className="photo-banner__bg-container">
				<img src={attributes.imageURL} alt={attributes.imageAlt} />
			</div>
			<div className="photo-banner__inner-wrapper">
				<div className="photo-banner__content">
					<div className="photo-banner__content-container">
						<InnerBlocks.Content />
					</div>
				</div>
			</div>
		</div>
	);
}
