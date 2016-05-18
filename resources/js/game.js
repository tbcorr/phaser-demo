"use strict";

var vWidth = 1024;
var vHeight = 768;

var game = new Phaser.Game(vWidth, vHeight, Phaser.AUTO, 'canvas-wrap');

game.state.add('demo', DemoState);
game.state.start('demo');
