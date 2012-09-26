Ext.define("Catalog.view.Welcome", {
	extend: "Ext.Container",
	alias: "widget.Welcome",
	
	initialize: function() {
		this.callParent(arguments);
		
		var img = {
			xtype: 'image',
			src: 'app/img/SplashScreen.png'
		};
		
		var toolbar = {
			xtype: "toolbar",
            docked: "bottom",
			items: [
				{ xtype: 'spacer' },
				{ xtype: 'button', ui: 'confirm', text: 'CATEGORIES', handler: this.goCategories, scope: this },	
				{ xtype: 'spacer' }
			]
		};
		
		this.add([img,toolbar]);		
	},
	
	goCategories: function() {
		this.fireEvent("goCategories", this);
	},
	
	config: {
        layout: {
            type: 'fit'
        }
    }
});