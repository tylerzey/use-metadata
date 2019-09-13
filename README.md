# Use Metadata

A (simple) zero-dependency way to set the `title`, `description`, and `image` metadata in your react application.

[![Blazing Fast](https://badgen.now.sh/badge/speed/blazing%20%F0%9F%94%A5/green)](https://www.npmjs.com/package/better-file-downloads) [![Blazing Fast](https://badgen.now.sh/badge/speed/blazing%20%F0%9F%94%A5/green)](https://www.npmjs.com/package/better-file-downloads) [![Blazing Fast](https://badgen.now.sh/badge/speed/blazing%20%F0%9F%94%A5/green)](https://www.npmjs.com/package/better-file-downloads)

Simply import the hook and pass in your title, description, and or image.

The component will automatically update and rerender if you pass in a variable that gets statefully updated.

[View on NPM](https://www.npmjs.com/package/use-metadata)


```js
import React, { useState } from 'react';
import { useMetadata } from 'use-metadata';

function App() {
  const [title, setTitle] = useState('something');
  const description = 'very simply to use';
  const image =
    'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80';

  useMetadata({ title, description, image });

  return (
    <div>
      <button type="button" onClick={() => setTitle('something else')}>
        Click Me
      </button>
    </div>
  );
}
```
