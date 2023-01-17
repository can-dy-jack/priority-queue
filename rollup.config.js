import buble from '@rollup/plugin-buble';
import terser from '@rollup/plugin-terser';

const config = (filename, plugins) => ({
    input: 'index.js',
    output: {
        file: filename,
        format: 'umd',
        indent: false,
        name: 'PriorityQueue'
    },
    plugins
});

export default [
    config('priorityqueue.js', [buble()]),
    config('priorityqueue.min.js', [buble(), terser()])
];

