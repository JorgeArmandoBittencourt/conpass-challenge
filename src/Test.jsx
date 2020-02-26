import React from 'react';
import { useSelector } from 'react-redux'

export default function Test() {

    const hotspot = useSelector(state => state.hotspot);

    return (
        <div>
            {
                hotspot.map(hotspot => <p>{hotspot}</p>)
            }
        </div>
    )
}
