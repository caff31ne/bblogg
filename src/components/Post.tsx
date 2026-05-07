import { useState, useEffect } from 'react';
import api from '../api';
import Markdown from 'react-markdown'

function Post({postId, className}: {postId: string; className?: string}) {
    const [content, setContent] = useState('');

    useEffect(() => {
        const fetchPost = async () => {
            const post = await api.getPost(postId);
            setContent(post);
        };

        fetchPost();
    }, [postId]);

    return (
        <div className={"post " + className}>
            <Markdown>{content}</Markdown>
        </div>
    );
}

export default Post;