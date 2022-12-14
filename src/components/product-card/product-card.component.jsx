import './product-card.styles.scss';
import { useContext } from 'react';
import { Button, BUTTON_TYPE_CLASSES } from '../button/button.component';
import { CartContext } from '../../context/cart.context';

const ProductCard = (props) => {
  const { product } = props;
  const {
    name, imageUrl, price
  } = product;

  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => {
    addItemToCart(product);
  };
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} clickHandler={addProductToCart}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
