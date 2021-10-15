import React,{useContext} from 'react'
import HomeContainer from '../components/HomeContainer/index'
import FollowingPage from '../components/FollowingPage'
import { context } from '../context';

const Following = () => {
    
    const ctx = useContext(context)
    
    return (
        <div>
            <HomeContainer>
            <FollowingPage number={ctx.userData.following} follows={ctx.following}/>
            </HomeContainer>
          
        </div>
    )
}

export default Following