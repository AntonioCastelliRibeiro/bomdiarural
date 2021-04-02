import GridItem from '../GridItem';
import { Container } from '@material-ui/core';

export default function Recipe(){

  return (
    <Container maxWidth="md">
      <GridItem isRecipe={true} />
    </Container>
  )
}