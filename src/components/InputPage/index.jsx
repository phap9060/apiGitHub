import React,{useContext} from 'react'
import { useHistory } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import api from '../../services/api'
import {
    Section,
    LogoImage,
    HeaderSectionContainer,
    HeaderSection,
    HeaderTitle,
    HeaderInputContainer,
    HeaderInput,
    Error,
    HeaderSearchButton,
    

} from './styles';
import { context } from '../../context';

const Input = () => {
    const ctx = useContext(context)
    const history = useHistory()
    
 

    async function getApiData(){
        try {
            const response = await api.get(`${ctx.search}`)
            const repos = await api.get(`${ctx.search}/repos`)
            const followers = await api.get(`${ctx.search}/followers`)
            const following = await api.get(`${ctx.search}/following`)
            ctx.SetUserData(response.data)
            ctx.SetRepos(repos.data)
            ctx.SetFollowers(followers.data)
            ctx.SetFollowing(following.data)
            ctx.setHasError(false)
            ctx.setLoggedUser(true)
            console.log(history)
            history.push('/Home')
        } catch (err) {
            ctx.setHasError(true)

        }

    }


    return (
<Section>
    <HeaderSectionContainer>
        <LogoImage src={'https://image.flaticon.com/icons/png/512/25/25657.png'} alt={"Logo do GitHub"} />
            <HeaderSection>
                <HeaderTitle>Digite o nome do usuário:</HeaderTitle>
                <HeaderInputContainer>
                        <HeaderInput placeholder={"Digite o usuário..."}  value={ctx.search} onChange={e => ctx.SetSearch(e.target.value)} />
                            {ctx.hasError && <Error>Usuário não encontrado</Error>}
                        <HeaderSearchButton onClick={()=>getApiData()}>
                            <FiSearch size={15} />
                        </HeaderSearchButton>
                </HeaderInputContainer>
            </HeaderSection>
    </HeaderSectionContainer>
</Section>
)};

export default Input;