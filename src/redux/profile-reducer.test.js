import profileReducer, {deletePost, onAddPostActionCreator} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, post: "Hello", likesCount: 0},
        {id: 2, post: "Hi", likesCount: 0},
        {id: 3, post: "This is my first post", likesCount: 0}
    ]
}

it('length of posts should be incremented', () => {
    let action = onAddPostActionCreator("learn react");
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(4);
});


it('message of new posts should be correct', () => {
    let action = onAddPostActionCreator("learn react");
    let newState = profileReducer(state, action);
    expect(newState.posts[3].post).toBe("learn react");
});


it('after deleting length of messages should be decrement ', () => {
    let action = deletePost(1);
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(2);

})

