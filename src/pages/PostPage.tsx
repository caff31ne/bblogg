import { useParams } from "react-router";
import Post from "../components/Post";

function PostPage() {
    const { postId } = useParams();

    return (
        <Post postId={postId!} />
    );
}

export default PostPage;