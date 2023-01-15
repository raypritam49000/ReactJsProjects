import './App.css';
import {
  useGetAllPostsQuery, useGetPostByIdQuery, useGetPostByLimitQuery,
  useDeletePostByIdMutation, useCreatePostMutation, useUpdatePostMutation
} from './services/post'

function App() {

  const newPost = { title: 'foo', body: 'bar', userId: 1 }
  const updateExPost = { title: 'Java', body: 'Java', userId: 109, id: 1 }
  //const [createPost, responseInfo] = useCreatePostMutation();
  const [updatePost, responseInfo] = useUpdatePostMutation()
  // const [deletePost,responseInfo] = useDeletePostByIdMutation(5);
  //console.log(deletePost);
  //console.log(responseInfo);

  // const{ data, error, isLoading } =  useGetPostByLimitQuery(10);
  // console.log(data);
  // const responseInfo = useGetAllPostsQuery();
  // //const responseInfo = useGetPostByIdQuery(5);
  console.log("Response Information :- " + responseInfo);
  console.log("Data :- " + JSON.stringify(responseInfo.data));
  console.log("Success :- " + responseInfo.isSuccess);

  // Using a query hook automatically fetches data and returns query values
  //const { data, error, isLoading } = useGetPostByIdQuery(11);
  // Individual hooks are also accessible under the generated endpoints:
  // const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')

  // render UI based on data and loading state
  //console.log(data);

  if (responseInfo.isFetching) {
    return <div>Loading...</div>
  }

  if (responseInfo.isError) {
    return <div>An Error Occured {responseInfo.error.error}</div>
  }

  return (
    // <div>
    //   <h1>Get All Data RTK Query Redux Toolkit</h1>
    //   {
    //     responseInfo.data.map((post) =>
    //       <div key={post.id}>
    //         <h3> id : {post.id} | title : {post.title}</h3>
    //         <p>{post.body}</p>
    //         <hr/>
    //       </div>

    //     )

    //   }
    // </div>
    // <div>
    //   <h3> id : {data.id} | title : {data.title}</h3>
    //   <p>{data.body}</p>
    //   <hr />
    // </div>
    // <>
    // <button onClick={()=>{deletePost(2)}}>Delete Post</button>
    // </>
    // <>
    //   <button onClick={() => { createPost(newPost) }}>Create Post</button>
    // </>

    <>
      <button onClick={() => { updatePost(updateExPost) }}>Update Post</button>
    </>
  );
}

export default App;
