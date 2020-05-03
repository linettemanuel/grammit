export const solveEventByType = (eventType, pathToRedirect, givenProps) => {
    switch (eventType.toUpperCase()) {
        case 'ENTER':
            givenProps.history.push(pathToRedirect)
            break;
        case 'BACK':
            givenProps.history.goBack()
            break;
        case 'FRONT':
            givenProps.history.goForward()
            break;
        default:
            console.log('not a firing button')
            break;
    }
}