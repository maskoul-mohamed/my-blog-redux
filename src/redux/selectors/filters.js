import moment from 'moment';


export default (posts, { text, sortBy, startDate, endDate }) => {
    return posts.filter((post) => {
        const createdAtMatch = moment(post.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMatch, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMatch, 'day') : true;
        const textMatch = post.body.toLowerCase().includes(text);
        return textMatch && startDateMatch && endDateMatch;
    }).sort((a, b) => {
        if(sortBy === 'newest'){
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if(sortBy === 'oldset') {
            return a.createdAt > b.createdAt ? 1 : -1
        } else {
            return null;
        }
    })
}