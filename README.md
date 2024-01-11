Todo: database

- Clerk for authentication
- Custom Auth Page
- Segment names (eg: [[...sign-in]])
- React Query Info
  - useQuery
  - useMutation

## Note

### useQuery

```js
const Items = () => {
  const [isPending, isError, data] = useQuery({
    queryKey: ["tasks"],
    // A query function can be literally any function that returns a promise.
    queryFn: () => axios.get("/someUrl"),
  });

  if (isPending) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error...</p>;
  }

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};
```

### useMutation

```js
const { useMutation } = require("react-query");

const mutationFn = async (taskTitle) => {
  // do something
  return axios.post("/api/tasks", { title: taskTitle });
};

const useMutate = () => {
  return useMutation(mutationFn, {
    onSuccess: (data) => {
      // do something
    },
    onError: (error) => {
      // do something
    },
  });
};
```

```js
## React Query and Nextjs
## WE CAN USE SERVER ACTIONS 💥

app/providers.jsx
// In Next.js, this file would be called: app/providers.jsx

'use client';
// We can not useState or useRef in a server component, which is why we are
// extracting this part out into its own file with 'use client' on top
import { useClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';

export default function Providers({ children })

```
