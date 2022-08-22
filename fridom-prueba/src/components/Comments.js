import { useComment } from "../context/commentsContext";

const Comments = () => {
    const {data} = useComment();

    return (
        <div className="flex justify-center mt-5">
            <div className="w-full" >
            {
                data.map((item, i) => (
                    <div className="bg-gray-700 hover:bg-gray-600 cursor-pointer px-20 py-5 m-2 flex justify-start " key={i}>
                        <div className="w-full">
                            <div className="flex justify-between">
                                <h1 className="font-bold">{item.author}</h1>
                                <p className="text-gray-300">{item.date}</p>
                            </div>
                            <p className="text-gray-300 truncate max-w-md ">{item.comment}</p>
                        </div>
                    </div>
                )).reverse()
            }
            </div>
    </div>
        
    )
}

export default Comments
