import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";

function PostsList() {

    const [bodyText, setBodyText] = useState('');
    const [author, setAuthor] = useState('');

    return (
        <>
            <NewPost onBodyChange={(event) => {
                setBodyText(event.target.value);
            }} onAuthorChange={(event) => {
                setAuthor(event.target.value);
            }} />

            <ul className={classes.posts}>
                <Post author={author} body={bodyText}/>
                <Post author="Apple" body="Next.js is great" />
            </ul>
        </>
    );
}

export default PostsList;
