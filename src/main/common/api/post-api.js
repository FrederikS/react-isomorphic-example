import fetch from 'isomorphic-fetch';

export function addPostToTopic(topicId, post) {
    return fetch(`http://localhost:3001/topics/${topicId}/posts`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
    });
}
