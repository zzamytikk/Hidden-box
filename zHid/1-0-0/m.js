var zHid={$:()=>{$('[zhid]').find('[zhidb]:eq(0)').click(e=>{zHid.X($(e.target).closest('[zhid]'))})},X:Z=>{if(Z.attr('zhid')!=1&&Z.css('max-height')=='100%'){Z.attr('zhid',1)}else{Z.attr('zhid',0)}}}