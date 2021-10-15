import React, { useContext } from 'react'
import HomeContainer from '../components/HomeContainer/index'
import ReposPage from '../components/Repos_page'



import { context } from '../context';





const Repos = () => {

    const ctx = useContext(context)

    return (
        <div>
            <HomeContainer>
                <ReposPage number={ctx.userData.public_repos} repos={ctx.repos} />
            </HomeContainer>

        </div>
    )
}

export default Repos
