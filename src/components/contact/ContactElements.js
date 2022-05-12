import styled from 'styled-components'
import { FaUserTie } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi'
import backgroundImages from '@bit/styled-components.polished.shorthands.background-images';



const Row = styled.main`
    display: flex;
    justify-content: center;
    margin: 60px;
`;

const InfoSec = styled.div`
    width: 100%;
    max-width: 300px;
<<<<<<< HEAD
    ${backgroundImages('url("/image/background.jpg")', 'linear-gradient(#09203F,#09203F, #09203F,#537895)')}
=======
    background: navy;
>>>>>>> refs/remotes/origin/master
    border: 1px solid #eee;
    padding: 24px;
    color: green;
    border-radius: 10px 2px 2px 10px;
`


const InfoIcon = styled(FaUserTie)`
  color: cyan;
  justify-self: start;
  font-size: 1.5rem;
 padding-right: 10px;
`;

const EmailIcon = styled(HiOutlineMail)`
  color: cyan;
  justify-self: start;
  font-size: 1.5rem;
 padding-right: 10px;
`

const IconWrapper = styled.div`
display: flex;
align-items: center;
`



const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};
`;

const Input = styled.input`
    padding: 4px 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1em;
    margin-bottom: 8px;
    width: 100%;
    box-sizing: border-box;
    height: 40px;
`

const Form = styled.form`
    width: 100%;
    max-width: 540px;
    background: white;
    border: 1px solid #eee;
    padding: 24px;
    margin: 4px 0;
    border-radius: 0 6px 6px 0;
`;



const TextArea = styled.textarea`
    padding: 4px 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1em;
    font-family: 'Open Sans';
    margin-bottom: 8px;
    width: 100%;
    box-sizing: border-box;
    height:120px;
`

export { Input, Form, Row, TextArea, InfoRow, InfoSec, InfoIcon, IconWrapper, EmailIcon };