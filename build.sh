# Must be run from the root of the repository

cd server

# clear the build directory
for file in build/*; do
    rm -rf $file
done

# delete the old build
rm -rf build

cd ..

# cd into client/
cd client

# run `npm run build`
npm run build

# move the build folder to the server/ directory
mv build ../server/

echo "Build complete!"