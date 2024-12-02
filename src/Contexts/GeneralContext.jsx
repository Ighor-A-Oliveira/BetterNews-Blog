import { useContext, createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import GeneralReducer from './GeneralReducer';

const GeneralContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useGeneral = () => useContext(GeneralContext);

export default function GeneralProvider({children}) {

    //this is the states we have available
    const [state, dispatch] = useReducer(GeneralReducer, {
        darkMode: false,
        categories: [],
        articles: [],
    })

    //const value = {}

  return (
    <GeneralContext.Provider value={{ state, dispatch }}>
        {children}
    </GeneralContext.Provider>
  )
}

GeneralProvider.propTypes = {
    children: PropTypes.node.isRequired,
};