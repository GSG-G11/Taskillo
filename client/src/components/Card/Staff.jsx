import React from 'react'
import styled from 'styled-components';
import { Text } from '../UI'

function StaffCard({className}) {
  return (
    <Card className={`member mt-2 ${className}`}>

    </Card>
  )
}
const Card = styled.div`
    background-color: #21222C;
    width: 300px;
    height: 250px;
    border-radius:12px;
`;
export default StaffCard