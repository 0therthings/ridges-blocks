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
import { InspectorControls, useBlockProps, InnerBlocks } from '@wordpress/block-editor';

/**
 * This package includes a library of generic WordPress components to be used for
 * creating common UI elements shared between screens and features of the WordPress dashboard.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-components/
 */
import {
	PanelBody,
	PanelRow,
	ColorPalette,
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

	const styles = {
	  "--background-color": attributes.backgroundColor
	};

  const POSSIBLE_COLORS = [
      { name: 'Dark Forest', color: '#16423F' },
      { name: 'Dark Taupe', color: '#DED3C4' },
      { name: 'Light Green', color: '#A8D272' },
  ];

	const MY_TEMPLATE = [
		[ 'core/heading', 
			{ 
				textAlign: 'left',
				level: 2,
				placeholder: 'Section Title',
			} 
		],
		[ 'core/buttons' ]
	];

	let myClass = `alignfull`;

	return (
		<>
			<div { ...useBlockProps( { style: styles, className: myClass } ) } data-align="full">
				<div className="container">
					<div className="heading-with-button__content">
						<InnerBlocks template={MY_TEMPLATE} />
					</div>
				</div>
			</div>
			<InspectorControls>
				<PanelBody title="Band Colors" initialOpen={true}>
	        <ColorPalette
	            colors={ POSSIBLE_COLORS }
	            value={ attributes.backgroundColor }
	            onChange={ ( backgroundColor ) => setAttributes({backgroundColor}) }
	        />
				</PanelBody>
			</InspectorControls>
		</>
	);
}
