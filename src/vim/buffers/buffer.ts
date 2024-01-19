export interface LineDescriptor {
    start: number;
    end: number;
}
export class Buffer {
    protected lines: Array<LineDescriptor>;
    protected cursor: number;
    
    constructor(protected name: string, protected text: string) {
        this.calc_line_descriptors();
        this.cursor = 0;
    }

    public move_cursor_to_line(line: number, char: string|null): void
    {
        this.calc_line_descriptors();
        if (line < 0 || line > this.lines.length) {
            return;
        }
        let pos = this.lines[line].start;
        if (char !== null) {
            pos += parseInt(char);
        }


        this.cursor = pos;
    }

    public calc_line_descriptors(): void
    {
        let start = 0;
        let line_descriptors: Array<LineDescriptor> = [];
        let lines = this.text.split('\n');
        for(let i = 0; i < lines.length; i++) {
            let line: LineDescriptor = {
                start,
                end: start + lines[i].length
            }

            line_descriptors.push(line);
            start += (lines[i].length + 1);
        }
        this.lines = line_descriptors;
    }

    public move_cursor_left(): void
    {
        if (this.cursor <= 0) {
            this.cursor = 0;
            return;
        }
        this.cursor -= 1;
        
    }

    public move_cursor_right(): void
    {
        if (this.cursor >= this.text.length) {
            this.cursor = this.text.length;
            return;
        }
        this.cursor += 1;
    }

    public move_cursor_up(): void
    {
        this.calc_line_descriptors();
        if (this.lines.length <= 1) {
            return;
        }

        for (let i = 1; i < this.lines.length; ++i) {
            let {start, end} = this.lines[i];
            
            if (start <= this.cursor && end >= this.cursor) {
                let diff = this.cursor - start;
                let prev_line= this.lines[i - 1];
                if (diff <= prev_line.end - prev_line.start) {
                    this.cursor = prev_line.start + diff;
                    return;
                } else {
                    this.cursor = prev_line.end;
                    return;
                }
            }
        }
    }

    public move_cursor_down(): void
    {
        this.calc_line_descriptors();
        if (this.cursor >= this.text.length) {
            return;
        }

        for (let i = 0; i < this.lines.length - 1; ++i) {
            let {start, end} = this.lines[i];
            
            if (start <= this.cursor && end >= this.cursor) {
                let diff = this.cursor - start;
                let next_line= this.lines[i + 1];
                if (diff <= next_line.end - next_line.start) {
                    this.cursor = next_line.start + diff;
                    return;
                } else {
                    this.cursor = next_line.end;
                    return;
                }
            }
        }

    }

    public get_name(): string
    {
        return this.name;
    }

    public get_cursor_position(): number
    {
        return this.cursor;
    }

    public get_text(): string
    {
        return this.text;
    }

    public get_line_descriptors(): Array<LineDescriptor>
    {
        return this.lines;
    }

    public write(e: KeyboardEvent): void
    {
        let text = this.text;
        let cursor = this.cursor;
        switch(e.key) {
            case 'Enter':
                this.text = text.substring(0, cursor) + 
                            '\n' + 
                            text.substring(cursor, text.length);
                this.move_cursor_right();
                this.calc_line_descriptors();
                break;
            
            case 'Escape':
                break;
            case 'ArrowLeft':
                this.move_cursor_left();
                break;
            case 'ArrowRight':
                this.move_cursor_right();
                break;
            case 'ArrowUp':
                this.move_cursor_up();
                break;
            case 'ArrowDown':
                this.move_cursor_down();
                break;
            case 'Backspace':
                this.text = text.substring(0, cursor - 1) + text.substring(cursor, text.length);
                this.move_cursor_left();
                this.calc_line_descriptors();
                break;
            case 'Delete':
                this.text = text.substring(0, cursor) + text.substring(cursor + 1, text.length);
                this.cursor = this.cursor > text.length - 1 ? text.length - 1 : this.cursor;
                this.calc_line_descriptors();
                break;
            case 'Shift':
            case 'Alt':
            case 'Control':
            case 'Meta':
            case 'Command':
                break;
            default:
                const key = e.key;
                this.text = text.substring(0 , cursor) + key + text.substring(cursor, text.length);
                this.cursor += key.length;

        }
        

    }
}
