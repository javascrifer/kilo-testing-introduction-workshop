# React + Jest and Testing Library

In the ages of Enzyme, developers where testing components as a JS classes - directly executing methods in it and etc. With creation of Testing Library (tool to go when it comes to writing component tests) vision of component testing changed a lot.

Out of the box Testing Library provides a lot of handy features such as:
1. Component rendering and auto cleanup.
2. Querying elements you need.
3. Performing real user interactions with the element.
4. Extending default Jest matchers with HTML and A11Y specific matchers.

## Main benefits of Testing library

1. Testing real user scenarios interactions.
2. Developers needs to write accessible components in order to make queries, matchers work.
3. With flexible architecture you may even mount entire application which means you may have cheap E2E tests.

## Application description

As the demo application you will find a single page which contains newsletter subscription form. It only has one input, submit button and thats all :)

Even this simple example opens up a lot of room for us to level up our testing knowledge.

Note: before going through the code check the references section.

## Assignment

1. Emit user subscribe event in the [`HomePage`](src/pages/index.tsx) when `SubscriptionForm` executes `onSubmit` handler.
2. Add a test which verifies that event is emitted.

Note: use knowledge of the best practices you have gained in the previous assignments.

## References

1. [Testing library queries](https://testing-library.com/docs/queries/about)
3. [React testing library queries cheatsheet](https://testing-library.com/docs/react-testing-library/cheatsheet#queries)
3. [Testing library matchers](https://github.com/testing-library/jest-dom#table-of-contents)
4. [Jest matchers](https://jestjs.io/docs/expect#tohavepropertykeypath-value)
