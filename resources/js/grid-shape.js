var GridShape = function(game, x, y, tileSize, rows, columns){

    Phaser.Sprite.call(this, game, x, y);

    this.tileSize = tileSize;
    this.rows = rows;
    this.columns = columns;

    this.setup();
};

GridShape.prototype = Object.create(Phaser.Sprite.prototype);
GridShape.prototype.constructor = GridShape;

GridShape.prototype.setup = function(){

    var graphics = this.game.add.graphics();

    graphics.lineStyle(1, 0xFFFFFF);

    for(var i = 0; i < this.rows + 1; i++) {

        for(var j = 0; j < this.columns + 1; j++) {

            var x0 = Math.max(j * this.tileSize - 1, 0);

            var x1 = Math.max(j * this.tileSize - 1, 0);
            var y1 = Math.max(this.tileSize * this.rows - 1, 0);

            graphics.moveTo(x0, 0);
            graphics.lineTo(x1, y1);
        }

        var y0 = Math.max(i * this.tileSize - 1, 0);

        var x1 = Math.max(this.tileSize * this.columns - 1, 0);
        var y1 = Math.max(i * this.tileSize - 1, 0);

        graphics.moveTo(0, y0);
        graphics.lineTo(x1, y1);
    }

    this.loadTexture(graphics.generateTexture());

    graphics.destroy();
};

GridShape.prototype.center = function(){

    this.x = this.game.world.centerX - Math.floor(this.width / 2);
    this.y = this.game.world.centerY - Math.floor(this.height / 2);
};