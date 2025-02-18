import { ListaContainer } from './styles';
import Vaga from '../../components/Vaga';

function ListaVagas() {
  return (
    <ListaContainer>
      <Vaga titulo="Desenvolvedor Full Stack" descricao="Trabalho remoto, salário competitivo." />
      <Vaga titulo="Designer UX/UI" descricao="Vaga presencial em São Paulo." />
      <Vaga titulo="Analista de Dados" descricao="Home office, benefícios inclusos." />
    </ListaContainer>
  );
}

export default ListaVagas;
