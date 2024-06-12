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
import { useBlockProps, InnerBlocks, MediaUploadCheck, MediaUpload, RichText } from '@wordpress/block-editor';

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
		[ 'core/heading', 
			{ 
				level: 3,
				placeholder: 'Hike Title',
				style: {
					typography: {
						fontStyle: 'normal',
						fontWeight: '700',
						fontSize: '16px'
					}
				},
				textColor: 'taupe',
				fontFamily: 'proxima'
			} 
		],
		[ 'core/paragraph', 
			{ 
				placeholder: 'Hike description or registration requirements...',
				style: {
					typography: {
						fontSize: '16px'
					}
				},
				textColor: 'taupe'
			} 
		],
		[ 'ridges/text-with-icon', 
			{ 
				'iconID': 303,
				'iconURL': 'http://localhost:8888/ridges/wp-content/uploads/2024/05/calendar-icon-sm.svg'
			},
			[
				[ 'core/paragraph', 
					{ 
						placeholder: 'Date information',
						style: {
							typography: {
								fontSize: '14px'
							}
						},
						textColor: 'taupe'
					} 
				]
			]
		],
		[ 'core/buttons', 
			{ 
				'layout':{'type':'flex','justifyContent':'center'}
			},
			[
				[ 'core/button', 
					{ 
						placeholder: 'Register',
						backgroundColor: 'forest-light',
						style: {
							border: {
								width: '1px'
							}
						},
						borderColor: 'forest-light',
						className: 'is-style-fill'
					} 
				]
			]
		]
	];

	let myClass = ``;

  const onSelectImage = img => {
      setAttributes( {
          imageID: img.id,
          imageURL: img.url,
      } );
  };
  const onRemoveImage = () => {
      setAttributes({
          imageID: null,
          imageURL: null,
      });
  }

	return (
		<div { ...useBlockProps() }>
			<div className="hike-preview__img-wrapper">
				{ ! attributes.imageID ? (

				    <MediaUpload
				        onSelect={ onSelectImage }
				        type="image"
				        value={ attributes.imageID }
				        render={ ( { open } ) => (
				        	<img
				        		onClick={ open }
				        		className="hike-preview__img hike-preview__img-placeholder"
				        		src="https://source.unsplash.com/random"
				        	/ >
				        ) }
				    >
				    </MediaUpload>

				) : (

		        <MediaUpload
		            onSelect={ onSelectImage }
		            type="image"
		            value={ attributes.imageID }
		            render={ ( { open } ) => (
				        	<img
				        		onClick={ open }
				        		className="hike-preview__img"
				        		src={ attributes.imageURL }
				        	/ >
		            ) }
		        >
		        </MediaUpload>

				)} 
			</div>
			<div className="hike-preview__content-wrapper">
				<InnerBlocks template={MY_TEMPLATE} />
			</div>
			<div className="hike-preview__location-wrapper">
				<RichText
					tagName="h4"
					value={attributes.meetTitle}
					onChange={(meetTitle) => setAttributes({ meetTitle })}
					multiline={false}
					allowedFormats={[]}
				/>
				<div>
				<RichText
					tagName="p"
					value={attributes.meetInfo}
					onChange={(meetInfo) => setAttributes({ meetInfo })}
					multiline={true}
					allowedFormats={ [ 'core/bold', 'core/italic' ] }
					placeholder="Ridges location..."
				/>
				</div>
			</div>
		</div>
	);
}
