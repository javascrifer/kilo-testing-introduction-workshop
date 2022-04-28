# Building use cases

During this part we will use real world examples and create our first query builder.

In the code file you will find initial implementation of the `buildUrl` function which contains initial implementation which may not work properly (spoiler alert 🐞). Take a look at initial implementation and get back to this file.

## Main use cases for the function:

Firstly, developer may just pass baseUrl. In this case function should return it back. Example:
```
const url = buildUrl('https://www.google.com') // returns https://www.google.com
```

Secondary, developer may pass empty object as query parameters. In this case function should return baseUrl. Example:
```
const url = buildUrl('https://www.google.com', {}) // returns https://www.google.com
```

Thirdly, developer may pass object with one query parameter. In this case query parameter should be added the following way `baseUrl?key=value`. Example:
```
// returns https://www.google.com?fizz=buzz
const url = buildUrl('https://www.google.com', { fizz: 'buzz' });
```

Lastly, developer may pass object with multiple query parameters. In this case query parameters should be added the following way `baseUrl?key=value&secondKey=secondValue`. Example:
```
// returns https://www.google.com?fizz=buzz&foo=bar
const url = buildUrl('https://www.google.com', { fizz: 'buzz', foo: 'bar });
```
### Task

Write unit tests for all 4 scenarios - you should see placeholders in the spec file. Make sure that all the tests pass. Make as less changes as possible to make tests pass.

## Refactoring

One of the benefits of having tests is that you have your hands open for refactoring. As the developers we love to refactor which may lead to bugs.

### Task

Rewrite `buildQuery` function to use `URLSearchParams` API. Make sure that all the tests pass after refactoring.
