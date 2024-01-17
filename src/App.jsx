import './App.css'
import Header from './components/layout/header/Header.jsx'
import ItemListContainer from './components/pages/main/ItemListContainer.jsx'

function App() {
    return (
        <>
            <Header />
            <ItemListContainer greeting={'Bienvenido'} />
        </>
    )
}

export default App
