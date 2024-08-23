import React from "react";
import Markdown from "marked-react";

class MarkdownComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<Markdown>{this.props.input}</Markdown>);
  }
}

const sample = `This demo page will let you type anything you like and see how it gets converted.  Live.  No more waiting around.

How To Use The Demo
-------------------

1. Type in stuff on the left.
2. See the live updates on the right.

# Heading

**bold**

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}

\`\`\`
It is possible to embed images:

![empty image tag](none)

There's also [links](https://www.yisroelsteiner.com), and
> Block Quotes!



Why Markdown?
-------------

It's easy.  It's not overly bloated, unlike HTML.  Also, as the creator of [markdown] says,

> The overriding design goal for Markdown's
> formatting syntax is to make it as readable
> as possible. The idea is that a
> Markdown-formatted document should be
> publishable as-is, as plain text, without
> looking like it's been marked up with tags
> or formatting instructions.

Ready to start writing?  Either start changing stuff on the left or
[clear everything](/demo/?text=) with a simple click.`;

export default class MarkdownPreviewer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: sample,
            output: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(e) {
        this.setState({
            input: e.target.value,
        });
    } 

    render() {
        return (<div id="container"><h1 id="heading">Markdown Previewer</h1>
        <textarea id="editor" onChange={this.handleChange}>{this.state.input}</textarea>
        <div id="preview"><MarkdownComponent input={this.state.input}/></div>
        </div>
        );
    }
}