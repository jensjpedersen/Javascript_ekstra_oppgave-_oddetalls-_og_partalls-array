


// Create gh pages from repo in cd path
// let ghpages = require('gh-pages');
// const execution_dir = process.cwd();
// ghpages.publish(execution_dir, {branch: 'main'}, function (err) {console.log(err)}); 

const ghpages = require('gh-pages');
const execution_dir = process.cwd();

ghpages.publish(execution_dir, { branch: 'main' }, function (err) {
    if (err) {
        console.error('Error during GitHub Pages deployment:', err);
    } else {
        console.log('GitHub Pages deployment successful!');
    }
});
