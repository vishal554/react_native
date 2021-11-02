initialState = {movies: [
    {title:'The lord of the rings', rating:4, body: 'at node8:41 in callReactNativeMicrotasks', key:'1'},
    {title:'The lord of the rings part 2', rating:3, body: 'at node8:41 in callReactNativeMicrotasks', key:'2'},
    {title:'Se7en', rating:2, body: 'at node8:41 in callReactNativeMicrotasks', key:'3'},
    {title:'Memento', rating:5, body: 'at node8:41 in callReactNativeMicrotasks', key:'4'},
]}

export default reducer = (state=initialState, action) => {
    console.log(action)
    switch(action.type){
        case 'SUBMIT_FORM':
            action.data.key = Math.random().toString()
            return { movies: [action.data, ...initialState['movies']]}   
    }
    return state
}