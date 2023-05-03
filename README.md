# [clickup_api](https://clickup.com/)

[![npm](https://img.shields.io/npm/v/clickup_api?style=flat-square)](https://www.npmjs.com/package/clickup_api)
![npm](https://img.shields.io/npm/dw/clickup_api?style=flat-square&)
![NPM](https://img.shields.io/npm/l/clickup_api?style=flat-square)
![GitHub last commit](https://img.shields.io/github/last-commit/lpg2709/clickup_api?style=flat-square)

This module is not official [ClickUp API](https://clickup.com/api).

The ```clickup_api``` is a wrap. Used to simplify the calls to the Clickup API.

## Table of contents

- [Issues](#issues)
- [Install](#install)
- [Quick Start](#quick-start)
- [Docs](#docs)
- [Examples](#examples)
- [Changes log](#changes-log)
- [Contributing](#contributing)
- [License](#license)

## Issues

Only support ```API Token```. The ```App token``` is not supported yet.

To report a issue: [Report](https://github.com/lpg2709/clickup_api/issues).

> Before reporting the problem, test the call on the [API](https://clickup.com/api) page, if it is on the Clickup API itself, report [here](https://feedback.clickup.com/).

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

To create a task:

```javascript
var data = {
    "name": "New Task Name",
    "content": "New Task Content",
    "status": "Open"
    };
var info = await Clickup.Tasks.create_task("list_id", data);

console.log(info);
```

## Docs

### ClickUp API

The module use all specification of the ```ClickUp API```, pleas visit [ClickUp API](https://clickup.com/api).

## Examples

To view the examples, you can access the [github](https://github.com/lpg2709/clickup_api) page, in folder ```exemples``` you will find exemples for all member.

- [Attachments](https://github.com/lpg2709/clickup_api/tree/master/exemples/Attachments)
- [Checklists](https://github.com/lpg2709/clickup_api/tree/master/exemples/Checklists)
- [Comments](https://github.com/lpg2709/clickup_api/tree/master/exemples/Comments)
- [CustomFields](https://github.com/lpg2709/clickup_api/tree/master/exemples/CustomFields)
- [Dependencies](https://github.com/lpg2709/clickup_api/tree/master/exemples/Dependencies)
- [Folders](https://github.com/lpg2709/clickup_api/tree/master/exemples/Folders)
- [Lists](https://github.com/lpg2709/clickup_api/tree/master/exemples/Lists)
- [Members](https://github.com/lpg2709/clickup_api/tree/master/exemples/Members)
- [SharedHierarchy](https://github.com/lpg2709/clickup_api/tree/master/exemples/SharedHierarchy)
- [Spaces](https://github.com/lpg2709/clickup_api/tree/master/exemples/Spaces)
- [Tags](https://github.com/lpg2709/clickup_api/tree/master/exemples/Tags)
- [Tasks](https://github.com/lpg2709/clickup_api/tree/master/exemples/Tasks)
- [TaskTemplates](https://github.com/lpg2709/clickup_api/tree/master/exemples/TaskTemplates)
- [Teams](https://github.com/lpg2709/clickup_api/tree/master/exemples/Teams)
- [TimeTracking](https://github.com/lpg2709/clickup_api/tree/master/exemples/TimeTracking)
- [Users](https://github.com/lpg2709/clickup_api/tree/master/exemples/Users)
- [Views](https://github.com/lpg2709/clickup_api/tree/master/exemples/Views)
- [Webhooks](https://github.com/lpg2709/clickup_api/tree/master/exemples/Webhooks)

## Changes log

All changes by version can be see on [CHANGELOG.md](https://github.com/lpg2709/clickup_api/blob/master/CHANGELOG) on [github](https://github.com/lpg2709/clickup_api)

## Contributing

See [CONTRIBUTING.md](https://github.com/lpg2709/clickup_api/blob/master/CONTRIBUTING.md) to instruction for help the package.

## License

[MIT](LICENSE)
