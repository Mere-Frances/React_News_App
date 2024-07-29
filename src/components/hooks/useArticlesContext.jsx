import { ArticleContext } from "../context/ArticleContext";
import { useContext } from "react";

export const useArticlesContext = () => {
    const context = useContext(ArticleContext) 
    // this is providing the state and the dispatch from the article context we previousy created
    
    // error prevention
    if (!context) {
        throw Error("useArticlesContext hook must be used inside of ArticleContextProvider")
    }

    return context
}