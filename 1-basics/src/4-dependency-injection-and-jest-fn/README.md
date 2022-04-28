# Jest FN and dependency injection

Sometimes your code may have a dependency on code in order to fullfil the requirements. As you may already guess things are not that straight forward.

## What is wrong with UserServiceBad?
Lets check `user-service-bad.ts` file and take some time to think what is wrong in the given implementation of the UserService?

### Answer
1. Tricky to `test` behavior of the `UserServiceBad`.
2. Hard to `test` code which is depended on `UserServiceBad`.
3. Not optimal for migration if team will decide to migrate from `fetch` to other HTTP client library - axios.

## How to make UserServiceBad a proper service?

Most of the problems will disappear if you will follow [dependency inversion principle](https://www.digitalocean.com/community/conceptual_articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design#dependency-inversion-principle) which tells you that entities must depend on abstractions, not on concretions.

Now lets go the `user-service.ts` file to see `UserService` and compare it with `UserServiceBad`. The main differences:
1. HTTP client has it's own interface (must be reused across the project). It allows developers to write adapters for APIs like `fetch`, `axios` and swap HTTP clients on demand.
2. `UserService` does not depend on APIs like `fetch` directly. It is receiving `HTTPClient` as a dependency. For this reason, we can define our own test kit for `HTTPClient` and use it in the tests.

## References

The [`jest.fn`](https://jestjs.io/docs/jest-object#jestfnimplementation) allows you to create test handler. As a developer later on you can:
1. Track how much times handler were executed.
2. With what parameters handler were executed.
3. Modify return value of the function.

## Task

As an assignment we will work on `user-controller.ts` file. Check it up and perform the following action items:
1. Discuss potential problem with this file.
1. Make `user-controller` file easier to test.
1. Write some unit tests for the controller.

