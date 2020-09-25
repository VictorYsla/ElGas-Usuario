export function ValidateForm({fields}){
    if (filter(fields).length !== 0){
        return false
    }else{
        return true
    }
}

function filter(fields){
    let vec =[]
    for(let i in fields){
        if(fields[i] === ''){
            //vec.push({[i]:fields[i]})
            vec.push(i)
        }
    }
    return vec
}