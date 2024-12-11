// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "prostdev-tools" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand('prostdev-tools.dwcli', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Running with the DW CLI...');

		var path = require("path");
		var fs = require("fs");
		const filePath = vscode.window.activeTextEditor?.document.fileName;
		const fileName = path.parse(filePath).name;
		const workspaceFolders = vscode.workspace.workspaceFolders;
		const terminalName = "DW CLI";
		const t = vscode.window.terminals.filter((value) => value.name == terminalName);
		var terminal;
		var workingDir;
		var payloadPath;
		var payloadFile;
		var inputCommand = '';

		// input stuff
		if (workspaceFolders !== undefined && workspaceFolders.length !== 0) {
			workingDir = workspaceFolders[0].uri.fsPath
			if (workingDir !== undefined && workingDir !== '') {
				payloadPath = workingDir + "/src/test/resources/" + fileName + "/Playground/inputs/";
				payloadFile = fs.readdirSync(payloadPath)[0];
				if (payloadFile !== undefined && payloadFile !== '') {
					inputCommand = " -i " + path.parse(payloadFile).name + "=" + payloadPath + payloadFile;
				}
			}
		}

		// terminal stuff
		if (t.length == 0 || t === undefined) {
			terminal = vscode.window.createTerminal(terminalName,"");
		}
		else {
			terminal = t[0];
		}
		terminal.show();
		terminal.sendText("dw run -f " + filePath + inputCommand);

		vscode.window.showInformationMessage('DW CLI finished running!');
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
