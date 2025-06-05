import axios from 'axios'

export const registerAction = (authData) => async(dispatch) => {
    try {
        const {data} = await axios.post('hhtp://localhost:8000/register', authData)

        dispatch({type:'REGISTER', payload: data})

        window.location = '/'
    } catch (error) {
        
    }
}

export const loginAction = () => async(dispatch) => {
    try {
        
    } catch (error) {
        
    }
}