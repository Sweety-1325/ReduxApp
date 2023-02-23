export const depositMoney=((amount)=>{
    return (dispatch)=>{
        //dispatch is a function to trigger an action i.e deposit the amount
        dispatch({
            type:'deposit',
            payload:amount
        })
    }

})
export const withdrawMoney=((amount)=>{
    return (dispatch)=>{
        //dispatch is a function to trigger an action i.e withdraw the amount
        dispatch({
            type:'withdraw',
            payload:amount
        })
    }
    
})