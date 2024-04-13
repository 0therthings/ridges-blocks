/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save(props) {
	const { attributes } = props;
	return (
		<div {...useBlockProps.save({ className: "news-alert" })}>
			{
				( attributes.imageID > 0 && attributes.isCustomImage && <img className="news-alert__icon" src={ attributes.imageURL } /> ) || <img className="news-alert__icon" src="" />
			}
			<div className="news-alert__content">
				<div className="news-alert__message">
					<RichText.Content tagName='p' value={ attributes.message } />
				</div>
				{
					attributes.isButtonEnabled &&
					<>
						<div className="wp-block-button">
							<a className="wp-block-button__link wp-element-button" href={ attributes.buttonURL } target={ attributes.buttonTarget } rel='noreferrer noopener'>Learn more</a>
						</div>
					</>
				}
			</div>
		</div>
	);
}
