Ext.define("Catalog.controller.CatalogC", {
    extend: "Ext.app.Controller",
	config: {
        refs: {
            // We're going to lookup our views by xtype.
            Category: "CategoryListContainer",
			Product: "ProductListContainer",
			Detail: "DetailView",
			Shop: "ShopListContainer",
			Welcome: "Welcome"
        },
        control: {
            Category: {
                // The commands fired by the category list container.
                viewCategory: "onViewCategoryCommand",
				ViewShop: "onViewShop"
            },
			Product: {
				BackCategories: "onBackCategories",
				viewProduct: "onViewProductCommand",
				ViewShop: "onViewShop"
			},
			Detail: {
				BackProducts: "onBackProducts",
				ViewShop: "onViewShop"
			},
			Shop: {
				BackToCategories: "onBackCategories",
				BackToProducts: "onBackToProducts",
				BackToDetail: "onBackToDetail"
			},
			Welcome: {
				goCategories: "welcome",
				orientationchange: "onOrientationChange"
			},
			'viewport': {
				orientationchange: "onOrientationChange"
			}
        }
    },
	
	
	onOrientationChange: function(viewport, orientation, width, height) {
		if(viewport.getActiveItem().xtype == 'DetailView') {
			var DetailView = this.getDetail();
			var record = DetailView.getData();
			DetailView.removeAll(true, true);
			DetailView.setData(record);
			DetailView.constructView();
			
			Ext.Viewport.setActiveItem(DetailView);
		}
	},
	
	
	// Transitions.
	
	activateListProducts: function (record) {
		var ProductListContainer = this.getProduct();
		ProductListContainer.removeAll(true, true);
		ProductListContainer.setData({category: record.data.id, name_category: record.data.name});
		ProductListContainer.constructView();
		
		Ext.Viewport.animateActiveItem(ProductListContainer, this.slideLeftTransition);
	},
	
	activateDetailProduct: function(record) {
		var DetailView = this.getDetail();
		DetailView.removeAll(true, true);
		DetailView.setData({id: record.data.id, name: record.data.name, description: record.data.description, img: record.data.img, weight: record.data.weight, price: record.data.price, category: record.data.category});
		DetailView.constructView();
		
		Ext.Viewport.animateActiveItem(DetailView, this.slideLeftTransition);
	},
	
	activateListCategories: function() {
		var CategoriesListContainer = this.getCategory();
		Ext.Viewport.animateActiveItem(CategoriesListContainer, this.slideRightTransition);
	},
	
	activateViewShop: function(view) {
		var shop = this.getShop();
		shop.removeAll(true, true);
		shop.setData({view: view});
		shop.constructView();
		Ext.Viewport.animateActiveItem(shop, this.slideLeftTransition);
	},
	
	activateDetailView: function() {
		var detail = this.getDetail();
		Ext.Viewport.animateActiveItem(detail, this.slideRightTransition);
	},
	
	returnListProducts: function() {
		var products = this.getProduct();
		Ext.Viewport.animateActiveItem(products, this.slideRightTransition);
	},
	
	slideLeftTransition: { type: 'slide', direction: 'left' },
	
	slideRightTransition: { type: 'slide', direction: 'right' },
	
	// View products of a category command.
	
	onViewCategoryCommand: function (list, record) {
		this.activateListProducts(record);
    },
	
	// View shop.
	
	onViewShop: function(view) {
		this.activateViewShop(view);
	},
	
	// View details of a product command.
	
	onViewProductCommand: function(list, record){
		this.activateDetailProduct(record);
	},
	
	welcome: function(list) {
		var cat = this.getCategory();
		
		Ext.Viewport.animateActiveItem(cat, this.slideLeftTransition);
	},
	
	// Button back of ShopListConainer commands.
	
	onBackCategories: function() {
		this.activateListCategories();
	},
	
	onBackToDetail: function()  {
		this.activateDetailView();
	},
	
	onBackToProducts: function() {
		this.returnListProducts();
	},
	
	// Button back to products command.
	
	onBackProducts: function(){
		var ProductListContainer = this.getProduct();
		Ext.Viewport.animateActiveItem(ProductListContainer, this.slideRightTransition);
	},
	
	// Other functions.
	
	launch: function() {
		this.callParent(arguments);
		Ext.getStore("Notes").load();
	},
	
	init: function() {
		this.callParent(arguments);
	}
});