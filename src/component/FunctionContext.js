import { createContext } from 'react';

const FunctionContext = createContext(() => {
    console.log('i am am')});

export default FunctionContext;