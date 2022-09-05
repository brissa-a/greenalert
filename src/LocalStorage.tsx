
export function saveObject(key : string , value : any) {
    localStorage[key] = JSON.stringify(value)
}

export function getObject(key : string) {
    return localStorage[key] && JSON.parse(localStorage[key])
}
