import { useState, useEffect } from 'react';
import api from '../api';
import posts, { type PostMetadata } from '../config/posts/posts';
import Markdown from 'react-markdown';
import { formatDate } from '../common/format';
import './Post.css';

function Post({postId, className}: {postId: string; className?: string}) {
    const [content, setContent] = useState('');
    const [metadata, setMetadata] = useState<PostMetadata>({
        id: "", 
        title: "", 
        date: "",
        highlight: ""
    });

    useEffect(() => {
        const fetchPost = async () => {
            const post = await api.getPost(postId);
            setContent(post);
            const metadata = posts.find((postInfo) => postInfo.id == postId)
            if (metadata) setMetadata(metadata);
        };

        fetchPost();
    }, [postId]);

    return (
        <div className={"post " + className}>
            <h1 className="mb-0 text-brown-700">{metadata.title}</h1>
            <p className="pb-4 italic">{formatDate(metadata.date)}</p>
            <Markdown>{content}</Markdown>
        </div>
    );
}

export default Post;