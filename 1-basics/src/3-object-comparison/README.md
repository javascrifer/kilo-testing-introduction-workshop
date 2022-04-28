# Object comparison

In the previous assignments we were asserting on primitive values only. Sometimes we may need to perform assertions on types like object, array which are not primitive values. To do so we will use the `toEqual` method of the `expect` statement.

Reference - [`toStrictEqual`](https://jestjs.io/docs/expect#tostrictequalvalue).

## Task

### Intro

Lets spice the things up 🌶️ We will dive into simplified version of the linked list data structure. Generally, in our case it is a data structure which holds current value of the parent node and reference to child node which has it's own value and another child node. Every child node may be linked to another child node.

### Examples
```
Before:
3 -> 5 -> 10 -> 35 -> NULL
After:
35 -> 10 -> 5 -> 3 -> NULL
```

### Assignment

1. Think about some test cases and write them down.
2. Implement a function which reverses the linked list. You will need to use `toEqual` assertion.

P.S [let me google](https://lmgtfy.app/?q=how+to+reverse+linked+list+js) the basic algorithm for you.
