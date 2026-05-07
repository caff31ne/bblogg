import { Routes, Route } from 'react-router'
import BlogPage from './BlogPage';
import AboutPage from './AboutPage';

function Root() {
  return (
    <Routes>
        <Route index element={<BlogPage />} />
        <Route path="about" element={<AboutPage />} />
    </Routes>
  );
}

export default Root;