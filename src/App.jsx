import PostsList from "./components/PostsList";
import MainHeader from "./components/MainHeader";

import { useState } from "react";

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  function showModalHandler() {
    setIsModalOpen(true);
  }

  function hideModalHandler() {
    setIsModalOpen(false);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler}/>
      <main>
        <PostsList isPosting={isModalOpen} onStopPosting={hideModalHandler}/>
      </main>
    </>
  );
}

export default App
