# lpm-transpilers

transform Layout-JSON to HTML/SASS, ReactJS, React Native

## Specifications
- Markup: support responsive layouts, variables, placeholders [Layout-JSON specification](https://github.com/dht/lpm-transpilers/blob/master/specifications/element.md) 
- Transpilers: to HTML / SASS, ReactJS and React Native 

## Usage

Here is a quick example to get you started:

**Import**
```js

import {format} from 'lpm-core/transpilers/reactNative/parse';

const code = format(layoutJson, 1, 'ComponentName');
```

## Contribution
To run locally install all the dependencies:

dev:
```sh
npm install
```

test:
```sh
npm test
```

## License
This project is licensed under the terms of the
[MIT license](https://github.com/dht/lpm-transpilers/blob/master/LICENSE)
