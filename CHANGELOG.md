# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.2.2] - 2023-11-18 -

### Added

### Changed

### Fixed

- Typo example folder on README


## [1.2.1] - 2023-11-18 - 94cfa72e2c63e812681c17e3eaa017291ebdab2e

### Added

- Github Actions for publish :)

### Changed

- Better parameters evaluation

### Fixed

- The 204 JSON parsing issue: Pull request [#8](https://github.com/lpg2709/clickup_api/pull/8) from [@aduyng](https://github.com/aduyng)
- Typo in the example directory name - Pull request [#9](https://github.com/lpg2709/clickup_api/pull/9) by [@alexander-mart](https://github.com/mordygparency)
- Parameters empty on url
- `view_id` is required on `get_chat_view_comments`
- `team_id` is required on `get_custom_roles`
- `task_id`is required on `create_checklist`
- Better handle of `task_ids` on `get_tasks_time_in_status`

## [1.2.0] - 2023-05-06 - fdf5262bb0cadf69376d07b03e56b18a6822bfb0

### Added

- Roles member to package
- Roles.get_custom_roles
- Teams.create_team
- Teams.update_team
- Teams.delete_team
- Teams.get_workspace_seats
- TimeTracking.get_time_entry_history
- Lists.remove_task_from_list
- Comments.create_chat_view_comments
- Comments.get_chat_view_comments
- TaskRelationships.add_dependency
- TaskRelationships.add_task_link
- TaskRelationships.delete_dependency
- TaskRelationships.delete_task_link
- TaskCheckList.create_checklist
- TaskCheckList.create_checklist_item
- TaskCheckList.delete_checklist
- TaskCheckList.delete_checklist_item
- TaskCheckList.edit_checklist
- TaskCheckList.edit_checklist_item
- Alias create_team_view to create_workspace_view
- Alias get_team_view to get_workspace_view

### Changed

- Rename exemple folder

### Fixed

- On get_time_entries_within_date_range params length is undefined, not an array:
Pull request [#6](https://github.com/lpg2709/clickup_api/pull/6) from [@mordygparency](https://github.com/mordygparency)

## [1.1.4] - 2022-11-12 - a560184edbcc7a0a267165f93139e0e6f1c25b41

### Added

- Contributors ref to package.json

### Changed

### Fixed


## [1.1.3] - 2022-11-12 - 21c0452af4ae7d0cffd96ccf0b4389e13b375f32

### Added

- Method add_task_to_list  for Lists - by [@InSandBox](https://github.com/InSandBox)

### Changed

### Fixed

- Status code return in request - by [@InSandBox](https://github.com/InSandBox)


## [1.1.2] - 2021-11-08 - 01b6d24e30a38a2bb238ac1edb4ea3f0c62948b5

### Added

### Changed

### Fixed

- Import genParams for TimeTracking - by [@jp4tey](https://github.com/jp4tey)

## [1.1.1] - 2021-05-20 - 3bd296dd052e0492aee54e7a38a454507caec93f

### Added

### Changed

### Fixed

- Export the User class for package - by [@csouza1995](https://github.com/csouza1995)

## [1.1.0] - 2021-05-20 - 7d418debf7a38d1ea7e7ee48383b594093c515c7

### Added

- Method get_filtered_team_tasks for Tasks
- Method get_tasks_time_in_status for Tasks
- Method get_bulk_tasks_time_in_status for Tasks
- Method get_filtered_team_tasks for Tasks
- Users as member of package
- Users.invite_user_to_workspace
- Users.edit_user_on_workspace
- Users.remove_user_from_workspace
- Users.get_user

### Changed

- Comments methods names to be equals of the API doc
- Get task use params

### Fixed


## [1.0.49] - 2021-04-19 - cc50a456a106b1bc20b4f61e9e021bbbeeb8fd66

### Added

### Changed

### Fixed

- Misspelling from "cretae_task" to "create_task" - by [@accountantKev](https://github.com/accountantKev)


## [1.0.48] - 2020-12-15 - 1258ad64d83c6909f071d8256b7389504c68c2da

### Added

- Some cool info into README

### Changed

### Fixed


## [1.0.47] - 2020-12-14 - fc438cfa26e7528ff53e1a5b528ddf3d4e815ab1

### Added

### Changed

### Fixed

- Import genParams for Tasks
- Licens name into package.json


## [1.0.46] - 2020-10-15 - dbcced637ceaa37cb978c5696aaa0e291bc3e601

### Added

- Common object to store the token
- Testes for all methods
- Attachments.post_task_attachment
- Checklists.create_checklist
- Checklists.edit_checklist
- Checklists.delete_checklist
- Checklists.create_checklist_item
- Checklists.edit_checklist_item
- Checklists.delete_checklist_item
- Comments.post_task_comment
- Comments.post_view_comment
- Comments.post_list_comment
- Comments.update_comment
- Comments.delete_comment
- Comments.get_task_comment
- Comments.get_view_comment
- Comments.get_list_comment
- CustomFields.set_custom_field_value
- CustomFields.remove_custom_field_value
- CustomFields.get_accessible_custom_fields
- Dependencies.add_dependency
- Dependencies.delete_dependency
- Dependencies.add_task_link
- Dependencies.delete_task_link
- Folders.create_folder
- Folders.update_folder
- Folders.delete_folder
- Folders.get_folders
- Folders.get_folder
- Goals.create_goal
- Goals.update_goal
- Goals.delete_goal
- Goals.get_goals
- Goals.get_goal
- Goals.create_key_result
- Goals.edit_key_result
- Goals.delete_key_result
- Guests.invite_guest_to_workspace
- Guests.edit_guest_on_workspace
- Guests.remove_guest_from_workspace
- Guests.get_guest
- Guests.add_guest_to_task
- Guests.remove_guest_from_task
- Guests.add_guest_to_list
- Guests.remove_guest_from_list
- Guests.add_guest_to_folder
- Guests.remove_guest_from_folder
- Lists.create_list
- Lists.create_folderless_list
- Lists.update_list
- Lists.delete_list
- Lists.get_lists
- Lists.get_folderless_lists
- Lists.get_list
- Members.get_task_members
- Members.get_list_members
- SharedHierarchy.get_shared_hierarchy
- Spaces.create_space
- Spaces.update_space
- Spaces.delete_space
- Spaces.get_spaces
- Spaces.get_space
- Tags.get_space_tag
- Tags.create_space_tag
- Tags.edit_space_tag
- Tags.delete_space_tag
- Tags.add_tag_to_task
- Tags.remove_tag_from_task
- Tasks.cretae_task
- Tasks.update_task
- Tasks.delete_task
- Tasks.get_task
- Tasks.get_tasks
- Tasks.get_team_tasks
- TaskTemplates.get_task_templates
- TaskTemplates.create_task_from_template
- Teams.get_teams
- TimeTracking.get_time_entries_within_date_range
- TimeTracking.get_singular_time_entry
- TimeTracking.get_running_time_entry
- TimeTracking.create_time_entry
- TimeTracking.remove_tags_from_time_entries
- TimeTracking.get_all_tags_from_time_entries
- TimeTracking.add_tags_from_time_entries
- TimeTracking.change_tag_names_from_time_entries
- TimeTracking.start_time_entry
- TimeTracking.stop_time_entry
- TimeTracking.delete_time_entry
- TimeTracking.update_time_entry
- Views.create_team_view
- Views.create_space_view
- Views.create_folder_view
- Views.create_list_view
- Views.update_view
- Views.delete_view
- Views.get_team_view
- Views.get_space_view
- Views.get_folder_view
- Views.get_list_view
- Views.get_view
- Views.get_view_tasks
- Webhooks.create_webhook
- Webhooks.update_webhook
- Webhooks.delete_webhook
- Webhooks.get_webhook

### Changed

### Fixed
