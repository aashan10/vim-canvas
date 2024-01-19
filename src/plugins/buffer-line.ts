import { Plugin } from ".";
import { get_text_width } from "../utils";
import { Vim } from '../vim';
import { Buffer } from "../vim/buffers/buffer";
type BufferLineConfig = {
    bg_color: string;
    height: number;
};
export const buffer_line = (options: Partial<BufferLineConfig>): Plugin => {
    return {
        setup(vim: Vim) {

        },
        render(vim: Vim) {
            const ctx = vim.get_canvas_context();
            const buffers = vim.buffers;
            const height = options?.height ?? 30;
            const bg_color = options?.bg_color ?? "#3d3d3d";
            const width = vim.config.width;

            ctx.save();
            ctx.fillStyle = bg_color;
            ctx.fillRect(0,0,width, height);
            let start = 10;
            buffers.all().map((buffer: Buffer, index: number) => {
                let active  = buffer === buffers.get_active_buffer();
                const buffer_width = get_text_width(buffer.get_name(), vim) + 60;
                ctx.font = (active ? 'italic ' : '') + vim.get_font();
                
                ctx.fillStyle = '#ffffff';
                ctx.fillRect(start - 8, 0, 2, 30);
                
                ctx.fillStyle = active ? '#ffffff': '#4a69bd';
                ctx.fillText(buffer.get_name(), start, 20);
                start += (buffer_width);
            });


            ctx.restore();
        }
    }
};
