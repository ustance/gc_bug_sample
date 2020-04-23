let fs = require('fs');
let path = require('path');
let project = new Project('test');
project.addDefine('HXCPP_API_LEVEL=332');
project.targetOptions = {"html5":{},"flash":{},"android":{},"ios":{}};
project.setDebugDir('build/windows');
await project.addProject('build/windows-build');
await project.addProject('c:/Kode/resources/app/kodeExtensions/kha/Kha');
resolve(project);
