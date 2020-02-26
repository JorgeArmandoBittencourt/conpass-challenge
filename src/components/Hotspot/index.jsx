import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import Container from './Style'
import { hotspot_add_info, hotspot_toggle_is_editing } from '../../store/actions/hotspot'

const Hotspot = ({ x, y, hotspot }) => {

    const inputTitle = useRef(null);
    const dispatch = useDispatch();

    const [info, setInfo] = useState({
        title: '',
        description: '',
        visible: false
    });

    function setTitle(value) {
        setInfo({
            ...info,
            title: value
        })
    }

    function setDescription(value) {
        setInfo({
            ...info,
            description: value
        })
    }

    function toggleInfo(e) {
        e.stopPropagation();
        if (e.target === e.currentTarget) {
            if (hotspot.isEditing) {
                dispatch(hotspot_add_info(hotspot.id, info.title, info.description));
                dispatch(hotspot_toggle_is_editing(hotspot.id, !hotspot.isEditing));
            } else {
                setInfo({
                    ...info,
                    visible: !info.visible
                })
            }
        }
    }

    useEffect(() => {
        if (hotspot.isEditing) {
            inputTitle.current.focus()
        }
    }, [])


    return (
        <Container x={x} y={y} visible={info.visible || hotspot.isEditing} onClick={toggleInfo}>
            <div className="info">
                {
                    hotspot.isEditing ?
                        <>
                            <input ref={inputTitle} className="title" defaultValue=""
                                onChange={(e) => { setTitle(e.target.value) }}
                                placeholder="Title..." />
                            <textarea className="description" defaultValue=""
                                onChange={(e) => { setDescription(e.target.value) }}
                                placeholder="Description..."></textarea>
                        </>
                        :
                        <>
                            <h2 className="title">{hotspot.title}</h2>
                            <p className="description">{hotspot.description}</p>
                        </>
                }

            </div>
        </Container>
    )
}

export default Hotspot;
