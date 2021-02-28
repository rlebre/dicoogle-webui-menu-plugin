# webui-react-template
> Template to develop menu web-uiplugins for dicoogle using React

This is a web UI menu plugin for Dicoogle.

## Building

```bash
npm install # OR npm run build
```

## Debugging

```bash
npm run build-debug # build plugin with inline source-maps
npm run build-watch # build for debugging and watch for source code changes
```

## Deploying

Place `module.js` and `package.json` in a folder in the WebPlugins directory at the base of Dicoogle.
Alternatively, create a WebPlugins folder with the same structure and add it to a jar file, then move it to the Plugins directory.