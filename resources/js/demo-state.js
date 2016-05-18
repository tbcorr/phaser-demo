var DemoState = function(game){

    this.blockShapeOne = null;
    this.blockShapeTwo = null;
    this.blockShapeThree = null;
    this.blockShapeFour = null;
};

DemoState.prototype = Object.create(Phaser.State.prototype);
DemoState.prototype.constructor = DemoState;

DemoState.prototype.create = function(){

    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    this.grid = new GridShape(this.game, 100, 100, 50, 10, 10);

    var blocks = [
        {
            x: 0,
            y: 0
        },
        {
            x: 0,
            y: 1
        },
        {
            x: 1,
            y: 1
        }
    ];
    this.blockShapeOne = new BlockShape(this.game, 50, 50, blocks, 50);

    blocks = [
        {
            x: 0,
            y: 0
        },
        {
            x: 1,
            y: 0
        },
        {
            x: 0,
            y: 1
        },
        {
            x: 1,
            y: 1
        }
    ];
    this.blockShapeTwo = new BlockShape(this.game, 400, 50, blocks, 50);

    blocks = [
        {
            x: 0,
            y: 0
        },
        {
            x: 1,
            y: 0
        },
        {
            x: 2,
            y: 0
        },
        {
            x: 0,
            y: 1
        },
        {
            x: 1,
            y: 1
        },
        {
            x: 2,
            y: 1
        }
    ];
    this.blockShapeThree = new BlockShape(this.game, 50, 400, blocks, 50);

    blocks = [
        {
            x: 0,
            y: 0
        },
        {
            x: 0,
            y: 1
        },
        {
            x: 1,
            y: 1
        },
        {
            x: 2,
            y: 1
        },
        {
            x: 3,
            y: 1
        },
        {
            x: 3,
            y: 2
        }
    ];
    this.blockShapeFour = new BlockShape(this.game, 200, 200, blocks, 50);

    this.grid.addChild(this.blockShapeOne);
    this.grid.addChild(this.blockShapeTwo);
    this.grid.addChild(this.blockShapeThree);
    this.grid.addChild(this.blockShapeFour);

    this.game.add.existing(this.grid);

    this.grid.center();
};
