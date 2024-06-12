/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { 
	useBlockProps,
	InspectorControls,
	MediaUploadCheck,
	MediaUpload,
	InnerBlocks,
  BlockControls,
  BlockAlignmentToolbar
} from '@wordpress/block-editor';

import {
	PanelBody,
	PanelRow,
	Button
} from "@wordpress/components";

import { Buttons } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit(props) {
	const { attributes, setAttributes } = props;

	if (!attributes.imageURL) {
		setAttributes({
			imageURL: "https://source.unsplash.com/random?sig=" + Math.floor(Math.random() * 100),
			imageID: 0,
			imageAlt: "",
		});
	}

	const MY_TEMPLATE = [
		[ 'core/heading', 
			{ 
				level: 2,
				placeholder: 'Section Title',
				textColor: 'white',
				fontFamily: 'proxima',
				style: {
					typography: {
						fontWeight: "700",
						fontSize: "36px"
					}
				}
			} 
		],
		[ 'core/paragraph', 
			{ 
				placeholder: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget risus vitae massa semper aliquam quis mattis quam. Morbi vitae tortor tempus, placerat leo et, suscipit lectus.',
				textColor: 'white',
			} 
		],
		[ 'core/button', 
			{
				textAlign: 'center',
				style: {
					color: {
						background: "hsl(176deg 73% 9%)"
					}
				},
				borderColor: "hsl(176deg 73% 9%)"
			}
		]
	];

	let myClass = `photo-banner alignfull photo-banner--${attributes.blockAlignment}`;

	return (
		<>
      <BlockControls>
        <BlockAlignmentToolbar
         	value={ attributes.blockAlignment }
          onChange={ nextAlign => setAttributes( { blockAlignment: nextAlign } ) }
          controls={ [ 'left', 'center', 'right' ] }
        />
      </BlockControls>
			<div { ...useBlockProps({className: myClass}) }>
				<div className="photo-banner__bg-container">
					<img src={attributes.imageURL} alt={attributes.imageAlt} />
				</div>
				<div className="photo-banner__content">
					<div className="photo-banner__content-container">
						<InnerBlocks template={MY_TEMPLATE} />
					</div>
				</div>
			</div>
			<InspectorControls>
				<PanelBody title="Image Settings" initialOpen={true}>
					<PanelRow>
						<BackgroundUploader {...props} />
					</PanelRow>
				</PanelBody>
			</InspectorControls>
		</>
	);
}

// function getEditWrapperProps( { blockAlignment } ) {
//     if ( 'left' === blockAlignment || 'right' === blockAlignment || 'full' === blockAlignment ) {
//         return { 'data-align': blockAlignment };
//     }
// }

function BackgroundUploader(props) {
	const { attributes, setAttributes } = props;
	const IMAGE_SIZE_TO_USE = "full";

	let onMediaSelection = (media) => {
		if (media.id) {
			let image = media.sizes[IMAGE_SIZE_TO_USE];

			setAttributes({
				imageURL: image.url,
				imageID: media.id,
				imageAlt: image.alt,
			});
		}
	};

	let renderMediaOpenButton = ({ open }) => {
		return (
			<Button
				onClick={open}
				className={
					attributes.imageID == 0
						? "editor-post-featured-image__toggle"
						: "editor-post-featured-image__preview"
				}
			>
				{
					// Message for brand-new blocks:
					(!attributes.imageID || attributes.imageID < 1) &&
						"Click to set Photo"
				}

				{attributes.imageID > 0 && !!attributes.imageURL && (
					<img src={attributes.imageURL} alt="" />
				)}
			</Button>
		);
	};

	return (
		<MediaUploadCheck>
			<MediaUpload
				onSelect={onMediaSelection}
				allowedTypes={["image"]}
				value={attributes.imageID}
				render={renderMediaOpenButton}
			/>
		</MediaUploadCheck>
	);
}
