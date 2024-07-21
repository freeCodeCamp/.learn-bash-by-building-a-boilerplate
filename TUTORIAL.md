# Learn Bash by Building a Boilerplate

> Welcome to the Introduction to Bash lessons. I know it's scary, but you can do this!

## 5. Restart Terminal

### 5.1

**The first thing you need to do is start the terminal.** Do that by clicking the "hamburger" menu at the top left of the screen, going to the "terminal" section, and clicking "new terminal". Once you open a new one, type `echo hello terminal` into the terminal and press enter.

You still can't find the hamburger menu? gitpod.io editor has it at the top left of the screen.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, try typing `exit` into the terminal and redoing the instructions

## 10. Print Working Directory

### 10.1

What you see in the terminal below is a folder (or directory) on this machine. Type `pwd` into the terminal and press enter to see the path of the folder. `pwd` stands for "print working directory".

#### HINTS

- Type `pwd` into the terminal and press enter
- Make sure you are in the `project` folder when you enter the command
- Enter `cd /workspace/project` to get to the `project` folder if you aren't there

## 20. List

### 20.1

The output tells you where the folder you are in is located. You are in the `project` folder, which is in the `workspace` folder. Type `ls` into the terminal to see what's in this folder. `ls` stands for "list".

#### HINTS

- Type `ls` into the terminal and press enter
- Make sure you are in the `project` folder when you enter the command
- Enter `cd /workspace/project` to get to the `project` folder if you aren't there

## 30. Change Directory

### 30.1

The output is showing everything in this folder. There's one folder in here. You can use `cd <folder_name>` to go into a folder. `cd` stands for "change directory". Change to the `freeCodeCamp` directory.

#### HINTS

- Capitalization matters
- Type `cd freeCodeCamp` into the terminal and press enter
- Make sure you start in the `project` folder first
- Enter `cd /workspace/project` to get to the `project` folder if you aren't there

## 40. Print Working Directory

### 40.1

You are in the `freecodecamp` folder now. You may have noticed that the prompt changed to include it. Print the working directory of the `freeCodeCamp` folder to see the full path of where you are.

#### HINTS

- Use the "print working directory" command
- Type `pwd` into the terminal and press enter
- Make sure you are in the `freeCodeCamp` folder first
- Enter `cd /workspace/project/freeCodeCamp` to get to the `freeCodeCamp` folder if you aren't there

## 50. List

### 50.1

You can see the path of the `freeCodeCamp` folder. It's in the `project` folder you were just in. List the contents of the `freeCodeCamp` folder to see what's here.

#### HINTS

- Use the "list" command
- Try typing `ls` into the terminal
- Make sure you are in the `freeCodeCamp` folder first
- Enter `cd /workspace/project/freeCodeCamp` to get to the `freeCodeCamp` folder if you aren't there

## 60. Change Directory

### 60.1

There's several folders and files here. The folders are blue or green and the files include their extension. Next, change to that `test` directory.

#### HINTS

- Use the "change directory" command
- Here's an example: `cd folder-name`
- Try entering `cd test`
- Make sure you enter the command from the `freeCodeCamp` folder
- Enter `cd /workspace/project/freeCodeCamp` to get to the `freeCodeCamp` folder if you aren't there

## 70. Print Working Directory

### 70.1

You can see you are in the `test` folder now. It shows `test` in the prompt. Print the full path of this directory. Remember that "folder" and "directory" are the same thing.

#### HINTS

- Use the "print working directory" command
- Type `pwd` into the terminal
- Make sure you are in the `test` folder first
- Enter `cd /workspace/project/freeCodeCamp/test` to get to the `test` folder if you aren't there

## 80. List

### 80.1

That's the path to the `test` folder, it's in the `freeCodeCamp` folder. **List** the contents of this folder.

#### HINTS

- Use the "list" command
- Type `ls` into the terminal
- Make sure you are in the `test` folder first
- Enter `cd /workspace/project/freeCodeCamp/test` to get to the `test` folder if you aren't there

## 90. Change Directory

### 90.1

These are all files. There's no more folders to go into here. You can use `cd ..` to go back a folder level. The two dots will take you back one level. Go back to the `freeCodeCamp` folder.

#### HINTS

- Use the "change directory" command
- Type `cd ..` into the terminal end press enter
- Type the command from the `test` folder
- Enter `cd /workspace/project/freeCodeCamp/test` to get to the `test` folder if you aren't there

## 100. List

### 100.1

`test` got removed from the prompt since you left that folder and you're back in the `freeCodeCamp` folder. List the contents of what's here to remind yourself.

#### HINTS

- Use the "list" command
- Type `ls` into the terminal
- Make sure you are in the `freeCodeCamp` folder first
- Enter `cd /workspace/project/freeCodeCamp` to get to the `freeCodeCamp` folder if you aren't there

## 110. More

### 110.1

There's the `test` folder you were just in. You can see what's in a file with `more <filename>`. Use it to view what's in the `package.json` file.

#### HINTS

- Type `more package.json` into the terminal
- Press enter until you have seen the whole file
- Make sure you are in the `freeCodeCamp` folder first
- Enter `cd /workspace/project/freeCodeCamp` to get to the `freeCodeCamp` folder if you aren't there

## 120. Clear

### 120.1

It looks like a JSON object. You can empty the terminal with `clear`. The terminal looks a little cluttered, why don't you clear it.

#### HINTS

- Commands are case sensitive
- Enter `clear` into the terminal

## 130. List

### 130.1

Now you have a fresh screen :smile: List what's in here again.

#### HINTS

- Use the "list" command
- Enter `ls` into the terminal
- Make sure you are in the `freeCodeCamp` folder first
- Enter `cd /workspace/project/freeCodeCamp` to get to the `freeCodeCamp` folder if you aren't there

## 140. Change Directory

### 140.1

You checked out the `test` folder and the `package.json` file. What next? Why don't you go into that `node_modules` directory.

#### HINTS

