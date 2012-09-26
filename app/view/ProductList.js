Ext.define("Catalog.view.ProductList", {
    extend: "Ext.dataview.List",
    alias: "widget.ProductList",
	
    config: {
        loadingText: "Cargando productos...",
        emptyText: '</pre><div class="category-list-empty-text">No products found.</div><pre>',
        onItemDisclosure: false,
		itemTpl: '<table><tr><td><img class="img-list" src="{img}" width="75px" height="75px"/></td><td style="padding-left: 25px">{name}</td></tr></table>'
    }
});