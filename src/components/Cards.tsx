import { UserProps } from "../types/user"
import { RepoProps } from "../types/repos"
import {MdLocationPin} from 'react-icons/md'
import { Link } from 'react-router-dom';
import { MdArrowRightAlt } from 'react-icons/md'

import classes from "./User.module.css";


const Cards = ({
    avatar_url,
    login,
    location,
    bio, 
    followers,
    following,
    name,
    svn_url,
    created_at
}: UserProps) => {
    return (
        <div className={classes.infos}>
            <div className={classes.user}>
                <img src={avatar_url} alt={login} />
                <div className={classes.info}>
                    <p>Nome: {login}</p>
                    <div className={classes.stats}>
                        <div>
                            <p>Seguidores:</p>
                            <p className={classes.number}>{followers}</p>
                        </div>
                        <div>
                            <p>Seguindo:</p>
                            <p className={classes.number}>{following}</p>
                        </div>
                    </div>
                    {location && (
                        <p className={classes.location}>
                            <MdLocationPin/>
                            <span>{location}</span>
                        </p>
                    )}
                    <p className={classes.description}>{bio}</p>
                    </div>
            </div>
            <div className={classes.repositories}>
                <h4>{created_at}</h4>
                <h4>{name}</h4>
                <div className={classes.link}>
                    <Link to={svn_url}> <MdArrowRightAlt/> </Link>
                </div>
            </div>
        </div>
    )
}


export default Cards;