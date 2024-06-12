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
				level: 1,
				placeholder: 'Page Title',
			} 
		],
		[ 'core/paragraph', 
			{
				level: 1,
				placeholder: 'Page Title',
			} 
		],
		[ 'core/buttons', 
			{ 
				'layout':{'type':'flex','justifyContent':'left'}
			} 
		]
	];

	let myClass = `alignfull`;

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
		<div { ...useBlockProps({className: myClass}) }>
			<div className="home-hero__img-column">
				<div className="home-hero__img-wrapper">
					<img src="https://source.unsplash.com/random" />
					{ ! attributes.imageID ? (

					    <MediaUpload
					        onSelect={ onSelectImage }
					        type="image"
					        value={ attributes.imageID }
					        render={ ( { open } ) => (
					        	<img
					        		onClick={ open }
					        		className="home-hero__img home-hero__img-placeholder"
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
					        		className="home-hero__img"
					        		src={ attributes.imageURL }
					        	/ >
			            ) }
			        >
			        </MediaUpload>

					)}
					<svg className="home-hero__path-2 home-hero__path-2--mobile" data-name="Layer 1"  viewBox="0 0 849.63 472.66">
					  <defs>
					    <linearGradient id="linear-gradient" x1="0" y1="236.33" x2="849.63" y2="236.33" gradientUnits="userSpaceOnUse">
					      <stop offset="0" stop-color="#efc65f"/>
					      <stop offset="1" stop-color="#9cd563"/>
					    </linearGradient>
					    <linearGradient id="linear-gradient-2" x1="304.18" y1="284.22" x2="768.73" y2="284.22" gradientUnits="userSpaceOnUse">
					      <stop offset="0" stop-color="#d3ca60"/>
					      <stop offset="1" stop-color="#9cd563"/>
					    </linearGradient>
					  </defs>
					  <path d="M7.4,455.17c208.12-88.06,332.65-165.71,397.04-256.16C538.93,10.08,694.23,232.62,833.52,10.08" fill="none" stroke="url(#linear-gradient)" stroke-miterlimit="10" stroke-width="38"/>
					  <path d="M315.63,288.8c74.41-56.17,320.28-105.81,437.84,52.69" fill="none" stroke="url(#linear-gradient-2)" stroke-miterlimit="10" stroke-width="38"/>
					</svg>
				</div>
				<RichText
					tagName="p"
					className="home-hero__img-attribution"
					value={attributes.attribution}
					onChange={(attribution) => setAttributes({ attribution })}
					multiline={false}
					placeholder="Attribution (optional)"
					allowedFormats={[]}
				/>
			</div>
			<div className="container">
				<div className="home-hero__content-container">
					<InnerBlocks template={MY_TEMPLATE} />
				</div>
			</div>

			<svg className="home-hero__path-1" version="1.1" viewBox="0 0 5139.24 1599.41">
			  <defs>
			    <linearGradient id="linear-gradient-5" x1="0" y1="462.34" x2="5025.58" y2="462.34" gradientUnits="userSpaceOnUse">
			      <stop offset=".75" stop-color="#e48b3a"/>
			      <stop offset=".91" stop-color="#efc65f"/>
			    </linearGradient>
			  </defs>
			  <path d="M5005.16,339.8c16.63,128.27-114.01,384.8-296.23,401.09-233.81,12.51-379.69,216.97-418.74,375.35-39.05,158.38-253.33,32.67-386.2-138.86-123.23-159.08-357.88-59.64-447.72-4.87-120.56,73.5-501.78,335.24-836.92,255.63-335.14-79.62-299.56-927.59-510.31-509.57-158.88,315.13-323.79,280.7-376.88,246.51S686.42,439.23,5.19,632.57" fill="none" stroke="url(#linear-gradient-5)" stroke-miterlimit="10" vector-effect="non-scaling-stroke" />
			</svg>
			<svg className="home-hero__path-1-loop" viewBox="0 0 430.69 368.01">
			  <defs>
			    <linearGradient id="linear-gradient-6" x1="0" y1="184.01" x2="430.69" y2="184.01" gradientUnits="userSpaceOnUse">
			      <stop offset="0" stop-color="#e9ac50"/>
			      <stop offset=".57" stop-color="#efc65f"/>
			    </linearGradient>
			  </defs>
			  <path d="M17.55,360.74c30.03-72.51,180.69-72.86,258.92-151.18,78.23-78.33,93.51-178.94,150.27-190.97" fill="none" stroke="url(#linear-gradient-6)" stroke-miterlimit="10" vector-effect="non-scaling-stroke" />
			</svg>
			<div className="home-hero__path-secondary-container">
				<svg className="home-hero__path-2 home-hero__path-2--desktop" data-name="Layer 1"  viewBox="0 0 849.63 472.66">
				  <defs>
				    <linearGradient id="linear-gradient-3" x1="0" y1="236.33" x2="849.63" y2="236.33" gradientUnits="userSpaceOnUse">
				      <stop offset="0" stop-color="#efc65f"/>
				      <stop offset="1" stop-color="#9cd563"/>
				    </linearGradient>
				    <linearGradient id="linear-gradient-4" x1="304.18" y1="284.22" x2="768.73" y2="284.22" gradientUnits="userSpaceOnUse">
				      <stop offset="0" stop-color="#d3ca60"/>
				      <stop offset="1" stop-color="#9cd563"/>
				    </linearGradient>
				  </defs>
				  <path d="M7.4,455.17c208.12-88.06,332.65-165.71,397.04-256.16C538.93,10.08,694.23,232.62,833.52,10.08" fill="none" stroke="url(#linear-gradient-3)" stroke-miterlimit="10" vector-effect="non-scaling-stroke" />
				  <path d="M315.63,288.8c74.41-56.17,320.28-105.81,437.84,52.69" fill="none" stroke="url(#linear-gradient-4)" stroke-miterlimit="10" vector-effect="non-scaling-stroke" />
				</svg>
			</div>
		</div>
	);
}
