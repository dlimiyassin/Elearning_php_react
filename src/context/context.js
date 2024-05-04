import { createContext, useContext, useState } from 'react';

// No need to export this, we'll create custom hook around it
const SideBarCtx = createContext();

// Custom hook, returns array with state, setter
export const useSomeCtx = () => useContext(SideBarCtx);

// Convenience hook so you don't have to destructure
// everywhere, returns read-only state
export const useSomeCtxState = () => {
    const [state] = useContext(SideBarCtx);
    return state;
};

// Provider, goes in render tree above components where you
// import/use the accessor hooks above.
export const SomeCtxProvider = ({children, init}) => {
    const myCtx = useState(init); // [myCtxState, setMyCtxState]
    return <SomeCtx.Provider value={myCtx}>{children}</SomeCtx.Provider>;
};