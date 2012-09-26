Ext.define("Catalog.store.Products", {
	extend: "Ext.data.Store",
	config: {
		model: "Catalog.model.Product",
		data: [
			{ id: 1, name: "Jamon iberico puro de bellota", description: "La pureza de lo auténtico, con una curación de entre 36 y 42 meses y el exquisito sabor del ibérico puro de bellota criado en libertad.", img: "app/img/jamon/1.jpg", weight: "7.5 kg", price: 400, category: 1 },
			{ id: 2, name: "Jamon iberico puro de bellota cortado a mano", description: "Cortado a mano y a cuchillo; y envasado al vacío. Así guarda todo su aroma y su exquisito sabor. Presentado en cajitas de 100g, 200g y 500g.", img: "app/img/jamon/2.jpg", weight: "100 gr", price: 18, category: 1 },
			{ id: 3, name: "Jamon iberico puro de bellota deshuesado", description: "Lo mejor de un jamón ibérico puro de bellota, deshuesado y envasado al vacío. Una opción inmejorable para tomar jamón recién cortado, sin tener una pata en casa!", img: "app/img/jamon/3.jpg", weight: "3 kg", price: 383, category: 1 },
			{ id: 4, name: "Taquitos de jamon iberico puro de bellota", description: "Taquitos de jamón 100% ibérico, de bellota. Perfecto para un aperitivo informal. Un ingrediente que no debe faltar en su cocina: añádalo a su recetas y consiga un sabor incomparable.", img: "app/img/jamon/4.jpg", weight: "100 gr", price: 4, category: 1 },	
			{ id: 12, name: "Jamon serrano en lonchas", description: "El jamon serrano de bodega en lonchas de Embutidos Manolo presenta las ventajas de la facilidad para su consumo y el precio frente a otros tipos de jamones.", img: "app/img/jamon/5.jpg", weight: "250 gr", price: 6.35, category: 1},
			
			{ id: 5, name: "Lomo iberico puro de bellota", description: "La tradición ibérica más pura, con un sabor delicado y salvaje, absolutamente irresistible", img: "app/img/lomo/1.jpg", weight: "1100 gr", price: 50, category: 2 },
			{ id: 6, name: "Lomo iberico puro de bellota loncheado", description: "Todo el sabor del lomo 100% ibérico y de bellota, cortado a mano por un profesional.", img: "app/img/lomo/2.jpg", weight: "200 gr", price: 14, category: 2 },
			{ id: 13, name: "Lomo curado extra natural", description: "El lomo embuchado curado extra natural de Embutidos Manolo es un lomo de cerdo blanco curado al humo de madera de roble.", img: "app/img/lomo/3.jpg", weight: "2 kg", price: 26.90, category: 2},
			
			{ id: 7, name: "Caña de chorizo iberico puro de bellota", description: "Este producto tradicional, elaborado con nuestras carnes 100% ibéricas de bellota, se convierte en una delicatesen. Un chorizo para los paladares más exigentes.", img: "app/img/chorizo/1.jpg", weight: "500 gr", price: 12.50, category: 3},
			{ id: 8, name: "Chorizo jabuguito iberico puro de bellota", description: "El mejor chorizo con un toque de picante. Un sabor que no olvidará.", img: "app/img/chorizo/2.jpg", weight: "250 gr", price: 9, category: 3},
			{ id: 14, name: "Chorizo gallego", description: "El chorizo gallego de Montepicato es un chorizo hecho en la misma Galicia y con toda la tradición artesanal que atesora este fabricante.", img: "app/img/chorizo/3.jpg", weight: "1 kg", price: 6.95, category: 3},
			
			{ id: 9, name: "Salchichon artesanal iberico puro de bellota", description: "Una pieza exquisita, elaborada artesanalmente, siguiendo el patrón de la receta familiar.", img: "app/img/salchichon/1.jpg", weight: "450 gr", price: 12.50, category: 4},
			{ id: 10, name: "Salchichon de cerdo herradura", description: "Salchichon de cerdo en forma de herradura curado al aire de León.", img: "app/img/salchichon/2.jpg", weight: "500 gr", price: 4.90, category: 4},
			{ id: 11, name: "Salchichon de cerdo vela", description: "El salchichón de cerdo en vela o barra de Embutidos Manolo tiene un sabor muy tradicional y suave, ideal para niños.", img: "app/img/salchichon/3.jpg", weight: "500 gr", price: 4.90, category: 4}
		]
	}
});