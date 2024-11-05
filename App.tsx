import React from 'react';
import Container from './src/Components/Container/Container';
import { View } from 'react-native';



function App(): React.JSX.Element {

  return (
    <Container>
      <View style={{height:40, width:40, backgroundColor:'red'}}></View>
    </Container>
  );
}


export default App;
