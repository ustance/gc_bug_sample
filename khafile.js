let project = new Project('test');

project.addAssets('Assets/*/!(**.mp3|**.ogg)', {
	quality: 1,
	nameBaseDir: 'Assets',
	destination: '{dir}/{name}',
	name: '{dir}/{name}'
});
project.addAssets('Assets/*/*/!(**.mp3|**.ogg)', {
	quality: 1,
	nameBaseDir: 'Assets',
	destination: '{dir}/{name}',
	name: '{dir}/{name}'
});
project.addAssets('Assets/*/(**.mp3|**.ogg)', {
	quality: 0.9,
	nameBaseDir: 'Assets',
	destination: '{dir}/{name}',
	name: '{dir}/{name}'
});

project.addSources('src');
resolve(project);
