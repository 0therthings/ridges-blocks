/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { 
	useBlockProps,
	RichText,
	InnerBlocks
} from '@wordpress/block-editor';

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

	let myClass;
	if(attributes.meetInfo) {
		myClass = `has-meeting-info`;
	}
	
	return (
		<div { ...useBlockProps.save({className: myClass}) }>
			{ attributes.imageID && ( 
				<div className="hike-preview__img-wrapper">
					<img className="hike-preview__img" src={attributes.imageURL} />
				</div>
				)
			}
			<div className="hike-preview__content-wrapper">
				<InnerBlocks.Content />
			</div>
{/*			{ attributes.meetInfo && ( 
				<div className="hike-preview__location-wrapper">
					<RichText.Content tagName="h4" value={ attributes.meetTitle } />
					<RichText.Content tagName="p" value={ attributes.meetInfo } />
				</div>
				)
			}*/}
			<div className="hike-preview__location-wrapper">
				<RichText.Content tagName="h4" value={ attributes.meetTitle } />
{/*				<div className="hike-preview__meet-info">
					{attributes.meetInfo}
				</div>*/}
				<RichText.Content tagName="p" value={ attributes.meetInfo } />
			</div>
		</div>
	);
}
