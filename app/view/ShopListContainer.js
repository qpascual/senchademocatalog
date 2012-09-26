Ext.define("Catalog.view.ShopListContainer", {
	extend: "Ext.Container",
	alias: "widget.ShopListContainer",
	
	initialize: function() {
		this.callParent(arguments);
	},
	
	constructView: function() {
		
		var backButton = {
            xtype: "button",
            ui: "back",
            text: "Atras",
			handler: this.onBackButtonTap,
			scope: this
        };
		
		var buyButton = {
			xtype: "button",
			ui: "confirm",
			text: "REALIZAR COMPRA"
		};
		
		var adaImg = {
			xtype: "image",
			width: "47px",
			height: "40px",
			src: 'app/img/AdaLogo.png'
		};
		
		var toolbar = {
			xtype: "toolbar",
			title: "Carro",
            docked: "top",
			items: [
				backButton
			]
		};
		
		var toolbarBottom = {
			xtype: "toolbar",
			docked: "bottom",
			items: [
				adaImg,
				{xtype: 'spacer'},
				buyButton
			]
		};
		
		var shopList = {
			xtype: "ShopList",
			store: Ext.getStore("Shops"),
			listeners: {
				itemtap: {
					fn: this.onTap,
					scope: this
				}
			}
		};
		
		if(Ext.getStore("Shops").getCount() > 0) {
			this.add([toolbar, shopList, toolbarBottom]);
		}
		else {
			this.add([toolbar, shopList]);
		}
	},
	
	onTap: function(list, index, target, record, e, options) {
		Ext.Msg.confirm(record.data.name, "Quieres eliminar este elemento de la lista?", function ( answer ) { if ( answer == 'yes') { var shopStore = Ext.getStore("Shops"); shopStore.remove(record); } });
	},
	
	onBackButtonTap: function() {
		var data2 = this.getData();
		switch (data2.view) {
			case 'detail':
				this.fireEvent("BackToDetail");
				break;
			case 'categories':
				this.fireEvent("BackToCategories");				
				break;
			case 'products':
				this.fireEvent("BackToProducts");
				break;
		}
	},
	
	config: {
        layout: {
            type: 'fit'
        }
    }
});