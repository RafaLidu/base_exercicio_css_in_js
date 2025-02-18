import { VagaContainer, VagaTitle, VagaDescription } from './styles';

function Vaga({ titulo, descricao }: { titulo: string; descricao: string }) {
  return (
    <VagaContainer>
      <VagaTitle>{titulo}</VagaTitle>
      <VagaDescription>{descricao}</VagaDescription>
    </VagaContainer>
  );
}

export default Vaga;
