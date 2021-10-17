import { useSelector, useDispatch } from 'react-redux';
import { selectGoods } from "../store/goodsSlice";
import GoodsStore from "../containers/GoodsStore"
import { increment } from "../store/cartSlice";

function Goods() {
    const goods = useSelector(selectGoods);
    const dispatch = useDispatch();

    return (
        <>
            <div className="goods-field">
                {goods.map(item => <GoodsStore title={item.title} cost={item.cost} image={item.image}
                    articul={item.articul} key={item.articul} />)}
            </div>
            <h1>shgh</h1>
        </>
    );
}

export default Goods;