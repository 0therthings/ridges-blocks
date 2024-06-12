/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InnerBlocks, RichText } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save(props) {
	const {attributes} = props;
	let myClass = `alignfull`;

	return (
		<div { ...useBlockProps.save({className: myClass}) }>
			<div className="home-hero__img-column">
				<div className="home-hero__img-wrapper">
					<img src={attributes.imageURL} />
					<svg className="home-hero__path-2 home-hero__path-2--mobile" viewBox="0 0 849.63 472.66">
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
				{ attributes.attribution && <RichText.Content tagName="p" value={ attributes.attribution } className="home-hero__img-attribution" /> }
			</div>
			<div className="container">
				<div className="home-hero__content-container">
					<InnerBlocks.Content />
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
