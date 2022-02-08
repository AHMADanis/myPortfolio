import styled from 'styled-components'
import { FaUserTie } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi'



const Container = styled.div`
  color: blue;
  padding: 160px 0;
  background: royalblue;
`;

const Row = styled.main`
    display: flex;
    justify-content: center;
    background: lavender;
    padding: 40px 0;
`;

const InfoSec = styled.div`
    width: 100%;
    max-width: 300px;
    background: blueviolet;
    border: 1px solid #eee;
    padding: 16px;
    box-sizing: border-box;
    color: green;
    border-radius: 4px;
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
const IconText = styled.p`
color: blue;
font: 2rem;
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
    max-width: 500px;
    background: white;
    border: 1px solid #eee;
    padding: 16px;
    box-sizing: border-box;
    color: black;
    border-radius: 4px;
    .alt-text{
        text-align: center;
        margin: 10px 0;
    }
   ${'' /*  >${Button}:first-of-type{
        margin-top: 40px;
    }
    >${Input}{
        margin-top: 20px;
    } */}
`;



/* const Container = styled.div`
    max-width: 800px;
    margin: 20px auto 0 auto;
    padding: 16px;
    font-family: 'Open Sans';
    background: blueviolet;
    border-radius: 3px;


` */

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

export { Input, Form, Row, TextArea, Container, InfoRow, InfoSec, InfoIcon, IconWrapper, IconText, EmailIcon };