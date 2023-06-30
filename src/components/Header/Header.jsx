import Container from '../Container/Container';
import './Header.css'

function Header ({ title }) {
    return (
        <div className="header__container">
            <Container>
                <h3>{title}</h3>
            </Container>
        </div>
    )
}

export default Header;