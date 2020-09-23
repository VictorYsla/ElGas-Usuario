import firebase from 'firebase'

export const getCollection = (setResponse=()=>{}, collectionName='1') => {
    firebase
    .firestore()
    .collection(collectionName)
    .onSnapshot(response =>{
        const values=[]
        response.forEach((doc)=>{
            values.push(doc.data())
        })
        setResponse(values)
    })
}

export const postCollection = (collectionName='1', body={name:''}) =>{
    firebase
    .firestore()
    .collection(collectionName)
    .add(body)
}