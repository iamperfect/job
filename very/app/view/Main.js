Ext.define('myJob.view.Main', {
    extend: 'Ext.Panel',
    xtype: 'main',
    config: {
      
       scrollable:true,
	   items:[{
                xtype: 'titlebar',
                docked: 'top',
                title: 'Signup'
            },{
			xtype:'panel',
			layout: {type: 'vbox',align: 'middle'},
			items:[{
				xtype:'button',
				text:'Log in with',
				cls:'loginwith',
				pressedCls:''
			}]
	   },{
			xtype:'container',
			layout: {type: 'hbox',align: 'middle'},
			cls:'socialbtns center',
			items:[{
				xtype:'button',
				text:'fb',
				cls:'socialbtns fbbtn',
				pressedCls:''
			},{
				xtype:'button',
				text:'in',
				cls:'socialbtns linkedin',
				pressedCls:''
			},{
				xtype:'button',
				text:'G+',
				cls:'socialbtns gplus',
				pressedCls:''
			}]
    },{
		xtype:'container',
		layout: {type: 'vbox',align: 'middle'},
		cls:'hrclear',
		html:'<div class="divider"><hr class="left"/>or<hr class="right" /></div>'
	},{
		xtype:'panel',
		cls:'hrclear centertxt',
		layout: {type: 'hbox',align: 'middle'},
		items:[{
			xtype:'textfield',
			cls:'txtbdr'
		},{
			xtype:'textfield',
			cls:'txtbdr'
		}]
		
	},{
		xtype:'panel',
		cls:'martop centertxt',
		layout: {type: 'hbox',align: 'middle'},
		items:[{
			xtype:'textfield',
			cls:'emailfld'
		}]
		
	},{
			xtype:'panel',
			layout: {type: 'vbox',align: 'middle'},
			items:[{
				xtype:'button',
				text:'Sign up',
				id:'signupbtn',
				cls:'loginwith signupbtn',
				pressedCls:''
			}]
	   },{
			html:'<div class="plaintxt"> Please check your inbox for verfication</div>'
	   },{
			xtype:'panel',
			layout: {type: 'vbox',align: 'middle'},
			items:[{
				xtype:'button',
				text:'Skip',
				cls:'loginwith skipbtn',
				pressedCls:''
			}]
	   },{
			html:'<div class="plaintxt bg"> Already a member? Sign In >> </div>'
	   }]
    }
});