- Use the "change directory" command
- Here's an example: `cd <folder_name>`
- Enter `cd node_modules` into the terminal
- Enter `cd /workspace/project/freeCodeCamp` to get back to the `freeCodeCamp` folder and try again

## 150. List

### 150.1

Now the prompt includes `node_modules` since that's where you are. List what's in the folder.

#### HINTS

- Use the "list" command
- Enter `ls` into the terminal
- Make sure you are in the `node_modules` folder first
- Enter `cd /workspace/project/freeCodeCamp/node_modules` to get to the `node_modules` folder if you aren't there

## 160. Long List Format

### 160.1

That's a lot of folders. You can add a **flag** to a command to use it different ways like this: `ls <flag>`. List the contents of the `node_modules` folder in "long list format". Do that by adding the `-l` flag to the "list" command.

#### HINTS

- Use the "list" command
- Add the `-l` flag to the command
- That's a lowercase letter `l`, not the number `1`
- Enter `ls -l` into the terminal
- Make sure you are in the `node_modules` folder first
- Enter `cd /workspace/project/freeCodeCamp/node_modules` to get to the `node_modules` folder if you aren't there

## 170. Change Directory

### 170.1

It is showing more details about each item in here and it's a little easier to read. One of the folders is named `has`, why don't you change into it.

#### HINTS

- Use the "change directory" command
- Enter `cd has` into the terminal
- Enter the command from the `node_modules` folder
- Enter `cd /workspace/project/freeCodeCamp/node_modules` to get to the `node_modules` folder if you aren't there

## 180. List

### 180.1

You are now in the `has` folder. List its contents.

#### HINTS

- Use the "list" command
- Enter `ls` into the terminal
- Enter the command from the `has` folder first
- Enter `cd /workspace/project/freeCodeCamp/node_modules/has` to get to the `has` folder if you aren't there

## 181. More

### 181.1

There's a few files and folders here. Can you tell the difference? Take a look at **more** of that `README.md` file.

#### HINTS

- Commands and filenames are case sensitive
- Use the "more" command
- Enter `more README.md` into the terminal
- Press "enter" until you have seen the whole file
- Make sure you are in the `has` folder first
- Enter `cd /workspace/project/freeCodeCamp/node_modules/has` to get to the `has` folder if you aren't there

## 182. List

### 182.1

Nothing noteworthy in there. You can't see what's in the here anymore, list the contents again.

#### HINTS

- Use the "list" command
- Enter `ls` into the terminal
- Make sure you are in the `has` folder first
- Enter `cd /workspace/project/freeCodeCamp/node_modules/has` to get to the `has` folder if you aren't there

## 183. More

### 183.1

That one file doesn't appear to have an extension. Strange. Take a look at **more** of the that "license" file that doesn't show an extension.

#### HINTS

- Use the "more" command
- Enter `more LICENSE-MIT` into the terminal
- Press "enter" until you have seen the whole file
- Make sure you are in the `has` folder first
- Enter `cd /workspace/project/freeCodeCamp/node_modules/has` to get to the `has` folder if you aren't there

## 184. Clear

### 184.1

Pretend you read all that. It looks a little messy in here again so why don't you clear the terminal.

#### HINTS

- Use the "clear" command
- Enter `clear` into the terminal

## 185. List

### 185.1

Better. Remind yourself what's in here with the list command.

#### HINTS

- Use the "list" command
- Enter `ls` into the terminal
- Make sure you are in the `has` folder first
- Enter `cd /workspace/project/freeCodeCamp/node_modules/has` to get to the `has` folder if you aren't there

## 190. Change Directory

### 190.1

Go into that `src` directory to see what you can find in there.

#### HINTS

- Use the "change directory" command
- Enter `cd src` into the terminal
- Make sure you are in the `has` folder first
- Enter `cd /workspace/project/freeCodeCamp/node_modules/has` to get to the `has` folder if you aren't there

## 200. Print Working Directory

### 200.1

View the full path of this folder.

#### HINTS

- Use the "print working directory" command
- Enter `pwd` into the terminal
- Make sure you are in the `src` folder
- Enter `cd /workspace/project/freeCodeCamp/node_modules/has/src` to get to the `src` folder if you aren't there

## 210. List

### 210.1

Getting deeper still. You can see that each new folder has a `/` in front of it. Take a look at what's in this folder.

#### HINTS

- Use the "list" command
- Enter `ls` into the terminal
- Make sure you are in the `src` folder first
- Enter `cd /workspace/project/freeCodeCamp/node_modules/has/src` to get to the `src` folder if you aren't there

## 220. More

### 220.1

Only one file here. Show me what's in it with `more`.

#### HINTS

- Use the `more` command
- Here's and example: `more filename`
- Enter `more index.js` into the terminal
- Press enter until you've seen all the content
- Make sure you are in the `src` folder first
- Enter `cd /workspace/project/freeCodeCamp/node_modules/has/src` to get to the `src` folder if you aren't there

## 230. Change Directory

### 230.1

It's some JavaScript :smile: I think you've fooled around enough. Why don't you navigate out of here. Change back to the `has` directory.

#### HINTS

- Use the "change directory" command
- Add `..` after `cd` to go back a folder
- Type `cd ..` into the terminal
- Make sure you are in the `src` folder first
- Enter `cd /workspace/project/freeCodeCamp/node_modules/has/src` to get to the `src` folder if you aren't there

## 240. Change Directory

### 240.1

You're getting pretty good. Change back to the `node_modules` directory.

#### HINTS

- Use the same `cd` command as the last lesson
- You can press the up arrow to cycle through previous commands
- Type `cd ..` into the terminal
- Make sure you are in the `has` folder first
- Enter `cd /workspace/project/freeCodeCamp/node_modules/has` to get to the `has` folder if you aren't there

## 250. Change Directory

### 250.1

You can go back two folders with `cd ../..`. Each set of dots represents another folder level. Go back to the `project` directory from the `node_modules` directory.

#### HINTS

- Be sure to go back two folders with one command
- Type `cd ../..` into the terminal from the `node_modules` folder
- Make sure you go from `node_modules` to `project`
- Enter `cd /workspace/project/freeCodeCamp/node_modules` to get to the `node_modules` folder if you aren't there

