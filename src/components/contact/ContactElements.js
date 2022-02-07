import styled from 'styled-components'

const Input = styled.input`
    padding: 4px 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1em;
    font-family: 'Open Sans';
    margin-bottom: 8px;
    width: 100%;
    box-sizing: border-box;
    height: 40px;
`

const Form = styled.form`
    width: 100%;
    max-width: 400px;
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

const Content = styled.main`
    max-width: 800px;
    margin: 80px auto 0 auto;
    padding: 0 16px;
    box-sizing: border-box;
    font-family: 'Open Sans';
    h1, h2, h3, h4, h5, h6{
        font-family: 'Kaushan Script';
    }
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

export { Input, Form, Content, TextArea };