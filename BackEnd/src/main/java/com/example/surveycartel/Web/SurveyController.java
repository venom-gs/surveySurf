package com.example.surveycartel.Web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.surveycartel.Model.Survey;
import com.example.surveycartel.Service.SurveyService;



@RestController
@RequestMapping("/survey")
@CrossOrigin("*")
public class SurveyController {
	@Autowired
	private SurveyService surveyService;

	@PostMapping
	public ResponseEntity<Survey> saveSurvey(@RequestBody Survey survey) {
		return new ResponseEntity<Survey>(surveyService.saveSurvey(survey), HttpStatus.CREATED);
	}

	@GetMapping
	public List<Survey> getAllSurvey() {
		return surveyService.getAllSurvey();
	}

	@GetMapping("{surveyId}")
	public ResponseEntity<Survey> getSurveyById(@PathVariable("surveyId") Long surveyId) {
		return new ResponseEntity<Survey>(surveyService.getSurveyById(surveyId), HttpStatus.OK);
	}

	@PutMapping("{surveyId}")
	public ResponseEntity<Integer> updateSurveyById(@PathVariable("surveyId") Long surveyId, @RequestBody Survey survey) {
		return new ResponseEntity<Integer>(surveyService.updateSurvey(survey, surveyId), HttpStatus.OK);
	}
	
	@DeleteMapping("{surveyId}")
	public ResponseEntity<Boolean> deleteSurveyById(@PathVariable("surveyId") Long surveyId){
		return new ResponseEntity<Boolean>(surveyService.deleteSurvey(surveyId),HttpStatus.OK);
		
	}
}
