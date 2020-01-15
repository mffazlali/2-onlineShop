export const updateObject = (oldStates, newStates) => {
    return {
        ...oldStates, ...newStates
    };
}