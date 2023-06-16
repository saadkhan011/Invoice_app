import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";

function Loader() {
    return (
        <div className='loader'>
            <ClipLoader
                color={"#000"}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    )
}

export default Loader