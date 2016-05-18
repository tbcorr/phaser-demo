var BlockShape = function(game, x, y, blocks, blockSize){

    Phaser.Sprite.call(this, game, x, y);

    this.blocks = blocks;
    this.blockSize = blockSize;

    this.isOverlapping = false;

    this.inputEnabled = true;
    this.input.enableDrag();
    this.input.enableSnap(this.blockSize, this.blockSize, true, true);

    this.setup();
};

BlockShape.prototype = Object.create(Phaser.Sprite.prototype);
BlockShape.prototype.constructor = BlockShape;

BlockShape.prototype.setup = function(){

    this.renderCollisionState(true);
};

BlockShape.prototype.renderCollisionState = function(){

    var graphics = this.game.add.graphics();

    if(this.isOverlapping){

        graphics.beginFill(0x00FF00);
    } else {

        graphics.beginFill(0xFF0000);
    }

    this.blocks.forEach(function(block){

        graphics.drawRect(block.x * this.blockSize, block.y * this.blockSize, this.blockSize, this.blockSize);
    }, this);

    this.loadTexture(graphics.generateTexture());
    graphics.destroy();
};