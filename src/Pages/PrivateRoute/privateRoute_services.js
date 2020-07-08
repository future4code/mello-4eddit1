export const checkAuth = async () => {
    try {
        await labEdiit.get('/posts', {
            headers: {
                Authorization: localStorage.getItem('token'),
            },
        });
        return true;
    } catch (error) {
        return false;
    }
};
