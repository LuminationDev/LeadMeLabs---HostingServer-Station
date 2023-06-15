const helpers = require("../Utilities/helpers");

module.exports = (app) => {
    //Hosting the station
    app.get('/program-station-version', (req, res) => {
        console.log("Serving station version");
        helpers.version(req, res, "Station_Version");
    });

    app.get('/program-station', (req, res) => {
        var file = __dirname + '/Applications/Station.zip';
        res.download(file);
    });

    //Hosting steamCMD
    app.get('/program-steamcmd', (req, res) => {
        var file = __dirname + '/Applications/steamcmd.zip';
        res.download(file);
    });

    //Hosting setvol
    app.get('/program-setvol', (req, res) => {
        var file = __dirname + '/Applications/SetVol.zip';
        res.download(file);
    });
};
