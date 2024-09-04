function ListGroup() {
    let items = ["new yotk", "istnbul",  "berlin"]
    return(
        <>
            <h1>List</h1>
            <ul className="list-group">
                {items.map((item, index) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </>
    )
};

export default ListGroup;