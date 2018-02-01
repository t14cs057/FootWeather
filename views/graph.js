//「月別データ」
var mydata = {
	labels : [ "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30" ],
	datasets : [ {
		label : '降水量(mm/h)',
		hoverBackgroundColor : "rgba(255,99,132,0.3)",
		data : [ 1.1, 3.4, 4.0, 5.4, 6.0, 6.3, 0.0 ],
		lineTension : 0
	// 直線グラフになる
	} ]
};

// 「オプション設定」
var options = {
	title : {
		display : true,
		text : ''
	}
};

var canvas = document.getElementById('stage');
var chart = new Chart(canvas, {

	type : 'line', // グラフの種類
	data : mydata, // 表示するデータ
	options : {
		scales : {
			yAxes : [ {
				ticks : {
					beginAtZero : true,
					min : 0,
					max : 20
				}
			} ]
		}
	}
});