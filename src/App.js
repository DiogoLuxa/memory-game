// components
import Header from './components/Header/Header';
import Button from './components/Button/Button';
import Container from './components/Container/Container';
import Cards from './components/Cards/Cards';
import Footer from './components/Footer/Footer';

// Style
import GlobalStyle from './styles/GlobalStyle';
import { AppStyled } from './styles/appStyle/App.styled';

function App() {
  return (
    <AppStyled>
      <GlobalStyle />
      <Container>
        <Header>
          <Button />
        </Header>
        <Cards />
        <Footer />
      </Container>
    </AppStyled>
  );
}

export default App;
