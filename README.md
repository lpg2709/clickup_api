# [clickup_api](https://clickup.com/)

This module is not official [ClickUp API](https://clickup.com/api).

The ```clickup_api``` is a wrap. Used to simplify the calls to the Clickup API.

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
var info = await Clickup.Tasks.cretae_task("task_id", data);

console.log(info);
```

## Docs

### ClickUp API

The module use all specification of the ```ClickUp API```, pleas visit [ClickUp API](https://clickup.com/api).

## Examples

To view the examples, you can access the [github](https://github.com/lpg2709/clickup_api) page, in folder ```testes``` you will find exemples for all member.

- [Attachments](https://github.com/lpg2709/clickup_api/tree/master/testes/Attachments)
- [Checklists](https://github.com/lpg2709/clickup_api/tree/master/testes/Checklists)
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
- [TimeTracking](https://github.com/lpg2709/clickup_api/tree/master/testes/TimeTracking)
- [Views](https://github.com/lpg2709/clickup_api/tree/master/testes/Views)
- [Webhooks](https://github.com/lpg2709/clickup_api/tree/master/testes/Webhooks)

## Why use HTTPS calls on EACH model ?

To be easily interpreted by new ones in node and if you need to "customize" a call, it is easy to adapt it.

Maybe in the future I can make a version of the module that uses the calls in a more intelligent way and reusing codes.

## License

[MIT](LICENSE)
