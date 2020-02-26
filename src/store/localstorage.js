export function loadData() {
    const serializedState = localStorage.getItem('reduxState');
    if (serializedState) {
        return JSON.parse(serializedState);
    }
    return {};
}

export function saveData(name, value) {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(name, serializedValue);
}
