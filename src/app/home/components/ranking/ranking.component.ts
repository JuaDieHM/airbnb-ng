import { Component, OnInit } from '@angular/core';
import { ExperienceService } from 'src/app/services/experience/experience.service';
import { IExperience } from 'src/app/shared/models/experience.model';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {

  public experiences: Array<IExperience>;

  constructor(private experienceService: ExperienceService) {  }

  ngOnInit(): void {
    this.getTopFive();
  }

  private getTopFive() : void{
    this.experienceService.getTopFiveExperiences().subscribe(
      response => {
        this.experiences = response.top5;
      }
    );
  }
}