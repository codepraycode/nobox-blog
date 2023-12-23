import { usePostContext } from "@/context/PostContext"
import { IPost, IPostContext } from "@/types"
import { useEffect, useState } from "react";


export const usePosts = (): IPostContext =>{
    const {loading, posts, error} = usePostContext();
    return {loading, posts, error}
}

export const usePost = (postId:string) => {
    const [post, setPost] = useState<IPost | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(()=>{
        (()=>{
            
        })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return {loading, post, error};
}