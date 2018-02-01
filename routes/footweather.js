var express = require('express');
var router = express.Router();

var netatmo = require('netatmo');
var auth = {
	"client_id" : "5a02a1670f21e1ac918b5175",
	"client_secret" : "tKLNzzfx5et74FfcfIMvzixX21zpw2YRwI",
	"username" : "go@yamanashi.ac.jp",
	"password" : "room=K419",
};
var api = new netatmo(auth);
var device_id;
var temp;
var rain;
var interval = 5;
var unit = 60;

exports.list = function(req, res) {

	api.getStationsData(function(err, devices_) {
		// res.send(devices_); // ブラウザに表示
		device_id = devices_[0]["_id"];// IDの取得
		temp = devices_[0]["modules"][2]["dashboard_data"]["Temperature"];//気温の取得
		rain = devices_[0]["modules"][1]["dashboard_data"]["Rain"];//降水量の取得
		res.render('footweather', {
			title : 'Getting Netatmo Data',
			msg : 'netatmoデータを取得する画面です．',
			id : device_id,
			temp : temp,
			rain : rain
		});
	});

/*	console.log("" + interval + "×" + unit + "ごとにデータを取得します");
	var date = new Date();
	console.log(date.getMonth() + 1 + "月" + date.getDate() + "日 / "
			+ date.getHours() + ":" + date.getMinutes() + ":"
			+ date.getSeconds()
			+ "=================================================");

	var count = 1;
	var countup = function() {
		date = new Date();
		console.log(date.getMonth() + 1 + "月" + date.getDate() + "日 / "
				+ date.getHours() + ":" + date.getMinutes() + ":"
				+ date.getSeconds()
				+ "=================================================");
		console.log("" + interval * count++ + "×" + unit + "経過");
		api.getStationsData(function(err, devices_) {
			console.log(devices_);// コンソールに表示
		});
	}
	setInterval(countup, 1000 * interval * unit);*/

	/*
	 * var options = { device_id : '70:ee:50:29:6a:c0', scale : 'max', type : [
	 * 'Temperature', 'CO2', 'Humidity', 'Pressure', 'Noise' ], };
	 * api.getMeasure(options, function(err, measure) {
	 * console.log(measure.length); console.log(measure[0]);
	 * console.log(measure[measure.length - 1]); });
	 */
};