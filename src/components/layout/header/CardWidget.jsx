import { BiCart, BiSearch } from 'react-icons/bi'

function CardWidget() {
    return (
        <div className="navIcon">
            <a href="#">
                <BiSearch className="icon" />
            </a>
            <a href="#">
                <BiCart className="icon" />
                <div className="cart-count">3</div>
            </a>
        </div>
    )
}

export default CardWidget
