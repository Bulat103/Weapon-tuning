import { BrowserRouter as Router, Link } from 'react-router-dom';
function GoodsStore(props) {
    return (
        <div className="goods-block">
            <img src={props.image} alt="" />
            <p>{props.title}</p>
            <p>{props.cost}</p>
            <button className="add-to-cart" data-key={props.articul}>Add to cart</button>
            <Link to={props.articul}>more information</Link>
        </div>
    )
}
export default GoodsStore;