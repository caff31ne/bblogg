import posts from '../config/posts/posts';
import Post from '../components/Post';

function BlogPage() {
    const blogPosts = posts.map((post) => (
        <Post postId={post.id} className="mb-4"/>
    ));
    return (
        <div>{blogPosts}</div>
    )
}

export default BlogPage;