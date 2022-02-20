import { useEffect, useState } from 'react';
import Post from './Post';

const posts = [
  {
    id: '123',
    username: 'Ritik.singh07',
    userImg:
      'https://images.unsplash.com/photo-1643313947128-849e4da4fd5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1242&q=80',
    img: 'https://images.unsplash.com/photo-1644292954519-dd04b8fc08a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    caption: 'Unsplash Image for clone',
  },
  {
    id: '123',
    username: 'random.user22',
    userImg:
      'https://images.unsplash.com/photo-1645002124765-966921c28464?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8UzRNS0xBc0JCNzR8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
    img: 'https://images.unsplash.com/photo-1642779452809-e0d565251000?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDYyfFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    caption: 'Just another day',
  }
];

function Posts() {
  	return (
		<div className='h-5'>
			{posts.map((post) => (
				<Post
					key={post.id}
					id={post.id}
					username={post.username}
					userImg={post.userImg}
					img={post.img}
					caption={post.caption}
				/>
			))}
		</div>
  	);
};

export default Posts;
