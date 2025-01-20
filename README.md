# React useEffect Hook Dependency Error
This repository demonstrates a common error in React's `useEffect` hook: omitting dependencies that should be included in the dependency array.  This can lead to unexpected behavior, including infinite loops or stale closures. 

The `bug.js` file shows the problematic code. The `bugSolution.js` file provides the corrected version. 

## Problem
In the initial implementation, the `useEffect` hook is missing the `count` variable in its dependency array (`[]`). This means the effect runs only once on mount.  When `setCount` is called, the closure keeps using the initial value of `count`, which is 0. As a result, the counter will not correctly update.