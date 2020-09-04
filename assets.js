const fs = require('fs');
const path = require('path');

const outputDir = './dist/';
const fileToRemove = outputDir + 'demo.html';

const assets = [
    './node_modules/materialize-css/dist/css/materialize.min.css',
    './assets.js'
];

// copy assets to dist
assets.forEach((asset_path) => {
  const filename = path.basename(asset_path);
  fs.createReadStream(path.resolve(__dirname, asset_path)).pipe(
    fs.createWriteStream(path.resolve(__dirname, outputDir, filename))
  );
});

// remove demo.html file
fs.unlink(fileToRemove, (err) => {
  if(err) {
    console.error(err)
    return
  }
  console.log(fileToRemove + ' removed')
})
