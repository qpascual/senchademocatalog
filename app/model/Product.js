Ext.define("Catalog.model.Product", {
	extend: "Ext.data.Model",
	config: {
		idProperty: 'id',
		fields: [
			{ name: 'id', type: 'int' },
			{ name: 'name', type: 'string' },
			{ name: 'description', type: 'string' },
			{ name: 'img', type: 'string' },
			{ name: 'weight', type: 'string' },
			{ name: 'price', type: 'int' },
			{ name: 'category', type: 'int' }
		],
		validations: [
			{ type: 'presence', field: 'id' },
			{ type: 'presence', field: 'name' },
			{ type: 'presence', field: 'img' },	
			{ type: 'presence', field: 'weight' },
			{ type: 'presence', field: 'price' },
			{ type: 'presence', field: 'category' }
		]
	}
});