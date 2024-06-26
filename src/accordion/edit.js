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
import { InspectorControls, useBlockProps, RichText, InnerBlocks } from '@wordpress/block-editor';

import {
	PanelBody,
	PanelRow,
	SelectControl
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
		[ 'core/paragraph', { placeholder: 'Content details...' } ]
	];

	let myClass = `accordion accordion--${attributes.style}`;

	return (
		<>
			<details { ...useBlockProps({className: myClass}) }>
				<summary>
					<RichText
						tagName="h2"
						multiline={ false }
						value={ attributes.title }
						onChange={ (title) => setAttributes({title}) }
					/>
					<RichText
						tagName="p"
						multiline={ false }
						value={ attributes.supplement }
						placeholder={ __( 'Supplementary Info (Optional)' ) }
						onChange={ (supplement) => setAttributes({supplement}) }
					/>
				</summary>
				<div>
					<InnerBlocks template={MY_TEMPLATE} />
				</div>
			</details>
			<InspectorControls>
				<PanelBody title="Accordion Style" initialOpen={true}>
	        <SelectControl
	            value={ attributes.style }
	            options={ [
	                { value: 'primary', label: 'Primary' },
	                { value: 'secondary', label: 'Secondary' }
	            ]}
	            onChange={ (style) => setAttributes({style}) }
	        />
				</PanelBody>
			</InspectorControls>
		</>
	);
}
