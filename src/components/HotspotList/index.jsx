import React from 'react'
import Container from './Style'
import { useSelector, useDispatch } from 'react-redux'
import { hotspot_delete } from '../../store/actions/hotspot'

const HotspotList = ({ title }) => {
    const hotspot = useSelector(state => state.hotspot)
    const dispatch = useDispatch();

    function deleteHotspot(id) {
        dispatch(hotspot_delete(id))
    }

    return (
        <Container>
            <p className="title">{title}</p>
            <ul className="hotspot-list">
                {hotspot.hotspots.length ?
                    hotspot.hotspots.map((hotspot, index) => (
                        <li key={hotspot.id}>
                            <span>Hotspot #{index + 1}</span>
                            <button onClick={() => { deleteHotspot(hotspot.id) }}>Delete</button>
                        </li>
                    ))
                    :
                    <li>No hotspots</li>
                }
            </ul>
        </Container>
    )
}

export default HotspotList;
