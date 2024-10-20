import React, { useEffect, useState } from 'react';
import { fetchContent } from '../services/api';
 
const Projects = () => {
  const [content, setContent] = useState(null);
  const [error, setError] = useState(null);
 
  useEffect(() => {
    fetchContent('node/projects')
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
    <>
    <div id='project_start'>
      {titleValue ? (
        <h1>
        <div dangerouslySetInnerHTML={{ __html: titleValue }} />
        </h1>
      ) : (
        <div>No content available</div>
      )}
      {bodyValue ? (
        <div dangerouslySetInnerHTML={{ __html: bodyValue }} />
      ) : (
        <div>No content available</div>
      )}
    </div>
    <div id='project-part1'>
      <div id='palindrome'>
      <a href="https://github.com/ToniAndstrom/Symfony_palindrome_checker"><img src="palindrome_checker.png" alt="palindrome checker" /></a>
      <p>An app to see if a word is a palindrome.</p>
      </div>
    
    <br />
    <div id='calculator'>
    <a href="https://github.com/ToniAndstrom/Symfony_calculator"><img src="calculator.png" alt="a calculator" /></a>
    <p>A simple calculator I made using Symfony.</p>
    </div>
    
    <br />
    
    </div >
    <div id='project-part2'>
      <div id='custom'>
    <a href="https://github.com/ToniAndstrom/first_custom_drupal_theme"><img src="custom_theme.png" alt="drupal custom theme screenshot" /></a>
    <p>This is my custom Drupal theme.</p>
    </div>
    
    <div id='countries'>
    <a href="https://github.com/ToniAndstrom/Countries-bootstrap-react"><img src="countries_app.png" alt="countries app screenshot" /></a>
    <p>A React app that fetches country data from an API and displays it.</p>
    </div>
    
    </div>
    </>
  );
};
 
export default Projects;