## 260. List

### 260.1

You are back in the `project` folder where you started. List what's in here again.

#### HINTS

- Use the "list" command
- Enter `ls` into the terminal
- Make sure you are in the `project` folder first
- Enter `cd /workspace/project` to get to the `project` folder if you aren't there

## 270. Clear

### 270.1

That's right. Why don't you get a fresh start by clearing the terminal.

#### HINTS

- Use the "clear" command
- Enter `clear` into the terminal

## 280. Make Directory

### 280.1

You will be making a website boilerplate. You can make a new folder with `mkdir <folder_name>`. `mkdir` stands for "make directory". Make a `website` directory in this `project` folder. Remember that "directory" and "folder" mean the same thing.

#### HINTS

- Enter `mkdir website` into the terminal
- Make sure to make it in the `project` folder
- Don't try to create it with a different method
- Make sure you are in the `project` folder first
- Enter `cd /workspace/project` to get to the `project` folder if you aren't there

## 285. List

### 285.1

List what's here to make sure it got created.

#### HINTS

- Use the "list" command
- Enter `ls` into the terminal
- Make sure you are in the `project` folder first
- Enter `cd /workspace/project` to get to the `project` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 290. Change Directory

### 290.1

It worked. The website files will be in the new directory. Change to the `website` directory so you can start creating them.

#### HINTS

- Use the "change directory" command
- Enter `cd website` into the terminal
- Enter the command from the `project` folder
- Enter `cd /workspace/project` to get to the `project` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 300. List

### 300.1

List the contents of the `website` folder.

#### HINTS

- Use the "list" command
- Enter `ls` into the terminal
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 310. Echo

### 310.1

It's brand new, there's nothing in it yet. The `echo` command lets you print anything to the terminal. You used it in the first lesson. Just type what you want to print after it. Use it to print `hello website` to the terminal.

#### HINTS

- Here's an example: `echo <text_here>`
- Capitalization matters
- Enter `echo hello website` into the terminal
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 320. Touch

### 320.1

Websites usually have an `index.html` file. You can use `touch <filename>` to create a new file. Create `index.html` in the `website` folder.

#### HINTS

- Be sure to include the filename and extension
- Don't try to create the file with another method
- Capitalization matters
- Enter `touch index.html` into the terminal
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 330. Touch

### 330.1

They usually have a CSS file as well. Create `styles.css` in the `website` folder using the same method.

#### HINTS

- Use the "touch" command
- Here's an example: `touch <filename>`
- Don't try to create the file with another method
- Enter `touch styles.css` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 340. List

### 340.1

List the contents of the `website` folder to make sure they got created.

#### HINTS

- Use the `list` command
- Enter `ls` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 350. Touch

### 350.1

There they are. Next is a JavaScript file. Create `index.js` in the `website` folder with the method you have been using.

#### HINTS

- Use the "touch" command
- Here's an example: `touch <filename>`
- Don't try to create the file with another method
- Enter `touch index.js` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 360. Touch

### 360.1

You might turn this into a git repository. Create `.gitignore` in the `website` folder with the same method.

#### HINTS

- Use the "touch" command
- Here's an example: `touch <filename>`
- Don't try to create the file with another method
- Enter `touch .gitignore` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 370. List

### 370.1

List the contents of the `website` folder to see your new files.

#### HINTS

- Use the `list` command
- Make sure you are in the `website` folder
- Enter `ls` in the terminal
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 380. Help

### 380.1

There's three files, but where's the `.gitignore` file? I think it's hidden. Most commands have a `--help` flag to show what the command can do. Display the "help" menu for the `ls` command. Here's an example: `command <flag>`

#### HINTS

- Use the `list` command with the "help" flag
- You previously used: `ls -l`
- Enter `ls --help` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 390. List All

### 390.1

Scroll through the menu to see the flags that go with `ls`. The flag you are looking for is `--all`, or `-a` for short. List **all** the contents of the `website` folder using the correct flag.

#### HINTS

- Use the `list` command with the "all" flag
- Here's an exmple: `command <flag>`
- Enter `ls -a` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 400. Change Directory

### 400.1

There's the hidden file. Do you see it? It didn't display before. It also includes `.` and `..`. You used `cd ..` to go back a folder earlier. Change to the `.` directory.

#### HINTS

- Use the "change directory" command
- Enter `cd .` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 410. Touch

### 410.1

You didn't go anywhere. The `.` takes you to the folder you are in, and `..` takes you back, or up, a folder. Websites need some images. Create `background.jpg` in the `website` folder.

#### HINTS

- Use the "touch" command
- Here's an example: `touch <filename>`
- Don't try to create the file with another method
- Enter `touch background.jpg` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 420. Touch

### 420.1

Next, add a header image. Create `header.png` in the `website` folder.

#### HINTS

- Use the "touch" command
- Here's an example: `touch <filename>`
- Don't try to create the file with another method
- Enter `touch header.png` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 430. Touch

### 430.1

Finally, create `footer.jpeg` in the `website` folder.

#### HINTS

- Use the "touch" command
- Here's an example: `touch <filename>`
- Don't try to create the file with another method
- Enter `touch footer.jpeg` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 440. List

### 440.1

Use the **list** command to check out the images you just added.

#### HINTS

- Use the "list" command
- Enter `ls` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 450. Touch

### 450.1

Looks like images show up in pink. There's also three fonts to use for the website. The first one is "roboto". Create `roboto.font` in the `website` folder.

#### HINTS

- Use the "touch" command
- Don't try to create the file with another method
- Enter `touch roboto.font` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 460. Touch

### 460.1

The next one is "lato". Create `lato.font` in the `website` folder.

#### HINTS

- Use the "touch" command
- Don't try to create the file with another method
- Enter `touch lato.font` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 470. Touch

### 470.1

Lastly, create `menlo.font` in the `website` folder.

#### HINTS

- Use the "touch" command
- Don't try to create the file with another method
- Enter `touch menlo.font` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 480. List

