export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export const doIncrement =(data)=>{
    console.log(data);
    return{
        type: INCREMENT,
        payload: data
    }
}
export const doDecrement =(data)=>{
    return{
        type: DECREMENT,
        payload: data
    }
}

