/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

import svg from './frame';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save(props) {
  const { attributes } = props;

  const POSSIBLE_COLORS = [
    { name: "sand", color: "#C8B18F" },
    { name: "green", color: "#234011" },
  ];

  let currentBorderHex = _.find(POSSIBLE_COLORS, { name: attributes.borderColor });
  console.log(currentBorderHex['color']);
  let currentBorderColor = {
    '--border-color': currentBorderHex['color']
  };

	return (
    <div {...useBlockProps.save({ className: "framed-heading-container", style: currentBorderColor })}>
      {svg.frame}
  		<InnerBlocks.Content />
    </div>
	);
}
