//To fetch
//Supports these elements: <br/> <em><em/> and <image data-uuid="<uuid>"/>
//Draft.js

import {$generateHtmlFromNodes} from '@lexical/html';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { LexicalEditor } from 'lexical';

export function parseArticleBody() {
    
}

//To store
export function formatArticleBody(editor: LexicalEditor) {
    return $generateHtmlFromNodes(editor);
}