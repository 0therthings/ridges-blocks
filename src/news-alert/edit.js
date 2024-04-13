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
	RichText,
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
	__experimentalLinkControl as LinkControl
} from '@wordpress/block-editor';

import {
	ToggleControl,
	PanelBody,
	PanelRow,
	Button,
	TextControl,
	Popover
} from '@wordpress/components';

import { useState } from '@wordpress/element';
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
 * @return {WPElement} Element to render.
 */
export default function Edit(props) {
	const { attributes, setAttributes } = props;
	return (
		<>
			<div {...useBlockProps({ className: "news-alert" })}>
				{
					( attributes.imageID > 0 && attributes.isCustomImage && <img className="news-alert__icon" src={ attributes.imageURL } /> ) || <img className="news-alert__icon" src="" />
				}
				<div className="news-alert__content">
					<div className="news-alert__message">
						<RichText
							tagName='p'
							value={ attributes.message }
							allowedFormats={ [ 'core/bold', 'core/italic' ] }
							onChange={ (message) => setAttributes({message}) }
							placeholder="Alert Message"
						/>
					</div>
					{
						attributes.isButtonEnabled &&
						<div className="wp-block-button">
							<a className="wp-block-button__link wp-element-button">{ attributes.buttonText }</a>
						</div>
					}
				</div>
			</div>

			<InspectorControls>
				<PanelBody title="Image Settings" initialOpen={ true }>
					<PanelRow>
						<ToggleControl
							label="Replace Hourglass Image with Custom"
							onChange={ ( isCustomImage ) => setAttributes({ isCustomImage }) }
							checked={ attributes.isCustomImage }
						/>
					</PanelRow>
					{ attributes.isCustomImage &&
						<PanelRow>
							<CustomImageUpload props={ props }/>
						</PanelRow>
					}
				</PanelBody>
				<PanelBody title="Button Settings" initialOpen={ true }>
					<PanelRow>
						<ToggleControl
							label="Enable Button"
							onChange={ ( isButtonEnabled ) => setAttributes({ isButtonEnabled }) }
							checked={ attributes.isButtonEnabled }
						/>
					</PanelRow>
					{
						attributes.isButtonEnabled &&
						
						<>
							<PanelRow>
								<TextControl
									label="Button Text"
									value={ attributes.buttonText }
									onChange={ (buttonText)=>setAttributes({buttonText}) }
								/>
							</PanelRow>
							<PanelRow>
								<CustomButtonOptions props={ props } />
							</PanelRow>
						</>
					}
				</PanelBody>
			</InspectorControls>
		</>
	);
}

function CustomImageUpload({props}) {
	/**
	 * Save the image AFTER it's been selected, and since th media library hands us data about
	 * the new image, save it, which we will load later.
	 *
	 * @param {*} media
	 */
	 let onSelectImage = (media) => {
		if( media.id ) {
			let imageSize = media.sizes['thumbnail'];

			props.setAttributes({
				imageURL: imageSize.url,
				imageID: media.id
			});
		}
	}

	return (
		<MediaUploadCheck>
			<MediaUpload
				onSelect={ onSelectImage }
				allowedTypes={ ['image'] }
				value={ props.attributes.imageID }
				render={ ({open}) => (
					<Button
						className={ props.attributes.imageID ? 'components-button editor-post-featured-image__preview' : 'components-button editor-post-featured-image__toggle' }
						onClick={ open }
					>
						{
							( props.attributes.imageID > 0 && props.attributes.imageURL && <img src={ props.attributes.imageURL } /> ) || "Click to select image"
						}
					</Button>
				) }
			/>
		</MediaUploadCheck>
	);
}

function CustomButtonOptions({props}) {
	const { attributes, setAttributes } = props;
	const [ isVisible, setIsVisible ] = useState( false );
	const toggleVisible = () => { setIsVisible( ( state ) => ! state ); };


	const onChangeLinkControlValue = (nextValue) => {
		console.log("nextValue=",nextValue);
		if (nextValue.url) {
			setAttributes({ buttonURL: nextValue.url });
		}
		if (nextValue.opensInNewTab != undefined) {
			if (nextValue.opensInNewTab === true) {
				setAttributes({ buttonTarget: "_blank" });
			} else {
				setAttributes({ buttonTarget: "_self" });
			}
		}

		if (nextValue.type != undefined) {
			// This means that the <LinkControl> has returned a search result,
			// this will most likely be a 'post' or 'url', but most importantly,
			// it's been verified and submitted, so let's close the input, eh?
			toggleVisible();
		}
	}

	let linkControlOptions = {
		url: attributes.buttonURL,
		title: attributes.buttonText,
		opensInNewTab: attributes.buttonTarget == "_blank" ? true : false,
	};

	const VisibilityControl = (event) => {
		if( !isVisible ) {
			return toggleVisible();
		}

		["dashicons-admin-links", "js-toggle-popover"].forEach(function(v){
			if( event.target.classList.contains(v)) {
				return toggleVisible();
			}
		})
	}

	return (
		<Button onClick={ VisibilityControl } className="js-toggle-popover">
			<span class="dashicons dashicons-admin-generic"></span>
			Button URL Settings
			
			{
				isVisible &&
				<Popover>
					<LinkControl
						value={linkControlOptions}
						onChange={onChangeLinkControlValue}
					/>
				</Popover>
			}
		</Button>
	);
}