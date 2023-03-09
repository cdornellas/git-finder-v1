type SearchProps = {
    loadUser: (userName: string) => Promise<void>
}

import { useState, KeyboardEvent } from "react"

import { BsSearch } from "react-icons/bs"

import classes from './Search.module.css';

const Search = ({loadUser}: SearchProps) => {
    const [userName, setUserName] = useState("");

    const handKeyDow = (e: KeyboardEvent) => {
        if(e.key === "Enter") {
            loadUser(userName);
        }
    }

    return (
        <div className={classes.search}>
            <h2>Git Repositórios</h2>
            <div className={classes.search_container}>
                <input type="text" placeholder="Nome do usuário" onChange={(e) => setUserName(e.target.value)} onKeyDown={handKeyDow}/>
                <input type="text" placeholder="Nome do repositório"/>
                <button onClick={() => loadUser(userName)}>
                    Adicionar
                </button>
            </div>
        </div>
    )
}

export default Search;