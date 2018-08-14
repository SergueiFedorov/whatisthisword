const actionDebugger = store => next => action => {
    console.log(action)
    return next(action)
}

export { actionDebugger }