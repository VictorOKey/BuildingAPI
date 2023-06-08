export const getObjects = () => {
    return fetch("http://localhost:8000/get-objects", {method: "get"});
}

export const getObject = (id) => {
    return fetch('http://localhost:8000/get-object?id=' + id, {method: "post"})
}
export const createObject = (object) => {
    return fetch("http://localhost:8000/create-object", {
        method: "post",
        headers: {"Context-Type": "application-json"},
        body: JSON.stringify(object)
    })
}
export const getStages = (inf) => {
    return fetch('http://localhost:8000/get-stages', {method: "get"})
}