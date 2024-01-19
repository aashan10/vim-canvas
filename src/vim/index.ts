import { Plugin } from "../plugins";
import { BufferCollection } from "./buffers/collection";
import { VimConfig, get_default_config } from "./config";
import { Keymap, get_default_keymaps } from "./keymaps";
import { Mode } from './config';
export class Vim {

    buffers: BufferCollection;
    context: CanvasRenderingContext2D;
    config: VimConfig;
    plugins: Array<Plugin>;
    keymap: Keymap;
    input_buffer: string;

    constructor(context: CanvasRenderingContext2D) {
        this.context = context;
        this.config = get_default_config();
        this.buffers = new BufferCollection();
        this.keymap = get_default_keymaps();
        this.plugins = [];
        this.input_buffer = '';
        window.addEventListener('keydown',  (e) => {
            if (this.config.mode === Mode.Insert) {
                this.buffers.get_active_buffer()?.write(e);
                if (e.key !== 'Escape') {
                    return;
                }
            }
            if ([
                'Meta', 
                'Alt', 
                'Control', 
                'Shift', 
                'Tab', 
            ].includes(e.key)) {
                return;
            }
            if (e.key === 'Backspace') {
                this.input_buffer = '';
                return;
            }
            if (e.key === this.config.leader) {
                this.input_buffer = '<leader>';
            } else if (e.key === 'Enter') {
                this.input_buffer += '<CR>';
            } else {
                this.input_buffer += e.key;
            }

            if (this.config.mode === Mode.Command && this.keymap.get(Mode.Command, this.input_buffer) === null) {
                let _default = this.keymap.get(Mode.Command, 'default');

                if (_default !== null) {
                    if (_default(this)) {
                        this.input_buffer = '';
                    }
                    return;
                }

            }
            const callback = this.keymap.get(this.config.mode, this.input_buffer ?? 'default');
            if (callback) {
                callback(this);
                this.input_buffer = '';
            } else if (e.key === 'Enter') {
                this.input_buffer = '';
            }

            if (e.key === 'Escape') {
                this.input_buffer = '';
            }

        });
    }

    public set_dimension(h: number, w: number): this 
    {
        this.config.width = w;
        this.config.height = h;
        return this;
    }

    public get_canvas_context(): CanvasRenderingContext2D
    {
        return this.context;
    }

    public register_plugin(plugin: Plugin): this
    {
        this.plugins.push(plugin);
        plugin.setup(this);
        return this;
    }

    public get_font(): string
    {
        return `${this.config.font_size}px ${this.config.font_family}`;
    }
}
