import React,{useContext,Fragment} from 'react'
import { context } from '../../context';
import { useHistory} from 'react-router-dom';
import api from '../../services/api'
import {
    Section,
    ContainerLogOut,
    LogOut,
    Div,
    Nick,
    AnotherDiv,
    Imagem,
    Figure,
    TextContainer,
    Nome,
    Email,
    Localidade,
    FollowContainer,
    FollowersContainer,
    Followers,
    Following,
    Repositorio,
    Text,
    BioContainer,
    Bio,
    BioText,
    FooterContainer,
    Footer,
    Position,
    Home,
    Repos,
    FollowingFooter,
    FollowersFooter
    
} from './styles';
import { BiHomeAlt } from "react-icons/bi";
import { BiGitBranch } from "react-icons/bi";
import { BiCool } from "react-icons/bi";
import { FiLogOut} from 'react-icons/fi'
import { BiArrowBack } from "react-icons/bi";
 


 


const UserContainer = (props) => {
    const ctx = useContext(context) 
    const history = useHistory()

    const handleOnClick = async (user) => {
        try {
            const response = await api.get(`${user}`)
            const repos = await api.get(`${user}/repos`)
            const followers = await api.get(`${user}/followers`)
            const following = await api.get(`${user}/following`)
            ctx.SetUserData(response.data)
            ctx.SetRepos(repos.data)
            ctx.SetFollowers(followers.data)
            ctx.SetFollowing(following.data)
            ctx.setHasError(false)
            ctx.setLoggedUser(true)
            ctx.SetSearch(user)
            history.goBack()
        } catch (err) {
            //ctx.setHasError(true)

        }
    }
 

return (
<Fragment>
{ctx.loggedUser &&  
(
    <Fragment>
        <Section>   
             <ContainerLogOut>   
                <Div>                
                    <Nick>{props.nick}</Nick> 
                    <LogOut>
                        <AnotherDiv onClick={()=> history.push('/')}>Sair</AnotherDiv>
                        <FiLogOut onClick={()=> history.push('/')} size={15}/>
                    </LogOut>
                </Div>
            </ContainerLogOut> 
            <Figure>
                <Imagem src={props.url} alt={"Foto de perfil do usuário"}/>
            </Figure>
        <TextContainer>
            <Nome>{props.name}</Nome>
            <Email>{props.email}</Email>
            <Localidade>{props.localidade}</Localidade>
        </TextContainer>
        <FollowContainer>
            
            <FollowersContainer onClick={()=> history.push('/Followers')}>
                <Followers>{props.followers}</Followers>
                <Text>Seguidores</Text>
            </FollowersContainer>
           
            <FollowersContainer onClick={()=> history.push('/Following')}>  
                <Following>{props.following}</Following>
                <Text>Seguindo</Text>
            </FollowersContainer>
            <FollowersContainer  onClick={()=> history.push('/Repos')} > 
                <Repositorio>{props.reps}</Repositorio>
                <Text>Repositórios</Text>
            </FollowersContainer>
        </FollowContainer>
            <BioContainer>
                <Bio>
                    BIO
                </Bio>
                <BioText>
                {props?.biotext}    
                </BioText>
            </BioContainer>
        </Section>
        <FooterContainer>
            <Footer>
                <Home onClick={()=>history.push("/Home")} >
                     <Position> <BiHomeAlt size={20} /> </Position>   Home
                </Home>
                    <Repos onClick={()=>history.push("/Repos")} >
                    <Position> <BiGitBranch size={20} /> </Position> Repos
                </Repos>
                <FollowingFooter onClick={()=>history.push("/Followers")} >
                    <Position> <BiCool size={20} /> </Position>    Seguidores
                </FollowingFooter>
                <FollowersFooter onClick={()=>history.push("/Following")}>
                    <Position> <BiCool size={20} /> </Position> Seguindo
                </FollowersFooter>
            </Footer>
        </FooterContainer>
    </Fragment>
)}  
{!ctx.loggedUser && (
<Section>
    <ContainerLogOut>
        <Div>
            <Nick onClick={()=>handleOnClick(ctx.search)}> <BiArrowBack size={20} /> </Nick>  
            <LogOut>
                
                <AnotherDiv onClick={() => ctx.setLoggedUser(true)} >Salvar</AnotherDiv>
                <FiLogOut size={15}/>
            </LogOut>
        </Div> 
    </ContainerLogOut> 
    <Figure>
        <Imagem src={props.url} alt={"Foto de perfil do usuário"}/>
    </Figure>
    <TextContainer>
        <Nome>{props.name}</Nome>
        <Email>{props.email}</Email>
        <Localidade>{props.localidade}</Localidade>
    </TextContainer>
    <FollowContainer>
        
        <FollowersContainer>
            <Followers>{props.followers}</Followers>
            <Text>Seguidores</Text>
        </FollowersContainer>
        <FollowersContainer>  
            <Following>{props.following}</Following>
            <Text>Seguindo</Text>
        </FollowersContainer>
        <FollowersContainer> 
            <Repositorio>{props.reps}</Repositorio>
            <Text>Repositórios</Text>
        </FollowersContainer>
    </FollowContainer>
    <BioContainer>
        <Bio>
        BIO
        </Bio>
        <BioText>
        {props?.biotext}    
        </BioText>
    </BioContainer>
</Section>
)} 
</Fragment>
)}

export default UserContainer;