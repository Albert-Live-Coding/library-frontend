const BookComponent = ({ book }) => {
   return (
    <div className="book">
        <img className="bookImage" src={book.imageUrl} alt={book.title} />

        <div className="bookInfos">
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <p>{book.price}</p>
        </div>
    </div>
   )
}


export default BookComponent;