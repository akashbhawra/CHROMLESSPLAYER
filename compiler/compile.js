var args=process.argv.splice(2);
if(args.length<1)
 throw "Please specify xml file name to compile";
var fileSystem=require("fs");
var properties=require("./buildProp.js").prop;
var xmlToJson=require("./MTxmlParser.js");
xmlToJson.parse(args[0],args[1],null,function(parseError,json){
    if(parseError){
      console.log("MTxmlParser : "+parseError);
      return;
    }
    var clientScriptGenerator=require("./clientScriptGenerator.js");
    var jsFileName=args[1].substring(0,args[1].indexOf("."))+".js";

    clientScriptGenerator.generate(args[0],jsFileName,json,function(scriptGenerateError,script){
        if(scriptGenerateError){
            console.log("clientScriptGenerator : "+scriptGenerateError);
        }
        var targetPath=fileSystem.realpathSync(properties.buildPath);
        var path=require("path");
        // var targetDir=path.basename(args[0]);
	var targetDir = args[0].match(/src\/(.*)/)[1];
        var targetDirPath=targetPath+"/"+targetDir;
        path.exists(targetDirPath,function(exists){
            if(!exists)
                fileSystem.mkdirSync(targetDirPath,755);
            var pathToWrite=targetDirPath+"/"+jsFileName;
             fileSystem.writeFile(pathToWrite,script,function(writeError){
                   if(writeError)
                         console.log("Unable to write file "+pathToWrite);
              });
        });
    });
});


