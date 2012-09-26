Ext.define("Catalog.view.Detail", {
    extend: "Ext.dataview.DataView",
    alias: "widget.Detail",
	config: {
		itemTpl: '<h3 align="center" style="margin-top: 3%; margin-bottom: 4%; font-size: 1em">{name}</h3><p style="margin-right: 3%; margin-left: 3%; margin-bottom: 3%; font-size: 0.75em">{description}</p><br><table style="border-spacing:10; empty-cells: show; font-size: 0.75em; margin-right: 3%; margin-left: 3%; margin-bottom: 3%;"><tr><td width=90px>Peso/ud : </td><td>{weight}</td></tr><tr><td width=90px>Precio/ud : </td><td>{price} €</td></tr></table><img src="{img}" width=94% style="margin-right: 3%; margin-left: 3%; margin-bottom: 3%">'
	}
});