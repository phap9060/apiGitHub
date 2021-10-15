import styled from "styled-components";

export const Section = styled.section`
    
    width: 400px;
    height: 94vh;
    background-color: rgba(41,41,41,255);
    margin-top: 0px;
    overflow-y: scroll;
    position: relative;

    @media (max-width:900px){
        margin-top: 15px;
        width: 300px;
        height: 80vh;
      
    }
    

`

export const Header = styled.section`
background-color: black;
height: 5vh;
display: flex;
justify-content: center;
align-items: center;

`
export const RepoNumber = styled.h2`
width: 100%;
height: 100%;
color: white;
display: flex;
font-size: 0.4cm;
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-start;
margin-right: 60px;
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


export const ImagemContainer = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
background-color: rgba(31,31,31,255);
height: 15vh;
color: white;
cursor: pointer;

`

export const Description = styled.h3`
font-size: 15px ;
color: white;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
export const Icons = styled.div`
`

export const Div = styled.div`
width: 100%;
height: 0.5vh;
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

`
export const Following = styled(Home)`
opacity: 1;

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










