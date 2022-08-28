import { Component, OnInit } from '@angular/core';
import { DesignationService } from 'src/app/core/service/designation.service';
import { Desingation } from 'src/app/interface/designation';

@Component({
  selector: 'app-designation-table',
  templateUrl: './designation-table.component.html',
  styleUrls: ['./designation-table.component.scss'],
})
export class DesignationTableComponent implements OnInit {
  designations: Desingation[] = [];

  constructor(private designationService: DesignationService) {
    this.designationService
      .getDesignations()
      .subscribe((designations: Desingation[]) => {
        this.designations = designations;
      });
  }

  deleteDesignation = (id: string) => {
    this.designationService.deleteDesignation(id).subscribe((res) => {
      this.designations = this.designations.filter((des) => {
        return des.id !== id;
      });
    });
  };

  ngOnInit(): void {}
}
