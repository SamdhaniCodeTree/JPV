(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"+MiJ":function(e,t,i){"use strict";i.d(t,"a",(function(){return u}));var n=i("fXoL"),s=i("l/Tn"),a=i("mZtN"),o=i("mAmA"),r=i("kh7C"),c=i("tyNb"),l=i("hzby"),b=i("3Pt+");const d=["dpDate"];let u=(()=>{class e{constructor(e,t,i,s,a){this.datePicker=e,this.session=t,this.toast=i,this.utils=s,this.router=a,this.bsConfig=this.datePicker.getDatePickerConfig(),this.datedisable=!1,this.selectedDateChange=new n.n,this.bsConfig.containerClass=this.datePicker.getColor("dark-blue")}ngOnInit(){""!=this.session.uniqueId&&""!=this.session.desigId||this.router.navigate(["/shared/UnAuthorized"])}onDateChange(){this.dpDate?this.utils.isEmpty(this.selectedDate)?(this.selectedDate="",this.selectedDateChange.emit(this.selectedDate)):this.dpElementValidation(this.dpDate)?(this.selectedDate=this.dpDate.nativeElement.value,this.selectedDateChange.emit(this.selectedDate)):this.toast.warning("Please Enter Valid Date"):this.selectedDate||(this.selectedDate="",this.selectedDateChange.emit(this.selectedDate))}dpElementValidation(e){if(e&&e.nativeElement&&e.nativeElement.value&&!this.utils.isEmpty(e.nativeElement.value)){if(this.utils.isValidDate(e.nativeElement.value))return!0;e.nativeElement.value=""}return!1}}return e.\u0275fac=function(t){return new(t||e)(n.Jb(s.a),n.Jb(a.a),n.Jb(o.a),n.Jb(r.a),n.Jb(c.c))},e.\u0275cmp=n.Db({type:e,selectors:[["app-date-picker"]],viewQuery:function(e,t){var i;1&e&&n.Bc(d,!0),2&e&&n.mc(i=n.Wb())&&(t.dpDate=i.first)},inputs:{PlaceHolder:"PlaceHolder",maxDate:"maxDate",minDate:"minDate",datedisable:"datedisable",selectedDate:"selectedDate"},outputs:{selectedDateChange:"selectedDateChange"},decls:7,vars:6,consts:[[1,"input-group"],["type","text","bsDatepicker","","readonly","",1,"form-control",2,"background-color","#fff",3,"placeholder","ngModel","bsConfig","minDate","maxDate","disabled","ngModelChange","bsValueChange"],["dp","bsDatepicker","dpDate",""],[1,"input-group-append"],["id","datePickerIcon",1,"input-group-text",2,"cursor","pointer",3,"click"],["aria-hidden","true",1,"fa","fa-calendar"]],template:function(e,t){if(1&e){const e=n.Pb();n.Ob(0,"div",0),n.Ob(1,"input",1,2),n.Vb("ngModelChange",(function(e){return t.selectedDate=e}))("bsValueChange",(function(){return t.onDateChange()})),n.Nb(),n.Ob(4,"div",3),n.Ob(5,"span",4),n.Vb("click",(function(){return n.oc(e),n.nc(2).toggle()})),n.Kb(6,"i",5),n.Nb(),n.Nb(),n.Nb()}2&e&&(n.xb(1),n.fc("placeholder",t.PlaceHolder),n.ec("ngModel",t.selectedDate)("bsConfig",t.bsConfig)("minDate",t.minDate)("maxDate",t.maxDate)("disabled",t.datedisable))},directives:[l.b,b.b,l.a,b.h,b.i],styles:[".theme-dark-blue[_ngcontent-%COMP%]   .btn-clear-wrapper[_ngcontent-%COMP%]   .btn-success[_ngcontent-%COMP%], .theme-dark-blue[_ngcontent-%COMP%]   .btn-today-wrapper[_ngcontent-%COMP%]   .btn-success[_ngcontent-%COMP%]{background-color:#337ab7!important;border-color:#337ab7}"]}),e})()},OIP3:function(e,t,i){"use strict";i.r(t),i.d(t,"SecAssModule",(function(){return Q}));var n=i("ofXK"),s=i("tyNb"),a=i("UTcu"),o=i("fXoL"),r=i("JqCM"),c=i("mAmA"),l=i("mZtN"),b=i("kh7C"),d=i("d//k"),u=i("FCe2");function p(e,t){if(1&e){const e=o.Pb();o.Ob(0,"a",35),o.Vb("click",(function(){o.oc(e);const i=t.$implicit;return o.Xb().btnDocumentDownload(i.URL)})),o.wc(1),o.Nb()}if(2&e){const e=t.$implicit;o.xb(1),o.yc(" ",e.NAME," ")}}const h=function(){return{exact:!0}};let m=(()=>{class e{constructor(e,t,i,n,s,a,o){this.spinner=e,this.toast=t,this.router=i,this.session=n,this.utils=s,this.loginAPI=a,this.userManual=o,this.userManuals=this.userManual.secAssSecModule,this.guideLines=this.userManual.guideLines}ngOnInit(){""!=this.session.uniqueId&&""!=this.session.desigId||this.router.navigate(["/shared/UnAuthorized"]),this.userName=this.session.userName,this.lastLoginTime=this.session.lastLoginTime,"0"===this.session.passwordUpdate&&this.utils.updatePassword(this.session.desigId)}btnLogout(){if(confirm("are you sure want to logout ?")){const e={userName:this.userName};this.spinner.show(),this.loginAPI.logout(e).then(e=>{e.success?(alert(e.message),sessionStorage.clear(),this.session.clearSession(),this.router.navigate(["/"])):this.toast.info(e.message),this.spinner.hide()}).catch(e=>{this.spinner.hide(),this.utils.catchResponse(e)})}}btnForgetPassword(){this.utils.updatePassword(this.session.desigId)}btnReports(){let e=this.utils.reportsSSOUrl()+this.session.accessToken;window.open(e,"_Blank")}btnDownloadUserManual(e){for(let t=0;t<this.userManuals.length;t++)if(e===this.userManuals[t].ID)return void window.open(this.userManuals[t].URL,"_blank");this.toast.warning("User Manual Not Found !!!")}btnDocumentDownload(e){this.utils.isEmpty(e)?this.toast.warning("User Manual Not Found !!!"):window.open(e,"_blank")}}return e.\u0275fac=function(t){return new(t||e)(o.Jb(r.c),o.Jb(c.a),o.Jb(s.c),o.Jb(l.a),o.Jb(b.a),o.Jb(d.a),o.Jb(u.a))},e.\u0275cmp=o.Db({type:e,selectors:[["app-common"]],decls:85,vars:15,consts:[[1,"navbar","navbar-expand-lg","navbar-dark","blue-green-gradient"],[1,"navbar-brand","d-flex","align-items-center",2,"cursor","pointer"],["src","https://apddcf.ap.gov.in/cdn/img/ap-logo.png",1,"brand-logo",2,"width","50px"],[1,"brand-text","text-white","mb-0","font-weight-normal","ml-1"],["id","basicExampleNav",1,"collapse","navbar-collapse"],[1,"navbar-nav","ml-auto"],[1,"nav-item","text-right"],["src","https://apddcf.ap.gov.in/cdn/img/CM.png",1,"brand-logo",2,"width","50px"],[1,"text-center"],[2,"font-size","12px","margin-bottom","0","color","#fff"],[1,"menu-navbar","navbar","navbar-expand-lg","navbar-dark","primary-color-dark","py-md-0","text-white"],[1,"navbar-brand","d-md-none","d-block",2,"cursor","pointer"],["type","button","data-toggle","collapse","data-target","#navbarSupportedContent-333","aria-controls","navbarSupportedContent-333","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarSupportedContent-333",1,"collapse","navbar-collapse"],[1,"navbar-nav","mr-auto","align-items-center"],["routerLinkActive","active",1,"nav-item",3,"routerLinkActiveOptions"],["routerLinkActive","active",1,"nav-item","dropdown"],["id","navbarDropdownMenuLink-333","data-toggle","dropdown","aria-haspopup","true","aria-expanded","false",1,"nav-link","dropdown-toggle",2,"cursor","pointer"],[1,"fab","fa-wpforms"],["aria-labelledby","navbarDropdownMenuLink-333",1,"dropdown-menu","dropdown-primary"],["routerLink","registerFarmerStatus","routerLinkActive","active",1,"dropdown-item",3,"routerLinkActiveOptions"],["routerLink","SocietyWiseInspection","routerLinkActive","active",1,"dropdown-item",3,"routerLinkActiveOptions"],["routerLink","FarmerFeedIndent","routerLinkActive","active",1,"dropdown-item",3,"routerLinkActiveOptions"],["routerLink","IssueRegister","routerLinkActive","active",1,"dropdown-item",3,"routerLinkActiveOptions"],["routerLink","IssuesList","routerLinkActive","active",1,"dropdown-item",3,"routerLinkActiveOptions"],["routerLinkActive","active",1,"nav-item","dropdown",2,"display","none"],["class","dropdown-item","style","cursor: pointer",3,"click",4,"ngFor","ngForOf"],["routerLinkActive","active",1,"nav-item"],[1,"nav-link",2,"cursor","pointer",3,"click"],[1,"navbar-nav","ml-auto","nav-flex-icons"],["id","navbarDropdownMenuLink-333","data-toggle","dropdown","aria-haspopup","true","aria-expanded","false",1,"nav-link","dropdown-toggle","d-flex","align-items-center",2,"cursor","pointer"],[1,"mb-0","mr-1"],[1,"fas","fa-user"],["aria-labelledby","navbarDropdownMenuLink-333",1,"dropdown-menu","dropdown-menu-right","dropdown-primary"],[1,"dropdown-item",2,"cursor","pointer",3,"click"],[1,"fas","fa-sign-out-alt"],[1,"my-1"],[1,"dropdown-item","text-center",2,"cursor","pointer"],[1,"text-danger"],["id","page-container"],["id","content-wrap"],[1,"container-fluid"],[1,"row"],[1,"col-md-11","mx-auto"],[1,"page-footer","font-small","blue"],[1,"footer-copyright","text-center","pt-3"],[2,"cursor","pointer","color","#fff"],["src","https://apddcf.ap.gov.in/cdn/img/apddcf-circle.png",2,"width","30px"]],template:function(e,t){1&e&&(o.Ob(0,"nav",0),o.Ob(1,"a",1),o.Kb(2,"img",2),o.Ob(3,"h5",3),o.wc(4," Andhra Pradesh Dairy Development Cooperative Federation Limited (APDDCF) "),o.Nb(),o.Nb(),o.Ob(5,"div",4),o.Ob(6,"ul",5),o.Ob(7,"li",6),o.Ob(8,"a",1),o.Kb(9,"img",7),o.Ob(10,"div",8),o.Ob(11,"h6",3),o.wc(12," Sri Nara Chandrababu Naidu "),o.Nb(),o.Ob(13,"p",9),o.wc(14," Hon\u2019ble Chief Minister, "),o.Kb(15,"br"),o.wc(16," Andhra Pradesh "),o.Nb(),o.Nb(),o.Nb(),o.Nb(),o.Nb(),o.Nb(),o.Nb(),o.Ob(17,"nav",10),o.Ob(18,"a",11),o.wc(19,"MENU"),o.Nb(),o.Ob(20,"button",12),o.Kb(21,"span",13),o.Nb(),o.Ob(22,"div",14),o.Ob(23,"ul",15),o.Kb(24,"li",16),o.Ob(25,"li",17),o.Ob(26,"a",18),o.Kb(27,"i",19),o.wc(28," Menu "),o.Nb(),o.Ob(29,"div",20),o.Ob(30,"a",21),o.wc(31," Farmer Registration Status "),o.Nb(),o.Ob(32,"a",22),o.wc(33," Society Wise Inspection "),o.Nb(),o.Ob(34,"a",23),o.wc(35," FARMER FEED INDENT REQUEST "),o.Nb(),o.Nb(),o.Nb(),o.Ob(36,"li",17),o.Ob(37,"a",18),o.Kb(38,"i",19),o.wc(39," Report An Issue "),o.Nb(),o.Ob(40,"div",20),o.Ob(41,"a",24),o.wc(42," Register Issue "),o.Nb(),o.Ob(43,"a",25),o.wc(44," View Registered Issues "),o.Nb(),o.Nb(),o.Nb(),o.Ob(45,"li",26),o.Ob(46,"a",18),o.Kb(47,"i",19),o.wc(48," Guidelines "),o.Nb(),o.Ob(49,"div",20),o.vc(50,p,2,1,"a",27),o.Nb(),o.Nb(),o.Ob(51,"li",28),o.Ob(52,"a",29),o.Vb("click",(function(){return t.btnReports()})),o.Kb(53,"i",19),o.wc(54," Reports "),o.Nb(),o.Nb(),o.Nb(),o.Ob(55,"ul",30),o.Ob(56,"li",17),o.Ob(57,"a",31),o.Ob(58,"h6",32),o.wc(59," Welcome "),o.Ob(60,"b"),o.wc(61),o.Nb(),o.Nb(),o.Kb(62,"i",33),o.Nb(),o.Ob(63,"div",34),o.Ob(64,"a",35),o.Vb("click",(function(){return t.btnLogout()})),o.Kb(65,"i",36),o.wc(66," Logout"),o.Nb(),o.Kb(67,"hr",37),o.Ob(68,"a",38),o.Ob(69,"span"),o.wc(70,"Last logged in: "),o.Kb(71,"br"),o.Ob(72,"b",39),o.wc(73),o.Nb(),o.Nb(),o.Nb(),o.Nb(),o.Nb(),o.Nb(),o.Nb(),o.Nb(),o.Ob(74,"div",40),o.Ob(75,"div",41),o.Ob(76,"div",42),o.Ob(77,"div",43),o.Ob(78,"div",44),o.Kb(79,"router-outlet"),o.Nb(),o.Nb(),o.Nb(),o.Nb(),o.Ob(80,"footer",45),o.Ob(81,"div",46),o.Ob(82,"a",47),o.Kb(83,"img",48),o.wc(84," Andhra Pradesh Dairy Development Cooperative Federation Limited (APDDCF) "),o.Nb(),o.Nb(),o.Nb(),o.Nb()),2&e&&(o.xb(24),o.ec("routerLinkActiveOptions",o.hc(9,h)),o.xb(6),o.ec("routerLinkActiveOptions",o.hc(10,h)),o.xb(2),o.ec("routerLinkActiveOptions",o.hc(11,h)),o.xb(2),o.ec("routerLinkActiveOptions",o.hc(12,h)),o.xb(7),o.ec("routerLinkActiveOptions",o.hc(13,h)),o.xb(2),o.ec("routerLinkActiveOptions",o.hc(14,h)),o.xb(7),o.ec("ngForOf",t.guideLines),o.xb(11),o.xc(t.userName),o.xb(12),o.xc(t.lastLoginTime))},directives:[s.d,s.e,n.l,s.g],styles:[""]}),e})();var g=i("Qmur");let f=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Db({type:e,selectors:[["app-farmer-feed-indent-details"]],decls:1,vars:0,template:function(e,t){1&e&&o.Kb(0,"app-farmer-feed-indent")},directives:[g.a],styles:[""]}),e})();var O=i("UdMd");let v=(()=>{class e{constructor(e,t,i,n){this.utils=e,this.route=t,this.router=i,this.session=n,t.queryParams.subscribe(e=>this.input=e.request)}ngOnInit(){""!=this.session.uniqueId&&""!=this.session.desigId||this.router.navigate(["/shared/UnAuthorized"]);const e=JSON.parse(this.utils.decrypt(this.input));this.issueId=e.issueId}onIssueClosedChange(){this.router.navigate(["/SecAssModule/IssuesList"])}}return e.\u0275fac=function(t){return new(t||e)(o.Jb(b.a),o.Jb(s.a),o.Jb(s.c),o.Jb(l.a))},e.\u0275cmp=o.Db({type:e,selectors:[["app-issue-details"]],decls:1,vars:1,consts:[[3,"issueId","issueIdChange","onIssueClosedChange"]],template:function(e,t){1&e&&(o.Ob(0,"app-view-issue-details",0),o.Vb("issueIdChange",(function(e){return t.issueId=e}))("onIssueClosedChange",(function(){return t.onIssueClosedChange()})),o.Nb()),2&e&&o.ec("issueId",t.issueId)},directives:[O.a],styles:[""]}),e})();var N=i("rvtM");let w=(()=>{class e{constructor(e){this.session=e,this.rbkList=[],this.villageList=[],this.moduleList=[],this.rbkList.push({RBK_ID:this.session.rbkId||"",RBK_NAME:this.session.rbkName||""})}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)(o.Jb(l.a))},e.\u0275cmp=o.Db({type:e,selectors:[["app-issue-register"]],decls:1,vars:1,consts:[[3,"rbkList","rbkListChange"]],template:function(e,t){1&e&&(o.Ob(0,"app-issue-tracking-reg",0),o.Vb("rbkListChange",(function(e){return t.rbkList=e})),o.Nb()),2&e&&o.ec("rbkList",t.rbkList)},directives:[N.a],styles:[""]}),e})();var D=i("0y8D");let I=(()=>{class e{constructor(e){this.router=e}ngOnInit(){}onIssueChange(e){this.router.navigate(["/SecAssModule/IssueDetails"],{queryParams:{request:e}})}}return e.\u0275fac=function(t){return new(t||e)(o.Jb(s.c))},e.\u0275cmp=o.Db({type:e,selectors:[["app-issues-list"]],decls:1,vars:0,consts:[[3,"onIssueChange"]],template:function(e,t){1&e&&(o.Ob(0,"app-registered-issues",0),o.Vb("onIssueChange",(function(e){return t.onIssueChange(e)})),o.Nb())},directives:[D.a],styles:[""]}),e})();var C=i("IaHj");let y=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Db({type:e,selectors:[["app-sec-ass-farmer-register"]],decls:1,vars:0,template:function(e,t){1&e&&o.Kb(0,"app-farmer-register")},directives:[C.a],styles:[""]}),e})();var k=i("12li");let M=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Db({type:e,selectors:[["app-sec-ass-register-farmer-status"]],decls:1,vars:0,template:function(e,t){1&e&&o.Kb(0,"app-register-farmer-status")},directives:[k.a],styles:[""]}),e})();var L=i("mrSG"),E=i("un/a"),S=i("tk/3");let A=(()=>{class e{constructor(e,t){this.httpClient=e,this.utils=t,this.baseURL="",this.basecommonURL="",this.baseURL=t.baseUrl()+"api/farmerModule/",this.basecommonURL=t.baseUrl()+"api/common/"}societyWiseInspectionSub(e){return this.httpClient.post(this.baseURL+"societyWiseInspectionSub",e,this.utils.getPostHttpOptions()).pipe(Object(E.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}societyListRbkId(e){return this.httpClient.post(this.baseURL+"societyListRbkId",e,this.utils.getPostHttpOptions()).pipe(Object(E.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}}return e.\u0275fac=function(t){return new(t||e)(o.Sb(S.b),o.Sb(b.a))},e.\u0275prov=o.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var x=i("cpEJ"),P=i("+MiJ"),T=i("3Pt+"),F=i("Pd9Q");function V(e,t){if(1&e&&(o.Ob(0,"option",47),o.Yb(1,"json"),o.wc(2),o.Nb()),2&e){const e=t.$implicit;o.fc("value",o.Zb(1,2,e)),o.xb(2),o.yc(" ",e.VDCSNAME," ")}}function R(e,t){if(1&e){const e=o.Pb();o.Ob(0,"div",6),o.Ob(1,"div",7),o.Ob(2,"label",44),o.wc(3,"SOCIETY "),o.Ob(4,"span",9),o.wc(5,"*"),o.Nb(),o.Nb(),o.Ob(6,"select",45),o.Vb("ngModelChange",(function(t){return o.oc(e),o.Xb().inspectionData.villageData=t}))("change",(function(){return o.oc(e),o.Xb().onSocietyChange()})),o.Ob(7,"option",13),o.wc(8,"-- SELECT SOCIETY --"),o.Nb(),o.vc(9,V,3,4,"option",46),o.Nb(),o.Nb(),o.Nb()}if(2&e){const e=o.Xb();o.xb(6),o.ec("ngModel",e.inspectionData.villageData),o.xb(3),o.ec("ngForOf",e.societyList)}}function J(e,t){if(1&e&&(o.Ob(0,"div",6),o.Ob(1,"div",7),o.Ob(2,"label",48),o.wc(3,"SOCIETY NAME "),o.Ob(4,"span",9),o.wc(5,"*"),o.Nb(),o.Nb(),o.Ob(6,"h5",25),o.Ob(7,"b"),o.wc(8),o.Nb(),o.Nb(),o.Nb(),o.Nb()),2&e){const e=o.Xb();o.xb(8),o.yc("",e.societyName," ")}}function K(e,t){if(1&e&&(o.Ob(0,"div",6),o.Ob(1,"div",7),o.Ob(2,"label",49),o.wc(3,"SOCIETY ID "),o.Ob(4,"span",9),o.wc(5,"*"),o.Nb(),o.Nb(),o.Ob(6,"h5",25),o.Ob(7,"b"),o.wc(8),o.Nb(),o.Nb(),o.Nb(),o.Nb()),2&e){const e=o.Xb();o.xb(8),o.yc("",e.societyCode," ")}}const U=["901","902"],B=[{path:"",component:m,children:[{path:"",redirectTo:"registerFarmerStatus",pathMatch:"full"},{path:"registerFarmer",component:y,canActivate:[a.a],data:{roles:U}},{path:"registerFarmerStatus",component:M,canActivate:[a.a],data:{roles:U}},{path:"SocietyWiseInspection",component:(()=>{class e{constructor(e,t,i,n,s,a,o){this.spinner=e,this.toast=t,this.router=i,this.mcuAPI=n,this.utils=s,this.logger=a,this.session=o,this.societyList=[],this.desigId="",this.inspectionData={districtId:"",mandalId:"",rbkId:"",villageData:"",villageId:"",societyId:"",inspectionDate:"",shift:"",typeOfMilk:"",milkQuantity:"",amount:"",fat:"",SNF:"",insertedBy:"",source:"",vehicleNumber:"",vehicleArrivedTime:"",vehicleDepatureTime:"",noOfCansOfCowmilk:"",noOfCansOfBuffalomilk:"",summaryImg:""},this.maxDate=this.session.getTodayDate(),this.societyCode=this.session.societyId,this.societyName=this.session.societyName}ngOnInit(){""!=this.session.uniqueId&&""!=this.session.desigId||this.router.navigate(["/shared/UnAuthorized"]),this.desigId=this.session.desigId,"901"===this.desigId?(this.inspectionData.rbkId=this.session.rbkId,this.onRbkChange()):"902"===this.desigId&&(this.inspectionData.rbkId=this.session.rbkId,this.inspectionData.societyId=this.session.societyId,this.inspectionData.villageId=this.session.villageId)}onRbkChange(){return Object(L.a)(this,void 0,void 0,(function*(){try{if(this.inspectionData.villageId="",this.inspectionData.societyId="",this.societyList=[],this.utils.isEmpty(this.inspectionData.rbkId))return;const e={districtId:this.session.districtId,rbkId:this.session.rbkId,uniqueId:this.session.uniqueId};this.spinner.show();const t=yield this.mcuAPI.societyListRbkId(e);t.success?this.societyList=t.result:this.toast.info(t.message),this.spinner.hide()}catch(e){this.spinner.hide(),this.utils.catchResponse(e)}}))}onSocietyChange(){return Object(L.a)(this,void 0,void 0,(function*(){try{this.inspectionData.societyId=JSON.parse(this.inspectionData.villageData).VDCS_CODE,this.inspectionData.villageId=JSON.parse(this.inspectionData.villageData).VILLAGE_CODE}catch(e){this.spinner.hide(),this.utils.catchResponse(e)}}))}btnSubmit(){return Object(L.a)(this,void 0,void 0,(function*(){try{if(this.validate()&&confirm("Please Confirm Society Code and Society Name")){this.inspectionData.insertedBy=this.session.userName,this.inspectionData.districtId=this.session.districtId,this.inspectionData.mandalId=this.session.mandalId,this.inspectionData.source="web",this.spinner.show();const e=yield this.mcuAPI.societyWiseInspectionSub(this.inspectionData);e.success?(alert(e.message),window.location.reload()):(this.toast.info(e.message),this.spinner.hide())}}catch(e){this.spinner.hide(),this.utils.catchResponse(e)}}))}validate(){return this.utils.isEmpty(this.inspectionData.villageId)?(this.toast.warning("Please Select Society"),!1):this.utils.isEmpty(this.inspectionData.inspectionDate)?(this.toast.warning("Please Select Inspection Date"),!1):this.utils.isEmpty(this.inspectionData.shift)?(this.toast.warning("Please Select Inspection Shift"),!1):this.utils.isEmpty(this.inspectionData.typeOfMilk)?(this.toast.warning("Please Select Type Of Milk"),!1):this.utils.isEmpty(this.inspectionData.amount)?(this.toast.warning("Please Enter Amount"),!1):this.utils.isNumber(this.inspectionData.amount)?this.utils.isEmpty(this.inspectionData.milkQuantity)?(this.toast.warning("Please Enter Milk In Litres"),!1):this.utils.isNumber(this.inspectionData.milkQuantity)?this.utils.isEmpty(this.inspectionData.fat)?(this.toast.warning("Please Enter FAT"),!1):this.utils.isNumber(this.inspectionData.fat)?this.utils.isEmpty(this.inspectionData.SNF)?(this.toast.warning("Please Enter SNF"),!1):this.utils.isNumber(this.inspectionData.SNF)?this.utils.isEmpty(this.inspectionData.vehicleNumber)?(this.toast.warning("Please Enter Vehicle Number"),!1):this.utils.isEmpty(this.inspectionData.vehicleArrivedTime)?(this.toast.warning("Please Enter Vehicle Arrived Time"),!1):this.utils.isEmpty(this.inspectionData.vehicleDepatureTime)?(this.toast.warning("Please Enter Vehicle Departure Time"),!1):this.utils.isEmpty(this.inspectionData.noOfCansOfCowmilk)?(this.toast.warning("Please Enter No Of Cow Milk Cans"),!1):this.utils.isNumber(this.inspectionData.noOfCansOfCowmilk)?this.utils.isEmpty(this.inspectionData.noOfCansOfBuffalomilk)?(this.toast.warning("Please Enter No Of Buffalo Milk Cans"),!1):this.utils.isNumber(this.inspectionData.noOfCansOfBuffalomilk)?!this.utils.isEmpty(this.inspectionData.summaryImg)||(this.toast.warning("Please Upload Summary Photo"),!1):(this.toast.warning("Please Enter Valid No Of Buffalo Milk Cans"),!1):(this.toast.warning("Please Enter Valid No Of Cow Milk Cans"),!1):(this.toast.warning("Please Enter Valid SNF"),!1):(this.toast.warning("Please Enter Valid FAT"),!1):(this.toast.warning("Please Enter Valid Milk In Litres"),!1):(this.toast.warning("Please Enter Valid Amount"),!1)}onSummaryImageChange(e){return Object(L.a)(this,void 0,void 0,(function*(){try{const t=yield this.utils.encodedString(e,this.utils.fileType.IMAGE,this.utils.fileSize.twoHundredKB);t&&(this.inspectionData.summaryImg=t.replace("data:image/jpeg;base64,",""))}catch(t){this.utils.catchResponse(t)}}))}onMIlkQuantityChange(e){this.milkInLiters=(e/1.03).toFixed(2).toString()}}return e.\u0275fac=function(t){return new(t||e)(o.Jb(r.c),o.Jb(c.a),o.Jb(s.c),o.Jb(A),o.Jb(b.a),o.Jb(x.a),o.Jb(l.a))},e.\u0275cmp=o.Db({type:e,selectors:[["app-society-wise-inspection"]],decls:125,vars:36,consts:[[1,"card"],[1,"card-header","p-2"],[1,"mb-0"],[1,"card-body"],[1,"row"],["class","col-md-4",4,"ngIf"],[1,"col-md-4"],[1,"form-group"],["for","inspectionDate"],[2,"color","red"],[3,"PlaceHolder","selectedDate","maxDate","selectedDateChange"],["for","inspectionShift"],["id","inspectionShift",1,"form-control",3,"ngModel","ngModelChange"],["value",""],["value","M"],["value","E"],["for","typeOfMilk"],["id","typeOfMilk",1,"form-control",3,"ngModel","ngModelChange"],["value","B"],["value","C"],["for","amount"],["id","amount","type","text","placeholder","Please Enter Amount","maxlength","7","autocomplete","off","NumbersOnly","",1,"form-control",3,"ngModel","allowDecimals","allowSign","allowedDecimals","ngModelChange"],["for","milkInLtrs"],[1,"input-group"],["id","milkQuantity","type","text","placeholder","Please Enter Milk In Kgs","maxlength","5","autocomplete","off","NumbersOnly","",1,"form-control",3,"ngModel","allowDecimals","allowSign","allowedDecimals","ngModelChange","input"],[1,"text-success"],["for","fat"],["id","fat","type","text","placeholder","Please Enter FAT","maxlength","5","autocomplete","off","NumbersOnly","",1,"form-control",3,"ngModel","allowDecimals","allowSign","allowedDecimals","ngModelChange"],["for","SNF"],["id","SNF","type","text","placeholder","Please Enter SNF","maxlength","5","autocomplete","off","NumbersOnly","",1,"form-control",3,"ngModel","allowDecimals","allowSign","allowedDecimals","ngModelChange"],["for","vehicleNumber"],["id","vehicleNumber","type","text","placeholder","Please Enter Vehicle Number","maxlength","10","autocomplete","off",1,"form-control",3,"ngModel","ngModelChange"],["for","vehicleArrivedTime"],["id","vehicleArrivedTime","type","time","placeholder","Please Enter vehicle Arrived  Time","maxlength","8","autocomplete","off",1,"form-control",3,"ngModel","ngModelChange"],["for","vehicleDepatureTime"],["id","vehicleDepatureTime","type","time","placeholder","Please Enter Vehicle Departure Time","maxlength","8","autocomplete","off",1,"form-control",3,"ngModel","ngModelChange"],["for","noOfCansOfCowmilk"],["id","noOfCansOfCowmilk","type","text","placeholder","Please Enter No Of Cans For Cow Milk","maxlength","3","autocomplete","off","NumbersOnly","",1,"form-control",3,"ngModel","allowDecimals","allowSign","allowedDecimals","ngModelChange"],["for","noOfCansOfBuffalomilk"],["id","noOfCansOfBuffalomilk","type","text","placeholder","Please Enter No Of Cans For Buffalo Milk","maxlength","3","autocomplete","off","NumbersOnly","",1,"form-control",3,"ngModel","allowDecimals","allowSign","allowedDecimals","ngModelChange"],["for","inspectionImg"],["type","file","id","inspectionImg","accept","image/*","autocomplete","off",1,"form-control","p-0",3,"change"],["align","center",1,"col-md-12"],["type","button",1,"btn","btn-success","btn-sm",3,"click"],["for","villageId"],["id","villageId",1,"form-control",3,"ngModel","ngModelChange","change"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["for","societyName"],["for","societyCode"]],template:function(e,t){1&e&&(o.Ob(0,"div",0),o.Ob(1,"div",1),o.Ob(2,"h5",2),o.wc(3,"DAILY MILK COLLECTION DATA"),o.Nb(),o.Nb(),o.Ob(4,"div",3),o.Ob(5,"div",4),o.vc(6,R,10,2,"div",5),o.vc(7,J,9,1,"div",5),o.vc(8,K,9,1,"div",5),o.Ob(9,"div",6),o.Ob(10,"div",7),o.Ob(11,"label",8),o.wc(12,"MILK COLLECTION DATE "),o.Ob(13,"span",9),o.wc(14,"*"),o.Nb(),o.Nb(),o.Ob(15,"app-date-picker",10),o.Vb("selectedDateChange",(function(e){return t.inspectionData.inspectionDate=e})),o.Nb(),o.Nb(),o.Nb(),o.Ob(16,"div",6),o.Ob(17,"div",7),o.Ob(18,"label",11),o.wc(19,"MILK COLLECTION SHIFT SHIFT "),o.Ob(20,"span",9),o.wc(21,"*"),o.Nb(),o.Nb(),o.Ob(22,"select",12),o.Vb("ngModelChange",(function(e){return t.inspectionData.shift=e})),o.Ob(23,"option",13),o.wc(24,"-- SELECT INSPECTION SHIFT --"),o.Nb(),o.Ob(25,"option",14),o.wc(26,"MORNING"),o.Nb(),o.Ob(27,"option",15),o.wc(28,"EVENING"),o.Nb(),o.Nb(),o.Nb(),o.Nb(),o.Ob(29,"div",6),o.Ob(30,"div",7),o.Ob(31,"label",16),o.wc(32,"TYPE OF MILK "),o.Ob(33,"span",9),o.wc(34,"*"),o.Nb(),o.Nb(),o.Ob(35,"select",17),o.Vb("ngModelChange",(function(e){return t.inspectionData.typeOfMilk=e})),o.Ob(36,"option",13),o.wc(37,"-- SELECT TYPE OF MILK --"),o.Nb(),o.Ob(38,"option",18),o.wc(39,"BUFFALO"),o.Nb(),o.Ob(40,"option",19),o.wc(41,"COW"),o.Nb(),o.Nb(),o.Nb(),o.Nb(),o.Ob(42,"div",6),o.Ob(43,"div",7),o.Ob(44,"label",20),o.wc(45,"AMOUNT "),o.Ob(46,"span",9),o.wc(47,"*"),o.Nb(),o.Nb(),o.Ob(48,"input",21),o.Vb("ngModelChange",(function(e){return t.inspectionData.amount=e})),o.Nb(),o.Nb(),o.Nb(),o.Ob(49,"div",6),o.Ob(50,"div",7),o.Ob(51,"label",22),o.wc(52,"MILK QUANTITY"),o.Ob(53,"span",9),o.wc(54,"*"),o.Nb(),o.Nb(),o.Ob(55,"div",23),o.Ob(56,"input",24),o.Vb("ngModelChange",(function(e){return t.inspectionData.milkQuantity=e}))("input",(function(e){return t.onMIlkQuantityChange(e.target.value)})),o.Nb(),o.Nb(),o.Nb(),o.Nb(),o.Ob(57,"div",6),o.Ob(58,"div",7),o.Ob(59,"label",22),o.wc(60,"MILK IN LITERS "),o.Ob(61,"span",9),o.wc(62,"*"),o.Nb(),o.Nb(),o.Ob(63,"span",25),o.Ob(64,"b"),o.wc(65),o.Nb(),o.Nb(),o.Nb(),o.Nb(),o.Ob(66,"div",6),o.Ob(67,"div",7),o.Ob(68,"label",26),o.wc(69,"FAT % "),o.Ob(70,"span",9),o.wc(71,"*"),o.Nb(),o.Nb(),o.Ob(72,"input",27),o.Vb("ngModelChange",(function(e){return t.inspectionData.fat=e})),o.Nb(),o.Nb(),o.Nb(),o.Ob(73,"div",6),o.Ob(74,"div",7),o.Ob(75,"label",28),o.wc(76,"SNF "),o.Ob(77,"span",9),o.wc(78,"*"),o.Nb(),o.Nb(),o.Ob(79,"input",29),o.Vb("ngModelChange",(function(e){return t.inspectionData.SNF=e})),o.Nb(),o.Nb(),o.Nb(),o.Ob(80,"div",6),o.Ob(81,"div",7),o.Ob(82,"label",30),o.wc(83,"VEHICLE NUMBER "),o.Ob(84,"span",9),o.wc(85,"*"),o.Nb(),o.Nb(),o.Ob(86,"input",31),o.Vb("ngModelChange",(function(e){return t.inspectionData.vehicleNumber=e})),o.Nb(),o.Nb(),o.Nb(),o.Ob(87,"div",6),o.Ob(88,"div",7),o.Ob(89,"label",32),o.wc(90,"VEHICLE ARRIVED TIME "),o.Ob(91,"span",9),o.wc(92,"*"),o.Nb(),o.Nb(),o.Ob(93,"input",33),o.Vb("ngModelChange",(function(e){return t.inspectionData.vehicleArrivedTime=e})),o.Nb(),o.Nb(),o.Nb(),o.Ob(94,"div",6),o.Ob(95,"div",7),o.Ob(96,"label",34),o.wc(97,"VEHICLE DEPARTURE TIME "),o.Ob(98,"span",9),o.wc(99,"*"),o.Nb(),o.Nb(),o.Ob(100,"input",35),o.Vb("ngModelChange",(function(e){return t.inspectionData.vehicleDepatureTime=e})),o.Nb(),o.Nb(),o.Nb(),o.Ob(101,"div",6),o.Ob(102,"div",7),o.Ob(103,"label",36),o.wc(104,"NO OF CANS FOR COW MILK "),o.Ob(105,"span",9),o.wc(106,"*"),o.Nb(),o.Nb(),o.Ob(107,"input",37),o.Vb("ngModelChange",(function(e){return t.inspectionData.noOfCansOfCowmilk=e})),o.Nb(),o.Nb(),o.Nb(),o.Ob(108,"div",6),o.Ob(109,"div",7),o.Ob(110,"label",38),o.wc(111,"NO OF CANS FOR BUFFALO MILK "),o.Ob(112,"span",9),o.wc(113,"*"),o.Nb(),o.Nb(),o.Ob(114,"input",39),o.Vb("ngModelChange",(function(e){return t.inspectionData.noOfCansOfBuffalomilk=e})),o.Nb(),o.Nb(),o.Nb(),o.Ob(115,"div",6),o.Ob(116,"div",7),o.Ob(117,"label",40),o.wc(118,"Summary Image "),o.Ob(119,"span",9),o.wc(120,"*"),o.Nb(),o.Nb(),o.Ob(121,"input",41),o.Vb("change",(function(e){return t.onSummaryImageChange(e)})),o.Nb(),o.Nb(),o.Nb(),o.Ob(122,"div",42),o.Ob(123,"button",43),o.Vb("click",(function(){return t.btnSubmit()})),o.wc(124," SUBMIT "),o.Nb(),o.Nb(),o.Nb(),o.Nb(),o.Nb()),2&e&&(o.xb(6),o.ec("ngIf","901"===t.desigId),o.xb(1),o.ec("ngIf","902"===t.desigId),o.xb(1),o.ec("ngIf","902"===t.desigId),o.xb(7),o.ec("PlaceHolder","Please Select Inspection Date")("selectedDate",t.inspectionData.inspectionDate)("maxDate",t.maxDate),o.xb(7),o.ec("ngModel",t.inspectionData.shift),o.xb(13),o.ec("ngModel",t.inspectionData.typeOfMilk),o.xb(13),o.ec("ngModel",t.inspectionData.amount)("allowDecimals",!0)("allowSign",!1)("allowedDecimals",1),o.xb(8),o.ec("ngModel",t.inspectionData.milkQuantity)("allowDecimals",!0)("allowSign",!1)("allowedDecimals",1),o.xb(9),o.xc(t.milkInLiters),o.xb(7),o.ec("ngModel",t.inspectionData.fat)("allowDecimals",!0)("allowSign",!1)("allowedDecimals",1),o.xb(7),o.ec("ngModel",t.inspectionData.SNF)("allowDecimals",!0)("allowSign",!1)("allowedDecimals",2),o.xb(7),o.ec("ngModel",t.inspectionData.vehicleNumber),o.xb(7),o.ec("ngModel",t.inspectionData.vehicleArrivedTime),o.xb(7),o.ec("ngModel",t.inspectionData.vehicleDepatureTime),o.xb(7),o.ec("ngModel",t.inspectionData.noOfCansOfCowmilk)("allowDecimals",!0)("allowSign",!1)("allowedDecimals",!1),o.xb(7),o.ec("ngModel",t.inspectionData.noOfCansOfBuffalomilk)("allowDecimals",!0)("allowSign",!1)("allowedDecimals",!1))},directives:[n.m,P.a,T.p,T.h,T.i,T.j,T.q,T.b,T.d,F.a,n.l],pipes:[n.g],styles:[""]}),e})(),canActivate:[a.a],data:{roles:U}},{path:"IssueRegister",component:w,canActivate:[a.a],data:{roles:U}},{path:"IssuesList",component:I,canActivate:[a.a],data:{roles:U}},{path:"IssueDetails",component:v,canActivate:[a.a],data:{roles:U}},{path:"FarmerFeedIndent",component:f,canActivate:[a.a],data:{roles:U}}]}];let H=(()=>{class e{}return e.\u0275mod=o.Hb({type:e}),e.\u0275inj=o.Gb({factory:function(t){return new(t||e)},imports:[[s.f.forChild(B)],s.f]}),e})();var _=i("pOEc"),Y=i("njyG"),j=i("PCNd");let Q=(()=>{class e{}return e.\u0275mod=o.Hb({type:e}),e.\u0275inj=o.Gb({factory:function(t){return new(t||e)},imports:[[n.c,H,_.FarmerModule,T.c,T.n,Y.b,j.sharedModule]]}),e})()},"l/Tn":function(e,t,i){"use strict";i.d(t,"a",(function(){return s}));var n=i("fXoL");let s=(()=>{class e{constructor(){}getDatePickerConfig(){return{dateInputFormat:"DD-MM-YYYY",containerClass:"theme-dark-blue",selectFromOtherMonth:!0,isAnimated:!0,adaptivePosition:!0,showWeekNumbers:!1,returnFocusToInput:!0,isDisabled:!0,showClearButton:!0,clearButtonLabel:"Clear",clearPosition:"right",minMode:void 0}}getColor(e=null){return"green"===e?"theme-green":"blue"===e?"theme-blue":"dark-blue"===e?"theme-dark-blue":"red"===e?"theme-red":"orange"===e?"theme-orange":"theme-default"}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=n.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);