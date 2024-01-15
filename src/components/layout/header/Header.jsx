import Logo from '../../../assets/images/logo.png'
import { BiCart, BiSearch } from 'react-icons/bi'
import './headerStyled.css'

function Header() {
    return (
        <header>
            <a href="#" className="logo">
                <img src={Logo} alt="Logo de Apícola Las Lechuzas" />
            </a>
            <ul className="navBar">
                <li>
                    <a href="#miel">Miel</a>
                </li>
                <li>
                    <a href="#cera">Cera</a>
                </li>
                <li>
                    <a href="#estetica">Estética</a>
                </li>
                <li>
                    <a href="#insumos">Insumos</a>
                </li>
            </ul>
            <div className="navIcon">
                <a href="#">
                    <BiSearch className="icon" />
                </a>
                <a href="#">
                    <BiCart className="icon" />
                    <div className="cart-count">3</div>
                </a>
            </div>
        </header>
    )
}

export default Header
