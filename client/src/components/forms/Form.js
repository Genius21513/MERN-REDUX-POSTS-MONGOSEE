import React, { useEffect } from 'react';
import { useForm } from  'react-hook-form';
import { createPost, updatePost } from '../../actions/posts';
import { useDispatch, useSelector } from 'react-redux';

export default function Form({setId, getId}) {
    const { register, handleSubmit, reset, setValue } = useForm();
    const post = useSelector(state => state.posts.find((post)=>post._id === getId? post: null));
    // In []'s value changes then useEffect execute.
    useEffect(() => {
        if (getId !== 0) {  //this is for update post
            let keys = Object.keys(post);
            keys.forEach((key) => setValue(key, post[key]));
        }
    }, [getId, post, setValue]);

    const dispatch = useDispatch();
    const onSubmit = (data) => {
        if (getId === 0) {
            dispatch(createPost(data)); // is passed to ouer createPost action
            reset();    // useForm hook, top declared function.
        } else {
            dispatch(updatePost(getId, data));
            reset();
            setId(0);
        }
    }
    
    // register function passes all fields to the handleSubmit -> onSubmit function gets data
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input type='text' name='author' placeholder='Author' {...register('author')} />
                </div>

                <div>
                    <input type='text' name='title' placeholder='Title' {...register('title')} />
                </div>

                <div>
                    <input type='text' name='article' placeholder='Article' {...register('article')} />
                </div>

                <button type='submit'>Submit</button>
            </form>
        </>
    );
}