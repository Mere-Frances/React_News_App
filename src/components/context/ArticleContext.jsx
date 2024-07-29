import { createContext, useReducer } from "react";

export const ArticleContext = createContext()

export const articlesReducer = (state, action) => {
    switch (action.type) {
        case "GET_ARTICLES": {
            return {
                articles: action.payload
            }
        }
        default:
            return state
    }
}

export const ArticleContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(articlesReducer)
    return (
        <ArticleContext.Provider value={{...state, dispatch}}>
            {children}
        </ArticleContext.Provider>
    )
}