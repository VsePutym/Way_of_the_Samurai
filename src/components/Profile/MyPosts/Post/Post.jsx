import s from './Post.module.css';

const Post = (props) => {
    return (
        <li className={s.post}>
            <div>
                <img src="https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg" alt="" />
            </div>
            {props.message}
            <div>
                <span>Likes {props.likes}</span>
            </div>
        </li>
    )
};

export default Post;