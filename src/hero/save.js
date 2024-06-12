/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

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
	let className = `hero--trail-${attributes.pattern} alignfull`;

	return (
		<>
		<div { ...useBlockProps.save({className: className}) }>
			<div className="hero__content-container container">
				<InnerBlocks.Content />
			</div>
			<svg version="1.1" x="0px" y="0px" viewBox="0 0 1512 261.71" enable-background="new 0 0 1512 261.71" className="hero__path-generator">
			<g className="path-1">
				<path vector-effect="non-scaling-stroke" fill="none" stroke="#DED3C4" stroke-width="37" stroke-miterlimit="10" d="M1530.34,103.73l-367.18-77.15
					c-62.15-13.06-149.99-9.77-195.21,7.3L694.42,137.2c-45.21,17.08-127.9,17.26-183.74,0.41l-71.77-21.66C383.07,99.1,285.93,91.29,223.03,98.59L-67.22,132.3"/>
				<path vector-effect="non-scaling-stroke" fill="none" stroke="#DED3C4" stroke-width="37" d="M1006,31.01c12.42,36.81,56.33,115.39,132.56,135.25c76.23,19.86,325.53,66.83,440.66,87.83"/>
			</g>
			<g className="path-2">
				<path vector-effect="non-scaling-stroke" fill="none" stroke="#DED3C4" stroke-width="37" stroke-miterlimit="10" d="M1532.51,135.28c-70.2,0-124.27,54.49-257.4,54.29c-261.1-0.41-157.13-139.94-384.83-114.28c-278.7,31.42-318.75,114.28-593.31,114.28c-223.11,0-317.48-43.02-317.48-43.02"/>
			</g>
			<g className="path-3">
				<path vector-effect="non-scaling-stroke" fill="none" stroke="#DED3C4" stroke-width="37" stroke-miterlimit="10" d="M1536.82,174.64
					c-435.66,0-452.98-166.53-731.19-135.85C549.9,66.98,560.44,189.25,188.34,189.25c-141.57,0-213.16-1.47-213.16-1.47"/>
				<path vector-effect="non-scaling-stroke" fill="none" stroke="#DED3C4" stroke-width="37" stroke-miterlimit="10" d="M848.54,39.58c0,0-67.99,61.18-42.91,119.73c32.83,76.69,162,76.69,280.21,54.77c111.97-20.75,224.81-53.71,330.42-44.23"/>
			</g>
			<g className="path-4">
				<path vector-effect="non-scaling-stroke" fill="none" stroke="#DED3C4" stroke-width="37" stroke-miterlimit="10" d="M148.46,192.61c98.51,0,271.42,20.95,394.03,0c107.97-18.45,159.48-95.07,315.73-95.07c94.87,0,348.46,95.07,533.02,95.07c119.39,0,209.91-95.07,209.91-95.07"/>
				<path vector-effect="non-scaling-stroke" fill="none" stroke="#DED3C4" stroke-width="37" stroke-miterlimit="10" d="M911.03,103.34c0,0-293.12-59.01-400.93-39.66C321.62,97.54,302.38,192.61,146.12,192.61H-89.15"/>
			</g>
			<g className="path-5">
				<path vector-effect="non-scaling-stroke" fill="none" stroke="#DED3C4" stroke-width="37" stroke-miterlimit="10" d="M1516.5,181.39
					c-427.94,0-329.02-112.04-696.76-112.04c-337.62,0-262.35,96.25-627.86,96.25c-139.07,0-209.39,56.75-209.39,56.75"/>
				<path vector-effect="non-scaling-stroke" fill="none" stroke="#DED3C4" stroke-width="37" stroke-miterlimit="10" d="M-17.5,39.35
					c125.52,106.4,330.94,133.01,438,106.4"/>
				<path vector-effect="non-scaling-stroke" fill="none" stroke="#DED3C4" stroke-width="37" stroke-miterlimit="10" d="M1141.5,124.35c0,0,1.03-76,112.82-76
					c111.78,0,275.18,2.16,275.18,2.16"/>
			</g>
			<g className="path-6">
				<path vector-effect="non-scaling-stroke" fill="none" stroke="#DED3C4" stroke-width="37" stroke-miterlimit="10" d="M1543.71,206.49
					c-71.3,0.82-575.1-1.17-710.32,0.18C568.2,209.31,706.92,42.3,474.17,44.98c-296.3,3.41-69.98,166.64-348.85,169.85c-226.58,2.61-159.04,1.83-159.04,1.83"/>
				<path vector-effect="non-scaling-stroke" fill="none" stroke="#DED3C4" stroke-width="37" stroke-miterlimit="10" d="M920.55,206.26c0,0,28.94-134.75,150.94-136.16l483.65-5.57"/>
			</g>
			</svg>
		</div>
		</>
	);
}
