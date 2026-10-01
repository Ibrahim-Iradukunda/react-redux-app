# React Guided Learning Activity: Redux State Management

This project implements a counter in React and TypeScript using **plain Redux**, without Redux Toolkit. It was built with Vite and demonstrates a shared Redux store, typed actions and reducers, React-Redux hooks, and Redux Logger middleware.

## Getting Started

Prerequisites: Node.js and npm.

The Vite application lives in the `react-redux-app/` directory. From the repository root, run:

```bash
cd react-redux-app
npm install
npm run dev
```

Open the local URL printed by Vite, normally `http://localhost:5173/`.

To check the project before submission:

```bash
npm run build
npm run lint
```

## What the Application Demonstrates

- `src/store/store.ts` creates the Redux store and applies Redux Logger middleware.
- `src/store/actions/counterActions.ts` defines increment, decrement, and reset actions.
- `src/store/reducers/counterReducer.ts` updates the counter state.
- `src/store/reducers/index.ts` combines reducers under the `counter` state key.
- `src/main.tsx` provides the store to the React component tree with `Provider`.
- `src/components/Counter.tsx` reads the value with `useSelector` and dispatches actions with `useDispatch`.
- `src/components/Counter.module.css` contains the counter's component-scoped styles.

The state flow is:

```text
Counter control -> dispatch(action) -> counterReducer -> store update -> useSelector -> rendered value
```

The store exports `RootState` and `AppDispatch` types. The reducer and component use these types and typed action definitions rather than `any`.
