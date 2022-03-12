import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {


    // useEffect(() => {
    //   getGifs( category )
    //     .then ( imgs => setImages( imgs ));
    // }, [ category ])

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {

        getGifs( category )
            .then(imgs => {
                setState( {
                    data: imgs,
                    loading: false
                })
            })

    }, [category])

    return state;
}
