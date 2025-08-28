import classes from './NewPost.module.css';
import Modal from '../components/Modal';

import { useState } from 'react';
import { Link } from 'react-router-dom';

function NewPost(props) {

  const [bodyText, setBodyText] = useState('');
  const [author, setAuthor] = useState('');

  function submitFormHandler(event) {
    event.preventDefault();

    const postData = {
      body: bodyText,
      author: author
    };

    //console.log(postData);
    props.onAddPost(postData);
    props.onCancel();
  }

  return (
    <Modal>
    <form className={classes.form} onSubmit={submitFormHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={(event) => {
            setBodyText(event.target.value);
        }} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={(event) => {
            setAuthor(event.target.value);
        }} />
      </p>
      <p className={classes.actions}>
        <Link type="button" to="..">Cancel</Link>
        <button>Submit</button>
      </p>
    </form>
    </Modal>
  );
}

export default NewPost;
