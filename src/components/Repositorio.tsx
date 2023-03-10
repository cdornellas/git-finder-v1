import { RepoProps } from '../types/repos';
import { Link } from 'react-router-dom';
import { MdArrowRightAlt } from 'react-icons/md'

const Repos = ({
    name, 
    svn_url,
    created_at
}: RepoProps) => {
    return (
        <div >
            <div>
                <p>{created_at}</p>
                <p>{name}</p>
                <Link to={svn_url}> <MdArrowRightAlt/> </Link>
            </div>
        </div>
    )
}

export default Repos;

