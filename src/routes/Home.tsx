import { UserProps } from "../types/user";
import { RepoProps } from "../types/repos";
import Search from "../components/Search";
import { useState } from "react";
import Cards from "../components/Cards";
// import User from "../components/User";
// import Repos from "../components/Repositorio";

const Home = () => {

    const [ user, setUser ] = useState<UserProps | null>(null);
    const [ repo, setRepo ] = useState<RepoProps | null>(null);

    //APIs

    const getData = async(userName:string, repoName:string) => {
        setUser(null);

        const res = await fetch(`https://api.github.com/users/${userName}`)
        const rep = await fetch(`https://api.github.com/repos/${userName}/${repoName}`)
        const userD = await res.json()
        const repoD = await rep.json()

        if(res.status == 404) {
            alert(`Usuário não encontrado`)
            return;
        }

        if(rep.status == 404) {
            alert(`Repositório não encontrado`)
            return;
        }

        const {avatar_url, login, location, bio, followers, following} = userD
        const {name, svn_url, created_at} = repoD

        const allData: UserProps = {
            avatar_url,
            login,
            location,
            bio, 
            followers,
            following,
            name,
            svn_url,
            created_at
        }
        setUser(allData);

        // const {avatar_url, login, location, bio, followers, following} = userD
        // const {name, svn_url, created_at} = repoD

        // const userData: UserProps = {
        //     avatar_url,
        //     login,
        //     location,
        //     bio, 
        //     followers,
        //     following
        // }
        // setUser(userData);

        // const repoData: RepoProps = {
        //     name,
        //     svn_url,
        //     created_at
        // }
        // setRepo(repoData);
    }

    return <div>
        <Search getData={getData}/>
        {/* {user && <p><User {...user}/></p>}
        {repo && <p><Repos {...repo}/></p>} */}
        {user && <p><Cards {...user}/></p>}
    </div>
}

export default Home;