**Edit a file, create a new file, and clone from Bitbucket in under 2 minutes**

When you're done, you can delete the content in this README and update the file with details for others getting started with your repository.

*We recommend that you open this README in another tab as you perform the tasks below. You can [watch our video](https://youtu.be/0ocf7u76WSo) for a full demo of all the steps in this tutorial. Open the video in a new tab to avoid leaving Bitbucket.*

---

## Edit a file

You’ll start by editing this README file to learn how to edit a file in Bitbucket.

1. Click **Source** on the left side.
2. Click the README.md link from the list of files.
3. Click the **Edit** button.
4. Delete the following text: *Delete this line to make a change to the README from Bitbucket.*
5. After making your change, click **Commit** and then **Commit** again in the dialog. The commit page will open and you’ll see the change you just made.
6. Go back to the **Source** page.

---

## Create a file

Next, you’ll add a new file to this repository.

1. Click the **New file** button at the top of the **Source** page.
2. Give the file a filename of **contributors.txt**.
3. Enter your name in the empty file space.
4. Click **Commit** and then **Commit** again in the dialog.
5. Go back to the **Source** page.

Before you move on, go ahead and explore the repository. You've already seen the **Source** page, but check out the **Commits**, **Branches**, and **Settings** pages.

---

## Clone a repository

Use these steps to clone from SourceTree, our client for using the repository command-line free. Cloning allows you to work on your files locally. If you don't yet have SourceTree, [download and install first](https://www.sourcetreeapp.com/). If you prefer to clone from the command line, see [Clone a repository](https://confluence.atlassian.com/x/4whODQ).

1. You’ll see the clone button under the **Source** heading. Click that button.
2. Now click **Check out in SourceTree**. You may need to create a SourceTree account or log in.
3. When you see the **Clone New** dialog in SourceTree, update the destination path and name if you’d like to and then click **Clone**.
4. Open the directory you just created to see your repository’s files.

Now that you're more familiar with your Bitbucket repository, go ahead and add a new file locally. You can [push your change back to Bitbucket with SourceTree](https://confluence.atlassian.com/x/iqyBMg), or you can [add, commit,](https://confluence.atlassian.com/x/8QhODQ) and [push from the command line](https://confluence.atlassian.com/x/NQ0zDQ).

## Run server locally
## setup environment (copy .env_example file)
```
PORT = 123

DB_DATABASE = advocate
DB_USERNAME = root
DB_PASSWORD = Admin@123
DB_HOST = 127.0.0.1

GOOGLE_APPLICATION_CREDENTIALS = "path/file" (json data logging google cloud)
```

##Install sequelize-cli
1. install package:
``
npm install --save-dev sequelize-cli
``
2. migrate DB:
``
sequelize db:migrate
``

3. Seed data:
``
sequelize db:seed:all
``

[👍👍👍 Document](https://www.npmjs.com/package/sequelize-cli)

##Build API document
```
1. npm install apidoc -g
2. Build source apidoc: npm run apidoc
3. Run _domain_/api-docs (Ex: http://127.0.0.1:3000/api-docs)
```
[👍👍👍 Document](https://apidocjs.com/)

## NPM scripts:

- npm run dev : Start local server to dev
- npm run deploy : Run deployment to remote servers
- npm run migrate : Run migrate DB
- npm run seed : Run seed data
- npm run apidoc : Build apidoc
- npm run ssh:stag : [STAGING] Login to server via ssh
- npm run ssh-project:stag : [STAGING] Login to server then cd to project root via ssh
- npm run install:stag : [STAGING] Run npm install on remote server
- npm run migrations:stag -- script_name : [STAGING] Run database migration on remote server
- npm run start:stag : [STAGING] Start all pm2 process (if not started yet) on remote server
- npm run reload:stag : [STAGING] Reload all pm2 process on remote server
- npm run reload-api:stag : [STAGING] Reload API pm2 process on remote server
- npm run reload-admin:stag : [STAGING] Reload ADMIN pm2 process on remote server
- npm run restart:stag : [STAGING] Restart all pm2 process on remote server
- npm run restart-api:stag : [STAGING] Restart API pm2 process on remote server
- npm run restart-admin:stag : [STAGING] Restart ADMIN pm2 process on remote server
- npm run log:stag : [STAGING] View log all pm2 process on remote server
- npm run log-api:stag : [STAGING] View log API pm2 process on remote server
- npm run log-admin:stag : [STAGING] View log ADMIN pm2 process on remote server
