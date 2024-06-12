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
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

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
		[ 'core/image', 
			{ 
				id: 184, 
				url: 'http://localhost:8888/ridges/wp-content/uploads/2024/05/resource-icon.svg'
				// https://github.com/WordPress/gutenberg/issues/27719
				// Need to localize
			} 
		],
		[ 'core/heading', 
			{ 
				level: 3,
				placeholder: 'Resource Title',
			} 
		],
		[ 'core/buttons', 
			{ 
				'layout':{'type':'flex','justifyContent':'center'}
			} 
		]
	];

	let myClass = ``;

	return (
		<div { ...useBlockProps() }>
			<InnerBlocks template={MY_TEMPLATE} />
		</div>
	);
}
