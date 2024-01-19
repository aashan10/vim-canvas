import { Vim } from "../vim";

export const get_text_width = (text: string, vim: Vim): number => {
    const ctx = vim.get_canvas_context();
    let width = 0;
    let words = text.split(' ');
    words.map((t: string, index: number) => {
        ctx.save();
        ctx.font = `${vim.config.font_size}px ${vim.config.font_family}`;
        width += ctx.measureText(t).width;

        if (index !== words.length - 1) {
            width += ctx.measureText('a').width;
        }
        ctx.restore();
    })

    return width;

}
