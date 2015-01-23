var boot = require('./lib/boot');
var express = require('express');

boot.newApp()
	.withAccessLog()
	.withControllers(require('./app/controllers'))
	.withViewEngine()
	.withServer(3000)
	.start(express());