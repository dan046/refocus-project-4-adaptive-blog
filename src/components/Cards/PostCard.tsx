import { ReactNode } from "react"

interface Props {
  children: ReactNode
}
const PostCard = ({ children }: Props) => {
  return <section className="h-300 w-320 ">{children}</section>
}

export default PostCard
