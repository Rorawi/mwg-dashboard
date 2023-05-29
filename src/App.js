import React from 'react';
import styled from 'styled-components';
import Dashboard from './components/Dashboard';
import SideNav from './components/SideNav';
export default function App() {
  return (
    <Div>
      <SideNav/>
      <Dashboard/>
    </Div>
  );
}


const Div = styled.div``
