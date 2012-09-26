Ext.define("Catalog.view.DetailTablet", {
    extend: "Ext.dataview.DataView",
    alias: "widget.DetailTablet",
	config: {
		itemTpl: '<h2 align="center" style="margin-top: 3%; margin-bottom: 4%; font-size: 1.25em">{name}</h2><table width=94% style="margin-left:3%; margin-right:3%"><tr><td width=40% valign=top align=left><table><tr><td colspan=2 style="padding-right:3%">{description}</td></tr><tr><td width=50%><br>Peso/ud : </td><td><br>{weight}</td></tr><tr><td width=50%>Precio/ud : </td><td>{price} €</td></tr></table></td><td align=left><img src="{img}" width=100%></td></tr></table>'
	}
});