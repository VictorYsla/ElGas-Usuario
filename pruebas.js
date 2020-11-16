import React, { useEffect, useState } from 'react';

function pruebas() {
	const [chaskiSelect, setchaskiSelect] = useState('');
	const [fecha, setfecha] = useState({ ini: '', fin: '' });
	const [dataChaskiR, setdataChaskiR] = useState([]); //reserva
	const [dataChaski, setdataChaski] = useState([]); //modificable

	const getData = (text) => {
		firebaseData(text).then((arr) => {
			filtros(arr).then((arr2) => {
				setdataChaskiR(arr2);
				setdataChaski(arr2);
			});
		});
	};

	const filtros = (arr) => {
		return arrFiltrado;
	};

	useEffect(() => {
		filtros(dataChaskiR).then((arr) => {
			setdataChaski(arr);
		});
	}, [fecha]);

	return (
		<div>
			<select
				onChange={(text) => {
					getData(text);
				}}
			/>
			<input
				onChange={(text) => {
					setfecha({ ...fecha, ini: text });
				}}
			/>
			<input
				onChange={(text) => {
					validarInputComisiones(text).then((r) => {
						r ? setfecha({ ...fecha, fin: text }) : alert(r);
					});
				}}
			/>
			{dataChaski.map((item, index) => {
				return (
					<input
						value={arr[index].porcentaje}
						onChange={(text) => {
							let arr = dataChaski;
							arr[index].porcentaje = text;
							setdataChaski([...arr]);
						}}
					/>
				);
			})}
		</div>
	);
}

const validarInputComisiones = () => {
	return 'boolean'; //true or false
};

export default pruebas;
