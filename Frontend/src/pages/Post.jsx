import React, { useState } from "react";
import '../Post.css';

const Post = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    title: '',
    description: '',
    file: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData(prev => ({
      ...prev,
      file
    }));
  };

  return (
    <div className="post-container">
      <h1 className="post-title">Post Found Item</h1>
      <form className="post-form">
        <p className="post-description">Please fill all the required fields</p>
        
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        
        <div className="input-group">
          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>
        
        <div className="input-group">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required />
        </div>
        
        <div className="input-group">
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description" value={formData.description} onChange={handleChange} required />
        </div>
        
        <div className="input-group">
          <label htmlFor="file">Upload Image</label>
          <input type="file" id="file" name="file" onChange={handleFileChange} />
        </div>

        <button type="submit" className="submit-btn">Post</button>
      </form>
    </div>
  );
};

export default Post;


