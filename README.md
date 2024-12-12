# ProstDev Tools Extension

Experimental tools and utilities to ease up your MuleSoft/DataWeave programming!

## Features

### Run your DataWeave scripts with the DataWeave CLI

Using the command palette: `ProstDev: Run with the DataWeave CLI`

![Command Palette: ProstDev: Run with the DataWeave CLI](/img/dwcli-command.png)

From the editor

![Editor Bar: Run with the DataWeave CLI button](/img/dwcli-button.png)

When no input is detected, only the active script will run. 

Any input file has to be located under `${workingDir}/src/test/resources/${fileName}/Playground/inputs/` to be taken by the extension. Only one input file is allowed in this version. Here's an example:

![Example with an input payload](/img/example-input.png)

The use of the [DataWeave 2.0 extension for VS Code](https://marketplace.visualstudio.com/items?itemName=MuleSoftInc.dataweave) is not mandatory, but highly recommended for better use.

## Requirements

- [DataWeave 2.0 extension for VS Code](https://marketplace.visualstudio.com/items?itemName=MuleSoftInc.dataweave) *not required but highly recommended
- [DataWeave CLI](https://github.com/mulesoft-labs/data-weave-cli)

## Extension Settings

TBD - will add settings to set up the input payload. Right now the extension will look for the input at `${workingDir}/src/test/resources/${fileName}/Playground/inputs/` (the directory used by the DataWeave extension)
