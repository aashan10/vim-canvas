import { Plugin } from ".";
import { get_text_width } from "../utils";
import { Vim } from '../vim';
import { Mode } from "../vim/config";
type BufferLineConfig = {
    bg_color: string;
    height: number;
};

export const command_bar = (options: Partial<BufferLineConfig>): Plugin => {
    return {
        setup(vim: Vim) {
            
        },
        render(vim: Vim) {
            const ctx = vim.get_canvas_context();
            const height = options?.height ?? 30;
            const bg_color = options?.bg_color ?? "#3d3d3d";
            const width = vim.config.width;

            ctx.save();
            ctx.fillStyle = bg_color;
            ctx.fillRect(0,vim.config.height - 30,width, height);
            const mode = vim.config.mode;
            const length = get_text_width(mode, vim);
            ctx.fillStyle = '#ffffff';
            ctx.font = vim.get_font();
            ctx.fillText(vim.input_buffer, 20, vim.config.height - 20);
            ctx.fillText(mode.toUpperCase(), vim.config.width - length - 20, vim.config.height - 20);
            ctx.restore();
        }
    }
};
