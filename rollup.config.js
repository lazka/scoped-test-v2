import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import copy from 'rollup-plugin-copy';
import serve from 'rollup-plugin-serve';

export default (async () => {
    return {
        input: ['demo.js'] ,
        output: {
            dir: 'dist',
            entryFileNames: '[name].js',
            format: 'esm',
            sourcemap: true
        },
        plugins: [
            resolve(),
            commonjs(),
            copy({
                targets: [
                    {src: 'assets/index.html', dest: 'dist'},
                ],
            }),
            (process.env.ROLLUP_WATCH === 'true') ? serve({contentBase: 'dist', host: '127.0.0.1', port: 8002}) : false
        ]
    };
})();