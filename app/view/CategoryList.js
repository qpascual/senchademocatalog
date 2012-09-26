Ext.define("Catalog.view.CategoryList", {
    extend: "Ext.dataview.List",
    alias: "widget.CategoryList",
	
    config: {
        loadingText: "Cargando categorias...",
        emptyText: '</pre><div class="category-list-empty-text">No categories found.</div><pre>',
        onItemDisclosure: false,
        itemTpl: '</pre><div class="list-item-title">{name}</div><pre>',
    }
});