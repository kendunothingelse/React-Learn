import React, { useEffect, useState } from 'react';

function FetchTest() {
    const [data, setData] = useState();
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => console.log(json));
    }, []);


    return (
        <div>
            {data ? <div>Data:{data.someField}</div> : <div>Loading...</div>}
        </div>
    )
}
export default FetchTest