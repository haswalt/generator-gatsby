import { observable } from 'mobx';
import { createContext } from 'react';

const store = observable({});

export default createContext(store);
