
import { Editor } from 'primereact/editor';
      
import { useState } from 'react';

export default function MyEditor() {
  const [text, setText] = useState('');
  return (
    <main>
        <Editor value={text} onTextChange={(e) => setText(e.htmlValue)} style={{ height: '320px' }} /> 
        <section>
            {
                text
            }
        </section>  
    </main>
  )
}