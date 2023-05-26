import React, {useState} from "react";
import s from "./Post.module.css";

const Post = (props) => {
    let [like, setLike] = useState(props.likesCount);

    function likeHandler () {
        setLike(like + 1);
    }

    return (
        <div className={s.item}>
            <img src="/ava.jpeg" alt="ava"/>
            {props.post}
            <div className={s.like}>
                <span onClick={likeHandler} >
                <img src="/like.png" alt="like"/>
                </span>
                {like}
            </div>
        </div>
    )
}

export default Post;
