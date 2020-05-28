---







title : "Create a sticky navigation bar with react from scratch"
slug : "sticky-navbar-with-react"
tags : ["react"]
featuredImage: ./thumbnail.jpg
published : true
date: 2020-05-19
---



In many modern websites you must have seen this effect of Navigation bar/ Header sticking to the top of the page even if you scroll down the page for your better navigation so you don't have to go up always to choose between links for moving between links. Haven't you?

If you have and are curious about how does that work, then this post is your go to guide to create that very simple yet beautiful effect/feature for you next project which adds better UX to the page.

We are going to be using <code>react</code> in this tutorial with some little state management. Although, if you are pretty well in Web Technologies, you can convert this logic in any of the framework you like. Totally flexible!

If you are not that comfy with react, don't worry about it. You can just follow along. I have tried to use minimal of technical jargons. Logic is pretty explanatory

What are you  waiting for? Let's get started 🚀

 <br/>

<hr/>



## Initial Setup

<aside>
    I'm assuming here you have Node.js installed and create-react-app installed.
</aside>



First we are going to create a react-app from start. For that enter this command in your favorite terminal

```npm
create-react-app sticky-navbar
```

We are going to delete some of the files created out of the box from create-react-app. After deleting some files, project directory will look like this:

![File structure](./file-structure.png)

*Starting file structure*

We will start by creating components, two components will suffice for this little project. Create a directory called **Components** in <code>/src</code> and add two files <code>Navbar.js</code> and <code>Content.js</code> <br/> <br/>

Start by editing <code>App.js</code>. Add following code to start with a basic layout

```jsx
//App.js
import React from 'react';

import Navbar from './components/Navbar';
import Content from './components/Content';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Content />
    </div>
  );
}

export default App;

```

Here we are rendering two functional components ***Navbar*** and ***Content***, their name clearly explains their purpose.

This below code fills up <code>Navbar.js</code>. Navbar component is basically a header section which consists of your website Logo and one navigation menu with 4/5 links

```jsx
//Navbar.js
import React from 'react';
import './navbar.scss';
import Logo from './../img/logo.svg';

const Navbar=() => {
  return (
    <header className="navbar">
        <div className="logo">
          <img src={Logo} alt="Logo" title="Logo" />
        </div>

        <nav className="navigation">
            <ul>
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
            </ul>
        </nav>
        
    </header>
  )
};

export default Navbar;

```

If you want to follow my styling

```scss
//navbar.scss

.navbar{
  width: 100%;
  max-width: 100%;
  min-height: 6vh;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #eee;
  transition: all .7s ease-in;
}

.scrolled{
  position: fixed;
  top: 0;
  left: 0;
  background-color: lightblue;
  width: 80%;
  margin: 0 10% 0 10%;
}
.logo img{
  width: 50px;
}

.navigation{
  ul{
    box-sizing: border-box;
    list-style-type: none;
    display: flex;
    min-height: 6vh;
    justify-content: flex-end;
    align-items: center;

    li{
      text-align: center;
      padding: .5em;
      cursor: pointer;
      &:hover{
        background-color: plum;
        color: white;
      }
    }

    li a{
      text-decoration: none;
      color: inherit;
    }

  }
}

```



Now, we may edit <code>Content.js</code> to add following code:

```jsx
//Content.js

import React from 'react';
import './content.scss';

const Content=() => {
  const data=`<replace-your-long-dummy-text/any content-here>`;

  return (
    <main className="content">
      <p id="post1" >{data}</p>
      <p id="post2" >{data}</p>
      <p id="post3" >{data}</p>
      <p id="post4" >{data}</p>
    </main>
  )
}

export default Content;

```

Style for Content.js

```scss
//content.scss

.content{
  width: 80%;
  margin:2rem 10% 0 10%;
  max-width: 100%;
  box-sizing: border-box;
  min-height: 100vh;
}
```

After all this setup, our page will look like this:

![Complete layout](./complete-layout.PNG)

*This is the visual after this much code*