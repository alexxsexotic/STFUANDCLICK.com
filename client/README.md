## @stfuandclick/client

React SPA app with Redux and Jest for testing

The project is inspired by nextjs and appliting code structures

```sh
# project structure
client/src/
    ├── components
    ├── layouts
    ├── models
    ├── pages
    ├── reducers
    ├── styles
    ├── tests__
    ├── utils
    └── client
    - index
    - routes
```

### Setup

```bash
# install dependencies
yarn install

# running dev mode
yarn dev

# production build
yarn build
```

### Notice

The project is using a mix usage of scoped styles and global styles. <br/>
THe global styles are used as custom tailwind classes, for futher info check the /styles/global.scss file
