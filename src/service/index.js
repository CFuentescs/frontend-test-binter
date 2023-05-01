import axios from 'axios'

let BASE_URL;

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 120000,
    withCredentials: false,
})

const handleSuccess = (response) => response
const handleError = (error) => {
    const { response } = error
    if (response !== undefined) {
        let { status, data } = response

        if (
            response.request.responseType === 'arraybuffer' &&
            response.data.toString() === '[object ArrayBuffer]'
        ) {
            data = JSON.parse(Buffer.from(response.data).toString('utf8'))
            status = data.statusCode | 'NOT FOUND'
        }

        const message =
            data && data.message ? data.message : 'NOT FOUND'
        return Promise.reject({
            status,
            message,
            ...data,
        })
    }
    return Promise.reject({
        status: '500',
        message: 'NOT FOUND',
    })
}

axiosInstance.interceptors.response.use(handleSuccess, handleError)

export { axiosInstance }