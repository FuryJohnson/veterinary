import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

const Group = ({title, items}) => {
  return (
  <GroupBlock>
  <GroupTitle>{title}</GroupTitle>
  {items.map ((item, index) => (
  <GroupItem key={index}>
  <Avatar source={{
    uri: item.user.avatar
    }}
    />
    <View style={{ flex: 1 }}>
    <FullName>{item.user.fullname}</FullName>
    <GrayText>{item.diagnosis}</GrayText>
    </View>
    <GroupDate active={item.active}>{item.time}</GroupDate>
  </GroupItem>))}
  </GroupBlock>
  );
};

Group.defaultProps = {
  title: 'Untitled',
  items: []
};

const GroupDate = styled.Text`
  background: ${props => props.active ? '#2A86FF' : '#E9F5FF'};
  color: ${props => props.active ? '#FFF' : '#4294FF'};
  font-weight: 600;
  font-size: 14px;
  width: 70px;
  height: 32px;
  text-align: center;
  line-height: 28px;
  overflow: hidden;
  border-radius: 18px;
`;

const GrayText = styled.Text`
  font-size: 16px;
  color: #8B979F;
`;

const FullName = styled.Text`
  font-weight: 500;
  font-size: 16px;
`;

const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  margin-right: 15px;
`;

const GroupItem = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  padding: 20px 0;
  border-bottom-width: 1px;
  border-bottom-color: #F3F3F3;
`;

const GroupTitle = styled.Text`
font-weight: 500;
font-size: 22px;
color: #000000;
`;

const GroupBlock = styled.View`
  padding: 0 20px;
  margin-bottom: 25px;
`;

export default Group;