/*
Exemplo:
{
    isAdding: false,
    hotspots: [
        {
            x: 0,
            y: 0,
            title: '',
            text: '',
            isEditing: false
        }
    ]
}
*/

const INITIAL_STATE = {
    isAdding: false,
    hotspots: []
};

export default function hotspot(state = INITIAL_STATE, action) {

    switch (action.type) {
        case "HOTSPOT_CREATE":
            const id = Math.random().toString(36).substr(2, 9);

            return {
                isAdding: state.isAdding,
                hotspots: [...state.hotspots, {
                    id,
                    title: '',
                    description: '',
                    isEditing: true,
                    x: action.payload.x,
                    y: action.payload.y
                }]
            };

        case "HOTSPOT_DELETE":
            return {
                isAdding: state.isAdding,
                hotspots: state.hotspots.filter(hotspot => {
                    return hotspot.id != action.payload
                })
            };

        case "HOTSPOT_IS_EDITING":

            return {
                ...state,
                hotspots: state.hotspots.map(hotspot => {
                    if (hotspot.id === action.payload.id) {
                        return { ...hotspot, isEditing: action.payload.isEditing }
                    }
                    return { ...hotspot }
                })
            }

        case "HOTSPOT_ADD_INFO":

            return {
                ...state,
                hotspots: state.hotspots.map(hotspot => {
                    if (hotspot.id === action.payload.id) {
                        return { ...hotspot, title: action.payload.title, description: action.payload.description }
                    }
                    return { ...hotspot }
                })
            }

        case "HOTSPOT_IS_ADDING":
            return { ...state, isAdding: action.payload }

        default:
            return state;
    }
}
