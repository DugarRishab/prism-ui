const path = require('path');

module.exports = {
    entry: './src/index.js', // The entry point of your library
    output: {
        path: path.resolve(__dirname, 'dist'), // Output directory for bundled files
        filename: 'prism-ui.js', // Output filename
        library: 'PrismUI', // The global variable name for your library
        libraryTarget: 'umd', // Universal Module Definition (UMD) format
        umdNamedDefine: true, // Use a named AMD module for UMD builds
        globalObject: 'this', // Set the global object used for UMD builds
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            // Add more rules for other file types or preprocessors (e.g., CSS, SCSS)
        ],
    },
    resolve: {
        extensions: ['.js', '.css', '.jsx'], // Add extensions for other file types you're using (e.g., '.css')
    },
    // Add any necessary plugins, optimizations, or other configurations
    // ...
};
