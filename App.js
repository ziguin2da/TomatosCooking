import React from 'react';
import styled from 'styled-components';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

const Row = styled.View`
  flex-direction: row;
  justify-content: center;
`;

const Text = styled.Text`

`;

const App: () => Node = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <Row>
        <Text>Project start</Text>
      </Row>
    </SafeAreaView>
  );
};

export default App;
