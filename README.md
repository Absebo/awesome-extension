<div align="center">
    <h1>
        <img src="src/assets/img/icon-128.png" width="158" alt="logo"/>
    </h1>
    <h2>Awesome Extension</h2>
    <div>
        <img src="https://img.shields.io/github/languages/code-size/Daywalkerchen/awesome-extension?style=for-the-badge" alt="" />
        <img src="https://img.shields.io/github/release-date/Daywalkerchen/awesome-extension?style=for-the-badge" alt="" />
        <img src="https://img.shields.io/github/issues/Daywalkerchen/awesome-extension?style=for-the-badge" alt="" />
    </div>
</div>

## Install

1. Download the latest version of the extension https://github.com/Daywalkerchen/awesome-extension/releases -> Assets -> `build.zip`
2. Unzip `build.zip`
3. Open `chrome://extensions` in Chrome (or similar)
4. Check `Developer mode`
5. Click on `Load unpacked extension`
6. Select the `build/` folder.

## Getting Started

1. Check if your [Node.js](https://nodejs.org/) version is >= **14**.
2. Clone this repository.
3. Run `npm install` to install the dependencies.
4. Run `npm run start` to build and run the dev server
5. Load your extension on Chrome:
   1. Access `chrome://extensions/`
   2. Check `Developer mode`
   3. Click on `Load unpacked extension`
   4. Select the `build` folder.
6. Open http://localhost:3000/test-page.html to watch the extension in action.
7. Run `npm run prepare` to install the prettier precommit hook.
8. Happy hacking.

## Commands

Run the dev server. Hot module replacement is active. Test page is accessible:

```
npm run start
```

Build the extension (for production). Hot module replacement is inactive. Test page is not accessible:

```
npm run build
```

Reformat code:

```
npm run prettier
```

## Resources

All emotes have been downloaded from https://cdn.betterttv.net

## License

The code is available under the [MIT](LICENSE) license.
