const initState = {
    blogTray: []
}

const BlogReducer = (state = initState, action)=>{
    switch (action.type) {
        case 'setBlogs':
            return {...state, blogTray: action.payload}
    
        default:
            return state
    }
}

export default BlogReducer