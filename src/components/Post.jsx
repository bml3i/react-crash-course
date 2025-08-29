import classes from './Post.module.css'

import { Link } from 'react-router-dom';

function Post(props) {

    return (
        <div className={classes.post}>
            <Link to={'/post/' + props.id}>
                <p className={classes.author}>{props.author}</p>
                <p className={classes.text}>{props.body}</p>
            </Link>
        </div>
    );
}

export default Post;
