import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { DistrictHoService } from '../../services/district-ho.service';
import { McuMappingService } from 'src/app/mentorModule/services/mcu-mapping.service';

@Component({
  selector: 'app-society-change-dashboard',
  templateUrl: './society-change-dashboard.component.html',
  styleUrls: ['./society-change-dashboard.component.css'],
})
export class SocietyChangeDashboardComponent
  implements OnInit, OnDestroy, AfterViewInit
{
  districtName: any;

  dashboardCounts = {
    PENDING_FARMERS: '0',
    VERIFIED_FARMERS: '0',
    REJECTED_FARMERS: '0',
  };

  headingText = '';
  requestType = '';
  actionTakenValue: any;
  societyChangeList = [];
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private router: Router,
    private districtHOAPI: DistrictHoService,
    private utils: UtilsService,
    private logger: LoggerService,
    private session: SessionService,
    private mcuAPI: McuMappingService,
  ) {}

  ngOnInit(): void {
    if(this.session.uniqueId !="" && this.session.desigId != ""){

    }
    else
    {
      this.router.navigate(['/shared/UnAuthorized']);
    }
    this.loadDashboard();
  }

  async loadDashboard(): Promise<void> {
    try {
      const req = {
        uniqueId: this.session.uniqueId,
      };
      this.spinner.show();
      const res = await this.districtHOAPI.HODashboard(req);
      this.spinner.hide();
      if (res.success) {
        this.dashboardCounts = res.result[0];
      } else {
        this.toast.info(res.message);
      }
    } catch (error) {
      this.spinner.hide();
      this.utils.catchResponse(error);
    }
  }

  async btnSocietyChangeDashboardDetails(obj): Promise<void> {
    try {
       debugger;
       
      // alert(this.session.accessToken())
      this.requestType = obj;
      const req = {
        districtId: this.session.districtId,
        actionTaken: this.requestType,
      };

      if (
        this.requestType === null &&
        this.dashboardCounts.PENDING_FARMERS === '0'
      ) {this.societyChangeList = [];
        return;
      }
      if (
        this.requestType === '1' &&
        this.dashboardCounts.VERIFIED_FARMERS === '0'
      ) {this.societyChangeList = [];
        return;
      }

      if (
        this.requestType === '2' &&
        this.dashboardCounts.REJECTED_FARMERS === '0'
      ) {this.societyChangeList = []; 
        return;
      }
      debugger;

      this.spinner.show();
      let res: any;
      if (this.requestType === null) {
        this.headingText = 'PENDING LIST';
        res = await this.districtHOAPI.HOPendingList(req);
      } else if (this.requestType === '1') {
        this.headingText = 'APPROVED LIST';
        res = await this.districtHOAPI.HOApprovedList(req);
      } else if (this.requestType === '2') {
        this.headingText = 'REJECTED  LIST';
        res = await this.districtHOAPI.HORejectedList(req);
      } 
      this.spinner.hide();    

      this.societyChangeList = [];
      if (res.success) { debugger;
        this.societyChangeList = res.result;
      } else {
        this.toast.info("Society Change Requests are Not Available");
      }
      this.rerender();
    } catch (error) { 
      this.spinner.hide();
      this.utils.catchResponse(error);
    }
  }

  // async btnVerify(obj): Promise<void> {
  //   try {
  //     if (obj.SUBMIT_ACTION === '0') {
  //       this.toast.warning('Please select Action Taken');
  //       return;
  //     }
  //     const req = {
  //       actionTaken: obj.SUBMIT_ACTION,
  //       updatedBy: this.session.userName,
  //       txnId: obj.TXN_ID,
  //       rbkId: obj.NEW_RBK_CODE,
  //       villageId: obj.NEW_VILLAGE_CODE,
  //       uidNum: obj.UID_NUM,
  //     };
  //     this.spinner.show();
  //     const response = await this.districtHOAPI.societyHOUpdate(req);
  //     if (response.success) {
  //       alert(response.message);
  //       window.location.reload();
  //     } else {
  //       this.spinner.hide();
  //       this.toast.info(response.message);
  //     }
  //   } catch (error) {
  //     this.spinner.hide();
  //     this.utils.catchResponse(error);
  //   }
  // }

  
  async btnVerify(obj): Promise<void> {
    try {
      if (obj.SUBMIT_ACTION === '0') {
        this.toast.warning('Please select Action Taken');
        return;
      }   debugger;
      const req = {
        type:16,
        union_id: obj.SUBMIT_ACTION,           //actionTaken
        input1: this.session.userName,         //updatedBy
        UNIQUE_ID: obj.TXN_ID,                //txnId             
        rbk_id: obj.NEW_RBK_CODE,             // rbkId
        village_id : obj.NEW_VILLAGE_CODE,    //villageId
        ROLE: obj.UID_NUM,                    //uidNum
      };
      this.spinner.show();
      const response = await this.mcuAPI.TransactionsByUnionidGet(req); //await this.districtHOAPI.societyHOUpdate(req);
      if (response.success) {
        alert(response.result[0].STATUS_MSG);
      if(response.result[0].STATUS_CODE=="1")
        window.location.reload();
      } else {
        this.spinner.hide();
        //this.toast.info(response.message);
        this.toast.warning(response.result[0].STATUS_MSG);
      }
    } catch (error) {
      this.spinner.hide();
      this.utils.catchResponse(error);
    }
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
      // Destroy the table first
      dtInstance.destroy();

      dtInstance.clear();

      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
    });
  }
}