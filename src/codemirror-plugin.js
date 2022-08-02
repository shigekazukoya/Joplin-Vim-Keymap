function plugin(CodeMirror) {
    CodeMirror.Vim.mapCommand(';', 'ex', 'normal')
    CodeMirror.Vim.mapCommand(':', 'motion', 'repeatLastCharacterSearch',{ forward: true })
    CodeMirror.Vim.mapCommand('H', 'motion', 'moveToFirstNonWhiteSpaceCharacter')
    CodeMirror.Vim.mapCommand('L', 'motion', 'moveToEol')
    CodeMirror.Vim.mapCommand('gj', 'motion', 'moveByLines', {forward: true, linewise: true})
    CodeMirror.Vim.mapCommand('gk', 'motion', 'moveByLines', {forward: false, linewise: true})
    CodeMirror.Vim.mapCommand('j', 'motion', 'moveByDisplayLines',{forward: true})
    CodeMirror.Vim.mapCommand('k', 'motion', 'moveByDisplayLines',{forward: false})
    CodeMirror.Vim.map('J', '10j', 'normal')
    CodeMirror.Vim.map('K', '10k', 'normal')
    CodeMirror.Vim.map('jj', '<Esc>', 'insert')
    CodeMirror.Vim.map('<Space>,', '<<', 'visual')
    CodeMirror.Vim.map('<Space>.', '>>', 'visual')
};

module.exports = {
	default: function(CodeMirror) {
		return {
			plugin: plugin,
			codeMirrorResources: [''],
			codeMirrorOptions: {},
			assets: function() {
				return [
				];
			},
		}
	},
}