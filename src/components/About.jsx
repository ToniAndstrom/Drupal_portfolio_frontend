import React, { useEffect, useState } from 'react';
import { fetchContent } from '../services/api';


 
const About = () => {
  const [content, setContent] = useState(null);
  const [error, setError] = useState(null);
 
  useEffect(() => {
    fetchContent('node/about')
      .then((data) => setContent(data))
      .catch((err) => setError(err));
  }, []);
 
  if (error) {
    return <div>Error loading content: {error.message}</div>;
  }
 
  if (!content) {
    return <div>Loading...</div>;
  }
 
  // Access the first item in the data array
  const titleValue = content?.data?.[0]?.attributes?.title;
  const bodyValue = content?.data?.[0]?.attributes?.body?.value;
 
  return (
    <div id='about'>
      
      {titleValue ? (
        <h1>
        <div dangerouslySetInnerHTML={{ __html: titleValue }} />
        </h1>
      ) : (
        <div>No content available</div>
      )}
      <div id='about-body'>
      {bodyValue ? (
        <div dangerouslySetInnerHTML={{ __html: bodyValue }} />
      ) : (
        <div>No content available</div>
      )}
    <img src="freeze.JPG" alt="a bboy freeze" />
    </div>
    </div>
  );
};
 
export default About;