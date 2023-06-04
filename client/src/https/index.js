export const getObjects = () => {
     return fetch("http://localhost:8000/get-objects",{method: "get"});
 }
 export default getObjects;


export const getObject = () => {
    return fetch("http://localhost:8000/get-object/", {method: "get"})
}
