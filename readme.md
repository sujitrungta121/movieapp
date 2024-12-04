

Setup Instruction: 

 I have used React Native Cli for this project, so the setup process follows like this :

 1. First of all install the JDK  version > 17 which is suitable for the React Native to Run.
 2. Then install Android Studio to set up your SDK's and to run virtual device/emulator.
 3. set up the enviroment variables by running this command in the terminal nano ~/bash_profile in case of linux and 

 export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools

4 . After doing all the above mentioned process kindly run this process npx @react-native-community/cli@latest init AwesomeProject.

5. to run the project run npx react-native run-android/ npm start



Additional Information: 

I used to set the asyncstorage but it is giving the compatibility error due to short of time i just skip this fix but i have write the code to fetch and store the favourite movies in the localstorage. 
the error which i am facing is:
Could not determine the dependencies of task ':react-native-async-storage_async-storage:bundleLibCompileToJarDebug'.> Could not create task ':react-native-async-storage_async-storage:compileDebugJavaWithJavac'.> Failed to calculate the value of task ':react-native-async-storage_async-storage:compileDebugJavaWithJavac' property 'javaCompiler'.> Toolchain installation '/usr/lib/jvm/java-17-openjdk-amd64' does not provide the required capabilities: [JAVA_COMPILER]