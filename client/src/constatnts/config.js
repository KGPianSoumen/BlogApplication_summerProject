// api notification messages

export const API_NOTIFICATION_MESSAGES = {
    loading: {
        title: 'Loding...',
        message: 'Data is being loaded, Please wait'
    },
    success: {
        title: 'success',
        message: 'Data successfully loaded'
    },
    responseFailure: {
        title: 'Eroor',
        message: 'An error occured while fetching response from the server . please try again'
    },
    requestFailure: {
        title: 'Error',
        message: 'An error occured while pursing request data'
    },
    networkError: {
        title: 'Error',
        message: 'Unable to connect with the server .Please check internet connectivity and try again later'
    }
}


//API service call
//sample request 
//need service call: {url:'/',method:'POST/GET/PUT/DELETE'.params: true/false, query: true/false }

export const SERVICE_URLS = {
    userSignup: { url: '/signup',method: 'POST' },
    userLogin: { url: '/login', method: 'POST' },
    uploadFile: { url: '/file/upload',method: 'POST' },
    createPost: { url: 'create', method: 'POST'},
    getAllPosts: { url: '/posts', method:'GET', params: true },
    getPostById: { url: 'post', method: 'GET', query: true },
    updatePost: { url: 'update', method: 'PUT', query: true },
    deletePost: { url: 'delete', method: 'DELETE', query: true }
}