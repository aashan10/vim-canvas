import {Plugin} from '.'
import { get_text_width } from '../utils';
import { Vim } from '../vim';

type BufferRendererProps = {
    bg_color: string;
};


export const buffer_renderer = (
    options: Partial<Record<keyof BufferRendererProps, any>>
): Plugin => {

    return {
        render(vim: Vim){
            const ctx = vim.get_canvas_context();
            const height = vim.config.height - 60;
            const width = vim.config.width;

            ctx.save();
            ctx.fillStyle = options.bg_color ?? '#3d3d3d';
            ctx.fillRect(0, 30, width, height);

            const active_buffer = vim.buffers.get_active_buffer();

            if (active_buffer) {
                let cursor = active_buffer.get_cursor_position();
                let lines = active_buffer.get_line_descriptors();
                
                for (let i = 0; i< lines.length; ++i) {
                    let {start, end} = lines[i];
                    let substring = active_buffer.get_text().substring(start, end);
                    // draw line number
                    ctx.fillStyle = '#4967b9';
                    ctx.font = vim.get_font();
                    ctx.fillText(i + '.', 20, (i + 2) * 30);
                    ctx.fillStyle = '#ffffff';
                    ctx.fillText(substring, 100, (i + 2) * 30);
                    if (cursor >= start && cursor <= end) {
                        let position_text = active_buffer.get_text().substring(start, cursor);
                        let offset = get_text_width(position_text, vim);
                        ctx.fillStyle = 'rgba(255,255,255,0.5)';
                        ctx.fillRect(offset + 100, 7.5 + ((i+1) * 30), get_text_width('a', vim), 30);
                    }
                }
            }
            ctx.restore();

        },
        setup(vim: Vim){}
    }
}
