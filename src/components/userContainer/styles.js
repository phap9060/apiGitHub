import styled from 'styled-components';

export const Section = styled.section`
    width: 400px;
    height: 95vh;
    background-color: rgba(41,41,41,255);
    margin-top: 30px;
   
    flex-direction:row;
    @media (max-width:900px){
        width: 300px;
        height: 80vh;
    }
    

`
export const LogOut = styled.div`
color: white;
display: flex;
cursor: pointer;
align-items: center;
margin-top: 10px;
`

export const ContainerLogOut = styled.div `

height: 12vh;
background-color: rgba(31,31,31,255);

`
export const Div = styled.div `
display: flex;
justify-content: space-between;
margin-right: 10px;
`
export const AnotherDiv = styled.a`
text-decoration: none;
color: white;
margin-right: 10px;
font-size: 17px;
cursor: pointer;

`
export const Nick = styled.div `
cursor: pointer;
color: white;
margin-top: 10px;
margin-left: 15px;
`
export const Figure = styled.div `
display: flex;
justify-content: center;
height: 10vh;
background-color: rgba(31,31,31,255);
`
export const Imagem = styled.img`
width: 130px;
height: 130px;
border-radius:50%;
border:4px solid white;
`
export const TextContainer = styled.div`
`

export const Nome = styled.p `
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-size: 0.7cm;
font-weight: 400;
margin-left: 10px;
margin-top: 80px;
color:white;
opacity: 0.8;

@media(max-width:900px){
    font-size: 0.5cm;
}

`
export const Localidade = styled.p `
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-size: 0.4cm;
font-weight: 100;
margin-top: 5px;
margin-left: 10px;
color:white;
opacity: 0.8;


`
export const Email = styled.p `
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-size: 0.4cm;
font-weight: 100;
margin-top: 5px;
margin-left: 10px;
color:white;
opacity: 0.8;

`
export const FollowContainer = styled.div`

height: 10vh;
background-color: rgba(56,56,56,255);
display: flex;
justify-content: space-around;
align-items: center;


@media(max-width:900px){
    width: 300px;
}

`

export const FollowersContainer = styled.div`


display: flex;
flex-direction: column;
align-items: center;
&:hover{

    cursor:pointer;
    background:rgba(0,0,0,0.5);
    transition: .4s ease;
}
`

export const Followers = styled.h1`
height: 100%;
color: white;
opacity: 0.7;
font-weight: 600;
font-size: 30px;


font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

@media(max-width:900px){
  
    
}
`
export const Following = styled(Followers)`

`
export const Repositorio = styled(Followers)`



`
export const Text = styled.h2`
font-size: 12px;
color: white;
font-weight: 100;


@media(max-width:900px){
    margin-left:15px;
   
}
`
export const BioContainer = styled.div`
`

export const Bio = styled.p `
margin-top: 10px;
margin-left: 15px;
font-size: 0.5cm;
color: white;
font-weight: 800;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;


`
export const BioText = styled.p `
color: white;
margin-left:15px;
margin-right: 15px;
text-align: justify;
font-weight: 80;
opacity:0.8;
overflow: hidden;
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
color: black;
font-size: 11px;
display: flex;
flex-direction: column;
text-align: center;
opacity: 1;
cursor: pointer;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
export const Repos = styled(Home)`
opacity: 0.6;

`
export const FollowingFooter = styled(Home)`
opacity: 0.6;

`
export const FollowersFooter = styled(Home)`
opacity: 0.6;

`

