Ext.define("Catalog.view.CategoryListContainer", {
	extend: "Ext.Container",
	alias: "widget.CategoryListContainer",
	
	initialize: function() {
		this.callParent(arguments);
		
		//alert(Ext.Viewport.getOrientation());
		
		var buttonShoppingCar = {
			xtype: "button",
			ui: "confirm",
			text: "Carro",
			handler: this.onViewShop,
			scope: this
		};
		
		var toolbar = {
			xtype: "toolbar",
			title: "Categorias",
            docked: "top",
			items: [
				{ xtype: 'spacer' },
				buttonShoppingCar
			]
		};
		
		var categoryList = {
			xtype: "CategoryList",
			store: Ext.getStore("Categories"),
			listeners: {
				itemtap: {
					fn: this.onTap,
					scope: this
				}
			}
		};
		
		var adaImg = {
			xtype: "image",
			width: "47px",
			height: "40px",
			src: 'app/img/AdaLogo.png'
		};
		
		var toolbarBottom = {
			xtype: "toolbar",
			docked: "bottom",
			items: [
				adaImg
			]
		};
		
		this.add([toolbar, categoryList, toolbarBottom]);
	},
	
	onTap: function(list, index, target, record, e, options) {
		this.fireEvent("viewCategory", this, record);
	},
	
	onViewShop: function() {
		this.fireEvent("ViewShop", "categories");
	},
	
	config: {
        layout: {
            type: 'fit'
        }
    }
});