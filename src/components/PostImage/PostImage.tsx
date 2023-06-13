interface Props {
  addImage: (imageUrl: any) => void
}

export const PostImage = ({ addImage }: Props) => {
  // TODO: the code below is just for demo,
  // so feel free to delete it and write your own.
  // Hint: You can pass the props and update that post upon saving

  return (
    <form>
      <button onClick={addImage}>Add Image</button>
    </form>
  )
}
