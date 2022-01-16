import { Container, Content } from "./styles";
import Neptune from '../../assets/neptune.png';

export function Header() {
    return (
        <Container>
            <Content>
                <div>
                    <img src={Neptune} alt=""/>
                    <h1>Today's <br />Space</h1>
                </div>
                <button>
                    <a href="https://github.com/WilliamKSilva">
                        Contact
                    </a>
                </button>
            </Content>
        </Container>
    );
}