import { useEffect, useState } from 'react';
import GridItem from '../GridItem';
import { Container } from '@material-ui/core';
import FShare from '../FShare';

export default function Recipe(props){
  const [ modalShare, setModalShare ] = useState({ open: false, image: '' });

  useEffect(()=>{
    window.scrollTo(0,0)
  }, []);

  function retornarModalShare(){
    return <FShare 
      open={modalShare.open} 
      onSetClose={()=>setModalShare(false)} 
      // onSetSnackBar={(AObject)=>setSnackBar(AObject)}
      onSetSnackBar={()=>false}
      image={modalShare.image}
      />
  }

  return (
    <Container maxWidth="md">
      {retornarModalShare()}
      <GridItem isRecipe={true} isMateria={props.isMateria} onSetarFShare={(e)=>setModalShare({ open: true, image: e })} />
    </Container>
  )
}