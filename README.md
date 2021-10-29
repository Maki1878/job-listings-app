# job-listings-app

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### NButton component documentation

- Content can be either text or icon and it can be passed to the component using either props or slots
- If slots are used to pass an icon to the component, the icon must be passed with a class named "icon" for styling purposes
- If content is passed to the component in more than one way the render precedence is the following:

1. Text using props
1. Text using slots
1. Icon using props
1. Icon using slots
