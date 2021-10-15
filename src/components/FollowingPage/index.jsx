import React,{useContext,Fragment} from 'react'
import { context } from '../../context';
import api from '../../services/api'
import { BiRightArrowAlt } from "react-icons/bi"
import { BiArrowBack } from "react-icons/bi";
import { BiHomeAlt } from "react-icons/bi";
import { BiGitBranch } from "react-icons/bi";
import { BiCool } from "react-icons/bi";
import {useHistory } from 'react-router-dom';
import {
    Section,
    Header,
    RepoNumber,
    Button,
    Imagem,
    Description,
    ImagemContainer,
    Icons,
    Div,
    FooterContainer,
    Footer,
    Position,
    Home,
    Repos,
    Following,
    Followers


} from './styles'



const FollowingPage = (props) => {
    const history = useHistory()
    const ctx = useContext(context)

  
    
    const handleOnClick = async (user) => {
        try {
            const response = await api.get(`${user}`)
            const repos = await api.get(`${user}/repos`)
            const followers = await api.get(`${user}/followers`)
            const following = await api.get(`${user}/following`)
            console.log(response)
            ctx.SetUserData(response.data)
            ctx.SetRepos(repos.data)
            ctx.SetFollowers(followers.data)
            ctx.SetFollowing(following.data)
            ctx.setHasError(false)
            ctx.setLoggedUser(false)
            history.push('/Home')
        } catch (err) {
            //ctx.setHasError(true)

        }
    }

    return (
        
    <Fragment>
        <Section>
            <Header>
                 <Button onClick={()=>history.push("/Home")}>   <BiArrowBack size={20} /> </Button>   
                <RepoNumber>{props.number} Seguindo</RepoNumber>
            </Header>

            {(props?.follows).map(follow => (
             <Icons onClick={()=>handleOnClick(follow.login)}>
                <Fragment> 
                <ImagemContainer key={follow.id}>
                    <Imagem src={follow.avatar_url} />
                    <Description>#{follow.login}</Description>
                        <BiRightArrowAlt size={25} /> 
                </ImagemContainer>
                <Div></Div>
                </Fragment>  
            </Icons>
        
        ))}
        </Section>

    <FooterContainer>
            <Footer>
                <Home onClick={()=>history.push("/Home")} >
                    <Position> <BiHomeAlt size={20} /> </Position>   Home
                </Home>
                <Repos onClick={()=>history.push("/Repos")} >
                    <Position> <BiGitBranch size={20} /> </Position> Repos
                </Repos>
                <Following onClick={()=>history.push("/Followers")} >
                    <Position> <BiCool size={20} /> </Position>Seguidores
                </Following>
                <Followers onClick={()=>history.push("/Following")}>
                <Position> <BiCool size={20} /> </Position> Seguindo</Followers>
            </Footer>
    </FooterContainer>
   </Fragment>
      
       
     
        
        
    )
}

export default FollowingPage
