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
  InnerBlocks 
} from '@wordpress/block-editor';

import {
  Panel,
  PanelBody,
  PanelRow,
  ColorPalette,
  BaseControl,
  Button,
  ButtonGroup
} from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import _ from "lodash";

import svg from './frame';

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

  const POSSIBLE_COLORS = [
    { name: "sand", color: "#C8B18F" },
    { name: "green", color: "#234011" },
  ];

  const HEADING_TEMPLATE = [
    [ 'core/heading', {
      'level': 2,
      'placeholder': 'Page Title',
      'className': 'framed-heading__text',
      'textAlign': 'center'
    } ],
  ];

  function ArcColorToggle({ props, colors }) {
    let { attributes, setAttributes } = props;

    let borderColorPalette = _.find(colors, { name: attributes.borderColor });

    const onBorderColorChange = (color) => {
      // 1.) turn "color" from hex into actual color object from colors
      let foundPalette = _.find(colors, { color: color });

      if (foundPalette && !!foundPalette.name) {
        // 4.) update attributes with new color
        setAttributes({ borderColor: foundPalette.name });
      }
    };

    return (
      <>
        <div>
          <BaseControl label="Frame Color">
            <ColorPalette
              colors={colors}
              value={borderColorPalette.color}
              onChange={onBorderColorChange}
              disableCustomColors={true}
              clearable={false}
            />
          </BaseControl>
        </div>
      </>
    );
  }

  let currentBorderHex = _.find(POSSIBLE_COLORS, { name: attributes.borderColor });
  console.log(currentBorderHex['color']);
  let currentBorderColor = {
    '--border-color': currentBorderHex['color']
  };

	return (
    <>
      <div {...useBlockProps({ className: "framed-heading-container", style: currentBorderColor })}>
        {svg.frame}
        <InnerBlocks template={HEADING_TEMPLATE} />
      </div>
      <InspectorControls>
        <PanelBody title="Colors" initialOpen={true}>
          <ArcColorToggle props={props} colors={POSSIBLE_COLORS} />
        </PanelBody>
      </InspectorControls>
    </>
	);
}
