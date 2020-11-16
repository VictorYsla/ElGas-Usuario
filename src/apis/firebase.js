import * as firebase from 'firebase';
import 'firebase/firestore';

import { decode, encode } from 'base-64';

if (!global.btoa) {
	global.btoa = encode;
}

if (!global.atob) {
	global.atob = decode;
}

export const firebaseConfig = {
	apiKey: 'AIzaSyBk5ZiEvknFcEYFohScW2l_UER61mXwOIs',
	authDomain: 'elgas-68c82.appspot.com',
	databaseURL: 'https://elgas-68c82.firebaseio.com',
	projectId: 'elgas-68c82',
	storageBucket: 'elgas-68c82.appspot.com',
	messagingSenderId: '564053304656',
	appId: '1:564053304656:android:6aeaf58d5780d7c9cb3855',
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);

export let firestore = firebase.firestore(firebaseApp);

firestore.settings({ experimentalForceLongPolling: true });
// firestore.getInstance().setMaxUploadRetryTimeMillis(1000);
// console.log('firebasejs', firestore);

export const getAllUsers = async (funcion = () => {}) => {
	try {
		const Db = firestore.collection('gestion');

		Db.onSnapshot(
			{
				includeMetadataChanges: true,
			},
			function (docs) {
				var users = [];
				docs.forEach(function (doc) {
					users.push({
						...doc.data(),
						id: doc.id,
						//doc: doc
					});
				});
				//console.log('firestore', users);
				funcion(users);
			}
		);
	} catch (err) {
		console.log('error', err);
	}
};

export const saveUser = async (user = {}) => {
	try {
		let mydoc = firestore.collection('gestion').doc();
		mydoc.set({
			created_at: new Date().getTime(),
			...user,
		});
	} catch (err) {
		console.log('error', err);
	}
};

export const updateUser = async (user = {}, operacion = true) => {
	try {
		let mydoc = firestore.collection('gestion').doc(user.id);
		if (operacion) {
			mydoc.update({
				estado_empresas: 1,
			});
		} else {
			mydoc.update({
				estado_empresas: 2,
			});
		}
	} catch (err) {
		console.log('error', err);
	}
};

import { Platform, InteractionManager } from 'react-native';

const _setTimeout = global.setTimeout;
const _clearTimeout = global.clearTimeout;
const MAX_TIMER_DURATION_MS = 60 * 1000;
if (Platform.OS === 'android') {
	// Work around issue `Setting a timer for long time`
	// see: https://github.com/firebase/firebase-js-sdk/issues/97
	const timerFix = {};
	const runTask = (id, fn, ttl, args) => {
		const waitingTime = ttl - Date.now();
		if (waitingTime <= 1) {
			InteractionManager.runAfterInteractions(() => {
				if (!timerFix[id]) {
					return;
				}
				delete timerFix[id];
				fn(...args);
			});
			return;
		}

		const afterTime = Math.min(waitingTime, MAX_TIMER_DURATION_MS);
		timerFix[id] = _setTimeout(() => runTask(id, fn, ttl, args), afterTime);
	};

	global.setTimeout = (fn, time, ...args) => {
		if (MAX_TIMER_DURATION_MS < time) {
			const ttl = Date.now() + time;
			const id = '_lt_' + Object.keys(timerFix).length;
			runTask(id, fn, ttl, args);
			return id;
		}
		return _setTimeout(fn, time, ...args);
	};

	global.clearTimeout = (id) => {
		if (typeof id === 'string' && id.startsWith('_lt_')) {
			_clearTimeout(timerFix[id]);
			delete timerFix[id];
			return;
		}
		_clearTimeout(id);
	};
}
