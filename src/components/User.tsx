import { UserProps } from '../types/user'
import {MdLocationPin} from 'react-icons/md'

import classes from "./User.module.css";

const User = ({
    login,
    avatar_url,
    followers,
    following,
    location,
    bio,
}: UserProps) => {
    return (
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
    )
}

export default User;