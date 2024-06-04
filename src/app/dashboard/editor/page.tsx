'use client';

import { formatArticleBody } from '@/lib/article_parser';
import { Person } from '@/common/types/Person.d';
import {Editor as DraftEditor, RichUtils} from 'draft-js';
import React, { useEffect, useState } from 'react';
import {ToolbarItem} from '@/views/editor-toolbar/ToolbarItem';

import {LexicalComposer} from '@lexical/react/LexicalComposer';
import {RichTextPlugin} from '@lexical/react/LexicalRichTextPlugin';
import {ContentEditable} from '@lexical/react/LexicalContentEditable';
import {HistoryPlugin} from '@lexical/react/LexicalHistoryPlugin';
import {OnChangePlugin} from '@lexical/react/LexicalOnChangePlugin';
import {useLexicalComposerContext} from '@lexical/react/LexicalComposerContext';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { EditorState, FORMAT_TEXT_COMMAND, LexicalEditor, REDO_COMMAND, UNDO_COMMAND } from 'lexical';
import {$generateHtmlFromNodes} from '@lexical/html';

export default function Editor() {

  const [editorState, setEditorState] = useState<EditorState>();

  const editorTheme = {};

  function onError(error: any) {
    console.error(error);
  };

  const initialConfig = {
    namespace: 'ArticleEditor',
    editorTheme,
    onError,
  };

  function onChange(editorState: EditorState) {
    setEditorState(editorState);
  }

  function ToolbarPlugin() {
    let [editor] = useLexicalComposerContext();

    const undo = () => {
      editor.dispatchCommand(UNDO_COMMAND, undefined);
    };
    const redo = () => {
      editor.dispatchCommand(REDO_COMMAND, undefined);
    };
    const makeBold = () => {
      editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold');
    };
    const makeItalic = () => {
      editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic');
    };
    
    const saveDraft = () => {
  
      editorState?.read(() => {
        let html = $generateHtmlFromNodes(editor);

        let author = Person.Owner;
        let articleDetails = {title: "A title", image: {id: '8c0596aa-95ae-4272-a2c0-5a5ac390ef55', width: 20, length: 20}, 
        author: author, category: 'test', body: html};
    
        const options = {
          method: 'POST',
          body: JSON.stringify(articleDetails)
        };
      
        fetch('/api/articles', options); //Upload to API
      });

    };

    return (
      <div className='editor-toolbar h-16 flex justify-center w-1/2 divide-x'>
        <ToolbarItem onClick={undo} text="Undo"/>
        <ToolbarItem onClick={redo} text="Redo"/>
        <ToolbarItem onClick={makeBold} text="Bold"/>
        <ToolbarItem onClick={makeItalic} text="Italic"/>
        <ToolbarItem onClick={saveDraft} text="Save"/>
    </div>
    );
  };
  
  return (
    <div className='editor-block flex justify-center p-10'>
      <div className='editor w-1/2 min-h-[600px] justify-center border-[1px] rounded-lg'>
          <LexicalComposer initialConfig={initialConfig}>
            <ToolbarPlugin/>
            <RichTextPlugin
              contentEditable={<ContentEditable className='basis-full' />}
              placeholder={null}
              ErrorBoundary={LexicalErrorBoundary}
            />
            <HistoryPlugin />
            <OnChangePlugin onChange={onChange}/>
          </LexicalComposer>
      </div>
    </div>
    
  );
};