### 480.1

List the contents of this folder to see your new font files.

#### HINTS

- Use the "list" command
- Enter `ls` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 490. Touch

### 490.1

Your three font files are there. There's three icons for the website as well. Create `CodeAlly.svg` in the `website` folder.

#### HINTS

- Capitalization matters
- Use the "touch" command
- Don't try to create the file with another method
- Enter `touch CodeAlly.svg` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 500. Touch

### 500.1

Next, create `CodeRoad.svg` in the `website` folder.

#### HINTS

- Capitalization matters
- Use the "touch" command
- Don't try to create the file with another method
- Enter `touch CodeRoad.svg` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 510. Touch

### 510.1

Finally, create `freeCodeCamp.svg` in the `website` folder.

#### HINTS

- Capitalization matters
- Use the "touch" command
- Don't try to create the file with another method
- Enter `touch freeCodeCamp.svg` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 520. List

### 520.1

Check out the new icons you just added by listing the contents of the folder they are in.

#### HINTS

- Use the "list" command
- Enter `ls` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 530. Make Directory

### 530.1

The icons are pink as well. I think the images should go in a separate folder to clean it up a little. Make an `images` directory in the `website` folder to put them in.

#### HINTS

- Use the "make directory" command
- It's the `mkdir` command
- Add the folder name after the command
- Here's an example: `mkdir <folder_name>`
- Enter `mkdir images` into the terminal
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 540. List

### 540.1

List the contents of the `website` folder to make sure your new folder is there.

#### HINTS

- Use the "list" command
- Enter `ls` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 550. Copy

### 550.1

There's your new `images` folder. It's blue. You can copy a file with `cp <file> <destination>`. `cp` stands for "copy". Copy `background.jpg` to your `images` folder.

#### HINTS

- Enter `cp background.jpg images` into the terminal
- Don't try to use a different method to copy it
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 560. Change Directory

### 560.1

Better make sure it worked. Change to the `images` directory.

#### HINTS

- Use the "change directory" command
- Enter `cd images` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 570. List

### 570.1

List the contents to see if `background.jpg` is here.

#### HINTS

- Use the "list" command
- Make sure you are in the `images` folder
- Enter `ls` in the terminal
- Make sure you are in the `images` folder first
- Enter `cd /workspace/project/website/images` to get to the `images` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 580. Change Directory

### 580.1

There it is. Looks like the copy worked. Change back to the `website` directory so you can copy the other ones.

#### HINTS

- Use the "change directory" command
- Add `..` to the command to go back a folder
- Enter `cd ..` in the terminal
- Make sure you are in the `images` folder first
- Enter `cd /workspace/project/website/images` to get to the `images` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 585. List

### 585.1

Remind yourself of the files here by listing the contents.

#### HINTS

- Use the "list" command
- Enter `ls` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 590. Remove

### 590.1

You copied the background image to the `images` folder so you don't need the one here anymore. You can remove a file with `rm <filename>`. Remove `background.jpg` from the `website` folder.

#### HINTS

- Enter `rm background.jpg` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 600. List

### 600.1

List the contents to make sure it's gone.

#### HINTS

- Use the "list" command
- Enter `ls` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 610. Copy

### 610.1

Okay, it's gone. Next, copy `header.png` to the `images` folder.

#### HINTS

- Here's the example again: `cp <file> <destination>`
- You previously used `cp background.jpg images`
- Don't try to use a different method to copy it
- Enter `cp header.png images`
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 620. Copy

### 620.1

Last, copy the "footer" image to the `images` folder.

#### HINTS

- Here's the example again: `cp <file> <destination>`
- You previously used `cp header.png images`
- Don't try to use a different method to copy it
- Enter `cp footer.jpeg images`
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 630. Change Directory

### 630.1

All the images should be copied over. Change to the `images` directory so you can make sure.

#### HINTS

- Use the "change directory" command
- Add the path of where you want to go to the command
- Enter `cd images` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 640. List

### 640.1

Check if the images are here by listing the contents.

#### HINTS

- Use the "list" command
- Enter `ls` in the terminal
- Make sure you are in the `images` folder first
- Enter `cd /workspace/project/website/images` to get to the `images` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 650. Change Directory

### 650.1

They all made it here. Go back to the `website` folder so you can delete the original files.

#### HINTS

- Use the "change directory" command
- Add `..` to the command to go back a folder
- Enter `cd ..` in the terminal
- Make sure you are in the `images` folder first
- Enter `cd /workspace/project/website/images` to get to the `images` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 660. List

### 660.1

List the contents to remind yourself of the filenames to delete.

#### HINTS

- Use the "list" command
- Enter `ls` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 670. Remove

### 670.1

There's two that you don't need anymore. Remove the "header" image file from the `website` folder since you copied to the images folder.

#### HINTS

- Use the "remove" command
- Here's an example: `rm <filename>`
- You previously used `rm background.jpg`
- It's the `header.png` file
- Enter `rm header.png` in the terminal
- Don't try to use a different method to delete the file
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 680. Remove

### 680.1

It should be gone. Remove the "footer" image from the `website` folder as well.

#### HINTS

- Use the "remove" command
- You previously used `rm header.png`
- The file to remove is `footer.jpg`
- Don't try to use a different method to delete the file
- Enter `rm footer.jpeg` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 690. List

### 690.1

List the contents of the `website` folder to check if they are gone.

#### HINTS

- Use the "list" command
- Enter `ls` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 700. Rename

### 700.1

Looks like they're all deleted. There was a mistake with the extensions for the font files. You can rename them with `mv` like this: `mv <filename> <new_filename>`. `mv` stands for "move", it can **rename or move** something. Rename `roboto.font` to `roboto.woff`.

#### HINTS

- Enter `mv roboto.font roboto.woff`
- Don't try to rename it with other methods
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 710. List

### 710.1

Use "list" to check if it worked.

#### HINTS

- Use the "list" command
- Enter `ls` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 720. Rename

### 720.1

