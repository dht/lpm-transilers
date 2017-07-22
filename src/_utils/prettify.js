const _space = (number) => {
    let output = '';

    for (let i = 0; i < number; i++) {
        output += ' ';
    }

    return output;
}

const _tabs = (number) => {
    let output = '';

    for (let cnt = 0; cnt < number; cnt++) {
        output += _space(4);
    }

    return output;
}

const br = (indent) => {
    return _tabs(indent);
}

const enter = () => {
    return '\n';
}

export const linify = (html) => {
    let tag = '',
        mode = 'IDLE',
        inTag = false,
        line = '',
        cleanTag = '',
        quote = false,
        inline = ['Text', 'Image'],
        isInline;

    return html
        .split('')
        .reduce((output, char, index) => {
        
            if (char === '<') {
                tag = '';
                mode = 'TAG';
                line += '<';
                inTag = true;
            } else if (!quote && char === '/' && mode === 'TAG') {
                mode = 'CLOSING_TAG'
                line += '/';
            } else if (char === ' ') {
                inTag = false;
                line += ' ';
            } else if (char === '>') {
                inTag = false;
                cleanTag = tag.replace('/', '');
                isInline = inline.indexOf(cleanTag) >= 0;

                if (mode === 'TAG' && isInline) {
                    line += '>';
                } else {
                    line += '>';
                    output.push({text: line, isInline, tag: cleanTag, closing: mode === 'CLOSING_TAG'});
                    line = '';
                }
                mode = '';

            } else {
                line += char;

                if (inTag) {
                    tag += char;
                }

                if ((char === "'" || char === '"') && mode === 'TAG') {
                    quote = !quote;
                }
            }

            return output;
        }, []);
}

export const parseLines = (lines, addTabs) => {
    let tags = [],
        indent = addTabs || 0,
        lastInline = false;

    return lines.reduce((output, line) => {

        if (line.isInline) {
            lastInline = true;
            return output + br(indent) + line.text + enter();
        }

        const last_tag = tags[tags.length - 1];

        if (line.closing &&  last_tag.tag === line.tag) {
            tags.pop();
            indent = last_tag.indent;
            output += br(indent);
        } else  {
            output += br(indent);
            tags.push({tag: line.tag, indent: indent});
            indent += lastInline ? 0 : 1;
        }

        lastInline = false;

        return output + line.text + enter();
    }, '');
}

export const removeLastBreak = (output) => {
    return output.replace(/\n$/g, '');
}

export const prettifyHtml = (html, addTabs = 0) => {

    try {
        return removeLastBreak(parseLines(linify(html), addTabs));
    } catch (e) {
        return 'problem parsing';
    }

}
/*
 indent += mode === 'TAG' ? +1 : -1;

 shouldBreakAfter = breakAfter.indexOf(tag) >= 0;
 inTag = false;
 tag = '';
 */

export const prettifyScss = (scss) => {
    let indent = 0,
        closeBefore = 0;

    return scss
        .split('')
        .reduce((output, char) => {

            closeBefore++;

            if (char === '{') {
                indent++;
                output += '{' + br(indent);
            } else if (char === '}') {
                indent--;
                output += br(indent) + '}' + (closeBefore > 3 ? '\n' : '') + _tabs(indent);
                closeBefore = 0;
            } else if (char === '.') {
                output += br(indent) + '.';
            } else if (char === ';') {
                output += ';' + br(indent);
            } else {
                output += char;
            }

            return output;
        }, '');
}