import Cabecalho from "./components/Cabecalho";
import Hero from "./components/Hero";
import FormVagas from "./components/FormVagas";
import ListaVagas from "./containers/ListaVagas";
import { Container } from "./styles";

function App() {
  return (
    <Container>
      <Cabecalho />
      <Hero />
      <FormVagas />
      <ListaVagas />
    </Container>
  );
}

export default App;
