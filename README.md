# foxacmw.com
George Fox Code Jam 2022 informational website.

## Directory Structure

Most of the important files for the site are in the '/src' directory.

The files are split into the '/src/js' and '/src/sass' directories.

For the primary sections and components of the page, there is a .jsx file and corresponding 
.scss file in the '/src/js' and '/src/sass' directories, respectively.

The '/src/js/projects.json' file contains most of the image paths and text to
avoid clutter, and the '/src/sass/global.scss' file contains global styles and
classes, such as variables for the color palette and some styles that are
used more than once.


## Install

1. Download and extract zip file
2. Run 'npm install' in the root directory
3. Run 'npm run build' to build the site
4. Run 'npm start' to serve the site