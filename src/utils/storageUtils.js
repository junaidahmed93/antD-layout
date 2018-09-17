export const loadState = () => {
    const localData = localStorage.getItem('bits');
    if (localData) {
        return JSON.parse(localData);
    }
    return {};

};

export const saveState = (state) => {
    return localStorage.setItem('bits', JSON.stringify(state));
};
