# The Ridges Sanctuary Blocks


## Adding a new block
inside of a terminal and having nodejs installed, navigate to the `src` directory and use the following command (replacing whatever parts needed):
```sh
npx @wordpress/create-block <slug> --namespace "ridges" --title "block title" --short-description "description for the block" --category "ridges" --no-plugin
```
This will generate the source files required for a single block, but they will still need to go through the build process before they will be able to be shown on WordPress, see that in the next section.

## Building source files
Anytime source files are changed, they need to be compiled into build files, which WordPress uses on it's front-end and editor. So you have two choices while developing blocks, either execute the `npm run build` command every time you make a change, OR better yet, use `npm run start` to "watch" the files for new changes to them, and automatically recompile them when needed. When files are compiled, they will be deposited in the `/build` directory. After the first time compiling your assets, you should add each of the subdirectories inside of `/build` to `ridges-blocks.php`, doing this will inform WordPress where to load assets for each block.
