import React from 'react'
import useFetch from './useFetch';
import { useQuery } from 'react-query';

export default function Reddit() {

  // const [posts, setPosts] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  // useEffect(() => {
  //     fetch('https://fakestoreapi.com/users')
  //       .then(response => response.json())
  //       .then(results => {
  //         setLoading(false);
  //         setPosts(results);
  //       })
  //       .catch(error => {
  //         setLoading(false);
  //         setError(error);
  //       });
  // })

  // const {data: posts, loading, error} = useFetch('https://fakestoreapi.com/users'); // use to custom hook

  const {data: posts, loading, error} = useQuery('users', fetchUsers); // use to react-query
  // const {data: posts, loading, error} = useQuery('users', () => fetch('https://fakestoreapi.com/users')) // use to react-query

  async function fetchUsers() {
    const response = await fetch('https://fakestoreapi.com/users');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  }

  return (
    <div>
      <p>Users content goes here.</p> 
      {loading && <p>Loading...</p>}
      { posts && (
        <ul>
         {posts.map((post, index) => (
          <li key={index}>
            <h3>{post.name.firstname} {post.name.lastname}</h3>
            <p>email :-{post.email}<br />phone :-{post.phone}</p>
          </li>
         ))}
        </ul>
      )}
      {error && <p>{error.message}</p>}
    </div>
  )
}
