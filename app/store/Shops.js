Ext.define("Catalog.store.Shops", {
    extend: "Ext.data.Store",
    requires:"Ext.data.proxy.LocalStorage",
    config: {
        model: "Catalog.model.Shop",
        proxy: {
            type: 'localstorage',
            id: 'shop-app-store'
        }
    }
});
