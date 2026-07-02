import posts from '../config/posts/posts';
import PostInfo from '../components/PostInfo';

function BlogPage() {
    const blogPosts = posts.map((post) => (
        <PostInfo className="mb-8" post={post} />
    ));
    return (
        <div>{blogPosts}</div>
    )
}

export default BlogPage;