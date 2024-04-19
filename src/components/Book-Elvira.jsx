const BookComponent = ({ book }) => {
   return (
    <div className="book">
        <img className="bookImage" src={book.imageUrl} alt={book.title} />

        <div className="bookInfos">
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <p>{book.price}</p>
            <p>{book.description}</p>
        </div>
    </div>
   )
}
//{ book } - prop der von SingleBookPage kommt
export default BookComponent;