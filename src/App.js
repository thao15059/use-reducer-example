import "./App.css";
import Post from "./components/post/post.component";
import User from "./components/user/user.component";

function App() {
  return (
    <div className="App">
      <User userId={5} />
      <Post postId={5} />
    </div>
  );
}

export default App;
