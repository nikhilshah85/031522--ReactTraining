 export const increment = () =>{
    return{
    type:'INCREMENT'
    }
}
export const decrement = () =>{
    return{
    type:'DECREMENT'
    }
}

export const double = (nr) =>{
    return{
    type:'DOUBLE',
    payload:nr
    }
}