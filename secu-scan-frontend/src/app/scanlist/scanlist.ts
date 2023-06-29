import { Time } from "@angular/common";
import { UrlCreationOptions } from "@angular/router";

export interface ScanList {
    scan_id: number;
    scan_name: string;
    scan_source_code_url: string;
    scan_trufflehog: boolean;
    scan_bandit: boolean;
    scan_sonarqube: boolean;
    scan_kics: boolean;
    scan_dependency_track: boolean;
    scan_start_time: Date;
    scan_end_time: Date;
  }