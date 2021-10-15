import React,{Fragment} from 'react'
import { useHistory } from 'react-router-dom';
import {
    Section,
    Header,
    RepoNumber,
    Button,
    Title,
    Description,
    RepoContainer,
    Icons,
    StarNumber,
    Div,
    FooterContainer,
    Footer,
    Position,
    Home,
    Repos,
    Following,
    Followers

} from './styles'
import { BiStar } from "react-icons/bi"
import { BiArrowBack } from "react-icons/bi";
import { BiHomeAlt } from "react-icons/bi";
import { BiGitBranch } from "react-icons/bi";
import { BiCool } from "react-icons/bi";

const ReposPage = (props) => {
        const history = useHistory()
     
    return (
    <Fragment>
        <Section>
            <Header>
                <Fragment><Button onClick={()=>history.push('/Home')}><BiArrowBack size={20} /> </Button></Fragment> 
                <RepoNumber>{props.number} repositórios</RepoNumber>
            </Header>
                {(props.repos).map(repo =>(
                        <RepoContainer key={repo.id}>
                            <Title>{repo.name}</Title>
                            <Description>{repo.description}</Description>
                            <Icons>
                            <BiStar size={15} /> <StarNumber>{repo.stargazers_count}</StarNumber>
                            </Icons>
                            <Div></Div>
                        </RepoContainer>
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
                    <Position> <BiCool size={20} /> </Position>    Seguidores
                </Following>
                <Followers onClick={()=>history.push("/Following")}>
                <Position> <BiCool size={20} /> </Position> Seguindo</Followers>
            </Footer>
    </FooterContainer>
    </Fragment>
    )
}

export default ReposPage
