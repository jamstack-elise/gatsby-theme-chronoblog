---
title: Getting to know React Router
cover: ./ReactRouterDom.png
date: 2020-01-19
description: A guide to React's navigational component library, React Router.
tags: ['article', 'code', 'react','tutorial']
---
###### written by Elise Plecnik

### **Introduction:**
This tutorial walks you through React’s dynamic navigational library of components, React Router. A way to use React Router is when you have multi-page applications. Let’s scale down to Single page applications (SPAs) first. SPAs use a single html page to load multiple components. With multi-page applications, pages are not always the same model. So, React’s Router package through react-router-dom helps you connect new pages into your multi-page application. Excited for this efficiency? Then let’s get to it!

### **Overview:**
We’ll create our proof of concept through a web app by bootstrapping Create React App. Think of Create React App as someone handing you a pre-built lego starter for a, I don’t know, a Valentine’s present you want to give someone you care about. When you’re handed this pre-built starter, all of the more intricate pieces are handled for you (in the case of Create React App: build configurations and additional dependencies). This gives you wiggle room to focus particularly on the look and feel of your Valentine’s present (in our tutorial’s case-- the frontend!). Put simply, Create React App is a boilerplate React app that gets you to working on the frontend fast!

We’ll then install a Node Package Manager from the public npm registry that contains all of React Router’s goodies called, react-router-dom. From there, we’ll fire off some code in our editor and view our work locally on localhost: 3000.

All our code will be written in the code editor called Visual Studio Code, by Microsoft. There are plenty of other code editors that will work fine. This tutorial assumes you have a working editor you comfortably use.

### **React Nomenclature:**
There are 3 primary categories of components in React Router, they are:
Routers
Route matchers 
Route changers 

Let’s sift through what components are contained in each category and I’ll attempt to list some pointers and ways to think about each category.

Routers: think of this category as a worker in the meta space, it calls how to store or communicate the app’s URL with your web server. 
The components you work with are: `<BrowserRouter>` or `<HashRouter>`. 
`<BrowserRouter>` is more often used, since its is more readable.

Route matchers: think of this category as components with a strict sequence. The two components you’ll work with are `<Switch>` and `<Route>`. If `<Switch>` will be used, use it before `<Route>` because when `<Switch>` is rendered, it goes through children `<Route>` elements to find whose path matches the current URL. It’s highly recommended you use `<Switch>` anytime you have multiple routes, and you only want one of them render at a time. To avoid snags, `<Routes>` with longer paths should be declared
before shorter paths. 

When building 404 pages, remember to set this as a last component on your `<Route>` list to avoid a 404 page rendering on an existing page.

If you decide to use a `<Route>` outside of a `<Switch>` component, it is recommended that you use the useRouteMatch hook instead.

Route changers: These are navigational elements you are probably familiar with. `<Link>` components render as an anchor `<a>` tag. Now, isn’t that semantically something!? 
`<NavLink>` is also a `<Link>` component that can be styled. 
`<Redirect>` is a component where you can force navigation. This behaves exactly as a 301 response code.

Now that you have a structural concept of how things are placed, let’s get to the fun part. Let’s build!!

### **Steps:**
Install Create React App globally using npm or yarn (skip this step if you already have Create React App). 

Create a new directory for our project. You can name it however you’d like, I chose, “routing-exercise”:

```sh
npm install -g create-react-app
npx create-react-app routing-exercise
```
Now, we’ll run the react-router-dom package

```sh
npm install --save-dev react-router-dom
npm start //runs it locally on localhost:3000, unless you have configured this manually
```

Now that we have the basics, let’s test a case of Basic Routing. Then, Nested Routing.

Replace the codebase below into App.js through filepath: src/App.js

Basic Routing
```jsx
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
```

Easy peasy, lemon squeezy. It was like building a scratch website in the 90s.

Okay George, time to get out of the 90s geocities nostalgia and bring yourself back to tech’s jam. We’ll take it up a notch and build more routing complexity with nested routing. We’ll also make our lives easier by using URL parameters.

Nested Routing:

Replace the codebase below into App.js through filepath: src/App.js

```jsx
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Topics() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}
```

We’ve got a few things that popped up on our Nested Routing example. In example 2, we used the hook, useRouteMatch(), and our Topics page contains its own `<Switch>` component (see comment in the codebase).

useRouteMatch() behaves like `<Route>` without actually rendering match within the component, so this saves time, and some lines of code. Check it out:

Instead of:
```jsx
import { Route } from "react-router-dom";

function BlogPost() {
  return (
    <Route
      path="/blog/:slug"
      render={({ match }) => {
        // Do whatever you want with the match...
        return <div />;
      }}
    />
  );
}
```

We used:
```jsx
import { useRouteMatch } from "react-router-dom";

function BlogPost() {
  let match = useRouteMatch("/blog/:slug");

  // Do whatever you want with the match...
  return <div />;
}
```

Well, now. Look at that elegance. Hooks like it’s the way to go.😄

Now that we have some bare bones basic applications of React’s Router, we can challenge ourselves to layer on some styling. Go ahead and play with some CSS and see what you come up with! Not sure how to start? [Check out Flexbox] (link). Happy coding!

React.js is a stable and powerful declarative programming model with an active community that improves the code’s API base. [Check it out here] (link)

This article used parts of the documentation written by folks at React Training and Sai Gowtham, thank you!


Want to discuss more about React Router? Send Elise an [email](mailto:elise@elisejane.me?subject=ReactRouter)!