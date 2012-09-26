Ext.define("Catalog.model.Shop", {
    extend: "Ext.data.Model",
    config: {
        idProperty: 'id',
        fields: [
            { name: 'id', type: 'int' },
			{ name: 'name', type: 'string' },
			{ name: 'img', type: 'string' },
			{ name: 'units', type: 'int' },
			{ name: 'price', type: 'int' },
			{ name: 'category', type: 'int' }
        ]
    }
});