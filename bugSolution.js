```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1); //Functional update
    }, 1000);

    return () => clearInterval(interval);
  }, [count]); // Added 'count' to dependency array

  return <div>Count: {count}</div>;
}

export default MyComponent;
```