import labEdiit from '../../Services/labEdiit';

const votePost = () => {
    labEdiit.put(`${id}/vote`, {
        headers: {
            Authorization: localStorage.getItem('userToken'),
        },
    });
};
