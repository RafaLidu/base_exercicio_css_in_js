import { FormContainer, Input, Button } from './styles';

function FormVagas() {
  return (
    <FormContainer>
      <Input type='text' placeholder='Digite a vaga desejada...' />
      <Button>Buscar Vagas</Button>
    </FormContainer>
  );
}

export default FormVagas;
