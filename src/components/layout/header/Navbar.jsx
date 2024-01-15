import Logo from '../../../assets/images/logo.png'
import CardWidget from './CardWidget.jsx'
import './navBarStyled.css'

function NavBar() {
    return (
        <>
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
            <CardWidget />
        </>
    )
}

export default NavBar
