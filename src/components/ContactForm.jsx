import React, { useEffect, useState } from 'react';
import { fetchContent } from '../services/api';
 
const ContactForm = () => {
  const [content, setContent] = useState(null);
  const [error, setError] = useState(null);
 
  useEffect(() => {
    fetchContent('node/contact')
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
    <div>
      {titleValue ? (
        <h1>
        <div dangerouslySetInnerHTML={{ __html: titleValue }} />
        </h1>
      ) : (
        <div>No content available</div>
      )}
      {bodyValue ? (
        <div dangerouslySetInnerHTML={{ __html: bodyValue }} id='contact_bodyvalue' />
      ) : (
        <div>No content available</div>
      )}
    </div>
  
    <form>
    <div className="form-group">
              
              <input type="text" placeholder="your Name" id="yourName" required/>
            </div>
    <div className="form-group">
              
              <input type="text" placeholder="your E-mail" id="yourMail" required/>
            </div>
   
            <div className="form-group">
              
              <textarea
                placeholder="Your Message"
                id="textarea"
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <button type="submit">Send message</button>
              </form>
 
  </>
  );
};
 
export default ContactForm;