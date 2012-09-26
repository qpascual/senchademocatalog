Ext.define("Catalog.view.ShopList", {
    extend: "Ext.dataview.List",
    alias: "widget.ShopList",
	
    config: {
        loadingText: "Cargando categorias...",
        emptyText: 'No has comprado ningun producto.',
        onItemDisclosure: false,
        itemTpl: '<table><tr><td><img class="img-list" src="{img}" width="75px" height="75px"/></td><td style="padding-left: 25px"><table><tr><td colspan=2>{name}</td></tr><tr style="font-size:0.75em"><td width=115px>Unidades : </td><td>{units}</td></tr><tr style="font-size: 0.75em"><td width=115px>Precio : </td><td>{price} €</td></tr></table></td></tr></table>'
		//itemTpl: '</pre><div>{name}</div><div style="font-size: 0.75em"><table style="border-spacing:10; empty-cells: show;"><tr><td width=90px>Unidades : </td><td>{units}</td></tr><tr><td width=90px>Precio : </td><td>{price} €</td></tr></table></div><pre>',
    }
});