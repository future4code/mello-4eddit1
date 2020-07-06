import labEdiit from '../../Services/labEdiit';

export const loadPosts = async () => {
    try {
        const response = await labEdiit.get('/posts', {
            headers: {
                Authorization:
                    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImlneXB1dFRXMkRWMDVMMTZIbVE0IiwidXNlcm5hbWUiOiI0ZWRkaXQxIiwiZW1haWwiOiI0ZWRkaXQxQGdtYWlsLmNvbSIsImlhdCI6MTU5NDA2MzkzNX0.2-CdXwv-cKRrX51lambuneYl4GhxqVrPF3WqrqLqOZg',
            },
        });
        return response.data.posts;
    } catch (error) {
        console.error(error);
    }
};

export const votePost = async (id, direction) => {
    try {
        await labEdiit.put(
            `posts/${id}/vote`,
            { direction: direction },
            {
                headers: {
                    Authorization:
                        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImlneXB1dFRXMkRWMDVMMTZIbVE0IiwidXNlcm5hbWUiOiI0ZWRkaXQxIiwiZW1haWwiOiI0ZWRkaXQxQGdtYWlsLmNvbSIsImlhdCI6MTU5NDA2MzkzNX0.2-CdXwv-cKRrX51lambuneYl4GhxqVrPF3WqrqLqOZg',
                },
            }
        );
    } catch (error) {
        console.error(error);
    }
};
