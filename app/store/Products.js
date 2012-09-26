Ext.define("Catalog.store.Products", {
	extend: "Ext.data.Store",
	config: {
		model: "Catalog.model.Product",
		data: [
			{ id: 1, name: "Jamon iberico puro de bellota", description: "La pureza de lo aut�ntico, con una curaci�n de entre 36 y 42 meses y el exquisito sabor del ib�rico puro de bellota criado en libertad.", img: "app/img/jamon/1.jpg", weight: "7.5 kg", price: 400, category: 1 },
			{ id: 2, name: "Jamon iberico puro de bellota cortado a mano", description: "Cortado a mano y a cuchillo; y envasado al vac�o. As� guarda todo su aroma y su exquisito sabor. Presentado en cajitas de 100g, 200g y 500g.", img: "app/img/jamon/2.jpg", weight: "100 gr", price: 18, category: 1 },
			{ id: 3, name: "Jamon iberico puro de bellota deshuesado", description: "Lo mejor de un jam�n ib�rico puro de bellota, deshuesado y envasado al vac�o. Una opci�n inmejorable para tomar jam�n reci�n cortado, sin tener una pata en casa!", img: "app/img/jamon/3.jpg", weight: "3 kg", price: 383, category: 1 },
			{ id: 4, name: "Taquitos de jamon iberico puro de bellota", description: "Taquitos de jam�n 100% ib�rico, de bellota. Perfecto para un aperitivo informal. Un ingrediente que no debe faltar en su cocina: a��dalo a su recetas y consiga un sabor incomparable.", img: "app/img/jamon/4.jpg", weight: "100 gr", price: 4, category: 1 },	
			{ id: 12, name: "Jamon serrano en lonchas", description: "El jamon serrano de bodega en lonchas de Embutidos Manolo presenta las ventajas de la facilidad para su consumo y el precio frente a otros tipos de jamones.", img: "app/img/jamon/5.jpg", weight: "250 gr", price: 6.35, category: 1},
			
			{ id: 5, name: "Lomo iberico puro de bellota", description: "La tradici�n ib�rica m�s pura, con un sabor delicado y salvaje, absolutamente irresistible", img: "app/img/lomo/1.jpg", weight: "1100 gr", price: 50, category: 2 },
			{ id: 6, name: "Lomo iberico puro de bellota loncheado", description: "Todo el sabor del lomo 100% ib�rico y de bellota, cortado a mano por un profesional.", img: "app/img/lomo/2.jpg", weight: "200 gr", price: 14, category: 2 },
			{ id: 13, name: "Lomo curado extra natural", description: "El lomo embuchado curado extra natural de Embutidos Manolo es un lomo de cerdo blanco curado al humo de madera de roble.", img: "app/img/lomo/3.jpg", weight: "2 kg", price: 26.90, category: 2},
			
			{ id: 7, name: "Ca�a de chorizo iberico puro de bellota", description: "Este producto tradicional, elaborado con nuestras carnes 100% ib�ricas de bellota, se convierte en una delicatesen. Un chorizo para los paladares m�s exigentes.", img: "app/img/chorizo/1.jpg", weight: "500 gr", price: 12.50, category: 3},
			{ id: 8, name: "Chorizo jabuguito iberico puro de bellota", description: "El mejor chorizo con un toque de picante. Un sabor que no olvidar�.", img: "app/img/chorizo/2.jpg", weight: "250 gr", price: 9, category: 3},
			{ id: 14, name: "Chorizo gallego", description: "El chorizo gallego de Montepicato es un chorizo hecho en la misma Galicia y con toda la tradici�n artesanal que atesora este fabricante.", img: "app/img/chorizo/3.jpg", weight: "1 kg", price: 6.95, category: 3},
			
			{ id: 9, name: "Salchichon artesanal iberico puro de bellota", description: "Una pieza exquisita, elaborada artesanalmente, siguiendo el patr�n de la receta familiar.", img: "app/img/salchichon/1.jpg", weight: "450 gr", price: 12.50, category: 4},
			{ id: 10, name: "Salchichon de cerdo herradura", description: "Salchichon de cerdo en forma de herradura curado al aire de Le�n.", img: "app/img/salchichon/2.jpg", weight: "500 gr", price: 4.90, category: 4},
			{ id: 11, name: "Salchichon de cerdo vela", description: "El salchich�n de cerdo en vela o barra de Embutidos Manolo tiene un sabor muy tradicional y suave, ideal para ni�os.", img: "app/img/salchichon/3.jpg", weight: "500 gr", price: 4.90, category: 4}
		]
	}
});