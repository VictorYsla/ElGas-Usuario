import firebase from 'firebase'

export const getCollection = async(collectionName='1') => {
    return await firebase
    .firestore()
    .collection(collectionName)
    .get()
    .then(x=>{
        const values = []
        x.docs.forEach((doc)=>{
            values.push(doc.data())
        })
        return values
    })
    // .onSnapshot(response =>{
    //     const values=[]
    //     response.forEach((doc)=>{
    //         values.push(doc.data())
    //     })
    //     setResponse(values)
    // })
}

export const postCollection = (collectionName='1', body={name:''}) =>{
    firebase
    .firestore()
    .collection(collectionName)
    .add(body)
}

export const singUp = async(email='',userName='', password='', phoneNumberUser='') => {
    //console.log(email, userName, password, phoneNumberUser);
    return await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(async(res) =>{
        return await res.user.updateProfile({displayName:userName}).then(x=>{
            const user={
                userName: res.user.displayName,
                token: res.user.l,
                uid: res.user.uid,
                email: res.user.email,
                emailVerified: res.user.emailVerified
            }
            console.log('user', user);
            return {type:'sucess', value: user}
        })
    })
    .catch(e=>{console.log('error: ', e); return {type:'error', value: e}; })
}

export const logIn = async(email='', password='') => {
    return await firebase
    .auth()
    .signInWithEmailAndPassword(email,password)
    .then(res =>{
        // console.log('Login: ',res)
        const user={
            userName: res.user.displayName,
            token: res.user.l,
            uid: res.user.uid,
            email: res.user.email,
            emailVerified: res.user.emailVerified
        }
        return {type:'sucess', value: user}
        // console.log('obj', user );
        // setResponse({type:'sucess', value: user})
    })
    .catch(e=>{console.log('error: ', e); return {type:'error', value: e}; })
}