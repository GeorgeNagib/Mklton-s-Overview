import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'


import Home from './pages/home'
import Blog from './pages/blog'
import Contact from './pages/contact'

// Create a client
const queryClient = new QueryClient()
 
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/blog" element={<Blog/>}/>
            <Route exact path="/contact" element={<Contact/>}></Route>
            <Route path="*" element={<Home/>}/>
          </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
