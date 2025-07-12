ServerEvents.recipes(event => {


	event.remove({output: 'gateways:gate_pearl[gateways:gateway="gateways:basic/blaze"]'})
	event.shaped(
	  Item.of('gateways:gate_pearl[gateways:gateway="gateways:basic/blaze"]'), 
	  [
	    ' B ',
		'BAB',
		' B '
	  ], 
	  {
		A: 'naturesaura:token_joy',
		B: 'justdirethings:blazegold_ingot'
	  }
	)
	
	
	event.shaped(
	  Item.of('gateways:gate_pearl[gateways:gateway="gateways:aether_first_part"]'), 
	  [
	    ' B ',
		'BAB',
		' B '
	  ], 
	  {
		A: 'naturesaura:token_joy',
		B: 'aether:ambrosium_shard'
	  }
	)
	
	
	event.shaped(
	  Item.of('gateways:gate_pearl[gateways:gateway="gateways:aether_second_part"]'), 
	  [
	    ' B ',
		'BAB',
		' B '
	  ], 
	  {
		A: 'naturesaura:token_joy',
		B: 'aether:zanite_gemstone'
	  }
	)
	
	
	event.shaped(
	  Item.of('gateways:gate_pearl[gateways:gateway="gateways:aether_third_part"]'), 
	  [
	    ' B ',
		'BAB',
		' B '
	  ], 
	  {
		A: 'naturesaura:token_joy',
		B: 'justdirethings:ferricore_ingot'
	  }
	)
	
	
	event.shaped(
	  Item.of('gateways:gate_pearl[gateways:gateway="gateways:undergarden_first_part"]'), 
	  [
	    'DBE',
		'BAB',
		'EBC'
	  ], 
	  {
		A: 'naturesaura:token_joy',
		B: '#c:ingots/brass',
		C: 'undergarden:rogdorium',
		D: 'undergarden:utheric_cluster',
		E: 'undergarden:forgotten_nugget'
	  }
	)
	
	
})