import './App.css'
import Post from './components/Post';
import posts from './config/posts/posts';

function App() {

  const blogPosts = posts.map((post) => (
    <Post postId={post.id} className="mb-4"/>
  ));

  return (
    <>
      <div className='max-w-5xl mx-auto flex flex-col items-center justify-center'>
        <div className='flex flex-row justify-between w-full my-6 items-center' >
          <h1 className='text-3xl font-bold'>Vitali Bondur</h1>
          <nav>
            <ul className='flex flex-row gap-2'>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
        <div>
          {blogPosts}
        </div>
      </div>
    </>
  )
}

export default App
