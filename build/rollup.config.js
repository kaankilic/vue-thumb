import vue from 'rollup-plugin-vue'; // Handle .vue SFC files
export default {
    input: 'src/main.js', // Path relative to package.json
    output: {
        name: 'VueThumb',
        exports: 'named',
    },
    plugins: [
        vue({
            css: true, // Dynamically inject css as a <style> tag
            compileTemplate: true, // Explicitly convert template to render function
        })
    ],
};
