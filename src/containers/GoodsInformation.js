import { useParams } from "react-router";

function GoodsInformation() {
    let { userName } = useParams;
    return (
        <div>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus perspiciatis nesciunt soluta id neque doloremque quia repudiandae natus, in error. Architecto accusantium amet voluptatem sit, molestiae rem veniam voluptate ipsum!</h1>
        </div>
    )
}
export default GoodsInformation;