import React from 'react';

function Post({ title, body }) {
  return (
    <div style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}

export default Post;
