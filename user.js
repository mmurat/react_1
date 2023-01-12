import axios from "axios";

const getUser = async (user_id) => {
 let { data: user } = await axios(`https://jsonplaceholder.typicode.com/users/${user_id}`);
 let { data: posts } = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`);

 console.log('user: ', user);
 console.log('posts: ', posts);
 
}

export default getUser;