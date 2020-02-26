import React from 'react';
import GlobalStyle from './css/Global'
import Header from './components/Header'
import Main from './components/Main'
import { useSelector, useDispatch } from 'react-redux'
import { hotspot_is_adding, hotspot_create } from './store/actions/hotspot'
import Hotspot from './components/Hotspot'

const Layout = () => {

    const dispatch = useDispatch();
    const hotspot = useSelector(state => state.hotspot);

    function addHotspot(e) {
        if (hotspot.isAdding) {
            dispatch(hotspot_is_adding(false))
            removeHightlight()
            dispatch(hotspot_create(e.pageX, e.pageY))
        }
    }

    function addHightlight(e, exclude) {
        if (hotspot.isAdding) {
            let mouse = [e.pageX, e.pageY]
            removeHightlight()
            let element = document.elementFromPoint(mouse[0], mouse[1]);
            if (exclude.includes(element.tagName)) {
                element.parentElement.classList.add("hightlight");
            } else {
                element.classList.add("hightlight");
            }
        }
    }

    function removeHightlight() {
        let elements = [...document.getElementsByClassName('hightlight')];
        elements.map(element => {
            element.classList.remove('hightlight')
        })
    }

    return (
        <>
            <div className={hotspot.isAdding ? 'app adding' : 'app'} onClick={addHotspot} onMouseMove={(e) => { addHightlight(e, ['IMG']) }}>
                <GlobalStyle />
                <Header />
                <Main />
            </div>
            {
                hotspot.hotspots.map((hotspot) => (
                    <Hotspot key={hotspot.id} hotspot={hotspot} x={hotspot.x} y={hotspot.y} />
                ))
            }
        </>
    )
}

export default Layout;
