import React, {useState} from "react";
// import marked from "marked/lib/marked.esm";
// import marked_1 from "marked/lib/marked.esm";
import ReactMarkdown from "react-markdown";
import css from "./MarkdownEditor.module.css";

const MarkdownEditor = () => {
    const [markdown, setMarkdown] = useState('# Enter your text.');

    const handleChange = (e) => {
        setMarkdown(e.target.value)
    }

    return (<div className={css.wrapper}>
        <div className={css.instructions}>
            <div>use '>' for `blockquote`, 'double Enter' for paragraph and '-' for `list`</div>
            <hr/>
        </div>
        <textarea onChange={handleChange} value={markdown}/>

        {/*<div className={css.preview} dangerouslySetInnerHTML={{__html: marked(markdown)}}/>*/}
        {/*<div className={css.preview} dangerouslySetInnerHTML={{__html: marked_1(markdown)}}/>*/}

        <ReactMarkdown className={css.preview} source={markdown}/>
    </div>)
};

export default MarkdownEditor;