Do you see the "roboto" font? The rename worked. Next, rename the "lato" font file to `lato.ttf`.

#### HINTS

- Use the "move" command to rename a file
- Here's the example: `mv <filename> <new_filename>`
- You previously used: `mv roboto.font roboto.woff`
- It's the `lato.font` file
- Don't try to rename it with other methods
- Enter `mv lato.font lato.ttf`
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 730. Rename

### 730.1

Lastly, rename the "menlo" font to `menlo.otf`.

#### HINTS

- Use the "move" command to rename a file
- Here's the example: `mv <filename> <new_filename>`
- You previously used: `mv lato.font lato.ttf`
- It's the `menlo.font` file
- Don't try to rename it with other methods
- Enter `mv menlo.font menlo.otf`
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 740. List

### 740.1

Use the "list" command to make sure those last two got renamed.

#### HINTS

- Use the "list" command
- Enter `ls` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 750. Make Directory

### 750.1

Take a look at the files to make sure they got renamed. Those font files could be organized into a folder as well. Make a `fonts` directory in the `website` folder to put them in.

#### HINTS

- Use the "make directory" command
- It's the `mkdir` command
- Here's an example: `mkdir <directory_name>`
- Don't try to create the folder with another method
- Enter `mkdir fonts` into the terminal
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 755. List

### 755.1

List the contents of the `website` folder to make sure your new folder is there.

#### HINTS

- Use the "list" command
- Enter `ls` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 760. Move

### 760.1

See it? You renamed the font files with `mv`, you can also move files with it. Move the "roboto" font to the new `fonts` folder. Here's an example: `mv <file> <destination>`.

#### HINTS

- Use the "move" command
- The file to move is `roboto.woff`
- Don't try to move the file with another method
- Enter `mv roboto.woff fonts`
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 770. Find

### 770.1

You can use `find` to find things or view a file tree. Enter `find` to view the file tree of the `website` folder to see all the files and folders within it.

#### HINTS

- Use the "find" command
- Make sure you are in the `website` folder
- Enter `find` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 780. Move

### 780.1

You can see everything in this `website` folder and its descendant folders. Notice that they all start with `./` to represent this folder. You can see that your font moved to the `fonts` folder. Next, move the "lato" font to the `fonts` folder.

#### HINTS

- Use the "move" command
- Here's an example: `mv <file> <destination>`
- The file to move is `lato.ttf`
- You previously used: `mv roboto.woff fonts`
- Don't try to move the file with another method
- Enter `mv lato.ttf fonts`
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 790. Move

### 790.1

There's one more font to move. Move the "menlo" font to the `fonts` folder.

#### HINTS

- Use the "move" command
- Here's an example: `mv <file> <destination>`
- The file to move is `menlo.otf`
- You previously used: `mv lato.ttf fonts`
- Don't try to move the file with another method
- Enter `mv menlo.otf fonts`
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 800. Find

### 800.1

Use `find` again to list the whole file tree and make sure those two got moved.

#### HINTS

- Use the "find" command
- Enter `find` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 850. Make Directory

### 850.1

Yes, you can see them all in the `fonts` folder. Let's organize some more. Make a `client` directory in the `website` folder for the client side files.

#### HINTS

- Use the "make directory" command
- Here's an example: `mkdir <directory_name>`
- Enter `mkdir client` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 860. Make Directory

### 860.1

You can make a folder in that `client` folder from here by adding it to the path like this: `mkdir client/<new_folder_name>`. Make a `src` directory in the `client` folder from here.

#### HINTS

- Use the "make directory" command
- Enter `mkdir client/src` from the `website` folder
- Don't try to create the folder with another method
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 870. Move

### 870.1

You can move files all the way across the system from here with the right path. Move `index.html` to the `client/src` folder from here.

#### HINTS

- Use the "move" command
- You previously used: `mv menlo.otf fonts`
- Enter `mv index.html client/src` from the `website` folder
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 880. Find

### 880.1

Use `find` to view the file tree and make sure it moved.

#### HINTS

- Use the "find" command
- Enter `find` in the terminal
- Make sure you are in the `website` folder
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 890. Move

### 890.1

Can you see the `index.html` file in your new `src` folder? Looks like it moved :smile: There's some more files that can go in the `src` folder. Move `index.js` to it from here.

#### HINTS

- Use the "move" command
- You previously used: `mv index.html client/src`
- Enter `mv index.js client/src` from the `website` folder
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 900. Move

### 900.1

Last is the CSS file. Move `styles.css` to the `src` folder.

#### HINTS

- Use the "move" command
- Don't try to move the file with another method
- You've used `mv index.js client/src` to move a file
- Enter `mv styles.css client/src` from the `website` folder
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 910. Find

### 910.1

Seems like you can do anything right from here. Take another look at the tree with `find`.

#### HINTS

- Use the "find" command
- Enter `find` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 920. Find Subfolder

### 920.1

Things are looking more organized :smile: You can use `find <folder_name>` to display the tree of a different folder. View the file tree of the `client` folder from the `website` folder.

#### HINTS

- Use the "find" command
- Add `client` at the end of the command
- Enter `find client` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 930. Find

### 930.1

Now you just see what's in the `client` folder. What else can `find` do? View the "help" menu of the `find` command to look around.

#### HINTS

- Use the "find" command with the "help" flag
- The help flag is: `--help`
- You previously used `ls --help`
- Enter `find --help` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 940. Find

### 940.1

The menu isn't very pretty, but there's a `-name` flag in there. You can use it to search for something with `find -name <filename>`. Use `find` with the `-name` flag to search for `index.html`.

#### HINTS

- Enter `find -name index.html` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 950. Find

### 950.1

It shows you where that file is. Using the same command, find where the `styles.css` file is.

#### HINTS

- Use the "find" command with the "name" flag and the filename
- The name flag is: `-name`
- You previously used `find -name index.html`
- Enter `find -name style.css` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 960. Find

### 960.1

You can search for folders with it, as well. Using the same command and flag, find the `src` folder.

#### HINTS

