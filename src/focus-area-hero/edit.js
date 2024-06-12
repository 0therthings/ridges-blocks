/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

import icons from './assets/icons';

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
	RichText
} from '@wordpress/block-editor';

import {
	Button,
	PanelBody,
	PanelRow,
	ToolbarGroup,
	ToolbarItem,
	Popover
} from "@wordpress/components";

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

	let myClass = `alignfull`;

	let styles = {
	  "background-image": `url(${attributes.backgroundURL})`
	};

  const onSelectIcon = img => {
      setAttributes( {
          iconID: img.id,
          iconURL: img.url,
      } );
  };
  const onRemoveIcon = () => {
      setAttributes({
          iconID: null,
          iconURL: null,
      });
  }

	return (
		<>
			<div { ...useBlockProps({style: styles, className: myClass}) }>
				<div className="container">
					<div className="focus-area-hero__title-container">
		        { ! attributes.iconID ? (

		            <MediaUpload
		                onSelect={ onSelectIcon }
		                type="image"
		                value={ attributes.iconID }
		                render={ ( { open } ) => (
		                	<div
		                		onClick={ open }
		                		className="focus-area-hero__icon-placeholder"
		                	>
		                		{ icons.placeholder }
		                	</div>
		                ) }
		            >
		            </MediaUpload>

		        ) : (

		            <div class="image-wrapper">

				            <MediaUpload
				                onSelect={ onSelectIcon }
				                type="image"
				                value={ attributes.iconID }
				                render={ ( { open } ) => (
				                	<div
				                		onClick={ open }
				                		className="focus-area-hero__icon"
				                	>
														<img
															src={ attributes.iconURL }
														/>
				                	</div>
				                ) }
				            >
				            </MediaUpload>

		            </div>
		        )} 
						<RichText
							tagName="h1"
							value={attributes.pageTitle}
							onChange={(pageTitle) => setAttributes({ pageTitle })}
							multiline={false}
							placeholder="Page Title"
							allowedFormats={[]}
						/>
					</div>
				</div>
			</div>
			<InspectorControls>
				<PanelBody title="Background Image" initialOpen={true}>
					<PanelRow>
						<UploadBackgroundImage props={props} />
					</PanelRow>
				</PanelBody>
{/*				<PanelBody title="Icon" initialOpen={true}>
					<PanelRow>
						<UploadIcon props={props} />
					</PanelRow>
				</PanelBody>*/}
			</InspectorControls>
		</>
	);
}

function UploadBackgroundImage({ props }) {
	const { attributes, setAttributes } = props;
	const IMAGE_SIZE_TO_USE = "full";

	let onMediaSelection = (media) => {
		if (media.id) {
			let image = media.sizes[IMAGE_SIZE_TO_USE];

			setAttributes({
				backgroundURL: image.url,
				backgroundID: media.id,
			});
		}
	};

	let renderMediaOpenButton = ({ open }) => {
		return (
			<Button
				onClick={open}
				className={
					attributes.backgroundID == 0
						? "editor-post-featured-image__toggle"
						: "editor-post-featured-image__preview"
				}
			>
				{
					// Message for brand-new blocks:
					(!attributes.backgroundID || attributes.backgroundID < 1) &&
						"Click to set header image"
				}

				{attributes.backgroundID > 0 && !!attributes.backgroundURL && (
					<img src={attributes.backgroundURL} alt="" />
				)}
			</Button>
		);
	};

	return (
		<MediaUploadCheck>
			<MediaUpload
				onSelect={onMediaSelection}
				allowedTypes={["image"]}
				value={attributes.backgroundID}
				render={renderMediaOpenButton}
			/>
		</MediaUploadCheck>
	);
}

// function UploadIcon({ props }) {
// 	const { attributes, setAttributes } = props;
// 	const IMAGE_SIZE_TO_USE = "full";

// 	let onMediaSelection = (media) => {
// 		if (media.id) {
// 			let image = media.sizes[IMAGE_SIZE_TO_USE];

// 			setAttributes({
// 				iconURL: image.url,
// 				iconID: media.id,
// 			});
// 		}
// 	};

// 	let renderMediaOpenButton = ({ open }) => {
// 		return (
// 			<Button
// 				onClick={open}
// 				className={
// 					attributes.iconID == 0
// 						? "editor-post-featured-image__toggle"
// 						: "editor-post-featured-image__preview"
// 				}
// 			>
// 				{
// 					// Message for brand-new blocks:
// 					(!attributes.iconID || attributes.iconID < 1) &&
// 						"Click to set header image"
// 				}

// 				{attributes.iconID > 0 && !!attributes.iconURL && (
// 					<img src={attributes.iconURL} alt="" />
// 				)}
// 			</Button>
// 		);
// 	};

// 	return (
// 		<MediaUploadCheck>
// 			<MediaUpload
// 				onSelect={onMediaSelection}
// 				allowedTypes={["image"]}
// 				value={attributes.iconID}
// 				render={renderMediaOpenButton}
// 			/>
// 		</MediaUploadCheck>
// 	);
// }
