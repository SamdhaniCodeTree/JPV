import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { DcModuleService } from '../../services/dc-module.service';

@Component({
  selector: 'app-issues-dashboard',
  templateUrl: './issues-dashboard.component.html',
  styleUrls: ['./issues-dashboard.component.css'],
})
export class IssuesDashboardComponent implements OnInit, OnDestroy, AfterViewInit {
  districtName: any;
  dashboardDetails: any;
  personList = [];
  headingText = '';
  reportType = '';

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = this.utils.dataTableOptions();
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private router: Router,
    private servicesApi: DcModuleService,
    private utils: UtilsService,
    private logger: LoggerService,
    private session: SessionService
  ) {}

  ngOnInit(): void {
    if(this.session.uniqueId !="" && this.session.desigId != ""){

    }
    else
    {
      this.router.navigate(['/shared/UnAuthorized']);
    }
    this.districtName = this.session.districtName;
    this.loadDashboard();
  }

  async loadDashboard(): Promise<void> {
    try {
      this.dashboardDetails = [];
      const req = {
        insertedBy: this.session.userName,
        role: this.session.desigId,
      };
      this.spinner.show();
      const res = await this.servicesApi.dashboard(req);
      if (res.success) {
        this.dashboardDetails = res.result;
      } else {
        this.toast.info(res.message);
      }
      this.rerender();
      this.spinner.hide();
    } catch (error) {
      this.spinner.hide();
      this.utils.catchResponse(error);
    }
  }

  btnDashboardDetails(id, count): void {
    this.personList = [];
    if (count === '0'){
      return;
    }
    this.reportType = id;
    if (this.reportType === '0') {
      this.headingText = 'PENDING ISSUE LIST';
    } else if (this.reportType === '1') {
      this.headingText = 'CLOSED ISSUE LIST';
    } else if (this.reportType === '2') {
      this.headingText = 'PENDING ISSUE LIST';
    }
    this.issueList();
  }

  async issueList(): Promise<void> {
    try {
      const req = {
        role: this.session.desigId,
        insertedBy: this.session.userName,
      };
      this.spinner.show();
      let res: any;
      if (this.reportType === '0') {
        res = await this.servicesApi.pendingListByRole(req);
      } else if (this.reportType === '1') {
        res = await this.servicesApi.completedListByRole(req);
      } else if (this.reportType === '2') {
        res = await this.servicesApi.reOpenedListByRole(req);
      }
      if (res.success) {
        this.personList = res.result;
      } else {
        this.toast.info(res.message);
      }
      this.rerender();
      this.spinner.hide();
    } catch (error) {
      this.spinner.hide();
      this.utils.catchResponse(error);
    }
  }

  btnViewDetails(obj): void {
    const requestData = {
      issueId: obj.ISSUE_ID,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.router.navigate(['/dcModule/IssueDetails'], {
      queryParams: { request: encryptedString },
    });
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Clear the table
      dtInstance.clear();
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
    });
  }
}
