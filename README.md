# The Logo ⚛️

# Motivation

These days we need to develop all kind of applications, some of them are pure client side where
side application where browser receives a bundled file and compiles it to creates beautiful UI
and some of them are pure server side where all pages are generated on server because of that
whenever we go to another page there is a lag. Reason of choosing server side because it
is good for SEO, but we don't need SEO for all the pages(like dashboard, settings). So we needed an configuration/way
to do SEO for some pages and bundle all other pages that doesn't need SEO and send it to browser  
to create beautiful UI. This boilerplate fulfils that need.


# Overview
This application has all the basic components with proper navigation. You might need to customize
 UI according to your design. This can be used when you have to do server-side-rendering 
 with react. This application has a configuration to get the SEO related keywords from the 
 database and then create a page on the server and send it to the browser. 
 
 This can also be configured to generate some pages on the server and bundle all 
 business-related pages in one js file and send it to the browser.

![](web-record.gif)

**What's included:**
- Contain all the configurations of ejected create-react-app
- Express server to serve react application, it can be also configured to send static files(html/css/images)
- Server-side rendering with code splitting (via the excellent [React Loadable](https://github.com/thejameskyle/react-loadable) package)
- Server-side data fetching and client-side hydration
- React Router
- Conditionally load pollyfills -- only ship bloat to outdated browsers
- React Helmet for dynamic manipulation of the document `<head />`
- Dev server with hot reloading styles
- Jest and react-testing-library ready to test the crap out of some stuff
- CSS Modules, Sass, and autoprefixer
- Run-time environment variables
- Node.js clusters for improved performance under load (in production)
- Pre-commit hook using Prettier and ESLint run on commit

# Folder structure
```
 └──   src
        └──api
             └── axios configuration to handle api calls 
        
        └──components
              └── Components that is reused in different views
        
        └──redux
              └── modules
                    └── files that creates actions and reducer
              └── configuration to create and manage store
                    
        └──services
            └─── services which uses api(axios) to fetch/udate data
        
        └──state
             └── It stores context configuration to share data across components
        
        └──views
              └── all view folder according to use
                   └── home.js
                   └── style.module.scss
                   └── other componets which will be used only in home component
        
        └──layouts
              └── list of all needed layouts, mostly contains HOC (Higher order components) to 
                  add headers/sidebar at once and pass your component       
```

# Routing Configuration

All routes are a Higher Order Component which is created using matchProps property to Route 
provided by react-router-dom

Type of component that we provide to Route HOC differs, if there is a need ot code spitting 
and you want to generate your page on server use react-loadable for that. Webpack will load
those components separately.

```js
const LoadableHome = Loadable({
  loader: () => import(/* webpackChunkName: 'home' */ 'path of your component'),
  loading: () => <div>Loading...</div>, // eslint-disable-line
});


const Routes = () => (
  <Switch>
    <StaticLayout exact path="/" component={LoadableHome} />
    <AuthLayout path="/login" component={Login} />
    <DefaultLayout path="/dashboard" component={Dashboard} />
    <DefaultLayout path="/settings" component={Settings} />
  </Switch>
);

```

## Initial setup

- `npm install`

## Development

- `npm start`
  - Start the dev server at [http://localhost:3000](http://localhost:3000)
- `npm test`
  - Start `jest` in watch mode

## Production

- `npm run build && npm run start:prod`
  - Bundle the JS and fire up the Express server for production
