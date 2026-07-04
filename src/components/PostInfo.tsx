import { Link } from "react-router";
import { formatDate } from '../common/format';

function PostInfo(props: { post: { id: string, title: string, date: string, highlight: string }, className?: string }) {
    return (
        <Link to={`/posts/${props.post.id}`}>
            <div className={"hover:bg-gray-200 p-4 rounded-md " + props.className}>
                <h2 className="font-bold text-xl">{props.post.title}</h2>
                <p className="italic">{formatDate(props.post.date)}</p>
                <p>{props.post.highlight}</p>
            </div>
        </Link>
    );
}

export default PostInfo;