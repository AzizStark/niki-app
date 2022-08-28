import { Component, OnInit } from '@angular/core';
import { ManagementService } from 'src/app/core/service/management.service';

@Component({
  selector: 'app-management-table',
  templateUrl: './management-table.component.html',
  styleUrls: ['./management-table.component.scss'],
})
export class ManagementTableComponent implements OnInit {
  constructor(private managementService: ManagementService) {}

  ngOnInit(): void {}
}
