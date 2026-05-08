import { Routes, Route } from 'react-router'
import AboutPage from './AboutPage';
import BlogPage from './BlogPage';
import PostPage from './PostPage';

function Root() {
  return (
    <Routes>
        <Route index element={<BlogPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="posts/:postId" element={<PostPage />} />
    </Routes>
  );
}

export default Root;