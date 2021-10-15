import styled from "styled-components";

export const Section = styled.section`
    
    width: 400px;
    height: 95vh;
    background-color: rgba(41,41,41,255);
    margin-top: 30px;
    overflow-y: scroll;
    @media (max-width:900px){
        width: 300px;
        height: 80vh;
    }
`

export const Header = styled.section`
width: 100%;
background-color: black;
height: 5vh;
display: flex;

`
export const RepoNumber = styled.h2`
width: 100%;
height: 100%;
color: white;
margin-right: 30%;
display: flex;
font-size: 0.4cm;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;

`

export const Button = styled.div`
cursor: pointer;
margin-left: 7px;
height: 100%;
width: 100%;
color: white;
display: flex;
justify-content: flex-start;
align-items: center;
text-decoration: none;



`


export const RepoContainer = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
background-color: rgba(31,31,31,255);
height: 15vh;

`




export const Title = styled.h2`
color: white;
font-size: 0.4cm;
margin-left: 20px;
display: flex;
justify-content: center;
flex-direction: column;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
overflow: hidden;

`

export const Description = styled.h3`
overflow: hidden;
color: white;
font-size: 0.3cm;
margin-top: 5px;
margin-left: 20px;
font-weight: 300;
display: flex;
justify-content: center;
flex-direction: column;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
export const Icons = styled.div`
color: yellow;
height: 2vh;
margin-top: 10px;
margin-left: 20px;
display: flex;
overflow: hidden;
`
export const StarNumber = styled.h6`
overflow: hidden;
color: white;
font-weight: 150;
font-size: 14px;
margin-left: 5px;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
export const Div = styled.div`
margin-top: 20px;
height: 0.1vh;
background-color: rgba(64,64,64,255);
`
export const FooterContainer = styled.footer`
width: 400px;
display: flex;
flex-direction: column-reverse;
justify-content: flex-end;
margin-bottom: 0;
margin-left:0;
margin-right: 0;
@media (max-width:900px){
        
        width: 300px;
        margin-left: 0;
        margin-right: 0;
        
      
    }
`
export const Footer = styled.div`
width: 100%;
height: 6vh;
background-color: white;
display: flex;
align-items: center;
flex-direction: row;
justify-content:space-around;

`
export const Position = styled.div`
margin-left: 3px;
`
export const Home = styled.p`
font-size: 11px;
display: flex;
flex-direction: column;
text-align: center;
opacity: 0.6;
cursor: pointer;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
export const Repos = styled(Home)`
opacity:1;
`
export const Following = styled(Home)`


`
export const Followers = styled(Home)`


`
export const Imagem = styled.img`
margin-left: 15px;
width: 70px;
height: 70px;
border-radius:50%;
border:4px solid white
`
