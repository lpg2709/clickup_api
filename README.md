# [clickup_api](https://clickup.com/)

No oficial module for [ClickUp API](https://clickup.com/api).

The ```clickup_api``` is a wrap. Used to simplify the calls to the Clickup API.

## Issues

Only support ```API Token```. The ```App token``` is not supported yet.

To report a issue: [Report](https://github.com/lpg2709/clickup_api/issues)

## Install

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
npm install clickup_api
```

## Quick Start

First thing to do is import the module to the scritp.

```javascript
const clickup_api = require("clickup_api");
```

Initialize a new object. This object go use the ```API Token``` to do all calls.

```javascript
const Clickup = new clickup_api("access_token");
```

After that you can call all method of the Clickup class.

## Docs

### ClickUp API

The module use all specification of the ```ClickUp API```, pleas visit [ClickUp API](https://clickup.com/api).

### This module

To a detail documentation for each member of the module:

- [Spaces](./docs/Spaces.md)
- [Tags](./docs/Tags.md)
- [Tasks](./docs/Tasks.md)

## Examples

To view the examples, you can access the [github](https://github.com/lpg2709/clickup_api) page, in folder ```testes``` you will find exemples for all member.

- [Attachments](https://github.com/lpg2709/clickup_api/tree/master/testes/Attachments)
- [Comments](https://github.com/lpg2709/clickup_api/tree/master/testes/Comments)
- [CustomFields](https://github.com/lpg2709/clickup_api/tree/master/testes/CustomFields)
- [Dependencies](https://github.com/lpg2709/clickup_api/tree/master/testes/Dependencies)
- [Folders](https://github.com/lpg2709/clickup_api/tree/master/testes/Folders)
- [Lists](https://github.com/lpg2709/clickup_api/tree/master/testes/Lists)
- [Members](https://github.com/lpg2709/clickup_api/tree/master/testes/Members)
- [SharedHierarchy](https://github.com/lpg2709/clickup_api/tree/master/testes/SharedHierarchy)
- [Spaces](https://github.com/lpg2709/clickup_api/tree/master/testes/Spaces)
- [Tags](https://github.com/lpg2709/clickup_api/tree/master/testes/Tags)
- [Tasks](https://github.com/lpg2709/clickup_api/tree/master/testes/Tasks)
- [TaskTemplates](https://github.com/lpg2709/clickup_api/tree/master/testes/TaskTemplates)
- [Teams](https://github.com/lpg2709/clickup_api/tree/master/testes/Teams)
- [Webhooks](https://github.com/lpg2709/clickup_api/tree/master/testes/Webhooks)

## License

[MIT](LICENSE)
