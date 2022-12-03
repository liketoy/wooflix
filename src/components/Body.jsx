import styled from 'styled-components';

const Div = styled.div`
    margin: auto;
    overflow-y: auto;
    background-color: black;
    
    &::-webkit-scrollbar {
    display: none;
  }
`

export default function Body({children}){
    return <Div>{children}</Div>
}