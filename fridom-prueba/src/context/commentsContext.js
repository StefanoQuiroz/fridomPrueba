const { createContext, useState, useContext } = require("react");

export const CommentContext = createContext();

//custom hooks
export const useComment = () => useContext(CommentContext);


export const CommentProvider = ({children}) => {
    const [data,setData] = useState([])

    console.log(data);

    const createComments = (author, comment, date) => {
        setData([...data, {author, comment, date}])
    }

    return(
        <CommentContext.Provider value={{data, createComments}}>
            {children}
        </CommentContext.Provider>
    )
    
};


