/**
 * Create a new hotspot.
 * @param {number} x - Hotspot x location.
 * @param {number} y - Hotspot y location.
 */
export function hotspot_create(x, y) {
    return {
        type: "HOTSPOT_CREATE",
        payload: {
            x, y
        }
    }
}

/**
 * Delete a hotspot.
 * @param {number} id - Hotspot id.
 */
export function hotspot_delete(id) {
    return {
        type: "HOTSPOT_DELETE",
        payload: id
    }
}

/**
 * Add title and description to hotspot.
 * @param {string} id - hotspot ID.
 * @param {string} title - hotspot title.
 * @param {string} description - hotspot description.
 */
export function hotspot_add_info(id, title, description) {
    return {
        type: "HOTSPOT_ADD_INFO",
        payload: {
            id, title, description
        }
    }
}

/**
 *
 * @param {string} id - hotspot ID.
 * @param {boolean} isEditing
 */
export function hotspot_toggle_is_editing(id, isEditing) {
    return {
        type: "HOTSPOT_IS_EDITING",
        payload: {
            id,
            isEditing
        }
    }
}

/**
 * Toggle state 'is adding'.
 * @param {bolean} state
 */
export function hotspot_is_adding(state) {
    return {
        type: "HOTSPOT_IS_ADDING",
        payload: state
    }
}
