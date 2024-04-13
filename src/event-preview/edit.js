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
  useBlockProps,
  InnerBlocks,
  MediaUpload,
  MediaUploadCheck 
} from '@wordpress/block-editor';

import {
  Button 
} from '@wordpress/components';

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
  const DESCRIPTION_TEMPLATE = [
    [ 'core/paragraph', {
      'className': 'has-small-font-size',
      'placeholder': 'January 1, 20XX'
    } ],
    [ 'core/heading', {
      'level': 3,
      'placeholder': 'Event Title',
      'className': 'event-preview__title'
    } ],
    [ 'core/paragraph', { 'placeholder': 'Event description...', 'className': 'event-preview__description' } ],
    [ 'core/buttons' ],
  ];

  const onSelectImage = img => {
      setAttributes( {
          imgID: img.id,
          imgURL: img.url,
          imgAlt: img.alt,
      } );
  };
  const onRemoveImage = () => {
      setAttributes({
          imgID: null,
          imgURL: null,
          imgAlt: null,
      });
  }

	return (
		<div { ...useBlockProps({ className: "event-preview" }) }>
			<div className="event-preview__image">
        { ! attributes.imgID ? (

            <MediaUpload
                onSelect={ onSelectImage }
                type="image"
                value={ attributes.imgID }
                render={ ( { open } ) => (
                    <Button
                        className={ "button button-large button-upload" }
                        onClick={ open }
                    >
                      { icons.upload }
                        { __( ' Upload Image', 'sojourn' ) }
                    </Button>
                ) }
            >
            </MediaUpload>

        ) : (

            <div class="image-wrapper">
                <img
                    src={ attributes.imgURL }
                    alt={ attributes.imgAlt }
                />

                <Button
                    className="remove-image"
                    onClick={ onRemoveImage }
                >
                  { icons.remove }
                </Button>

            </div>
        )}  
      </div>
      <div className="event-preview__content">
        <InnerBlocks template={DESCRIPTION_TEMPLATE} />
      </div>
		</div>
	);
}
