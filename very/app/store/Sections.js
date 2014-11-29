Ext.define('myJob.store.Sections', {
    extend: 'Ext.data.TreeStore',
    requires: ['myJob.model.Sections'],
    config: {
        autoLoad: true,
        model: 'myJob.model.Sections',
        proxy: {
            type: 'ajax',
            url: 'resources/data/data.json',
            reader: {
                type: 'json',
                rootProperty: 'items'
            }
        }
    }
});