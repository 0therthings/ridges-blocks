/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText, InnerBlocks } from '@wordpress/block-editor';

/**
 * Custom images
 */
import chefIcon from './assets/img/chefs-rec.svg';
import glutenIcon from './assets/img/gluten-free.svg';
import vegetarianIcon from './assets/img/vegetarian.svg';
import veganIcon from './assets/img/vegan.svg';

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
    <div {...useBlockProps.save({ className: "menu-item" })}>
      <div className="menu-item__heading">
        <RichText.Content tagName='h3' value={ attributes.title } />
        <RichText.Content tagName='span' value={ attributes.price } />
      </div>
      <InnerBlocks.Content />
      <div className="menu-item__categories">
          {
            ( attributes.recControl && 
              <div className="menu-item__category">
                <img src={chefIcon} title="Chef's Recommendation" />
                <span className="visually-hidden">Chef's Recommendation</span>
              </div>
            )
          }
          {
            ( attributes.glutenControl && 
              <div className="menu-item__category">
                <img src={glutenIcon} title="Gluten Free" />
                <span className="visually-hidden">Gluten Free</span>
              </div>
            )
          }
          {
            ( attributes.vegetarianControl && 
              <div className="menu-item__category">
                <img src={vegetarianIcon} title="Vegetarian" />
                <span className="visually-hidden">Vegetarian</span>
              </div>
            )
          }
          {
            ( attributes.veganControl && 
              <div className="menu-item__category">
                <img src={veganIcon} title="Vegan" />
                <span className="visually-hidden">Vegan</span>
              </div>
            )
          }
      </div>
    </div>
	);
}
