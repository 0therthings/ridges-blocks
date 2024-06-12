/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import { InnerBlocks } from '@wordpress/block-editor';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { 
	useBlockProps,
	InspectorControls
} from '@wordpress/block-editor';

import {
	RangeControl,
	Panel,
	PanelRow,
	PanelBody,
	SelectControl
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
 * @return {Element} Element to render.
 */
export default function Edit(props) {
	const { attributes, setAttributes } = props;

	let className = `weighted-grid weighted-grid--spacing-${attributes.spacing} weighted-grid--align-primary-${attributes.alignment}`;

	return (
		<>
			<div { ...useBlockProps({className: className}) }>
					<InnerBlocks
						renderAppender={ InnerBlocks.ButtonBlockAppender }
					/>				
			</div>
			<InspectorControls>
				<Panel header="Grid Options">
					<PanelBody title="Alignment" initialOpen={ true }>
		        <SelectControl
		            value={ attributes.alignment }
		            options={ [
		                { value: "left", label: 'Weighted Left' },
		                { value: "right", label: 'Weighted Right' }
		            ]}
		            onChange={ (alignment) => setAttributes({alignment}) }
		        />
		      </PanelBody>
					<PanelBody title="Spacing" initialOpen={ true }>
		        <RangeControl
	            label="Block Spacing"
	            value={ attributes.spacing }
	            onChange={ ( spacing ) => setAttributes( {spacing} ) }
	            min={ 0 }
	            max={ 6 }
		        />
					</PanelBody>
				</Panel>
			</InspectorControls>
		</>
	);
}
