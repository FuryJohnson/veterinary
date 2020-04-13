import React from 'react';
import styled from 'styled-components/native';
import { Group } from './components'

export default function App() {
  return (
    <Container>
      <Group title="14 апреля"
      items={[
        {
        time: '15:30',
        diagnosis: 'съела мячик',
        user: {
          fullname: 'Тофу',
          avatar: 'https://doglime.com/wp-content/uploads/2019/03/Pembroke-Welsh-Corgi-1.jpg'
        }},
        {
          time: '16:30',
          diagnosis: 'проблема с желудком',
          user: {
            fullname: 'Логан',
            avatar: 'https://dogell.com/uploads/breed/thumb_pembroke-welsh-corgi.jpg'
          }},
      ]}>
      </Group>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  margin-top: 50px;
  `;

