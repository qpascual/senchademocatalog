Ext.define("Catalog.view.DetailView", {
	extend: "Ext.Container",
	alias: "widget.DetailView",
	
	initialize: function() {
		this.callParent(arguments);
	},
	
	constructView: function() {
		Ext.Msg.alert("construct DetailView");
		var data2 = this.getData();		
		
		if(window.innerHeight > window.innerWidth) {
			var detail = "Detail";
		}
		else {
			var detail = "DetailTablet";
		}
		
		
		var backButton = {
            xtype: "button",
            ui: "back",
            text: "Atras",
			handler: this.onBackButtonTap,
			scope: this
        };
		
		var buttonShoppingCar = {
			xtype: "button",
			ui: "confirm",
			text: "Carro",
			handler: this.onViewShop,
			scope: this
		};
		
		var toolbar = {
			xtype: "toolbar",
            docked: "top",
			items: [
				backButton,
				{ xtype: 'spacer' },
				buttonShoppingCar
			]
		};
		
		var buttonShop = {
			xtype: 'button',
			ui: 'confirm',
			text: 'AÑADIR AL CARRO',
			handler: this.onButtonShop,
			scope: this
		};
		
		var adaImg = {
			xtype: "image",
			width: "47px",
			height: "40px",
			src: 'app/img/AdaLogo.png'
		};
		
		var toolbarBottom = {
			xtype: 'toolbar',
            docked: 'bottom',
            defaults: {
                iconMask: true
            },
			items: [
				adaImg,
                { xtype: 'spacer' },
				buttonShop
            ]
		};
		
		var detailV = {
			xtype: detail,
			store: {
				fields: ['name', 'description', 'img', 'weight', 'price'],
				data: [
					{ name: data2.name, description: data2.description, img: data2.img, weight: data2.weight, price: data2.price }
				]
			}
		};
		
		this.add([toolbar, detailV, toolbarBottom]);
	},
	
	onBackButtonTap: function() {
		this.fireEvent("BackProducts");
	},
	
	onViewShop: function() {
		this.fireEvent("ViewShop", "detail");
	},
	
	onButtonShop: function() {
		var data2 = this.getData();
		var picker = Ext.create("Ext.Picker",{ 
			doneButton: 'OK',
			cancelButton: 'Cancel',
			toolbar: {
				title: 'Cantidad'
			},
            slots: [ 
            { 
                name : 'cant', 
                title: 'Cantidad', 
                data: [
					{text: '1', value: 1 },
					{text: '2', value: 2 },
					{text: '3', value: 3 },
					{text: '4', value: 4 },
					{text: '5', value: 5 },
					{text: '6', value: 6 },
					{text: '7', value: 7 },
					{text: '8', value: 8 },
					{text: '9', value: 9 },
					{text: '10', value: 10 }
				]
            } 
            ], 
            listeners: { 
                change: function(picker) { 
					var shop = Ext.create('Catalog.model.Shop', {
						id: data2.id,
						name: data2.name,
						img: data2.img,
						units: picker.getValue()['cant'],
						price: data2.price * picker.getValue()['cant'],
						category: data2.category
					});
					
					
					var shopStore = Ext.getStore("Shops");
					
					if (null == shopStore.findRecord('id', data2.id)) {
						shopStore.add(shop);
						Ext.Msg.alert(data2.name, 'Añadidas ' + picker.getValue()['cant'] + ' ud.');
					}
					else {
						Ext.Msg.alert(data2.name, 'Se ha cambiado su anterior comanda a ' + picker.getValue()['cant'] + ' ud.');
					}
					
					shopStore.sync();
                },
				
				cancel: function (picker) {
                } // cancel
            } 
        }); 
		Ext.Viewport.add([picker]);
	},
	
	config: {
        layout: {
            type: 'fit'
        }
    }
});