- Use the "find" command with the "name" flag
- The name flag is: `-name`
- You previously used `find -name index.html`
- Enter `find -name src` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 970. Find

### 970.1

:smile: View the file tree of the `website` folder to see what else you need to do.

#### HINTS

- Use the "find" command
- Don't use any flags this time
- Enter `find` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 980. Change Directory

### 980.1

What's next? More organizing! You should put all the assets in one spot. Change into the `client` folder.

#### HINTS

- Use the "change directory" command
- Enter `cd client` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 990. Make Directory

### 990.1

Make a new directory named `assets` in the `client` folder.

#### HINTS

- Use the "make directory" command
- It's the `mkdir` command
- Here's an example: `mkdir <directory_name>`
- You previously used `mkdir client`
- Enter `mkdir assets` in the terminal
- Make sure you are in the `client` folder first
- Enter `cd /workspace/project/website/client` to get to the `client` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1000. Change Directory

### 1000.1

Change into the new `assets` folder.

#### HINTS

- Use the "change directory" command
- It's the `cd` command
- Enter `cd assets` in the terminal
- Make sure you are in the `client` folder first
- Enter `cd /workspace/project/website/client` to get to the `client` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1010. Make Directory

### 1010.1

All the images and other assets can go here. Make an `images` directory in the `assets` folder for all the images.

#### HINTS

- Use the "make directory" command
- It's the `mkdir` command
- You previously used `mkdir assets`
- Enter `mkdir images` in the terminal
- Make sure you are in the `assets` folder first
- Enter `cd /workspace/project/website/client/assets` to get to the `assets` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1020. Change Directory

### 1020.1

Go to your new `images` folder.

#### HINTS

- Use the "change directory" command
- It's the `cd` command
- Enter `cd images` in the terminal
- Make sure you are in the `assets` folder first
- Enter `cd /workspace/project/website/client/assets` to get to the `assets` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1030. Touch

### 1030.1

You want the images here. Create `background.jpg` in this folder.

#### HINTS

- Use the "touch" command
- You previously used `touch freeCodeCamp.svg`
- Enter `touch background.jpg` in the terminal
- Make sure you are in the `images` folder first
- Enter `cd /workspace/project/website/client/assets/images` to get to the `images` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1040. Change Directory

### 1040.1

Wait. You don't need to recreate them. You can just move the other images here. Go back to the `website` folder from here. It's three folder back.

#### HINTS

- Use the "change directory" command
- You went back two folders with `cd ../..`
- Enter `cd ../../..` in the terminal
- Make sure you are in the `images` folder first
- Enter `cd /workspace/project/website/client/assets/images` to get to the `images` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1050. Change Directory

### 1050.1

Now go to where the original images are. Change into the `images` folder.

#### HINTS

- Use the "change directory" command
- Enter `cd images` in the terminal from the `website` folder
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1055. List

### 1055.1

List the contents of the `images` folder to see the files here.

#### HINTS

- Use the "list" command
- Enter `ls` in the terminal
- Make sure you are in the `images` folder first
- Enter `cd /workspace/project/website/images` to get to the `images` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1060. Move

### 1060.1

Umm, first I think you should move them back to the website folder. Move `header.png` back to the `website` folder. The destination for the file is `..`

#### HINTS

- Use the "move" command
- Here's an example: `mv <file> <destination>`
- Don't try to move the file with another method
- Enter `mv header.png ..` in the terminal
- Make sure you are in the `images` folder first
- Enter `cd /workspace/project/website/images` to get to the `images` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1065. List

### 1065.1

List the contents of the `images` folder to see if it's gone.

#### HINTS

- Use the "list" command
- Enter `ls` in the terminal
- Make sure you are in the `images` folder first
- Enter `cd /workspace/project/website/images` to get to the `images` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1070. Change Directory

### 1070.1

It's gone. Go back to the `website` folder.

#### HINTS

- Use the "change directory" command
- Enter `cd ..` in the terminal from the `images` folder
- Make sure you are in the `images` folder first
- Enter `cd /workspace/project/website/images` to get to the `images` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1080. List

### 1080.1

List what's here.

#### HINTS

- Use the "list" command
- Enter `ls` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1090. Find

### 1090.1

There's the file you just moved. Next, you will move it to the `client/assets/images` folder. First, use `find` with the correct flag to search for `images`.

#### HINTS

- Use the "find" command with the "name" flag
- The name flag is: `-name`
- Here's an example `find -name <folder>`
- You previously used `find -name src`
- Enter `find -name images` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1100. Move

### 1100.1

There's your two image folders. Move `header.png` to the one with the longer path. Just use it as the destination to do so.

#### HINTS

- Use the "move" command
- Here's an example: `mv <file> <destination>`
- The destination you want is `client/assets/images`
- Don't try to move the file with another method
- Enter `mv header.png client/assets/images` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1110. Find

### 1110.1

Use `find` to search for your `header.png` file and make sure it moved.

#### HINTS

- Don't forget the correct flag
- You want the "name" flag
- The name flag is: `-name`
- You previously used `find -name images`
- Enter `find -name header.png` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1120. Find

### 1120.1

There it is. Right where you put it. Next, search for your `footer.jpeg` file so you can move that over there.

#### HINTS

- Use the "find" command with the "name" flag
- The name flag is: `-name`
- You previously used `find -name header.png`
- Enter `find -name footer.jpeg` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1130. Move

### 1130.1

It's in the original `images` folder. You can **use that path** with the move command to move it. Move `footer.jpeg` to the `client/assets/images` folder while in the `website` folder.

#### HINTS

- Use the "move" command
- You previously used `mv header.png client/assets/images`
- Make sure you put in the correct two paths
- The first path is `images/footer.jpeg`
- The second path is `client/assets/images`
- Enter `mv images/footer.jpeg client/assets/images` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1135. Find

### 1135.1

View the file tree of this folder to make sure all your images are over in their new folder. Don't use any flags.

#### HINTS

- Use the "find" command
- Enter `find` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1150. Remove Directory

### 1150.1

