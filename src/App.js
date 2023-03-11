import Counter from './features/counter/Counter';
import AddPostForm from './features/posts/AddPostForm';
import PostsList from './features/posts/PostsList';

function App() {
  return (
    <div className="App">
      {/* <Counter/> */}
      <PostsList />
      <AddPostForm />
    </div>
  );
}

export default App;
