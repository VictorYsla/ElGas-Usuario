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

export const auth = (email='',userName='', password='', phoneNumberUser='', setResponse=()=>{}) => {
    //console.log(email, userName, password, phoneNumberUser);
    firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(res =>{
        res.user.updateProfile({displayName:userName}).then(x=>{
            // console.log('updateResposne', x)
            // console.log('Response: ', res);
            const user={
                userName: res.user.displayName,
                token: res.user.l,
                uid: res.user.uid,
                email: res.user.email,
                emailVerified: res.user.emailVerified
            }
            // console.log('obj', user, 'user: ', res.user.displayName);
            setResponse({type:'sucess', value: user})
        })
        // res.user.updatePhoneNumber(phoneNumberUser)
        // res.user.phoneNumber.
        
    })
    .catch(e=>{console.log('error: ', e); setResponse({type:'error', value:e})})
}

export const logIn = (email='', password='', setResponse=()=>{}) => {
    firebase
    .auth()
    .signInWithEmailAndPassword(email,password)
    .then(res =>{
        console.log('Login: ',res)
        const user={
            userName: res.user.displayName,
            token: res.user.l,
            uid: res.user.uid,
            email: res.user.email,
            emailVerified: res.user.emailVerified
        }
        // console.log('obj', user );
        setResponse({type:'sucess', value: user})
    })
    .catch(e=>{console.log('error: ', e); setResponse({type:'error', value:e})})
}