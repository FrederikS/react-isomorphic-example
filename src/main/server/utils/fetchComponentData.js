export default function (dispatch, components) {
    return Promise.all(components
        .filter(component => component && component.fetchData)
        .map(component => dispatch(component.fetchData()))
    );
}
