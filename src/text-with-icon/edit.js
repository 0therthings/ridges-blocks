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
	InspectorControls, 
	useBlockProps, 
	RichText, 
	InnerBlocks,
	MediaUploadCheck,
	MediaUpload
} from '@wordpress/block-editor';

import {
	PanelBody,
	PanelRow,
	SelectControl,
	RangeControl,
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
	const MY_TEMPLATE = [
		[ 'core/paragraph', 
			{ 
				placeholder: 'Text content...',
			} 
		]
	];

	let myClass = `text-with-icon--vertical-align-${attributes.vertical_alignment}`;
	// let iconSize = `--icon-size: ${ attributes.iconID_size };`;
	let styles = {
	  "--icon-size": `${attributes.icon_size}px`
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
        { ! attributes.iconID ? (

            <MediaUpload
                onSelect={ onSelectIcon }
                type="image"
                value={ attributes.iconID }
                render={ ( { open } ) => (
                	<div
                		onClick={ open }
                		className="text-with-icon__icon-placeholder"
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
		                		className="text-with-icon__icon"
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
        <div className="text-with-icon__content">
					<InnerBlocks template={MY_TEMPLATE} />
				</div>
			</div>
			<InspectorControls>
				<PanelBody title="Icon Alignment" initialOpen={true}>
	        <SelectControl
	            value={ attributes.vertical_alignment }
	            options={ [
	                { value: 'top', label: 'Top' },
	                { value: 'center', label: 'Center' }
	            ]}
	            onChange={ (vertical_alignment) => setAttributes({vertical_alignment}) }
	        />
				</PanelBody>
				<PanelBody title="Icon Size" initialOpen={ true }>
	        <RangeControl
            value={ attributes.icon_size }
            onChange={ ( icon_size ) => setAttributes( {icon_size} ) }
            min={ 10 }
            max={ 180 }
	        />
	      </PanelBody>
			</InspectorControls>
		</>
	);
}
