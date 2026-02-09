// app.js

const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
const blogId = 100; // Replace with the desired blog ID for testing
const updatedData = { title: 'Updated Blog', body: 'This blog has been updated.' };

const blog = {
  title: 'New Blog',
  body: 'This is the content of the new blog.',
  userId: 1,
};

const addBlog = async () => {
  const response = await fetch(apiUrl, {
    method: 'POST',
    body: JSON.stringify(blog), //make blog object readable by API request
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const json = await response.json(); //activate response variable
  console.log('New Blog added:', json);
};

const fetchBlog = async (id) => {
  const response = await fetch(`${apiUrl}/${id}`);
  const data = await response.json();
  console.log('All Blogs:', data);
};

const updateBlog = async (id, updatedData) => {
  const response = await fetch(`${apiUrl}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedData),
  });

  const updatedBlog = await response.json();
  console.log('Blog updated:', updatedBlog);
};

const deleteBlog = async (blogId) => {
  await fetch(`${apiUrl}/${blogId}`, {
    method: 'DELETE',
  });

  console.log('Blog deleted successfully');
};

deleteBlog(blogId);
//fetchBlog(blogId);
//updateBlog(blogId, updatedData);
//addBlog();
