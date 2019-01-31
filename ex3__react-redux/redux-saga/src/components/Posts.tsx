import * as React from 'react';
import {
  TYPE_POST
} from '../store/state';

interface PostsProps {
  items: TYPE_POST;
}

const Posts: React.SFC<PostsProps> = props => {
  const { items } = props;

  return (
    <ul>{items.map((item, i) =>
      <li key={i}>
        {item.title}
      </li>)}
    </ul>
  );
}

export default Posts;