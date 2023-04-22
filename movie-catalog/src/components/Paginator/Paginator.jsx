export default function Paginator({ currentPage, setCurrentPage, maxPage }) {

    const backward = () => {
        setCurrentPage(prevPage => {
            if (prevPage > 0) return prevPage - 1
        })
    }

    const forward = () => {
        setCurrentPage(prevPage => {
            if (prevPage < maxPage) return prevPage + 1
        }
        )
    }

    return (

        <div>

            <h2>
                {currentPage}
            </h2>
            <button onClick={backward}>hátra</button>
            <button onClick={forward}>előre</button>
        </div>

    )

}