import { Component, OnInit } from '@angular/core';
import { mancheModel } from '../datamodel/mancheModel';
import { SuggestionService } from '../services/suggestion.service';
import { MancheService } from '../services/manche.service';
@Component({
  selector: 'app-validate-suggestion',
  templateUrl: './validate-suggestion.component.html',
  styleUrls: ['./validate-suggestion.component.scss']
})
export class ValidateSuggestionComponent implements OnInit {
  suggestions: mancheModel[];
  constructor(
    private suggestionService: SuggestionService,
    private mancheService: MancheService
  ) { }

  ngOnInit(): void {
    this.getSuggestion();
  }

  getSuggestion(): void {
    this.suggestionService.getSuggestion().toPromise().then((res: mancheModel[]) => {
      this.suggestions = this.mancheService.fromBackToManche(res);
    }, error => {
      console.log(error);
    });
  }

  onValidate(id, valid) {
    if (valid) {
      this.suggestionService.validateSuggestion(id);
    } else {
      this.suggestionService.rejectSuggestion(id);
    }
    this.getSuggestion();
  }
}
