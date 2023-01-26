import './Filters.scss';

function Filters({
    children
}){
    return (
        <div className="filters">
            <h2>Search your favourite products</h2>
            {children}
        </div>
    )
}

export default Filters;