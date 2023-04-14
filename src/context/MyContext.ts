import { createContext } from 'react';
import { MyContextType } from '../@types/search';

const MyContext = createContext<MyContextType | null>(null);

export default MyContext;
