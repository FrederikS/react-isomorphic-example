export default function (store, components) {
    return Promise.all(components
        .filter(component => component && component.fetchData)
        .map(component => component.fetchData(store))
    );
}
