Ext.define("Catalog.store.Options", {
	extend: "Ext.data.Store",
	config: {
		model: "Catalog.model.Option",
		data: [
			{ id_category: 0 }		
		]
	}
});