import { Vim } from "..";
import { Mode } from "../config";

export class Keymap {

    keys: Record<Mode, Record<string, CallableFunction>>;

    constructor() {
        this.keys = {
            'insert': {
                'Escape': (vim: Vim) => vim.config.mode = Mode.Normal
            },
            'command': {
                'Escape': (vim: Vim) => vim.config.mode = Mode.Normal,
                default: (vim: Vim) => {
                    let buffer = vim.input_buffer;
                    const reg = new RegExp('^[0-9]:[0-9]$');
                    if (reg.test(buffer)) {
                        let bufnr = vim.buffers.bufnr();
                        if (bufnr === null) {
                            return;
                        }
                        const parts = buffer.split(':');
                        const line = parts[0];
                        const char = parts[1] ?? null;
                        vim.buffers.items[bufnr]?.move_cursor_to_line(parseInt(line), char);
                        return true;
                    }
                    return false;
                                    }
            },
            'normal': {
                'i': (vim: Vim) => vim.config.mode = Mode.Insert,
                ':': (vim: Vim) => vim.config.mode = Mode.Command,
                'v': (vim: Vim) => vim.config.mode = Mode.Visual,
                '<leader>bd<CR>': (vim: Vim) => vim.buffers.items = vim.buffers.items.filter(buf => buf !== vim.buffers.get_active_buffer()),
                'ArrowLeft': (vim: Vim) => vim.buffers.get_active_buffer()?.move_cursor_left(),
                'ArrowRight': (vim: Vim) => vim.buffers.get_active_buffer()?.move_cursor_right(),
                'ArrowDown': (vim: Vim) => vim.buffers.get_active_buffer()?.move_cursor_down(),
                'ArrowUp': (vim: Vim) => vim.buffers.get_active_buffer()?.move_cursor_up(),
                '[b': (vim: Vim) => vim.buffers.prev_buffer(),
                ']b': (vim: Vim) => vim.buffers.next_buffer(),
                'h': (vim: Vim) => vim.buffers.get_active_buffer()?.move_cursor_left(),
                'j': (vim: Vim) => vim.buffers.get_active_buffer()?.move_cursor_down(),
                'k': (vim: Vim) => vim.buffers.get_active_buffer()?.move_cursor_up(),
                'l': (vim: Vim) => vim.buffers.get_active_buffer()?.move_cursor_right(),
                'w': (vim: Vim) => {
                    let buffer = vim.buffers.get_active_buffer();
                    let buffer_len = buffer?.get_text().length ?? 0;
                    let next_char = '';
                    do {
                        let current = vim.buffers.get_active_buffer()?.get_cursor_position() ?? 0;
                        if (current >= buffer_len) {
                            next_char = ' ';
                        }
                        next_char = buffer?.get_text()[current + 1] ?? ' ';
                        vim.buffers.get_active_buffer()?.move_cursor_right();
                    } while(next_char !== ' ')
                },
                'W': (vim: Vim) => {
                    let buffer = vim.buffers.get_active_buffer();
                    let buffer_len = buffer?.get_text().length ?? 0;
                    let next_char = '';
                    do {
                        let current = vim.buffers.get_active_buffer()?.get_cursor_position() ?? 0;
                        if (current <= 0) {
                            next_char = ' ';
                        }
                        next_char = buffer?.get_text()[current - 1] ?? ' ';
                        vim.buffers.get_active_buffer()?.move_cursor_left();
                    } while(next_char !== ' ')
                }
            },
            'visual' : {
                'Escape': (vim: Vim) => vim.config.mode = Mode.Normal
            }
        }
    }
    
    set(mode: Mode, keys: string, callable: () => void) {
        this.keys[mode][keys] = callable;
        return this;
    }

    get(mode: Mode, keys: string): CallableFunction|null 
    {
        if(!this.keys[mode]) {
            return null;
        }

        return this.keys[mode][keys] ?? null;
    }
}

export const get_default_keymaps = (): Keymap => {
    const keymap = new Keymap();

    return keymap;
}
