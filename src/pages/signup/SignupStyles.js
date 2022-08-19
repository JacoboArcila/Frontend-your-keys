import styled from "styled-components";

export const SignUp = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: #000000;
`

export const FormContainer = styled.div `
    width: 38%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    background-color: #E5E5E5;
    border-radius: 30px;
    text-align: center;
`

export const SubmitButtoncContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`

export const SubmitButton = styled.button `
    padding: 15px 45px;
    margin: 0 30px;
    border: none;
    font-size: 18px;
    color: white;
    border-radius: 5px;
    background-image: linear-gradient(to right, ${({theme}) => theme.secondary} 50%, ${({theme}) => theme.third} 50%);
    background-size: 200%;
    background-repeat: no-repeat;
    background-position: left;
    transition: background-position .3s ease;

&:hover {
    cursor: pointer;
    background-position: right;
    color: black;
}`

export const LabelError = styled.label `
    color: red;
    padding:5px;
    box-sizing: border-box;
    border-radius: 5px;
    text-align: center;
    font-size: 130%;
`

export const Login = styled.div `
    margin-top: 20px;
    text-align: center;
`

export const ALogin = styled.div `
    color: #FCA311;
    display: inline;
`
export const SpanIcon = styled.span `
    position: absolute;
    left: 19%;
    top: 20%;
    font-size: 210%;
    color: rgba(0, 0, 0, 0.7);
`
export const SpanEye = styled.span `
    position: absolute;
    left: 76%;
    top:20%;
    font-size: 230%;
    color: rgba(0, 0, 0, 0.7);
`
export const FormGroup = styled.div `
    position: relative;
    margin: auto;
`

export const DivIconPass = styled.div `
    position: relative;
    display: flex;
`

export const DivInputContainer = styled.div`
  width: 100%;
`;

export const PlaceHolderErrors = styled.input`
  width: 65%;
  height: 3.563em;
  border: none;
  background: #e5e5e5;
  border-bottom:solid #14213d;
  box-sizing: border-box;
  margin-bottom: 10px;
  color: #000000 50%;
  font-size: 20px;
  outline: none;
  padding-left: 8%;
  padding-top: 15px;

  &:placeholder {
    font-size: 30%;
    color: rgba(0, 0, 0, 0.5);
    opacity: 0.8;
    
  }

  &.inputerror {
    border: none;
    border-bottom: 3px solid #14213d;
    color: red;
    width: 65%;
    height: 4.563em;
    padding: 0 10px 0 20px;
    box-sizing: border-box;
    margin-bottom: 10px;
    font-size: 20px;
    outline: none;
    padding-left: 6%;

    &:placeholder {
      color: red;
      font-size: 30%;
    }
  }
`;