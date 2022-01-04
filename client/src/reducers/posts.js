// after action by dispatch, then reducer change the state... and then redux works
// return is state
export default (posts = [], action) => {
    switch (action.type) {
        case 'POST':    // append to the posts the payload
            return [...posts, action.payload];
        case 'GET':  // get the selected payload
            return action.payload;  
        case 'UPDATE': // change the equal payload from posts.
            return posts.map(post => post._id === action.payload._id ? action.payload : post);
        case 'DELETE':  // pick out the delete id
            return posts.filter(post => post._id !== action.payload);
        default:
            return posts;
    }
}