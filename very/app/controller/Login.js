Ext.define('myJob.controller.Login', {
    extend: 'Ext.app.Controller',
    requires: ['Ext.MessageBox'],
    config: {
        refs: {
            mainView: '#signup',
            login:'#signupbtn',
			signin:'#signinbtn',
			continuetxt:'#continuenxt'
        },
        routes: {
           
        },
        control: {
            login:{tap:'login'},
			signin:{tap:'signin'},
			continuetxt:{tap:'registration'}
        },
        history: null
    },
    login:function(){
    	Ext.Viewport.setActiveItem({xtype: 'signin',type: 'slide', direction: 'right'});
	},
	signin:function(){
		Ext.Viewport.setActiveItem({xtype: 'continue'});
	},
	registration:function(){
		Ext.Viewport.setActiveItem({xtype: 'sections'});
	}
    
    
});