Ext.application({
    name: "Catalog",
	
	models: ["Product", "Category", "Shop"],
	stores: ["Products", "Categories", "Shops"],
	controllers: ["CatalogC"],
	views: ["Welcome", "CategoryListContainer", "CategoryList", "ProductListContainer", "ProductList", "DetailView", "Detail", "DetailTablet", "ShopListContainer", "ShopList"],
	
    launch: function () {
    	/*if(Ext.os.is.Phone){
    		alert("phone");
    	}
    	else {
    		alert("no phone");
    	}
    	
    	alert('You are running: ' + Ext.os.name + ', version ' + Ext.os.version.version);*/
		/*
		Ext.device.Orientation.on({
			scope: this,
			orientationchange: function(e) {
				alert('Alpha: ', e.alpha);
				alert('Beta: ', e.beta);
				alert('Gamma: ', e.gamma);
			}
		});*/
		
		//alert(Ext.os.name);
		
    	var Welcome = {
			xtype: "Welcome"
		};		
		var CategoryListContainer = {
			xtype: "CategoryListContainer"
		};
		var ProductListContainer = {
			xtype: "ProductListContainer"
		};
		var DetailView = {
			xtype: "DetailView"
		};
		var ShopListContainer = {
			xtype: "ShopListContainer"
		};
		
		Ext.Viewport.add([Welcome, CategoryListContainer, ProductListContainer, DetailView, ShopListContainer]);
    	//alert(screen.width+"x"+screen.height);//tamaño pantalla
		//alert(window.innerWidth+"x"+window.innerHeight) //tamaño pantalla navegador
        
    }
});

