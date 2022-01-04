import React, { useState, useEffect } from 'react';
import Form from './components/forms/Form';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';
import Posts from './components/posts/Posts';

function App() {
  // dispatch hook get
  const dispatch = useDispatch();
  // set the default id
  const [id, setId] = useState(0);
  // get the data from the server at the first, [] tell useEffect to only update when dispath changes.
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
 

  // What we have done above was simply pass our state(id) and gave Posts and Form the ability to change the state for us.
  return (
    <>
      <Form setId={setId} getId={id} />
      <Posts setId={setId}></Posts>
    </>
  );
}

export default App;
