import React,{useContext} from 'react'
import HomeContainer from '../components/HomeContainer/index'
import FollowersPage from '../components/FollowersPage'



import { context } from '../context';





const Followers = () => {
    
    const ctx = useContext(context)
    
    return (
        <div>
            <HomeContainer>
            <FollowersPage number={ctx.userData.followers} follows={ctx.followers}/>
            </HomeContainer>
          
        </div>
    )
}

export default Followers