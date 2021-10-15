import styled from 'styled-components';

export const Section = styled.section`
    width: 400px;
    height: 100vh;
    background-color: rgba(41,41,41,255);
    border-radius: 10px;
    border-bottom: 10px solid #FF7A00;
    margin-top: 30px;
    margin-bottom: 30px;
    flex-direction:row;
    @media (max-width:900px){
        width: 300px;
        margin-left: 20px;
    }
`

export const HeaderSectionContainer = styled.section`
 
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    
`
export const LogoImage = styled.img`
margin-top: 30%;
width: 100px;
height: 100px;
margin-bottom: 30px;
`
export const HeaderSection = styled.header`
    width: 100%;
    height: 250px;
    
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 0;
    @media(max-width:900px){
        width: 300px;
        height: 200px;

        }
`

export const HeaderTitle = styled.h1`
    margin: 0;
    padding: 15px 0;
    color: #E5E5E5;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    width: 100%;
`

export const HeaderInputContainer = styled.div`
    padding: 10px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

   
`

export const HeaderInput = styled.input`
    width: 150px;
    height: 40px;
    margin-top: 0.8rem;
    border: none;
    padding: 0 16px;
    color: #444;
    transition: .4s ease;
    

    &:focus {
        outline: none;
        width: 300px;
        transition: .4s ease;
    }
    @media(max-width:900px){
        width: 200px;
        &:focus{
            width: 200px;
        }

    }
`
export const Error = styled.div`
color: red;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
margin-top: 10px;
position: absolute;
`

export const HeaderSearchButton = styled.button`
    padding: 0 16px;
    width: 300px;
    min-width: 200px;
    height: 40px;
    margin:auto;
    margin-top: 20px;
    border: none;
    background: #FF7A00;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFF;
    transition: ease .3s;
    @media(max-width:900px){
        width: 200px;

    }
    

    &:hover {
        transform: scale(1.05);
        transition: ease .3s;
        cursor: pointer;
    }
`

