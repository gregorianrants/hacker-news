import styled from 'styled-components'
import {Link} from "react-router-dom";


export const Meta = styled.p`
 /* margin-top: calc(5rem /18);*/
  margin: 0;
  color: grey;
  * + &{
    margin-top: calc(5rem /18);
  }
`
export const LinkStyled = styled(Link)`
  color: ${
    (props)=> props.theme==='light' ? 'black' : '#DADADA'
};
`

