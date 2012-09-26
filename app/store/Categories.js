Ext.define("Catalog.store.Categories", {
	extend: "Ext.data.Store",
	config: {
		model: "Catalog.model.Category",
		data: [
			{ id: 1, name: "Jamon" },
			{ id: 2, name: "Lomo" },
			{ id: 3, name: "Chorizo" },
			{ id: 4, name: "Salchichon" }
		]
	}
});