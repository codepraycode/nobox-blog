import { IPost } from "@/types";

const reactionEmoji = {
    thumbsUp: '👍',
    wow: '😮',
    heart: '❤️',
    rocket: '🚀',
    coffee: '☕'
}


const Reactions = ({post}:{post:IPost}) => {

    const reactionButtons = Object.entries(reactionEmoji).map(([name,emoji])=>{
        return (
            <button
                key={name}
                type="button"
                className="reactionButton"
                onClick={()=>{
                    console.log(`Reacted ${name}: ${emoji}`);
                }}
            >
                {emoji} {post.reaction![name]}
            </button>
        )
    })
  return (
      <span>{reactionButtons}</span>
  )
}

export default Reactions
