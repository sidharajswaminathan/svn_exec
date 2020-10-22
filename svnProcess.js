const { exec } = require('child_process');
const repo_path = 'https://svn.inkling.com/svn/dps_cpl_sswg68nlse_chimongtai_en/trunk/s9ml/cards/ ';
const pathToRepo = './dynamo_repo/';
const path = "svn checkout " + repo_path + pathToRepo +" --depth infinity --force";
//const svnUpdate = spawn('svn', ['checkout https://svn.inkling.com/svn/dps_cpl_sswg68nlse_chimongtai_en/trunk/s9ml/cards/ --username=s.vembuganesh@spi-global.com --password=HAB@spi123456', pathToRepo]);

async function addSVNFiles(path,conentType){
    exec(path,(err)=>{
        if (err) {
            console.log("svn Commit failed  ---->  ",err);                
            return
        } else {
            console.log("ALL "+conentType.toUpperCase()+" FILES ARE ADDDED SUCCESSFULLY!!!");
            //resolve('added');
        }
    });
};

addSVNFiles(path,'cards');