You don't need the old `images` folder anymore. You can use `rmdir <directory_name>` to remove a folder. `rmdir` stands for "remove directory". Try to remove the `images` folder with `rmdir`. Make sure it's the one in the `website` folder.

#### HINTS

- Enter `rmdir images` into the terminal
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1170. Remove

### 1170.1

Directory not empty? Oh yeah, there's still the background image in there. Remove the background image file in the `images` folder from here. Make sure it's the one in the `website/images` folder.

#### HINTS

- Use the `rm` command
- Here's an example: `rm <file_path>`
- The file path you want is `images/background.jpg`
- Enter `rm images/background.jpg` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1190. Remove Directory

### 1190.1

Try to remove the `images` folder again with `rmdir`. Make sure it's the one in the `website` folder.

#### HINTS

- Use the "remove directory" command
- Enter `rmdir images` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1195. List

### 1195.1

I think it worked this time. List the contents to find out.

#### HINTS

- Use the "list" command
- Enter `ls` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1200. Make Directory

### 1200.1

It worked, the `images` folder is gone. Make a new `icons` folder in your `assets` folder while in the `website` folder.

#### HINTS

- Use the `mkdir` command
- Your `assets` folder is in the `client` folder
- Don't try to create the directory with another method
- Enter `mkdir client/assets/icons` into the terminal
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1210. Move

### 1210.1

Move the `CodeAlly.svg` file to your new `icons` folder.

#### HINTS

- Use the "move" command
- Here's a tip: `mv CodeAlly.svg <path_to_icons_folder>`
- The destination path is `client/assets/icons`
- Enter `mv CodeAlly.svg client/assets/icons` into the terminal
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1215. Find

### 1215.1

View the file tree of the `website` folder and make sure it moved.

#### HINTS

- Use the "find" command
- Enter `find` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1220. Move

### 1220.1

Verify that the file moved to the `icons` folder. Next, move the "CodeRoad" file to your `icons` folder.

#### HINTS

- Use the "move" command
- The filename is `CodeRoad.svg`
- Here's a tip: `mv CodeRoad.svg <path_to_icons_folder>`
- Enter `mv CodeRoad.svg client/assets/icons` into the terminal
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1230. Move

### 1230.1

Lastly, move the "freeCodeCamp" file to your `icons` folder.

#### HINTS

- Use the "move" command
- Here's a tip: `mv freeCodeCamp.svg <path_to_icons_folder>`
- The path is `client/assets/icons`
- Enter `mv freeCodeCamp.svg client/assets/icons` into the terminal
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1240. Find

### 1240.1

View the file tree and make sure the files moved.

#### HINTS

- Use the "find" command
- Enter `find` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1250. Make Directory

### 1250.1

This looks much better. The three icons are now in the `icons` folder. Make a `fonts` folder in your `assets` folder from here for all the font files.

#### HINTS

- Use the `mkdir` command
- Put the `fonts` folder in the `client/assets` folder
- Enter `mkdir client/assets/fonts` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1260. Touch

### 1260.1

Turns out you want some different fonts for the website. From here, create `roboto-bold.woff` in your new `fonts` folder. You can put the path in front of the filename of where you want it to go.

#### HINTS

- Use the "touch" command
- Here's an example: `touch <path/filename>`
- The file needs to be created in the `client/assets/fonts` folder
- Enter `touch client/assets/fonts/roboto-bold.woff` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1270. Touch

### 1270.1

Next, create `roboto-light.woff` in your new `fonts` folder from here.

#### HINTS

- Use the "touch" command
- Here's an example: `touch <path/filename>`
- Put the file in the `client/assets/fonts` folder
- You previously used: `touch client/assets/fonts/roboto-bold.woff`
- Enter `touch client/assets/fonts/roboto-light.woff` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1275. Find

### 1275.1

View the file tree of the `client/assets/fonts` folder from here to see if your new files are there.

#### HINTS

- Use the "find" command with the folder path you want to see
- Here's an example: `find <path_to_folder>`
- Enter `find client/assets/fonts` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1280. Touch

### 1280.1

Two more fonts to go. Create `lato-bold.ttf` in the new `fonts` folder from here.

#### HINTS

- Use the "touch" command
- Here's an example: `touch <path/filename>`
- Put the file in the `client/assets/fonts` folder
- You previously used: `touch client/assets/fonts/roboto-light.woff`
- Enter `touch client/assets/fonts/lato-bold.ttf` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1290. Touch

### 1290.1

Lastly, create `lato-light.ttf` in your new `fonts` folder from here.

#### HINTS

- Use the "touch" command
- Here's an example: `touch <path/filename>`
- You previously used: `touch client/assets/fonts/lato-bold.ttf`
- Enter `touch client/assets/fonts/lato-light.ttf` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1300. Find

### 1300.1

View your file tree and make sure the files are there.

#### HINTS

- Use the "find" command
- Enter `find` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1310. Remove Help

### 1310.1

Things are looking more organized :smile: The new fonts are there. Now you can remove the old `fonts` folder and everything in it. You can't do that with `rmdir` since it's not empty. View the "help" menu of the `rm` command to see if you can find anything.

#### HINTS

- Use the "remove" command with the "help" flag
- The "help" flag is `--help`
- Enter `rm --help` into the terminal
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1315. Remove Recursively

### 1315.1

There's a `-r` flag that says, `remove directories and their contents recursively`. That will remove the folder and everything in it. Use the "remove" command with that flag to remove the `fonts` folder. Make sure it's the one in the `website` folder. Be careful not to remove the wrong folder.

#### HINTS

- The "remove" command is `rm`
- The flag you want is `-r`
- Here's an example: `rm -r <folder>`
- Enter `rm -r fonts` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there

## 1320. List

### 1320.1

List what's here to see if it's gone.

#### HINTS

- Use the "list" command
- Enter `ls` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1330. Touch

### 1330.1

Looks like it’s gone. Surely, it went to the trash can right? No, it’s just gone. You should **be very careful when recursively removing files** like that. It will delete everything, and can destroy your operating system. There's a few more files for the boilerplate. Create `package.json` in the `website` folder.

