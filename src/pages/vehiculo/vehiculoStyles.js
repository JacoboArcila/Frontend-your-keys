import styled from "styled-components";

export const DetailDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 2rem;
  box-sizing: border-box;
  position: relative;
  top: 80px;
`;

export const DivSpanIcon = styled.div`
  text-align: center;
  justify-content: center;
  color: black;
  margin-right: 35px;
`;

export const DivIcons = styled.div`
  width: 250px;
  display: inline-block;
  border-right: ${({ borderLine }) => (borderLine ? null : "1px solid black")};
  text-align: center;

  .iconsStyles {
    width: 30px;
    height: 30px;
    text-align: center;
  }

  .nameIcons {
    display: flex;
    text-align: center;
    justify-content: center;
  }
`;

export const DetailContent = styled.div`
  margin: 70px 30px;
  text-align: justify;
  & > h1 {
  
  }
  & > p {
  line-height: 30px; 
  font-size: 20px;   
  }

`;
export const DivName = styled.div`
  padding: 0.7rem 0.5rem;
  & > h3 {
    margin: 0 25px !important;
    font-size: 20px;
  }
  & > h1 {
    margin: 0 25px !important;
    font-size: 25px;
  }
`;
export const DivLocation = styled.div`
  padding: 1.5rem 0.5rem;
  
  & > h3 {
    margin: 0 48px !important;
    font-size: 20px;
  }
  & > h1 {
    margin: 0 !important;
  }
`;

export const DivContainerCategory = styled.div`
  width: 100%;
  background-color: #FCA311;
  padding: 0 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & span {
    font-size: 45px;
  }
`;
export const DivContainerLocation = styled.div`
  width: 100%;
  background-color: #d9d9d9;
  padding: 0 0.5rem;
`;

export const DivPolicies = styled.div`
  display: flex;
  color: black;
  justify-content: left;
  gap: 20px;
  margin: 0 30px 70px 30px;
   
`;
export const DivPoliciesContainer = styled.div`
  color: black;
  width: 400px;
  border-right: ${({ borderLine }) => (borderLine ? null : "1px solid black")};
`;

export const DivGoLocation = styled.div `
margin: 0 25px !important;
  font-size: 25px;
  position: absolute;
`
export const DivFeatures = styled.div `
  margin-bottom: 70px;
  & > h1 {
    margin: 30px;
    
  }
`
export const DivCalendar = styled.div `
  margin-bottom: 70px;
  justify-content: center;
  > h1 {
    margin: 30px;
  }
`
export const DivTitlePolicies = styled.div `
  
    margin: 30px;
  
`
