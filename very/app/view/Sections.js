Ext.define('myJob.view.Sections', {
    extend: 'Ext.dataview.NestedList',
    xtype: 'sections',
    id: 'mainlist',
    requires: ['myJob.store.Sections','myJob.view.Detail'],
    config: {
        title: 'Welcome to Web',
        //useTitleAsBackText: false,
        //onItemDisclosure: true,
        store: 'Sections',
        detailCard: {
            xtype: 'detailcard'
        },
        zIndex: 0
    },
    getTitleTextTpl: function() {
        return '<div>{name}</div>';
    },
    getItemTextTpl: function(node) {
		return '<div>{name}</div>';
    }
});