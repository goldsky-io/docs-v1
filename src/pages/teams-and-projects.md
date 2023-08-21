---
title: Teams and Projects
description: Projects and Teams are features that help you collaborate with your peers on building real-time data pipelines.
---

{% callout type="note" title="Beta" %}
The Projects and Teams features are in beta and free to use during this time. Let us know your feedback at @goldskyio on Twitter.
{% /callout %}

Projects and Teams are features that help you collaborate with your peers on building real-time data pipelines. When you log into https://app.goldsky.com, you’ll see a list of the projects you belong to in the drop-down menu on the upper left. Click this menu to switch your active project, or to create and edit projects.

Each project consists of a group of deployed subgraphs (and soon, other types of indexed data sources) as well as a list of team members who have access to that project.

To manage the team members for a given project, make sure you’ve selected your active project, then navigate to the [Settings](https://app.goldsky.com/dashboard/settings) menu. You can add team members by clicking `Invite User` and entering their email address (note that for now, the invitee needs to have a Goldsky account).

You can also remove team members by clicking the three dots next to their name and clicking “Remove Team Member”. Finally, you can remove yourself from a project by clicking the three dots next to your account under “Personal” and clicking “Leave Project”. NOTE: leaving a project is only available if you're not the only member of the project and it's not your only project.

## Screenshots

Setting an active project, or creating and editing existing projects:

![A screenshot of a dropdown menu that shows two available project names. Below that, there is a link to create a new project.](/images/docs/teams-and-projects/project-dropdown.png)

Leaving and managing a project’s team members:

![A screenshot of a settings section called Personal which displays a table with an email address, a role and an opened actions menu with a Leave Project link.](/images/docs/teams-and-projects/settings.png)

## Using the Command Line to Manage Teams and Projects

Project and team management is also supported through the command line interface - you can find a description of all project and team-related commands at [docs.goldsky.com/references/cli](/references/cli#project).

- `goldsky login` Login using the API key that you generated in Settings at https://app.goldsky.com for the given project.
- `goldsky project list` lists all projects you’re a member of
- `goldsky project create --name "<projectName>"` creates a new project. Note: this will not log you into that project: you need to go to https://app.goldsky.com/dashboard/settings and generate the API key for that project, then use `goldsky login` with that key.
- `goldsky project update --name "<newProjectName>"` will update the name of the currently active project.
- `goldsky project leave --projectId "<projectId>"` will remove yourself from the project specified. Note: you cannot leave the project you're currently authenticated with.
- `goldsky project users list` will list all the team members of the currently active project
- `goldsky project users invite --emails "<user1email>" "<user2email>" (passing as many emails as you want)` will add new users who already have Goldsky accounts to the active project. Note that if you enter email addresses of people who don’t already have Goldsky accounts, you’ll see an error message and none of the users will be invited, even if some people in the list already have Goldsky accounts. Passing `--yes` in the command will skip the confirmation prompt.
- `goldsky project users remove --email "<userToRemoveEmail>"` will remove a team member from the active project (you’ll see an error message if they’re not a team member of the project).