#### HINTS

- Use the "touch" command
- Enter `touch package.json` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1340. Touch

### 1340.1

Next, create `server.js` in the `website` folder.

#### HINTS

- Use the "touch" command
- Enter `touch server.js` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1350. Touch

### 1350.1

Lastly, create `README.md` in the `website` folder.

#### HINTS

- Use the "touch" command
- Capitalization matters
- Enter `touch README.md` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1360. List

### 1360.1

List the content of this folder to make sure your new files are there.

#### HINTS

- Use the "list" command
- Enter `ls` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1370. Echo

### 1370.1

The boilerplate is complete. Use `echo` to print `Yay!` to the terminal.

#### HINTS

- Use the "echo" command
- Here's an example: `echo <text>`
- Enter `echo Yay!` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1380. Echo

### 1380.1

Print `I finished the boilerplate!` to the terminal.

#### HINTS

- Use the "echo" command
- Enter `echo I finished the boilerplate!` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1390. Echo

### 1390.1

Print `one more thing...` to the terminal

#### HINTS

- Use the "echo" command
- Enter `echo one more thing...` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1400. Echo to File

### 1400.1

You can print to a file instead of the terminal with `echo text >> filename`. Use it to print `I made this boilerplate` to your `README.md` file.

#### HINTS

- Use the "echo" command
- Enter `echo I made this boilerplate >> README.md` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1405. More

### 1405.1

Use `more` to view your `README.md` file.

#### HINTS

- Use the "more" command
- Enter `more README.md` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1410. Echo to File

### 1410.1

Now that line is in the file. Add `from the command line` to your `README.md` file with the `echo` command and the same method.

#### HINTS

- Use the "echo" command with `>>` to add text to a file
- Here's an example: `echo <text> >> <filename>`
- You previously used: `echo I made this boilerplate >> README.md`
- Enter `echo from the command line >> README.md` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1415. More

### 1415.1

Use `more` to view the "readme" file again.

#### HINTS

- Use the "more" command
- Enter `more README.md` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1420. Echo to File

### 1420.1

Now the file has two lines. Add `for the freeCodeCamp bash lessons` to your "readme" file with the `echo` command like you did before.

#### HINTS

- Use the "echo" command with `>>` to add text to a file
- Here's an example: `echo <text> >> <filename>`
- You previously used: `echo from the command line >> README.md` in the terminal
- Enter `echo for the freeCodeCamp bash lessons >> README.md` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1430. More

### 1430.1

View your "readme" file again like you did before.

#### HINTS

- Use the "more" command
- Enter `more README.md` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1440. Change Directory

### 1440.1

:smile: Change to the `project` folder.

#### HINTS

- Use the "change directory" command
- Enter `cd ..` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd /workspace/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1445. List

### 1445.1

You are back where you started. List what's here.

#### HINTS

- Use the "list" command
- Enter `ls` in the terminal
- Make sure you are in the `project` folder first
- Enter `cd /workspace/project` to get to the `project` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1450. Rename

### 1450.1

Still the same items. Rename the `website` folder to `website-boilerplate`.

#### HINTS

- Use the "move" command
- You previously used: `mv menlo.font menlo.otf` to rename a file
- Here's an example: `mv <folder_name> <new_folder_name>`
- Enter `mv website website-boilerplate` in the terminal
- Make sure you are in the `project` folder first
- Enter `cd /workspace/project` to get to the `project` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1460. List

### 1460.1

List the contents of this folder to see the new name.

#### HINTS

- Use the "list" command
- Enter `ls` in the terminal
- Make sure you are in the `project` folder first
- Enter `cd /workspace/project` to get to the `project` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1470. Copy Help

### 1470.1

Thanks for making this. You need to make a copy of it. Take a look at the "help" menu of the "copy" command.

#### HINTS

- The "copy" command is `cp`
- The "help" flag is `--help`
- Enter `cp --help` in the terminal
- Make sure you are in the `project` folder first
- Enter `cd /workspace/project` to get to the `project` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1475. Copy

### 1475.1

Scroll up to find that "recursive" flag. You need to use it again to copy the whole folder. Copy the whole boilerplate into a folder named `toms-website`.

#### HINTS

- The "copy" command is `cp`
- The "recursive" flag is `-r`
- Here's an example: `cp -r <folder_to_copy> <name_of_copy>`
- Enter `cp -r website-boilerplate toms-website` in the terminal
- Make sure you are in the `project` folder first
- Enter `cd /workspace/project` to get to the `project` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1480. List

### 1480.1

List the contents of the `project` folder to see the new copy.

#### HINTS

- Use the "list" command
- Enter `ls` in the terminal
- Make sure you are in the `project` folder first
- Enter `cd /workspace/project` to get to the `project` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1490. Find

### 1490.1

Thanks. Use `find` to view the tree of `toms-website`.

#### HINTS

- Use the "find" command
- Add the folder name to the command
- Here's an example: `find <folder_name>`
- It's the `toms-website` folder
- Enter `find toms-website` in the terminal
- Make sure you are in the `project` folder first
- Enter `cd /workspace/project` to get to the `project` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1500. Find

### 1500.1

Use `find` to view the tree of the boilerplate folder to make sure it matches.

#### HINTS

- Use the "find" command
- Add the folder name to the command
- It's the `website-boilerplate` folder
- Enter `find website-boilerplate` in the terminal
- Make sure you are in the `project` folder first
- Enter `cd /workspace/project` to get to the `project` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1510. Clear

### 1510.1

Awesome! You are finished for now. Clear the terminal one last time.

#### HINTS

- Use the "clear" command
- Enter `clear` into the terminal

## 1520. Echo

### 1520.1

Print "goodbye terminal" to the terminal.

#### HINTS

- Use the "echo" command
- Here's an example: `echo <text>`
- Enter `echo goodbye terminal` into the terminal

## 1530. Exit

### 1530.1

Use the "exit" command to exit the terminal.

#### HINTS

- Enter `exit` into the terminal
- Have a nice day
