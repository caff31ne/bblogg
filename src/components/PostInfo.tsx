import { Link } from "react-router";

function PostInfo(props: { post: { id: string, title: string, date: string, highlight: string }, className?: string }) {
    return (
        <Link to={`/posts/${props.post.id}`}>
            <div className={props.className}>
                <h2>{props.post.title}</h2>
                <p>{props.post.date}</p>
                <p>{props.post.highlight}</p>
            </div>
        </Link>
    );
}

export default PostInfo;