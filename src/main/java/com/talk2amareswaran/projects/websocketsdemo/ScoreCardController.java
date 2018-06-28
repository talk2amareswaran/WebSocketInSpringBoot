package com.talk2amareswaran.projects.websocketsdemo;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class ScoreCardController {

	@MessageMapping("/scorecard")
	@SendTo("/topic/livescore")
	public ScoreCard getScoreCard(ScoreCard score) throws InterruptedException {
		Thread.sleep(2000);
		return score;
	}

}
