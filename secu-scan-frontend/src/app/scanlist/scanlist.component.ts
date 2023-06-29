import { Component } from '@angular/core';
import { ScanList } from './scanlist';

@Component({
  selector: 'app-scanlist',
  templateUrl: './scanlist.component.html',
  styleUrls: ['./scanlist.component.scss']
})
export class ScanlistComponent {

  scanList: ScanList[] = [
    {
      scan_id: 1,
      scan_name: "Scan 1",
      scan_source_code_url: "https://github.com/example/repo1",
      scan_trufflehog: true,
      scan_bandit: false,
      scan_sonarqube: true,
      scan_kics: false,
      scan_dependency_track: true,
      scan_start_time: new Date("2023-06-30T08:00:00"),
      scan_end_time: new Date("2023-06-30T10:00:00")
    },
    {
      scan_id: 2,
      scan_name: "Scan 2",
      scan_source_code_url: "https://github.com/example/repo2",
      scan_trufflehog: false,
      scan_bandit: true,
      scan_sonarqube: false,
      scan_kics: true,
      scan_dependency_track: false,
      scan_start_time: new Date("2023-06-30T10:00:00"),
      scan_end_time: new Date("2023-06-30T12:00:00")
    },
    {
      scan_id: 3,
      scan_name: "Scan 3",
      scan_source_code_url: "https://github.com/example/repo3",
      scan_trufflehog: false,
      scan_bandit: true,
      scan_sonarqube: false,
      scan_kics: true,
      scan_dependency_track: false,
      scan_start_time: new Date("2023-06-30T10:00:00"),
      scan_end_time: new Date("2023-06-30T12:00:00")
    }
  ];
  
  


}
