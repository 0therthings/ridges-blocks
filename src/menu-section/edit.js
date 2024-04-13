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
  InnerBlocks
} from '@wordpress/block-editor';

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
  const ITEMS_TEMPLATE = [
    [ 'sojourn/menu-item' ]
  ];
  const ALLOWED_BLOCKS = [ 'sojourn/menu-item' ];

	return (
		<div {...useBlockProps({ className: "menu-section" })}>
      <div className="menu-section__intro">
        <RichText
          tagName="h2"
          multiline={ false }
          placeholder={ __( 'Section Title', 'sojourn' ) }
          value={ attributes.title }
          onChange={ (title) => setAttributes({title}) }
        />
        <RichText
          tagName="div"
          multiline="p"
          placeholder={ __( 'Section description...', 'sojourn' ) }
          value={ attributes.description }
          onChange={ (description) => setAttributes({description}) }
        />
      </div>
      <div className="menu-section__items">
        <InnerBlocks template={ITEMS_TEMPLATE} allowedBlocks={ ALLOWED_BLOCKS } />
      </div>
		</div>
	);
}
