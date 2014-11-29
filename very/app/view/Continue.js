Ext.define("myJob.view.Continue", {
    extend: 'Ext.Container',
    xtype: 'continue',
    config: {
       scorllable:true,
	   items:[{
			html:'<div class="plaintxt">Lets us know about you lorem ipsum is simply dummy text of the printing</div>'
	   },{
		 xtype:'panel',
		 items:[{
			xtype:'textfield',
			cls:'txtbdrs',
			placeHolder:'Enter Industry'
		 },{
			xtype:'textfield',
			cls:'txtbdrs',
			placeHolder:'Enter Function'
		 },{
			 xtype: 'fieldset',
            items: [
                {
                    xtype: 'selectfield',
                    label: 'Location',
                    options: [
                        {text: 'First Option',  value: 'first'},
                        {text: 'Second Option', value: 'second'},
                        {text: 'Third Option',  value: 'third'}
                    ]
                }
            ]
		 },{
			xtype:'button',
			id:'continuenxt',
			text:'Continue'
		 }]
	   }]
	}
});