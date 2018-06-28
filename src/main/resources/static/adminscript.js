
var stompClient = null;

$(document).ready(function(){
	
	if(stompClient!=null)
		stompClient.disconnect();

	 var socket = new SockJS('/livescore-websocket');
	 stompClient = Stomp.over(socket);
	
    $("button").click(function(){
        
    	sendData2Socket();
    	
    });
});

function sendData2Socket() {
	
	var battingTeamName = $("#battingTeamName").val();
	var bowlingTeamName = $("#bowlingTeamName").val();
	var totalRuns = $("#totalRuns").val();
	var totalOvers = $("#totalOvers").val();
	
	stompClient.send("/app/scorecard", {}, JSON.stringify({'battingTeamName': battingTeamName, 'bowlingTeamName': bowlingTeamName, 
		'totalRuns': totalRuns,'totalOvers': totalOvers}));

}