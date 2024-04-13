/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';
import flower from './assets/flower';

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
	return (
    <figure {...useBlockProps.save({ className: "testimonial" })}>
      { flower }
      <RichText.Content tagName='blockquote' value={ attributes.quote } />
      <figcaption>
        <RichText.Content tagName='cite' value={ attributes.citation } />
      </figcaption>
    </figure>
	);
}
