import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

const MyPosts = React.memo((props) => {
    let postsElement = [...props.posts]
        .reverse()
        .map(post => <Post key={post.id} id={post.id} post={post.post} likesCount={post.likesCount}/>);

    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);

    }

    return (
        <div className={s.myPosts}>
            <div>
                <label>My posts</label>
                <AddNewPostFormRedux onSubmit={onAddPost}/>

            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
})


let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field rows="2"
                   cols="50"
                   placeholder="new post"
                   name="newPostText"
                   component={Textarea}
                   validate={[required, maxLength10]}


            />
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

let AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);

export default MyPosts;
