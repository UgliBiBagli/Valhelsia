events.listen('recipes', function (event) {

  var idRemove = [
    //Decorative Blocks
    'decorative_blocks:chain',

    //Industrial Foregoing
    'industrialforegoing:infinity_drill',

    //MineColonies
    'minecolonies:chainmailhelmet',
    'minecolonies:chainmailchestplate',
    'minecolonies:chainmailleggings',
    'minecolonies:chainmailboots',
  ]
  idRemove.forEach(function (remove) {
    event.remove({id: remove})
  })
  var outputRemove = [
    //Mapper Base
    'mapperbase:steel_ingot',
    'mapperbase:steel_nugget',
    'mapperbase:steel_plate',
    'mapperbase:steel_rod',
    'mapperbase:steel_helmet',
    'mapperbase:steel_chestplate',
    'mapperbase:steel_leggings',
    'mapperbase:steel_boots',
    'mapperbase:steel_sword',
    'mapperbase:steel_pickaxe',
    'mapperbase:steel_axe',
    'mapperbase:steel_shovel',
    'mapperbase:steel_hoe',

    //Silent's Mechanisms
    'silents_mechanisms:steel_ingot',
    'silents_mechanisms:steel_nugget',
    'silents_mechanisms:steel_dust',

    //Immersive Engineering
    'immersiveengineering:ingot_steel',
    'immersiveengineering:nugget_steel',
    'immersiveengineering:sword_steel',
    'immersiveengineering:pickaxe_steel',
    'immersiveengineering:shovel_steel',
    'immersiveengineering:axe_steel',
    'immersiveengineering:hoe_steel',

    //Mekanism Tools
    'mekanismtools:steel_helmet',
    'mekanismtools:steel_chestplate',
    'mekanismtools:steel_leggings',
    'mekanismtools:steel_boots'
  ]
  outputRemove.forEach(function (remove) {
    event.remove({output: remove})
  })
})
