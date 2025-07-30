import PropTypes from "prop-types";

function Website({ image, name, price, button, onAddToCart }) {
    return (
        <div className="complete">
            <img className="image" src={image} alt={name} />
            <p className="nametag">{name}</p>
            <h4 className="pricetag">{price}</h4>
            <button className="buttontag" onClick={onAddToCart}>{button}</button>
        </div>
    );
}

Website.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.string,
    button: PropTypes.string,
    onAddToCart: PropTypes.func
};

export default Website;
