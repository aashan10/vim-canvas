import { buffer_renderer } from "./plugins/buffer";
import { buffer_line } from "./plugins/buffer-line";
import { command_bar } from "./plugins/command-bar";
import { get_text } from "./utils/fake-api";
import { Vim } from "./vim";
import { Buffer } from "./vim/buffers/buffer";
import { create_renderer } from "./vim/renderer";

const create_canvas = (): HTMLCanvasElement => {
    const canvas = document.createElement<'canvas'>('canvas');
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    return canvas;
}


const canvas = create_canvas();
const rendering_context = canvas.getContext('2d');

if (!rendering_context) {
    throw new Error('Could not get rendering context');
}
const vim = new Vim(rendering_context);
vim.set_dimension(window.innerHeight, window.innerWidth);


// Register Plugins
vim.register_plugin(buffer_line({
    bg_color: '#1f2335'
}));
vim.register_plugin(buffer_renderer({
    bg_color: '#1f2335'
}));
vim.register_plugin(command_bar({
    bg_color: '#1f2335'
}));

const renderer = create_renderer();
document.body.appendChild(canvas);

window.onresize = () => {
    const {innerWidth, innerHeight} = window;
    vim.set_dimension(innerHeight, innerWidth);
    canvas.height = innerHeight;
    canvas.width = innerWidth;
}

const loop = () => {

    window.requestAnimationFrame(() => {
        renderer.render(vim);
        loop();
    });
}

window.requestAnimationFrame(() => {
    loop();
});


setTimeout( () => {
    
    const buffer1: Buffer = new Buffer("What is Lorem Ipsum?", 
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n" + 
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " + 
        "when an unknown printer took a galley of type and scrambled it to make a type " +
        "specimen book.\nIt has survived not only five centuries, but also the leap into " + 
        "electronic typesetting, remaining essentially unchanged.\nIt was popularised in " +
        "the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, " + 
        "and more recently with desktop publishing software like Aldus PageMaker " +
        "including versions of Lorem Ipsum.");
    const buffer2: Buffer = new Buffer("Why do we use it?",
        "\n"
        );
    vim.buffers.add(buffer1);
    vim.buffers.add(buffer2);
    vim.buffers.set_active_buffer(0);
}, 0)
