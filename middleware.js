import fetchInterceptor from './middleware/fetchInterceptor';

const middleware = async (req) => {
    await fetchInterceptor(req)
}

export default middleware;