import axios from 'axios'
import { toast } from 'react-toastify'


export const getPostsAction = () => async(dispatch) => {
    try {
        const {data} = await axios.get(`${process.env.REACT_APP_API_URL}/getPosts`)

        dispatch({type:'GET_POSTS', payload: data})

    } catch (error) {
        toast(error.response.data.msg, {
            position: "top-right",
            autoClose: 5000,
            });
    }
}
export const createPostAction = (postData) => async(dispatch) => {
    try {
        const {data} = await axios.post(`${process.env.REACT_APP_API_URL}/createPost`,postData)

        dispatch({type:'CREATE_POST', payload: data})

    } catch (error) {
        toast(error.response.data.msg, {
            position: "top-right",
            autoClose: 5000,
            });
    }
}
export const updatePostAction = (id, postData) => async(dispatch) => {
    try {
        const {data} = await axios.patch(`${process.env.REACT_APP_API_URL}/updatePost/${id}`,postData)

        dispatch({type:'UPDATE_POST', payload: data})

    } catch (error) {
        toast(error.response.data.msg, {
            position: "top-right",
            autoClose: 5000,
            });
    }
}
export const deletePostAction = (id) => async(dispatch) => {
    try {
        await axios.delete(`${process.env.REACT_APP_API_URL}/deletePost/${id}`)

        dispatch({type:'DELETE_POST', payload: id}) //frontend tarafında da eşzamanlı silme işleminin yapılması için payload'a id yazarız

    } catch (error) {
        toast(error.response.data.msg, {
            position: "top-right",
            autoClose: 5000,
            });
    }
}