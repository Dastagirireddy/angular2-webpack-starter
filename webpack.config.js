module.exports = {
    entry: "./src/main.ts",
    output: {
        path: './dist',
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        loaders: [{
            test: /\.ts/,
            loaders: ['ts-loader'],
            exclude: /node_modules/
        }],
        exprContextCritical: false
    }
}
