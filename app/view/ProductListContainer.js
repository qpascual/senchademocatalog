Ext.define("Catalog.view.ProductListContainer", {
	extend: "Ext.Container",
	alias: "widget.ProductListContainer",
	
	initialize: function() {
		this.callParent(arguments);
	},
	
	constructView: function() {
		
		var varData = this.getData();
		
		var storeP = Ext.getStore("Products");
		storeP.filter('category', varData.category);
		
		var buttonShoppingCar = {
			xtype: "button",
			ui: "confirm",
			text: "Carro",
			handler: this.onViewShop,
			scope: this
		};
		
		var backButton = {
            xtype: "button",
            ui: "back",
            text: "Atras",
			handler: this.onBackButtonTap,
			scope: this
        };
		
		var toolbar = {
			xtype: "toolbar",
			title: varData.name_category,
            docked: "top",
			items: [
				backButton,
				{ xtype: 'spacer' },
				buttonShoppingCar
			]
		};
		
		var productList = {
			xtype: "ProductList",
			store: storeP,
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
		
		this.add([toolbar, productList, toolbarBottom]);
	},
	
	onTap: function(list, index, target, record, e, options) {
		this.fireEvent("viewProduct", this, record);
	},
	
	onViewShop: function() {
		this.fireEvent("ViewShop", "products");
	},
	
	onBackButtonTap: function() {
		this.fireEvent("BackCategories");
	},
	
	config: {
        layout: {
            type: 'fit'
        }
    }
});