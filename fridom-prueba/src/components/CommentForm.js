import { useRef, useState } from "react"
import { useComment } from "../context/commentsContext";
import moment from "moment";

const CommentForm = () => {

    //const {createComments} = useComment();
    const {createComments} = useComment();

    const inputRef = useRef(null); 
    const textAreaRef = useRef(null); 

    const [comments, setComments] = useState({
        author: "",
        comment: "",
        date: moment().format('L, HH:mm:ss')
    })

    const onChange = (e) => {
        setComments({
            ...comments,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        inputRef.current.value="";
        textAreaRef.current.value="";
        //console.log(comments)
        createComments(comments.author, comments.comment, comments.date);
        setComments({
            author: "",
            comment: "",
            date: moment().format('L, HH:mm:ss')
        })
    }

    return (
        <div className="bg-gray-700 p-10 h-2/4 mb-5">
            <form className="grid justify-items-stretch" onSubmit={onSubmit}>
                <h1 className="font-black mb-5">Ingresa tu comentario</h1>
                <input className="bg-gray-800 focus:text-gray-100 focus:outline-none w-full py-3 px-4 mb-5 rounded-lg" type="text" placeholder="Ingrese su nombre" name="author" onChange={onChange} ref={inputRef}/>
                <textarea className="bg-gray-800 focus:text-gray-100 focus:outline-none w-full py-3 px-4 mb-5 rounded-lg" rows="3" placeholder="Ingrese su comentario" name="comment" onChange={onChange} ref={textAreaRef}></textarea>
                <button className="bg-green-500 hover:bg-green-400 px-4 py-2 rounded-sm justify-self-end disabled:opacity-30" disabled={!comments.author}>
                    Enviar
                </button>
            </form>
        </div>
    )
}

export default CommentForm