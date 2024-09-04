import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared.module';
import { ChangeRulePipe } from '../../../../pipes/change-rule.pipe';

@Component({
  selector: 'app-teams-panel',
  templateUrl: './teams-panel.component.html',
  styleUrl: './teams-panel.component.scss',
  standalone:true,
  imports:[SharedModule]
})
export class TeamsPanelComponent {
  
}
