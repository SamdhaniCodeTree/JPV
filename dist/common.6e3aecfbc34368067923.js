(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"8ddW":function(t,s,i){"use strict";i.d(s,"a",(function(){return h}));var e=i("un/a"),o=i("fXoL"),p=i("tk/3"),n=i("kh7C");let h=(()=>{class t{constructor(t,s){this.httpClient=t,this.utils=s,this.mdssURL="",this.jpvURL="",this.mdsscomm="",this.dairyesignappURL="",this.mdssURL=s.mdssUrl()+"api/dlcoModule/",this.mdsscomm=s.mdssUrl()+"api/common/",this.dairyesignappURL=s.crystalesignUrl()+"api/mdssmahilamilkproducers/",this.jpvURL=s.baseUrl+"api/officeScheduleAttendance/"}dcorbkListByDivisionId(t){return this.httpClient.post(this.mdssURL+"dcorbkListByDivisionId",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}rbkListByDivisionId(t){return this.httpClient.post(this.mdssURL+"rbkListByDivisionId",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}dcocheckListByRbkId(t){return this.httpClient.post(this.mdssURL+"dcocheckListByRbkId",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}mdssDocDetailsByRbkId(t){return this.httpClient.post(this.mdssURL+"dlcoDocDetailsByRbkId",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}mdsschecklist(t){return this.httpClient.post(this.mdssURL+"mdsschecklist",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}ScheduleAttendanceSelect(t){return this.httpClient.post(this.jpvURL+"ScheduleAttendanceSelect",t,this.utils.getPostHttpOptionswithouttoken()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}checkListByRbkId(t){return this.httpClient.post(this.mdssURL+"checkListByRbkId",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}dcocheckListSub(t){return this.httpClient.post(this.mdssURL+"dcocheckListSub",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}eSignDocumentsGet(t){return this.httpClient.post(this.mdsscomm+"eSignDocumentsGet",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}eSignDocumentsInsert(t){return this.httpClient.post(this.mdsscomm+"eSignDocumentsInsert",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}MDssDlcoandDCOandGMRPT(t){return this.httpClient.post(this.dairyesignappURL+"MDssDlcoandDCOandGMRPT",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}}return t.\u0275fac=function(s){return new(s||t)(o.Sb(p.b),o.Sb(n.a))},t.\u0275prov=o.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},JFo8:function(t,s,i){"use strict";i.d(s,"a",(function(){return h}));var e=i("un/a"),o=i("fXoL"),p=i("tk/3"),n=i("kh7C");let h=(()=>{class t{constructor(t,s){this.httpClient=t,this.utils=s,this.mdssURL="",this.mdssdocURL="",this.mdsscomm="",this.dairyesignappURL="",this.mdssURL=s.mdssUrl()+"api/dlcoModule/",this.mdssdocURL=s.mdssUrl()+"api/meeting/",this.mdsscomm=s.mdssUrl()+"api/common/",this.dairyesignappURL=s.crystalesignUrl()+"api/mdssmahilamilkproducers/"}rbkListByDivisionId(t){return this.httpClient.post(this.mdssURL+"rbkListByDivisionId",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}mdsschecklist(t){return this.httpClient.post(this.mdssURL+"mdsschecklist",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}mdssDocDetailsByRbkId(t){return this.httpClient.post(this.mdssURL+"dlcoDocDetailsByRbkId",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}checkListByRbkId(t){return this.httpClient.post(this.mdssURL+"checkListByRbkId",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}rollcheckListByRbkId(t){return this.httpClient.post(this.mdssURL+"rollcheckListByRbkId",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}checkListSub(t){return this.httpClient.post(this.mdssURL+"checkListSub",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}penrbkListByDivisionId(t){return this.httpClient.post(this.mdssURL+"penrbkListByDivisionId",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}MSSReportGetDetails(t){return this.httpClient.post(this.mdssURL+"MSSReportGetDetails",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}esigninsert(t){return this.httpClient.post("https://apiapddcf.ap.gov.in/digtalsign/api/mdssmahilamilkproducers/EsignEncriptedString",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}eSignDocumentsGet(t){return this.httpClient.post(this.mdsscomm+"eSignDocumentsGet",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}eSignDocumentsInsert(t){return this.httpClient.post(this.mdsscomm+"eSignDocumentsInsert",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}MDssDlcoandDCOandGMRPT(t){return this.httpClient.post(this.dairyesignappURL+"MDssDlcoandDCOandGMRPT",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}MDSSBankDetailsU(t){return this.httpClient.post(this.mdsscomm+"MDSSBankDetailsU",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}MDSSBankDetailsVerify(t){return this.httpClient.post(this.mdsscomm+"MDSSBankDetailsVerify",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}}return t.\u0275fac=function(s){return new(s||t)(o.Sb(p.b),o.Sb(n.a))},t.\u0275prov=o.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},OICb:function(t,s,i){"use strict";i.d(s,"a",(function(){return h}));var e=i("un/a"),o=i("fXoL"),p=i("tk/3"),n=i("kh7C");let h=(()=>{class t{constructor(t,s){this.httpClient=t,this.utils=s,this.mdssURL="",this.mdsscomm="",this.dairyesignappURL="",this.mdssURL=s.mdssUrl()+"api/dlcoModule/",this.mdsscomm=s.mdssUrl()+"api/common/",this.dairyesignappURL=s.crystalesignUrl()+"api/mdssmahilamilkproducers/"}gmrbkListByDivisionId(t){return this.httpClient.post(this.mdssURL+"gmrbkListByDivisionId",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}mdssDocDetailsByRbkId(t){return this.httpClient.post(this.mdssURL+"dlcoDocDetailsByRbkId",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}dcocheckListByRbkId(t){return this.httpClient.post(this.mdssURL+"dcocheckListByRbkId",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}mdsschecklist(t){return this.httpClient.post(this.mdssURL+"mdsschecklist",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}CommissionerRejectDetails(t){return this.httpClient.post(this.mdssURL+"CommissionerRejectDetails",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}districtdivision_list(t){return this.httpClient.post(this.mdssURL+"districtdivision_list",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}gmcheckListByRbkId(t){return this.httpClient.post(this.mdssURL+"gmcheckListByRbkId",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}gmcheckListSub(t){return this.httpClient.post(this.mdssURL+"gmcheckListSub",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}eSignDocumentsGet(t){return this.httpClient.post(this.mdsscomm+"eSignDocumentsGet",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}eSignDocumentsInsert(t){return this.httpClient.post(this.mdsscomm+"eSignDocumentsInsert",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}MDssDlcoandDCOandGMRPT(t){return this.httpClient.post(this.dairyesignappURL+"MDssDlcoandDCOandGMRPT",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}}return t.\u0275fac=function(s){return new(s||t)(o.Sb(p.b),o.Sb(n.a))},t.\u0275prov=o.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},emAV:function(t,s,i){"use strict";i.d(s,"a",(function(){return h}));var e=i("un/a"),o=i("fXoL"),p=i("tk/3"),n=i("kh7C");let h=(()=>{class t{constructor(t,s){this.httpClient=t,this.utils=s,this.mdssURL="",this.baseURL="",this.farmerURL="",this.crystalURL="",this.mdssdlcoURL="",this.promoterURL="",this.addmemberURL="",this.baseURL=s.baseUrl()+"api/mcuMapping/",this.mdssURL=s.mdssUrl()+"api/meeting/",this.mdssdlcoURL=s.mdssUrl()+"api/dlcoModule/",this.farmerURL=s.baseUrl()+"api/farmerModule/",this.crystalURL=s.crystalReportsUrl()+"api/mdssmahilamilkproducers/",this.promoterURL=s.crystalReportsUrl()+"api/promotersModule/",this.addmemberURL=s.mdssUrl()+"api/NewMemberaddModule/"}rbkListByMentorId(t){return this.httpClient.post(this.baseURL+"rbkListByMentorId",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}mdsschecklist(t){return this.httpClient.post(this.mdssURL+"mdsschecklist",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}rbkListByMentorIds(t){return this.httpClient.post(this.mdssURL+"rbkListByMentorId",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}villageListByRbkId(t){return this.httpClient.post(this.baseURL+"villageListByRbkId",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}meetingScheduleSub(t){return this.httpClient.post(this.mdssURL+"meetingScheduleSub",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}meetingAttendanceSub(t){return this.httpClient.post(this.mdssURL+"meetingAttendanceSub",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}meetingDetailsByRbkId(t){return this.httpClient.post(this.mdssURL+"meetingDetailsByRbkId",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}farmerDetailsByMeetingId(t){return this.httpClient.post(this.mdssURL+"farmerDetailsByMeetingId",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}promoterRbkId(t){return this.httpClient.post(this.mdssURL+"promoterRbkId",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}minutesOfMeetingSub(t){return this.httpClient.post(this.mdssURL+"minutesOfMeetingSub",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}promotersSub(t){return this.httpClient.post(this.promoterURL+"promotersSub",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}farmerListByRbkId(t){return this.httpClient.post(this.mdssURL+"farmerListByRbkId",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}promotersDetailsByRbkId(t){return this.httpClient.post(this.mdssURL+"promotersDetailsByRbkId",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}mdssDocDetailsByRbkId(t){return this.httpClient.post(this.mdssURL+"mdssDocDetailsByRbkId",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}mdssDocumentsEditandSub(t){return this.httpClient.post(this.mdssURL+"mdssDocumentsEditandSub",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}mdssDocumentsRejectSub(t){return this.httpClient.post(this.mdssURL+"mdssDocumentsRejectSub",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}mdssDocumentsSub(t){return this.httpClient.post(this.mdssURL+"mdssDocumentsSub",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}mdssDocumentsSubFirstoff(t){return this.httpClient.post(this.mdssURL+"mdssDocumentsSubFirstoff",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}mdssDocumentsSubSecondoff(t){return this.httpClient.post(this.mdssURL+"mdssDocumentsSubSecondoff",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}mdssDocumentsSubthirdoff(t){return this.httpClient.post(this.mdssURL+"mdssDocumentsSubthirdoff",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}mdssDocumentsSubonebyone(t){return this.httpClient.post(this.mdssURL+"mdssDocumentsSubonebyone",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}mdssDocumentsSubbylaw(t){return this.httpClient.post(this.mdssURL+"mdssDocumentsSubbylaw",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}mdacBankDetailsByRbkId(t){return this.httpClient.post(this.mdssURL+"mdacBankDetailsByRbkId",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}mdssApplicationRegSub(t){return this.httpClient.post(this.mdssURL+"mdssApplicationRegSub",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}regSubmittedRbkList(t){return this.httpClient.post(this.mdssURL+"regSubmittedRbkList",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}mdssAuthenticationByUniqueId(t){return this.httpClient.post(this.mdssdlcoURL+"mdssAuthenticationByUniqueId",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}applicationStatus(t){return this.httpClient.post(this.mdssURL+"applicationStatus",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}searchByIFSC(t){return this.httpClient.post(this.farmerURL+"searchByIFSC",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}forma(t){return this.httpClient.post(this.crystalURL+"forma",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}formanew(t){return this.httpClient.post(this.crystalURL+"formanew",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}swornstatementEMPTY(t){return this.httpClient.post(this.crystalURL+"swornstatementEMPTY",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}formafirstpage(t){return this.httpClient.post(this.crystalURL+"formafirstpage",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}swornstatement(t){return this.httpClient.post(this.crystalURL+"swornstatement",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}PROCEEDINGSOFTHEMEETING(t){return this.httpClient.post(this.crystalURL+"PROCEEDINGSOFTHEMEETING",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}AdhocCommittee(t){return this.httpClient.post(this.crystalURL+"AdhocCommittee",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}EconomicViability(t){return this.httpClient.post(this.crystalURL+"EconomicViability",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}formaattendance(t){return this.httpClient.post(this.crystalURL+"formaattendance",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}bylaw(t){return this.httpClient.post(this.crystalURL+"bylaw",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}masudaform(t){return this.httpClient.post(this.crystalURL+"masudaform",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}Feasibility(t){return this.httpClient.post(this.crystalURL+"Feasibility",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}ConfirmationLetter(t){return this.httpClient.post(this.crystalURL+"ConfirmationLetter",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}Proceedings(t){return this.httpClient.post(this.crystalURL+"Proceedings",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}EligibalRBKsList(t){return this.httpClient.post(this.addmemberURL+"EligibalRBKsList",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}EligibalRBKs_Details(t){return this.httpClient.post(this.addmemberURL+"EligibalRBKs_Details",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}ApplicationEligibalRBKs_List(t){return this.httpClient.post(this.addmemberURL+"ApplicationEligibalRBKs_List",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}Member_Relation_List(t){return this.httpClient.post(this.addmemberURL+"Member_Relation_List",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}EligibalFarmers_List(t){return this.httpClient.post(this.addmemberURL+"EligibalFarmers_List",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}ApplicationfromEligiblemembersadd(t){return this.httpClient.post(this.addmemberURL+"ApplicationfromEligiblemembersadd",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}SheduleCreationIns(t){return this.httpClient.post(this.addmemberURL+"SheduleCreationIns",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}NotSheduleCreated_RbkList(t){return this.httpClient.post(this.addmemberURL+"NotSheduleCreated_RbkList",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}Meating_Attadents_RbkList(t){return this.httpClient.post(this.addmemberURL+"Meating_Attadents_RbkList",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}Meating_Attadents_MeetingList(t){return this.httpClient.post(this.addmemberURL+"Meating_Attadents_MeetingList",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}Meating_Details_List(t){return this.httpClient.post(this.addmemberURL+"Meating_Details_List",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}AttendanceInsertData(t){return this.httpClient.post(this.addmemberURL+"AttendanceInsertData",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}New_Minits_ofmeeting_RbkList(t){return this.httpClient.post(this.addmemberURL+"Minits_of_meeting_RbkList",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}New_Minits_of_meeting_MeetingList(t){return this.httpClient.post(this.addmemberURL+"Minits_of_meeting_MeetingList",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}New_Minits_of_meeting_Details_List(t){return this.httpClient.post(this.addmemberURL+"Minits_of_meeting_Details_List",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}New_MinutesofMeetingUpdateData(t){return this.httpClient.post(this.addmemberURL+"MinutesofMeetingUpdateData",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}Minits_of_meeting_Approved_List(t){return this.httpClient.post(this.addmemberURL+"Minits_of_meeting_Approved_List",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}NewMinutesofMeetingInsertData(t){return this.httpClient.post(this.addmemberURL+"MinutesofMeetingInsertData",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}Doc_Upload_RbkList(t){return this.httpClient.post(this.addmemberURL+"Doc_Upload_RbkList",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}PdfUploadFarmer(t){return this.httpClient.post(this.addmemberURL+"PdfUploadFarmer",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}NewMemberAddCrystalReport(t){return this.httpClient.post(this.crystalURL+"NewMemberAddCrystalReport",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}Doc_Upload_MemberList(t){return this.httpClient.post(this.addmemberURL+"Doc_Upload_MemberList",t,this.utils.getPostHttpOptions()).pipe(Object(e.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}}return t.\u0275fac=function(s){return new(s||t)(o.Sb(p.b),o.Sb(n.a))},t.\u0275prov=o.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);