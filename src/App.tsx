import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { AddPostForm } from "./features/posts/AddPostForm";
import { SinglePostPage } from "./features/posts/SinglePostPage";
import { EditPostForm } from "./features/posts/EditPostForm";
import { PostsList } from "./features/posts/postsSli";
import LoginPage from "./login/login";

function App() {
  // eslint-disable-next-line no-lone-blocks
  {console.log("Routing to: ", window.location.pathname)}
  return (
    <Router>
        <Navbar /> 
      <Routes>
        {/* Main page with AddPostForm and PostsList */}
        <Route
          path="/"
          element={
            <>
              <AddPostForm />
              <PostsList />
              {/* <LoginPage/> */}
              </>
          }
        />
        
        <Route path="/posts/:postId" element={<SinglePostPage />} />
        
        <Route path="/editPost/:postId" element={<EditPostForm />} />
        
       
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
