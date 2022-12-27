import React from "react";
import "./Blog.css"
const Blog = () => {
  return (
    <div className="blog-container">
      <div className="context-api">
        <h3>What is contex API ?</h3>
        <p>
          The Context API helps share data between components which you can’t
          easily share with props, for example, complex data objects. React
          Context API provides a way to send data like userid, auth, and theme
          data through the component tree without sending any props manually at
          every level. We can also share specific states with multiple
          components instead through props manually. In some use cases, ideal
          for theming, localization, authentication etc
        </p>
      </div>
      <div className="semantic-tag">
        <h3>What is semantic tag ?</h3>
        <p>
          In programming, Semantics refers to the meaning of a piece of code —
          for example "what effect does running that line of JavaScript have?",
          or "what purpose or role does that HTML element have" In JavaScript,
          consider a function that takes a string parameter, and returns an
          element with that string as its textContent. Would you need to look at
          the code to understand what the function did if it was called
          build('Peach'), or createLiWithContent('Peach')?
        </p>
      </div>
      <div className="inline-block">
        <h3>What is block element ?</h3>
        <p>
          A block-level element always starts on a new line, and the browsers
          automatically add some space (a margin) before and after the element.
          A block-level element always takes up the full width available
          (stretches out to the left and right as far as it can)
        </p>
        <h3>What is inline element ?</h3>
        <p>
          An inline element does not start on a new line. An inline element only
          takes up as much width as necessary.
        </p>
      </div>
    </div>
  );
};

export default Blog;
