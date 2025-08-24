import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";
import Modal from "./Modal";


function PostsList() {

    const [bodyText, setBodyText] = useState('');
    const [author, setAuthor] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(true);

    return (
        <>
            { isModalOpen && 
                <Modal onCloseWindow={() => {
                    setIsModalOpen(false);
                }}>
                    <NewPost onBodyChange={(event) => {
                        setBodyText(event.target.value);
                    }} onAuthorChange={(event) => {
                        setAuthor(event.target.value);
                    }} />
                </Modal>
            }

            <ul className={classes.posts}>
                <Post author={author} body={bodyText}/>
                <Post author="Apple" body="Next.js is great" />
            </ul>
        </>
    );
}

export default PostsList;
