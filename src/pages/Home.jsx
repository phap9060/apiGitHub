import React,{useContext} from 'react'

import HomeContainer from '../components/HomeContainer/index'
import UserContainer from '../components/userContainer';

import { context } from '../context';



export default function Home() {
    
   const ctx = useContext(context);

    return (
        <HomeContainer>
            <UserContainer
            nick = {`#${ctx.userData.login}`}
            url = {ctx.userData.avatar_url}
            name = {ctx.userData.name}
            email ={ctx.userData?.email}
            localidade = {ctx.userData?.location}
            followers = {ctx.userData.followers}
            following = {ctx.userData.following}
            reps = {ctx.userData.public_repos}
            biotext ={ctx.userData.bio}
            >
                
            </UserContainer>
           
          
        </HomeContainer>
    );
}