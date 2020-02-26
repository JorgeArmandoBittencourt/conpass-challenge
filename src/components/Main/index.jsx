import React from 'react';
import StyledMain from './Style'
import HotspotList from '../HotspotList'
import { useDispatch, useSelector } from 'react-redux'
import { hotspot_is_adding } from '../../store/actions/hotspot'

const Main = () => {

    const dispatch = useDispatch();
    const isAdding = useSelector(state => state.hotspot.isAdding)

    function hotspotInit() {
        dispatch(hotspot_is_adding(true))
    }

    return (
        <StyledMain btnDisabled={isAdding}>
            <button className={isAdding ? 'main-button disabled' : 'main-button'} onClick={hotspotInit}>
                {
                    isAdding ? 'Click to place your hotspot' : 'Create Hotspot'
                }
            </button>
            <HotspotList title="List of hotspots" adviceTitle="" />
        </StyledMain>
    )
}

export default Main;
