Ext.define("myJob.view.Signin", {
    extend: 'Ext.Container',
	xtype:'signin',
    config: {
       scrollable:true,
	   items:[{
                xtype: 'titlebar',
                docked: 'top',
                title: 'Signin'
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
				text:'',
				cls:'socialbtns fbbtn',
				pressedCls:''
			},{
				xtype:'button',
				text:'',
				cls:'socialbtns linkedin',
				pressedCls:''
			},{
				xtype:'button',
				text:'',
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
		cls:'centertxt',
		layout: {type: 'hbox',align: 'middle'},
		items:[{
			xtype:'textfield',
			cls:'emailfld',
			placeHolder:'enter your email'
		}]
		
	},{
		xtype:'panel',
		cls:'martop centertxt',
		layout: {type: 'hbox',align: 'middle'},
		items:[{
			xtype:'textfield',
			cls:'emailfld',
			placeHolder:'enter your password'
		}]
		
	},{
			xtype:'panel',
			layout: {type: 'vbox',align: 'middle'},
			items:[{
				xtype:'button',
				text:'Sign in',
				cls:'loginwith signupbtn',
				id:'signinbtn',
				pressedCls:''
			}]
	   },{
			html:'<div class="plaintxt bg"> <div class="left" id="signuplink">Not a Memeber? Sign up</div> <div class="right"id="forgotlink" > Forgot password</div> </div>'
	   }]
	}
});
