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
  InnerBlocks,
  InspectorControls,
} from '@wordpress/block-editor';

import {
  Panel,
  PanelBody,
  PanelRow,
  CheckboxControl,
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
 * Custom images
 */
import chefIcon from './assets/img/chefs-rec.svg';
import glutenIcon from './assets/img/gluten-free.svg';
import vegetarianIcon from './assets/img/vegetarian.svg';
import veganIcon from './assets/img/vegan.svg';

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
  const DESCRIPTION_TEMPLATE = [
    [ 'core/paragraph', { 'placeholder': 'Menu item description...', 'className': 'menu-item__description' } ],
    [ 'core/paragraph', {
      'className': 'has-small-font-size',
      'placeholder': 'Optional additions...'
    } ],
  ];

	return (
    <>
      <InspectorControls>
        <PanelBody
          title={__("Designations", "sojourn")}
          initialOpen={true}
        >
          <PanelRow>
            <CheckboxControl
              label={__("Chef's Recommendation", "sojourn")}
              checked={ attributes.recControl }
              onChange={recControl => setAttributes({ recControl })}
            />
          </PanelRow>
          <PanelRow>
            <CheckboxControl
              label={__("Gluten Free", "sojourn")}
              checked={ attributes.glutenControl }
              onChange={glutenControl => setAttributes({ glutenControl })}
            />
          </PanelRow>
          <PanelRow>
            <CheckboxControl
              label={__("Vegetarian", "sojourn")}
              checked={ attributes.vegetarianControl }
              onChange={vegetarianControl => setAttributes({ vegetarianControl })}
            />
          </PanelRow>
          <PanelRow>
            <CheckboxControl
              label={__("Vegan", "sojourn")}
              checked={ attributes.veganControl }
              onChange={veganControl => setAttributes({ veganControl })}
            />
          </PanelRow>
        </PanelBody>
      </InspectorControls>

      <div {...useBlockProps({ className: "menu-item" })}>
        <div className="menu-item__heading">
          <RichText
            tagName="h3"
            multiline={ false }
            value={ attributes.title }
            onChange={ (title) => setAttributes({title}) }
          />
          <RichText
            tagName="span"
            multiline={ false }
            value={ attributes.price }
            onChange={ (price) => setAttributes({price}) }
          />
        </div>
        <InnerBlocks template={DESCRIPTION_TEMPLATE} />
        <div className="menu-item__categories">
          {
            ( attributes.recControl && 
              <div className="menu-item__category">
                <img src={chefIcon} />
                <span className="visually-hidden">Chef's Recommendation</span>
              </div>
            )
          }
          {
            ( attributes.glutenControl && 
              <div className="menu-item__category">
                <img src={glutenIcon} />
                <span className="visually-hidden">Gluten Free</span>
              </div>
            )
          }
          {
            ( attributes.vegetarianControl && 
              <div className="menu-item__category">
                <img src={vegetarianIcon} />
                <span className="visually-hidden">Vegetarian</span>
              </div>
            )
          }
          {
            ( attributes.veganControl && 
              <div className="menu-item__category">
                <img src={veganIcon} />
                <span className="visually-hidden">Vegan</span>
              </div>
            )
          }
        </div>
      </div>
    </>
	);
}
