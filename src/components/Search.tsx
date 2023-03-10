type SearchProps = {
    getData: (userName: string, repoName: string) => Promise<void>
}

import { useState, KeyboardEvent } from "react"

import { BsSearch } from "react-icons/bs"

import classes from './Search.module.css';

const Search = ({getData}: SearchProps) => {
    const [userName, setUserName] = useState("");
    const [repoName, setRepoName] = useState("");

    const handKeyDow = (e: KeyboardEvent) => {
        if(e.key === "Enter") {
            getData(userName, repoName);
        }
    }

    return (
        <div className={classes.search}>
            <h2>Git Repositórios</h2>
            <div className={classes.search_container}>
                <input type="text" placeholder="Nome do usuário" onChange={(e) => setUserName(e.target.value)} onKeyDown={handKeyDow}/>
                <input type="text" placeholder="Nome do repositório" onChange={(e) => setRepoName(e.target.value)} onKeyDown={handKeyDow}/>
                <button onClick={() => getData(userName, repoName)}>
                    Adicionar
                </button>
            </div>
        </div>
    )
}

export default Search;