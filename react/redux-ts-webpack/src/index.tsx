// document.write('hello from index.ts');

// tsx   页面UI的编写

import * as React from 'react'
import * as ReactDOM from 'react-dom'
// import { HelloComponent } from './hello'
// import { App } from './app';
import { AppRouter } from './router';

ReactDOM.render(
    <AppRouter/>,
    document.getElementById('root')
)