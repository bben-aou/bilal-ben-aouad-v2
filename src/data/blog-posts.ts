export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  coverImage?: string;
  draft?: boolean;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "building-scalable-react-architecture",
    title: "Building Scalable React Architecture for Enterprise Applications",
    date: "2025-01-15",
    summary: "Learn how to structure large React applications with clean architecture patterns, proper separation of concerns, and scalable folder structures that grow with your team.",
    tags: ["React", "Architecture", "TypeScript", "Best Practices"],
    content: `
# Building Scalable React Architecture for Enterprise Applications

When building enterprise-level React applications, **architecture matters**. A well-structured codebase can mean the difference between a maintainable project and technical debt that slows your team down.

## The Problem with Flat Structures

Many React projects start with a flat structure:

\`\`\`
src/
├── components/
├── pages/
├── utils/
└── App.tsx
\`\`\`

This works for small projects, but quickly becomes unmanageable as your application grows.

## Feature-Based Architecture

I recommend organizing code by **feature**, not by type:

\`\`\`
src/
├── features/
│   ├── auth/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   └── types/
│   ├── dashboard/
│   └── products/
├── shared/
│   ├── components/
│   ├── hooks/
│   └── utils/
└── App.tsx
\`\`\`

## Key Principles

1. **Colocation**: Keep related code together
2. **Explicit Dependencies**: Use barrel exports carefully
3. **Layered Architecture**: Separate UI, business logic, and data access
4. **Type Safety**: Leverage TypeScript interfaces at module boundaries

## Conclusion

Invest time in architecture early. Your future self (and team) will thank you.
`
  },
  {
    slug: "performance-optimization-react-query",
    title: "Performance Optimization with React Query: Beyond the Basics",
    date: "2025-01-10",
    summary: "Deep dive into advanced React Query patterns including query invalidation strategies, optimistic updates, and cache normalization for high-performance applications.",
    tags: ["React Query", "Performance", "Caching", "TypeScript"],
    content: `
# Performance Optimization with React Query: Beyond the Basics

React Query has revolutionized how we handle server state in React applications. But there's more to it than just \`useQuery\` and \`useMutation\`.

## Smart Cache Invalidation

Instead of invalidating entire query keys, be surgical:

\`\`\`typescript
// ❌ Too broad
queryClient.invalidateQueries(['products']);

// ✅ Precise invalidation
queryClient.invalidateQueries(['products', productId]);
\`\`\`

## Optimistic Updates Done Right

For instant UI feedback:

\`\`\`typescript
useMutation({
  mutationFn: updateProduct,
  onMutate: async (newData) => {
    await queryClient.cancelQueries(['product', id]);
    const previous = queryClient.getQueryData(['product', id]);
    queryClient.setQueryData(['product', id], newData);
    return { previous };
  },
  onError: (err, newData, context) => {
    queryClient.setQueryData(['product', id], context.previous);
  },
});
\`\`\`

## Prefetching for Better UX

Anticipate user actions:

\`\`\`typescript
// On hover, prefetch the data
onMouseEnter={() => {
  queryClient.prefetchQuery(['product', id], fetchProduct);
}}
\`\`\`

## Conclusion

Master these patterns to build applications that feel instant.
`
  },
  {
    slug: "typescript-patterns-frontend-engineers",
    title: "TypeScript Patterns Every Frontend Engineer Should Know",
    date: "2025-01-05",
    summary: "Essential TypeScript patterns including discriminated unions, branded types, and advanced generics that will level up your frontend development.",
    tags: ["TypeScript", "Patterns", "Frontend"],
    content: `
# TypeScript Patterns Every Frontend Engineer Should Know

TypeScript is more than just adding types to JavaScript. Here are patterns that will make your code more robust and expressive.

## Discriminated Unions for State

Model your state explicitly:

\`\`\`typescript
type AsyncState<T> =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; error: Error };

function renderState<T>(state: AsyncState<T>) {
  switch (state.status) {
    case 'loading':
      return <Spinner />;
    case 'success':
      return <Data data={state.data} />;
    case 'error':
      return <Error error={state.error} />;
    default:
      return null;
  }
}
\`\`\`

## Branded Types for Type Safety

Prevent mixing up IDs:

\`\`\`typescript
type UserId = string & { __brand: 'UserId' };
type ProductId = string & { __brand: 'ProductId' };

function getUser(id: UserId) { /* ... */ }
function getProduct(id: ProductId) { /* ... */ }

// This will now error:
getUser(productId); // Type error!
\`\`\`

## Builder Pattern with Method Chaining

Create fluent APIs:

\`\`\`typescript
class QueryBuilder<T> {
  where(condition: Partial<T>): this { /* ... */ }
  orderBy(field: keyof T): this { /* ... */ }
  limit(n: number): this { /* ... */ }
  execute(): Promise<T[]> { /* ... */ }
}
\`\`\`

## Conclusion

These patterns help catch bugs at compile time rather than runtime.
`
  },
  {
    slug: "accessible-components-react",
    title: "Building Truly Accessible React Components",
    date: "2024-12-28",
    summary: "A practical guide to building accessible React components with proper ARIA attributes, keyboard navigation, and screen reader support.",
    tags: ["Accessibility", "React", "UX", "ARIA"],
    content: `
# Building Truly Accessible React Components

Accessibility isn't an afterthought—it's a fundamental aspect of quality frontend engineering.

## The Basics: Semantic HTML

Start with the right elements:

\`\`\`tsx
// ❌ Div soup
<div onClick={handleClick}>Click me</div>

// ✅ Semantic and accessible
<button onClick={handleClick}>Click me</button>
\`\`\`

## Keyboard Navigation

Every interactive element must be keyboard accessible:

\`\`\`tsx
function Menu() {
  const handleKeyDown = (e: KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowDown':
        focusNext();
        break;
      case 'ArrowUp':
        focusPrev();
        break;
      case 'Escape':
        close();
        break;
    }
  };
  
  return <div role="menu" onKeyDown={handleKeyDown}>...</div>;
}
\`\`\`

## Focus Management

Trap focus in modals, restore focus on close:

\`\`\`tsx
function Modal({ isOpen, onClose }) {
  const previousFocus = useRef<HTMLElement>();
  
  useEffect(() => {
    if (isOpen) {
      previousFocus.current = document.activeElement;
    } else {
      previousFocus.current?.focus();
    }
  }, [isOpen]);
}
\`\`\`

## Testing Accessibility

Use automated tools and manual testing:

- **axe-core** for automated checks
- **Screen readers** (VoiceOver, NVDA)
- **Keyboard-only navigation**

## Conclusion

Accessible components are better components for everyone.
`
  },
  {
    slug: "nextjs-performance-deep-dive",
    title: "Next.js Performance Deep Dive: SSR, SSG, and ISR Strategies",
    date: "2024-12-20",
    summary: "Understanding when to use Server-Side Rendering, Static Site Generation, and Incremental Static Regeneration for optimal performance.",
    tags: ["Next.js", "Performance", "SSR", "SSG"],
    content: `
# Next.js Performance Deep Dive: SSR, SSG, and ISR Strategies

Choosing the right rendering strategy can dramatically impact your application's performance and user experience.

## Understanding the Options

### Static Site Generation (SSG)

Best for content that doesn't change often:

\`\`\`typescript
export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}
\`\`\`

**Use when**: Blog posts, documentation, marketing pages

### Server-Side Rendering (SSR)

For personalized or real-time data:

\`\`\`typescript
async function Page({ params }) {
  const data = await fetchData(params.id);
  return <Component data={data} />;
}
\`\`\`

**Use when**: Dashboards, user profiles, search results

### Incremental Static Regeneration (ISR)

The best of both worlds:

\`\`\`typescript
export const revalidate = 3600; // Revalidate every hour
\`\`\`

**Use when**: Product pages, news articles, frequently updated content

## Performance Tips

1. **Optimize images** with next/image
2. **Minimize client-side JavaScript**
3. **Use streaming** for faster TTFB
4. **Implement proper caching headers**

## Conclusion

Match your rendering strategy to your data requirements.
`
  },
  {
    slug: "testing-strategies-frontend",
    title: "Testing Strategies for Frontend Applications",
    date: "2024-12-15",
    summary: "A comprehensive guide to testing React applications with Jest, React Testing Library, and Cypress for confidence in production.",
    tags: ["Testing", "Jest", "React Testing Library", "Cypress"],
    content: `
# Testing Strategies for Frontend Applications

Testing isn't just about catching bugs—it's about building confidence in your code.

## The Testing Pyramid

\`\`\`
        /\\
       /  \\
      / E2E \\
     /--------\\
    /Integration\\
   /--------------\\
  /    Unit Tests   \\
 /--------------------\\
\`\`\`

More unit tests, fewer E2E tests.

## Unit Testing with Jest

Test individual functions and hooks:

\`\`\`typescript
describe('formatPrice', () => {
  it('formats USD correctly', () => {
    expect(formatPrice(1000, 'USD')).toBe('$1,000.00');
  });
});
\`\`\`

## Component Testing with RTL

Test components from the user's perspective:

\`\`\`typescript
it('submits the form with valid data', async () => {
  render(<ContactForm />);
  
  await userEvent.type(screen.getByLabelText('Email'), 'test@example.com');
  await userEvent.click(screen.getByRole('button', { name: 'Submit' }));
  
  expect(await screen.findByText('Success!')).toBeInTheDocument();
});
\`\`\`

## E2E Testing with Cypress

Test critical user flows:

\`\`\`typescript
describe('Checkout', () => {
  it('completes purchase successfully', () => {
    cy.visit('/products');
    cy.get('[data-testid="add-to-cart"]').first().click();
    cy.get('[data-testid="checkout"]').click();
    // ... complete flow
  });
});
\`\`\`

## Conclusion

A balanced testing strategy gives you confidence without slowing you down.
`
  }
];

export function getAllPosts(includeDrafts = false): BlogPost[] {
  return blogPosts
    .filter((post) => includeDrafts || !post.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllTags(): string[] {
  const tags = new Set<string>();
  blogPosts.forEach((post) => {
    post.tags.forEach((tag) => tags.add(tag));
  });
  return Array.from(tags).sort();
}

export function getRelatedPosts(currentSlug: string, tags: string[], limit = 3): BlogPost[] {
  return blogPosts
    .filter((post) => post.slug !== currentSlug && !post.draft)
    .filter((post) => post.tags.some((tag) => tags.includes(tag)))
    .sort((a, b) => {
      const aMatches = a.tags.filter((tag) => tags.includes(tag)).length;
      const bMatches = b.tags.filter((tag) => tags.includes(tag)).length;
      return bMatches - aMatches;
    })
    .slice(0, limit);
}

export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}
