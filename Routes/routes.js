const version = require("../Utilities/helpers");

module.exports = (app) => {
    //Hosting the station
    app.get('/program-station-version', (req, res) => {
        console.log("Serving station version");
        version(req, res, "Station_Version");
    });

    app.get('/program-station', (req, res) => {
        const file = __dirname + '/Applications/Station.zip';
        console.log("Serving station file");
        res.download(file);
    });

    //Hosting steamCMD
    app.get('/program-steamcmd', (req, res) => {
        const file = __dirname + '/Applications/steamcmd.zip';
        console.log("Serving steamcmd file");
        res.download(file);
    });

    //Hosting setvol
    app.get('/program-setvol', (req, res) => {
        const file = __dirname + '/Applications/SetVol.zip';
        console.log("Serving setvol file");
        res.download(file);
    });
};
