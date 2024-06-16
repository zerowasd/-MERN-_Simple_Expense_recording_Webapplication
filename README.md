# Expense_Management_System
A Expense tracker web-app that uses MERN stack.

I could not deploy the project as cyclic was shutdown: https://www.cyclic.sh/

If you fork this you can run the it locally just make sure that you have Node version Manager, make sure the versions of all the tools are corresponding to the package json(or lock) file.
Add the link to your mongodb database in .env file
Commands to follow afterwords:
   make sure you are using npm version 6.14.15 and node version 14.18.0
   npm i
   npm run dev
   wait a while and it should open the local host environment


I am documenting everything i learned, if any thing in the redme file does not make sense than don't bother i just wanted to document the problems and issues i encountered due to lack of my knowledge. 

I required a basic knowledge on how a MERN project works

Sorry if this is not professional, I am not trying to make it professinal.



















I followed a Hindi youtube tutorial, i will link the playlist here: https://www.youtube.com/playlist?list=PLuHGmgpyHfRw1eJL5-2L0W1XsUVTTCEMh

=======================================================================================================================================================================================
# For me
Fixes:
1. check all dependencies and also force-versions
2. check nodemon (global install) v3.1.0
3. nvm-node_version_14.18.0-npm_version_6.14.15

{
    ***As i was trying to work on linux and i found this, just documenting might delete later:

Reset Git Configuration: If you suspect that Git configuration settings from Windows might be causing issues, you can reset them on Linux. Open a terminal and run the following commands:

    bash -command, below:

#just for info ,$git config --global --unset-all core.autocrlf
    *$git config --global core.autocrlf input
this is because of linux's different line ending

}

