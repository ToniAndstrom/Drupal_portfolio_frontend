import React, { useEffect, useState } from 'react';
import { fetchContent } from '../services/api';

 
const Home = () => {
  const [content, setContent] = useState(null);
  const [error, setError] = useState(null);
 
  useEffect(() => {
    fetchContent('node/home')
      .then((data) => setContent(data))
      .catch((err) => setError(err));
  }, []);
 
  if (error) {
    return <div>Error loading content: {error.message}</div>;
  }
 
  if (!content) {
    return <div>Loading...</div>;
  }
  const titleValue = content?.data?.[0]?.attributes?.title;
  const bodyValue = content?.data?.[0]?.attributes?.body?.value;
  return (
    <div>
      <div id='home-title'>
    {titleValue ? (
      <h1>
      <div dangerouslySetInnerHTML={{ __html: titleValue }} />
      </h1>
    ) : (
      <div>No content available</div>
    )}
    </div>
    {bodyValue ? (
      <div dangerouslySetInnerHTML={{ __html: bodyValue }} />
    ) : (
      <div>No content available</div>
    )}
  </div>
  );
};

export default Home;
