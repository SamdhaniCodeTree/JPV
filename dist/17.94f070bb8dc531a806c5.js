(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"+MiJ":function(t,e,i){"use strict";i.d(e,"a",(function(){return p}));var n=i("fXoL"),a=i("l/Tn"),s=i("mZtN"),b=i("mAmA"),o=i("kh7C"),r=i("tyNb"),c=i("hzby"),l=i("3Pt+");const d=["dpDate"];let p=(()=>{class t{constructor(t,e,i,a,s){this.datePicker=t,this.session=e,this.toast=i,this.utils=a,this.router=s,this.bsConfig=this.datePicker.getDatePickerConfig(),this.datedisable=!1,this.selectedDateChange=new n.n,this.bsConfig.containerClass=this.datePicker.getColor("dark-blue")}ngOnInit(){""!=this.session.uniqueId&&""!=this.session.desigId||this.router.navigate(["/shared/UnAuthorized"])}onDateChange(){this.dpDate?this.utils.isEmpty(this.selectedDate)?(this.selectedDate="",this.selectedDateChange.emit(this.selectedDate)):this.dpElementValidation(this.dpDate)?(this.selectedDate=this.dpDate.nativeElement.value,this.selectedDateChange.emit(this.selectedDate)):this.toast.warning("Please Enter Valid Date"):this.selectedDate||(this.selectedDate="",this.selectedDateChange.emit(this.selectedDate))}dpElementValidation(t){if(t&&t.nativeElement&&t.nativeElement.value&&!this.utils.isEmpty(t.nativeElement.value)){if(this.utils.isValidDate(t.nativeElement.value))return!0;t.nativeElement.value=""}return!1}}return t.\u0275fac=function(e){return new(e||t)(n.Jb(a.a),n.Jb(s.a),n.Jb(b.a),n.Jb(o.a),n.Jb(r.c))},t.\u0275cmp=n.Db({type:t,selectors:[["app-date-picker"]],viewQuery:function(t,e){var i;1&t&&n.Bc(d,!0),2&t&&n.mc(i=n.Wb())&&(e.dpDate=i.first)},inputs:{PlaceHolder:"PlaceHolder",maxDate:"maxDate",minDate:"minDate",datedisable:"datedisable",selectedDate:"selectedDate"},outputs:{selectedDateChange:"selectedDateChange"},decls:7,vars:6,consts:[[1,"input-group"],["type","text","bsDatepicker","","readonly","",1,"form-control",2,"background-color","#fff",3,"placeholder","ngModel","bsConfig","minDate","maxDate","disabled","ngModelChange","bsValueChange"],["dp","bsDatepicker","dpDate",""],[1,"input-group-append"],["id","datePickerIcon",1,"input-group-text",2,"cursor","pointer",3,"click"],["aria-hidden","true",1,"fa","fa-calendar"]],template:function(t,e){if(1&t){const t=n.Pb();n.Ob(0,"div",0),n.Ob(1,"input",1,2),n.Vb("ngModelChange",(function(t){return e.selectedDate=t}))("bsValueChange",(function(){return e.onDateChange()})),n.Nb(),n.Ob(4,"div",3),n.Ob(5,"span",4),n.Vb("click",(function(){return n.oc(t),n.nc(2).toggle()})),n.Kb(6,"i",5),n.Nb(),n.Nb(),n.Nb()}2&t&&(n.xb(1),n.fc("placeholder",e.PlaceHolder),n.ec("ngModel",e.selectedDate)("bsConfig",e.bsConfig)("minDate",e.minDate)("maxDate",e.maxDate)("disabled",e.datedisable))},directives:[c.b,l.b,c.a,l.h,l.i],styles:[".theme-dark-blue[_ngcontent-%COMP%]   .btn-clear-wrapper[_ngcontent-%COMP%]   .btn-success[_ngcontent-%COMP%], .theme-dark-blue[_ngcontent-%COMP%]   .btn-today-wrapper[_ngcontent-%COMP%]   .btn-success[_ngcontent-%COMP%]{background-color:#337ab7!important;border-color:#337ab7}"]}),t})()},UTcu:function(t,e,i){"use strict";i.d(e,"a",(function(){return b}));var n=i("fXoL"),a=i("tyNb"),s=i("mZtN");let b=(()=>{class t{constructor(t,e){this.router=t,this.session=e}canActivate(t,e){let i=sessionStorage.getItem("accessToken"),n=sessionStorage.getItem("desigId");if(null==i||""===i)return sessionStorage.clear(),this.router.navigate([""]),!1;if(t.data.roles.length<1)return!0;if(null==n||""===n)return sessionStorage.clear(),this.router.navigate([""]),!1;for(let a=0;a<t.data.roles.length;a++)if(t.data.roles[a]===n)return!0;return sessionStorage.clear(),this.router.navigate([""]),!1}}return t.\u0275fac=function(e){return new(e||t)(n.Sb(a.c),n.Sb(s.a))},t.\u0275prov=n.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},gPix:function(t,e,i){"use strict";i.r(e),i.d(e,"AhModuleModule",(function(){return L}));var n=i("ofXK"),a=i("tyNb"),s=i("UTcu"),b=i("mrSG"),o=i("njyG"),r=i("XNiG"),c=i("fXoL"),l=i("JqCM"),d=i("mAmA"),p=i("un/a"),h=i("tk/3"),N=i("kh7C");let O=(()=>{class t{constructor(t,e){this.httpClient=t,this.utils=e,this.baseURL="",this.baseURL=e.baseUrl()+"api/ahModule/"}ahDashboard(t){return this.httpClient.post(this.baseURL+"ahDashboard",t,this.utils.getPostHttpOptions()).pipe(Object(p.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}ahPendingChangeNOUList(t){return this.httpClient.post(this.baseURL+"ahPendingChangeNOUList",t,this.utils.getPostHttpOptions()).pipe(Object(p.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}ahGroundingPendingList(t){return this.httpClient.post(this.baseURL+"ahGroundingPendingList",t,this.utils.getPostHttpOptions()).pipe(Object(p.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}personDetails(t){return this.httpClient.post(this.baseURL+"personDetails",t,this.utils.getPostHttpOptions()).pipe(Object(p.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}completedList(t){return this.httpClient.post(this.baseURL+"completedList",t,this.utils.getPostHttpOptions()).pipe(Object(p.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}ahStageOneSub(t){return this.httpClient.post(this.baseURL+"ahStageOneSub",t,this.utils.getPostHttpOptions()).pipe(Object(p.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}ahStagetwoSub(t){return this.httpClient.post(this.baseURL+"ahStagetwoSub",t,this.utils.getPostHttpOptions()).pipe(Object(p.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}}return t.\u0275fac=function(e){return new(e||t)(c.Sb(h.b),c.Sb(N.a))},t.\u0275prov=c.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var u=i("cpEJ"),g=i("mZtN");function v(t,e){if(1&t){const t=c.Pb();c.Ob(0,"tr"),c.Ob(1,"td"),c.wc(2),c.Nb(),c.Ob(3,"td"),c.Ob(4,"b"),c.wc(5),c.Nb(),c.Nb(),c.Ob(6,"td"),c.wc(7),c.Nb(),c.Ob(8,"td"),c.wc(9),c.Nb(),c.Ob(10,"td"),c.wc(11),c.Nb(),c.Ob(12,"td"),c.wc(13),c.Nb(),c.Ob(14,"td",21),c.Ob(15,"button",23),c.Vb("click",(function(){c.oc(t);const i=e.$implicit;return c.Xb().btnVerify(i)})),c.wc(16,"VERIFY"),c.Nb(),c.Nb(),c.Nb()}if(2&t){const t=e.$implicit,i=e.index,n=c.Xb();c.xb(2),c.xc(i+1),c.xb(3),c.xc(t.BEN_NAME),c.xb(2),c.xc(t.BEN_FATHER_NAME),c.xb(2),c.xc(t.DOB_DT),c.xb(2),c.xc(t.MOBILE_NUMBER),c.xb(2),c.yc("",t.NATURE_OF_UINT," "),c.xb(1),c.ec("hidden","1"===n.reportType)}}let f=(()=>{class t{constructor(t,e,i,n,a,s,b){this.spinner=t,this.toast=e,this.router=i,this.ahAPI=n,this.utils=a,this.logger=s,this.session=b,this.personList=[],this.headingText="",this.reportType="",this.dtOptions=this.utils.dataTableOptions(),this.dtTrigger=new r.a}ngOnInit(){""!=this.session.uniqueId&&""!=this.session.desigId||this.router.navigate(["/shared/UnAuthorized"]),this.districtName=this.session.districtName,this.loadDashboard()}loadDashboard(){return Object(b.a)(this,void 0,void 0,(function*(){try{this.dashboardDetails=[],this.personList=[];const t={districtId:this.session.rbkGroupId};this.spinner.show();const e=yield this.ahAPI.ahDashboard(t);e.success?this.dashboardDetails=e.result[0]:this.toast.info(e.message),this.rerender(),this.spinner.hide()}catch(t){this.spinner.hide(),this.utils.catchResponse(t)}}))}btnDashboardDetails(t){this.reportType=t,"1"===t?(this.headingText="COMPLETED DETAILS",this.completedDashboardList()):"2"===t?(this.headingText="CHANGE OF NATURE OF UNIT PENDING DETAILS",this.pendingNOUList()):"3"===t&&(this.headingText="DEPARTMENT GROUND PENDING DETAILS",this.pendingGroundingList())}pendingNOUList(){return Object(b.a)(this,void 0,void 0,(function*(){try{this.personList=[];const t={districtId:this.session.rbkGroupId};this.spinner.show();const e=yield this.ahAPI.ahPendingChangeNOUList(t);e.success?this.personList=e.result:this.toast.info(e.message),this.rerender(),this.spinner.hide()}catch(t){this.spinner.hide(),this.utils.catchResponse(t)}}))}pendingGroundingList(){return Object(b.a)(this,void 0,void 0,(function*(){try{this.personList=[];const t={districtId:this.session.rbkGroupId};this.spinner.show();const e=yield this.ahAPI.ahGroundingPendingList(t);e.success?this.personList=e.result:this.toast.info(e.message),this.rerender(),this.spinner.hide()}catch(t){this.spinner.hide(),this.utils.catchResponse(t)}}))}completedDashboardList(){return Object(b.a)(this,void 0,void 0,(function*(){try{this.personList=[];const t={districtId:this.session.rbkGroupId};this.spinner.show();const e=yield this.ahAPI.completedList(t);e.success?this.personList=e.result:this.toast.info(e.message),this.rerender(),this.spinner.hide()}catch(t){this.spinner.hide(),this.utils.catchResponse(t)}}))}btnVerify(t){const e=this.utils.encrypt(JSON.stringify({benId:t.BEN_CODE}));"2"===this.reportType?this.router.navigate(["/ahModule/NatureOfUnitChange"],{queryParams:{request:e}}):"3"===this.reportType&&this.router.navigate(["/ahModule/Grounding"],{queryParams:{request:e}})}ngOnDestroy(){this.dtTrigger.unsubscribe()}ngAfterViewInit(){this.dtTrigger.next()}rerender(){this.dtElement.dtInstance.then(t=>{t.clear(),t.destroy(),this.dtTrigger.next()})}}return t.\u0275fac=function(e){return new(e||t)(c.Jb(l.c),c.Jb(d.a),c.Jb(a.c),c.Jb(O),c.Jb(N.a),c.Jb(u.a),c.Jb(g.a))},t.\u0275cmp=c.Db({type:t,selectors:[["app-cheyutha-list"]],viewQuery:function(t,e){var i;1&t&&c.Bc(o.a,!0),2&t&&c.mc(i=c.Wb())&&(e.dtElement=i.first)},decls:67,vars:13,consts:[[1,"row"],[1,"col","mb-2"],[1,"stats-card","success",3,"ngClass","click"],[1,"overlay"],[1,"card-body"],[1,"d-flex","justify-content-between"],[1,"stats-text"],[1,"text-uppercase","text-muted","mb-1"],[1,"font-weight-bold","mb-0"],[1,"circle"],[1,"fas","fa-check-double"],[1,"stats-card","pending",3,"ngClass","click"],[1,"fas","fa-hourglass-half"],[1,"row","mt-3",3,"hidden"],[1,"col-md-12"],[1,"card"],[1,"card-header"],[1,"mb-0","secondary-heading","pb-0"],[1,"col-md-12","table-responsive"],["datatable","",1,"table","table-striped","ah-table","text-center",3,"dtOptions","dtTrigger"],[1,"bg-success","text-white"],[3,"hidden"],[4,"ngFor","ngForOf"],["type","button",1,"btn","btn-primary","btn-sm",3,"click"]],template:function(t,e){1&t&&(c.Ob(0,"div",0),c.Ob(1,"div",1),c.Ob(2,"div",2),c.Vb("click",(function(){return e.btnDashboardDetails("1")})),c.Kb(3,"div",3),c.Ob(4,"div",4),c.Ob(5,"div",5),c.Ob(6,"div",6),c.Ob(7,"p",7),c.Ob(8,"small"),c.wc(9,"COMPLETED"),c.Nb(),c.Nb(),c.Ob(10,"h5",8),c.wc(11),c.Nb(),c.Nb(),c.Ob(12,"div",9),c.Kb(13,"i",10),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Ob(14,"div",1),c.Ob(15,"div",11),c.Vb("click",(function(){return e.btnDashboardDetails("2")})),c.Kb(16,"div",3),c.Ob(17,"div",4),c.Ob(18,"div",5),c.Ob(19,"div",6),c.Ob(20,"p",7),c.Ob(21,"small"),c.wc(22,"CHANGE OF NATURE OF UNIT PENDING DETAILS"),c.Nb(),c.Nb(),c.Ob(23,"h5",8),c.wc(24),c.Nb(),c.Nb(),c.Ob(25,"div",9),c.Kb(26,"i",12),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Ob(27,"div",1),c.Ob(28,"div",11),c.Vb("click",(function(){return e.btnDashboardDetails("3")})),c.Kb(29,"div",3),c.Ob(30,"div",4),c.Ob(31,"div",5),c.Ob(32,"div",6),c.Ob(33,"p",7),c.Ob(34,"small"),c.wc(35,"DEPARTMENT GROUND PENDING"),c.Nb(),c.Nb(),c.Ob(36,"h5",8),c.wc(37),c.Nb(),c.Nb(),c.Ob(38,"div",9),c.Kb(39,"i",12),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Ob(40,"div",13),c.Ob(41,"div",14),c.Ob(42,"div",15),c.Ob(43,"div",16),c.Ob(44,"h5",17),c.wc(45),c.Nb(),c.Nb(),c.Ob(46,"div",4),c.Ob(47,"div",18),c.Ob(48,"table",19),c.Ob(49,"thead",20),c.Ob(50,"tr"),c.Ob(51,"th"),c.wc(52,"S.No."),c.Nb(),c.Ob(53,"th"),c.wc(54,"BENEFICIARY NAME"),c.Nb(),c.Ob(55,"th"),c.wc(56,"BENEFICIARY FATHER NAME"),c.Nb(),c.Ob(57,"th"),c.wc(58,"DATE OF BIRTH"),c.Nb(),c.Ob(59,"th"),c.wc(60,"MOBILE NUMBER"),c.Nb(),c.Ob(61,"th"),c.wc(62,"NATURE OF UNIT"),c.Nb(),c.Ob(63,"th",21),c.wc(64,"ACTION"),c.Nb(),c.Nb(),c.Nb(),c.Ob(65,"tbody",21),c.vc(66,v,17,7,"tr",22),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb()),2&t&&(c.xb(2),c.ec("ngClass","1"===e.reportType?"active":""),c.xb(9),c.xc(e.dashboardDetails.COMPLETED),c.xb(4),c.ec("ngClass","2"===e.reportType?"active":""),c.xb(9),c.xc(e.dashboardDetails.PENDING_CHANGE_NATURE_OF_UNIT),c.xb(4),c.ec("ngClass","3"===e.reportType?"active":""),c.xb(9),c.xc(e.dashboardDetails.DEPARTMENT_GROUNDING_PENDING),c.xb(3),c.ec("hidden",(null==e.personList?null:e.personList.length)<1),c.xb(5),c.xc(e.headingText),c.xb(3),c.ec("dtOptions",e.dtOptions)("dtTrigger",e.dtTrigger),c.xb(15),c.ec("hidden","1"===e.reportType),c.xb(2),c.ec("hidden",(null==e.personList?null:e.personList.length)<1),c.xb(1),c.ec("ngForOf",e.personList))},directives:[n.k,o.a,n.l],styles:[""]}),t})();var D=i("d//k");const m=function(){return{exact:!0}};let w=(()=>{class t{constructor(t,e,i,n,a,s){this.spinner=t,this.toast=e,this.router=i,this.session=n,this.utils=a,this.loginAPI=s}ngOnInit(){""!=this.session.uniqueId&&""!=this.session.desigId||this.router.navigate(["/shared/UnAuthorized"]),this.userName=this.session.userName,this.lastLoginTime=this.session.lastLoginTime,"0"===this.session.passwordUpdate&&this.utils.updatePassword(this.session.desigId)}btnLogout(){if(confirm("are you sure want to logout ?")){const t={userName:this.userName};this.spinner.show(),this.loginAPI.logout(t).then(t=>{t.success?(alert(t.message),sessionStorage.clear(),this.session.clearSession(),this.router.navigate(["/"])):this.toast.info(t.message),this.spinner.hide()}).catch(t=>{this.spinner.hide(),this.utils.catchResponse(t)})}}btnForgetPassword(){this.utils.updatePassword(this.session.desigId)}btnReports(){let t=this.utils.reportsSSOUrl()+this.session.accessToken;window.open(t,"_Blank")}}return t.\u0275fac=function(e){return new(e||t)(c.Jb(l.c),c.Jb(d.a),c.Jb(a.c),c.Jb(g.a),c.Jb(N.a),c.Jb(D.a))},t.\u0275cmp=c.Db({type:t,selectors:[["app-common"]],decls:72,vars:6,consts:[[1,"navbar","navbar-expand-lg","navbar-dark","blue-green-gradient"],[1,"navbar-brand","d-flex","align-items-center",2,"cursor","pointer"],["src","https://apddcf.ap.gov.in/cdn/img/ap-logo.png",1,"brand-logo",2,"width","50px"],[1,"brand-text","text-white","mb-0","font-weight-normal","ml-1"],["id","basicExampleNav",1,"collapse","navbar-collapse"],[1,"navbar-nav","ml-auto"],[1,"nav-item","text-right"],["src","https://apddcf.ap.gov.in/cdn/img/CM.png",1,"brand-logo",2,"width","50px"],[1,"text-center"],[2,"font-size","12px","margin-bottom","0","color","#fff"],[1,"menu-navbar","navbar","navbar-expand-lg","navbar-dark","primary-color-dark","py-md-0","text-white"],[1,"navbar-brand","d-md-none","d-block",2,"cursor","pointer"],["type","button","data-toggle","collapse","data-target","#navbarSupportedContent-333","aria-controls","navbarSupportedContent-333","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarSupportedContent-333",1,"collapse","navbar-collapse"],[1,"navbar-nav","mr-auto","align-items-center"],["routerLinkActive","active",1,"nav-item",3,"routerLinkActiveOptions"],["routerLink","CheyuthaList",1,"nav-link"],[1,"fas","fa-tachometer-alt"],["routerLinkActive","active",1,"nav-item","dropdown"],["id","navbarDropdownMenuLink-333","data-toggle","dropdown","aria-haspopup","true","aria-expanded","false",1,"nav-link","dropdown-toggle",2,"cursor","pointer"],[1,"fab","fa-wpforms"],["aria-labelledby","navbarDropdownMenuLink-333",1,"dropdown-menu","dropdown-primary"],["routerLink","CheyuthaList","routerLinkActive","active",1,"dropdown-item",3,"routerLinkActiveOptions"],["routerLinkActive","active",1,"nav-item"],[1,"nav-link",2,"cursor","pointer",3,"click"],[1,"navbar-nav","ml-auto","nav-flex-icons"],["id","navbarDropdownMenuLink-333","data-toggle","dropdown","aria-haspopup","true","aria-expanded","false",1,"nav-link","dropdown-toggle","d-flex","align-items-center",2,"cursor","pointer"],[1,"mb-0","mr-1"],[1,"fas","fa-user"],["aria-labelledby","navbarDropdownMenuLink-333",1,"dropdown-menu","dropdown-menu-right","dropdown-primary"],[1,"dropdown-item",2,"cursor","pointer",3,"click"],[1,"fas","fa-key"],[1,"fas","fa-sign-out-alt"],[1,"my-1"],[1,"dropdown-item","text-center",2,"cursor","pointer"],[1,"text-danger"],["id","page-container"],["id","content-wrap"],[1,"container-fluid"],[1,"row"],[1,"col-md-11","mx-auto"],[1,"page-footer","font-small","blue"],[1,"footer-copyright","text-center","pt-3"],[2,"cursor","pointer","color","#fff"],["src","https://apddcf.ap.gov.in/cdn/img/apddcf-circle.png",2,"width","30px"]],template:function(t,e){1&t&&(c.Ob(0,"nav",0),c.Ob(1,"a",1),c.Kb(2,"img",2),c.Ob(3,"h5",3),c.wc(4," Andhra Pradesh Dairy Development Cooperative Federation Limited (APDDCF) "),c.Nb(),c.Nb(),c.Ob(5,"div",4),c.Ob(6,"ul",5),c.Ob(7,"li",6),c.Ob(8,"a",1),c.Kb(9,"img",7),c.Ob(10,"div",8),c.Ob(11,"h6",3),c.wc(12," Sri Nara Chandrababu Naidu "),c.Nb(),c.Ob(13,"p",9),c.wc(14," Hon\u2019ble Chief Minister, "),c.Kb(15,"br"),c.wc(16," Andhra Pradesh "),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Ob(17,"nav",10),c.Ob(18,"a",11),c.wc(19,"MENU"),c.Nb(),c.Ob(20,"button",12),c.Kb(21,"span",13),c.Nb(),c.Ob(22,"div",14),c.Ob(23,"ul",15),c.Ob(24,"li",16),c.Ob(25,"a",17),c.Kb(26,"i",18),c.wc(27," Cheyutha List "),c.Nb(),c.Nb(),c.Ob(28,"li",19),c.Ob(29,"a",20),c.Kb(30,"i",21),c.wc(31," Menu "),c.Nb(),c.Ob(32,"div",22),c.Ob(33,"a",23),c.wc(34," Cheyutha List "),c.Nb(),c.Nb(),c.Nb(),c.Ob(35,"li",24),c.Ob(36,"a",25),c.Vb("click",(function(){return e.btnReports()})),c.Kb(37,"i",21),c.wc(38," Reports "),c.Nb(),c.Nb(),c.Nb(),c.Ob(39,"ul",26),c.Ob(40,"li",19),c.Ob(41,"a",27),c.Ob(42,"h6",28),c.wc(43," Welcome "),c.Ob(44,"b"),c.wc(45),c.Nb(),c.Nb(),c.Kb(46,"i",29),c.Nb(),c.Ob(47,"div",30),c.Ob(48,"a",31),c.Vb("click",(function(){return e.btnForgetPassword()})),c.Kb(49,"i",32),c.wc(50," Forget Password "),c.Nb(),c.Ob(51,"a",31),c.Vb("click",(function(){return e.btnLogout()})),c.Kb(52,"i",33),c.wc(53," Logout"),c.Nb(),c.Kb(54,"hr",34),c.Ob(55,"a",35),c.Ob(56,"span"),c.wc(57,"Last logged in: "),c.Kb(58,"br"),c.Ob(59,"b",36),c.wc(60),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Ob(61,"div",37),c.Ob(62,"div",38),c.Ob(63,"div",39),c.Ob(64,"div",40),c.Ob(65,"div",41),c.Kb(66,"router-outlet"),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Ob(67,"footer",42),c.Ob(68,"div",43),c.Ob(69,"a",44),c.Kb(70,"img",45),c.wc(71," Andhra Pradesh Dairy Development Cooperative Federation Limited (APDDCF) "),c.Nb(),c.Nb(),c.Nb(),c.Nb()),2&t&&(c.xb(24),c.ec("routerLinkActiveOptions",c.hc(4,m)),c.xb(9),c.ec("routerLinkActiveOptions",c.hc(5,m)),c.xb(12),c.xc(e.userName),c.xb(15),c.xc(e.lastLoginTime))},directives:[a.d,a.e,a.g],styles:[""]}),t})();var T=i("oFKG"),A=i("+MiJ");let I=(()=>{class t{constructor(t,e,i,n,a,s,b,o,r){this.spinner=t,this.toast=e,this.router=i,this.ahAPI=n,this.utils=a,this.logger=s,this.session=b,this.master=o,this.route=r,this.input="",this.applicantData={benId:"",animalHealthCardIssueDate:"",photoOfUnit:""},this.maxDate=this.session.getTodayDate(),r.queryParams.subscribe(t=>this.input=t.request)}ngOnInit(){""!=this.session.uniqueId&&""!=this.session.desigId||this.router.navigate(["/shared/UnAuthorized"]);const t=JSON.parse(this.utils.decrypt(this.input));this.applicantData.benId=t.benId,this.loadPersonDetails()}loadPersonDetails(){return Object(b.a)(this,void 0,void 0,(function*(){try{this.personDetails="";const t={benId:this.applicantData.benId};this.spinner.show();const e=yield this.ahAPI.personDetails(t);e.success?this.personDetails=e.result[0]:this.toast.info(e.message),this.spinner.hide()}catch(t){this.spinner.hide(),this.utils.catchResponse(t)}}))}btnSubmit(){return Object(b.a)(this,void 0,void 0,(function*(){try{if(""===this.applicantData.animalHealthCardIssueDate||null==this.applicantData.animalHealthCardIssueDate)return void this.toast.warning("Please Select Animal Health Card Issue Date");if(""===this.applicantData.photoOfUnit||null==this.applicantData.photoOfUnit)return void this.toast.warning("Please Upload Photo Of Unit With Latitude/Longitude");const t={benId:this.applicantData.benId,animalHealthCardIssueDate:this.applicantData.animalHealthCardIssueDate,photoOfUnit:this.applicantData.photoOfUnit};this.spinner.show();const e=yield this.ahAPI.ahStagetwoSub(t);e.success?(alert(e.message),this.router.navigate(["/ahModule/CheyuthaList"])):this.toast.info(e.message),this.spinner.hide()}catch(t){this.spinner.hide(),this.utils.catchResponse(t)}}))}onphotoOfUnitImgChange(t){return Object(b.a)(this,void 0,void 0,(function*(){try{const e=yield this.utils.encodedString(t,this.utils.fileType.IMAGE,this.utils.fileSize.hundredKB);e&&(this.applicantData.photoOfUnit=e.replace("data:image/jpeg;base64,",""))}catch(e){this.utils.catchResponse(e)}}))}}return t.\u0275fac=function(e){return new(e||t)(c.Jb(l.c),c.Jb(d.a),c.Jb(a.c),c.Jb(O),c.Jb(N.a),c.Jb(u.a),c.Jb(g.a),c.Jb(T.a),c.Jb(a.a))},t.\u0275cmp=c.Db({type:t,selectors:[["app-grounding"]],decls:163,vars:22,consts:[[1,"card"],[1,"card-header","p-2"],[1,"mb-0"],[1,"card-body"],[1,"row"],[1,"col-md-4"],[1,"form-group"],[2,"color","green"],["for","BEN_FATHER_NAME"],["for","DOB_DT"],["for","animalHealthCardIssueDate"],[2,"color","red"],[3,"PlaceHolder","selectedDate","maxDate","selectedDateChange"],["for","photoOfUnit"],["type","file","id","photoOfUnitImgUpload","accept","image/*","autocomplete","off",1,"form-control","p-0",3,"change"],["ultraSonicStirrerImgUpload",""],["align","center",1,"col-md-12"],["type","button",1,"btn","btn-success","btn-sm",3,"click"]],template:function(t,e){1&t&&(c.Ob(0,"div",0),c.Ob(1,"div",1),c.Ob(2,"h5",2),c.wc(3,"BANK MANAGER GROUNDING"),c.Nb(),c.Nb(),c.Ob(4,"div",3),c.Ob(5,"div",4),c.Ob(6,"div",5),c.Ob(7,"div",6),c.Ob(8,"label"),c.wc(9," APPLICANT NAME : "),c.Ob(10,"span",7),c.Ob(11,"b"),c.wc(12),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Ob(13,"div",5),c.Ob(14,"div"),c.Ob(15,"label",8),c.wc(16," FATHER'S /HUSBAND'S NAME : "),c.Ob(17,"span",7),c.Ob(18,"b"),c.wc(19),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Ob(20,"div",5),c.Ob(21,"div",6),c.Ob(22,"label"),c.wc(23," AADHAR : "),c.Ob(24,"span",7),c.Ob(25,"b"),c.wc(26),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Ob(27,"div",5),c.Ob(28,"div",6),c.Ob(29,"label"),c.wc(30," SB ACCOUNT NO. : "),c.Ob(31,"span",7),c.Ob(32,"b"),c.wc(33),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Ob(34,"div",5),c.Ob(35,"div",6),c.Ob(36,"label"),c.wc(37," IFSC CODE : "),c.Ob(38,"span",7),c.Ob(39,"b"),c.wc(40),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Ob(41,"div",5),c.Ob(42,"div"),c.Ob(43,"label",9),c.wc(44," DATE OF BIRTH : "),c.Ob(45,"span",7),c.Ob(46,"b"),c.wc(47),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Ob(48,"div",5),c.Ob(49,"div",6),c.Ob(50,"label"),c.wc(51," NATURE OF UNIT : "),c.Ob(52,"span",7),c.Ob(53,"b"),c.wc(54),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Ob(55,"div",5),c.Ob(56,"div",6),c.Ob(57,"label"),c.wc(58," ANIMAL COST : "),c.Ob(59,"span",7),c.Ob(60,"b"),c.wc(61),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Ob(62,"div",5),c.Ob(63,"div",6),c.Ob(64,"label"),c.wc(65," INSURANCE : "),c.Ob(66,"span",7),c.Ob(67,"b"),c.wc(68),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Ob(69,"div",5),c.Ob(70,"div",6),c.Ob(71,"label"),c.wc(72," TRANSPORTATION : "),c.Ob(73,"span",7),c.Ob(74,"b"),c.wc(75),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Ob(76,"div",5),c.Ob(77,"div",6),c.Ob(78,"label"),c.wc(79," TOTAL PROJECT COST : "),c.Ob(80,"span",7),c.Ob(81,"b"),c.wc(82),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Ob(83,"div",5),c.Ob(84,"div",6),c.Ob(85,"label"),c.wc(86," MARGIN : "),c.Ob(87,"span",7),c.Ob(88,"b"),c.wc(89),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Ob(90,"div",5),c.Ob(91,"div",6),c.Ob(92,"label"),c.wc(93," BANK LOAN : "),c.Ob(94,"span",7),c.Ob(95,"b"),c.wc(96),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Ob(97,"div",5),c.Ob(98,"div",6),c.Ob(99,"label"),c.wc(100," APPLICATION HARD COPY SENT TO BANK DATE : "),c.Kb(101,"br"),c.Ob(102,"span",7),c.Ob(103,"b"),c.wc(104),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Ob(105,"div",5),c.Ob(106,"div",6),c.Ob(107,"label"),c.wc(108," SUBMISSION DATE : "),c.Kb(109,"br"),c.Ob(110,"span",7),c.Ob(111,"b"),c.wc(112),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Ob(113,"div",5),c.Ob(114,"div",6),c.Ob(115,"label"),c.wc(116," LOAN SANCTION DATE : "),c.Kb(117,"br"),c.Ob(118,"span",7),c.Ob(119,"b"),c.wc(120),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Ob(121,"div",5),c.Ob(122,"div",6),c.Ob(123,"label"),c.wc(124," LOAN AMOUNT : "),c.Kb(125,"br"),c.Ob(126,"span",7),c.Ob(127,"b"),c.wc(128),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Ob(129,"div",5),c.Ob(130,"div",6),c.Ob(131,"label"),c.wc(132," DOCUMENTATION COMPLETION DATE : "),c.Kb(133,"br"),c.Ob(134,"span",7),c.Ob(135,"b"),c.wc(136),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Ob(137,"div",5),c.Ob(138,"div",6),c.Ob(139,"label"),c.wc(140," GROUNDING DATE : "),c.Kb(141,"br"),c.Ob(142,"span",7),c.Ob(143,"b"),c.wc(144),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Ob(145,"div",5),c.Ob(146,"div",6),c.Ob(147,"label",10),c.wc(148," ANIMAL HEALTH CARD ISSUE DATE "),c.Ob(149,"span",11),c.wc(150,"*"),c.Nb(),c.Nb(),c.Ob(151,"app-date-picker",12),c.Vb("selectedDateChange",(function(t){return e.applicantData.animalHealthCardIssueDate=t})),c.Nb(),c.Nb(),c.Nb(),c.Ob(152,"div",5),c.Ob(153,"div",6),c.Ob(154,"label",13),c.wc(155," PHOTO OF THE UNIT WITH LATITUDE/LONGITUDE "),c.Ob(156,"span",11),c.wc(157,"*"),c.Nb(),c.Nb(),c.Ob(158,"input",14,15),c.Vb("change",(function(t){return e.onphotoOfUnitImgChange(t)})),c.Nb(),c.Nb(),c.Nb(),c.Ob(160,"div",16),c.Ob(161,"button",17),c.Vb("click",(function(){return e.btnSubmit()})),c.wc(162," SUBMIT "),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb()),2&t&&(c.xb(12),c.xc(e.personDetails.BEN_NAME),c.xb(7),c.xc(e.personDetails.BEN_FATHER_NAME),c.xb(7),c.xc(e.personDetails.UID_NUM),c.xb(7),c.xc(e.personDetails.ACCOUNT_NUMBER),c.xb(7),c.xc(e.personDetails.IFSC_CODE),c.xb(7),c.xc(e.personDetails.DOB_DT),c.xb(7),c.xc(e.personDetails.NATURE_OF_UINT),c.xb(7),c.xc(e.personDetails.ANIMAL_COST),c.xb(7),c.xc(e.personDetails.INSURANCE),c.xb(7),c.xc(e.personDetails.TRANSPORTATION),c.xb(7),c.xc(e.personDetails.TOT_PROJECT_COST),c.xb(7),c.xc(e.personDetails.MARGIN),c.xb(7),c.xc(e.personDetails.BANK_LOAN),c.xb(8),c.xc(e.personDetails.APP_HARD_COPY_SENT_DATE),c.xb(8),c.xc(e.personDetails.SUBMISSION_DATE),c.xb(8),c.xc(e.personDetails.LOAN_SANCTION_DATE),c.xb(8),c.xc(e.personDetails.LOAN_AMOUNT),c.xb(8),c.xc(e.personDetails.COMPLETION_DOCUMENTATION_DATE),c.xb(8),c.xc(e.personDetails.GROUNDING_DATE),c.xb(7),c.ec("PlaceHolder","Please Select Animal Health Card Issue Date")("selectedDate",e.applicantData.animalHealthCardIssueDate)("maxDate",e.maxDate))},directives:[A.a],styles:[""]}),t})();var C=i("3Pt+");function E(t,e){if(1&t){const t=c.Pb();c.Ob(0,"div",44),c.Ob(1,"div",45),c.Ob(2,"div",46),c.Ob(3,"h4",47),c.wc(4,"NATURE OF UNIT"),c.Nb(),c.Ob(5,"a",48),c.Vb("click",(function(){return c.oc(t),c.Xb().showNatureOfUnitPopup=!1})),c.Ob(6,"span"),c.wc(7,"\xd7"),c.Nb(),c.Nb(),c.Nb(),c.Ob(8,"div",49),c.Ob(9,"div",50),c.Ob(10,"div",51),c.Ob(11,"div",6),c.Ob(12,"label",52),c.wc(13,"NATURE OF UNIT "),c.Ob(14,"span",25),c.wc(15,"*"),c.Nb(),c.Nb(),c.Ob(16,"select",53),c.Vb("ngModelChange",(function(e){return c.oc(t),c.Xb().applicantData.natureOfUnit=e})),c.Ob(17,"option",27),c.wc(18,"-- SELECT NATURE OF UNIT --"),c.Nb(),c.Ob(19,"option",54),c.wc(20,"Live Stock-SHEEP"),c.Nb(),c.Ob(21,"option",55),c.wc(22,"Live Stock-GOAT"),c.Nb(),c.Ob(23,"option",56),c.wc(24,"Live Stock-COW"),c.Nb(),c.Ob(25,"option",57),c.wc(26,"Live Stock-BUFFALO"),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Ob(27,"div",58),c.Ob(28,"button",59),c.Vb("click",(function(){return c.oc(t),c.Xb().btnUpdateNatureOfUnit()})),c.wc(29," UPDATE "),c.Nb(),c.Ob(30,"button",60),c.Vb("click",(function(){return c.oc(t),c.Xb().showNatureOfUnitPopup=!1})),c.wc(31," Close "),c.Nb(),c.Nb(),c.Nb(),c.Nb()}if(2&t){const t=c.Xb();c.xb(16),c.ec("ngModel",t.applicantData.natureOfUnit)}}const U=["103"],x=[{path:"",component:w,children:[{path:"",redirectTo:"CheyuthaList",pathMatch:"full"},{path:"CheyuthaList",component:f,canActivate:[s.a],data:{roles:U}},{path:"NatureOfUnitChange",component:(()=>{class t{constructor(t,e,i,n,a,s,b,o,r){this.spinner=t,this.toast=e,this.router=i,this.ahAPI=n,this.utils=a,this.logger=s,this.session=b,this.master=o,this.route=r,this.natureOfUnitList=[],this.showNatureOfUnitPopup=!1,this.input="",this.applicantData={benId:"",natureOfUnit:"",willingBenficiary:"",financeType:"",submissionDate:"",insertedBy:""},this.maxDate=this.session.getTodayDate(),r.queryParams.subscribe(t=>this.input=t.request)}ngOnInit(){""!=this.session.uniqueId&&""!=this.session.desigId||this.router.navigate(["/shared/UnAuthorized"]);const t=JSON.parse(this.utils.decrypt(this.input));this.applicantData.benId=t.benId,this.natureOfUnitList=this.master.natureOfUnitList,this.loadPersonDetails()}loadPersonDetails(){return Object(b.a)(this,void 0,void 0,(function*(){try{this.personDetails="";const t={benId:this.applicantData.benId};this.spinner.show();const e=yield this.ahAPI.personDetails(t);e.success?(this.personDetails=e.result[0],this.applicantData.natureOfUnit=this.personDetails.NATURE_OF_UINT):this.toast.info(e.message),this.spinner.hide()}catch(t){this.spinner.hide(),this.utils.catchResponse(t)}}))}btnUpdateNOUPopUp(){this.showNatureOfUnitPopup=!0}btnUpdateNatureOfUnit(){""!==this.applicantData.natureOfUnit&&null!=this.applicantData.natureOfUnit?(this.personDetails.NATURE_OF_UINT=this.applicantData.natureOfUnit,this.showNatureOfUnitPopup=!1):this.toast.warning("Please Select Nature Of Unit")}btnSubmit(){return Object(b.a)(this,void 0,void 0,(function*(){try{if(""===this.applicantData.natureOfUnit||null==this.applicantData.natureOfUnit)return void this.toast.warning("Please Select Nature Of Unit");if(""===this.applicantData.willingBenficiary||null==this.applicantData.willingBenficiary)return void this.toast.warning("Please Select willing status of benficiery");if(""===this.applicantData.financeType||null==this.applicantData.financeType)return void this.toast.warning("Please Select Finance Type");if(""===this.applicantData.submissionDate||null==this.applicantData.submissionDate)return void this.toast.warning("Please Select Submission Date");const t={benId:this.applicantData.benId,submissionDate:this.applicantData.submissionDate,natureOfUnit:this.personDetails.NATURE_OF_UINT,willingBenficiary:this.applicantData.willingBenficiary,financeType:this.applicantData.financeType};this.spinner.show();const e=yield this.ahAPI.ahStageOneSub(t);e.success?(alert(e.message),this.router.navigate(["/ahModule/CheyuthaList"])):this.toast.info(e.message),this.spinner.hide()}catch(t){this.spinner.hide(),this.utils.catchResponse(t)}}))}}return t.\u0275fac=function(e){return new(e||t)(c.Jb(l.c),c.Jb(d.a),c.Jb(a.c),c.Jb(O),c.Jb(N.a),c.Jb(u.a),c.Jb(g.a),c.Jb(T.a),c.Jb(a.a))},t.\u0275cmp=c.Db({type:t,selectors:[["app-nature-of-unit-change"]],decls:151,vars:21,consts:[[1,"card"],[1,"card-header","p-2"],[1,"mb-0"],[1,"card-body"],[1,"row"],[1,"col-md-4"],[1,"form-group"],["for","BEN_NAME"],[2,"color","green"],["for","BEN_FATHER_NAME"],["for","UID_NUM"],["for","ACCOUNT_NUMBER"],["for","IFSC_CODE"],["for","DOB_DT"],["for","NATURE_OF_UINT"],[1,"input-group-append"],["type","submit","id","button-addon2",1,"btn","btn-primary","btn-sm","m-0","btn-rounded",3,"click"],[1,"text-danger","h6"],[1,"ah-radio-buttons"],[1,"custom-control","custom-radio","custom-control-inline"],["type","radio","name","willingBenficiary","id","willingBenficiary1","value","1","autocomplete","off",1,"custom-control-input",3,"ngModel","ngModelChange"],["for","willingBenficiary1",1,"custom-control-label"],["type","radio","name","willingBenficiary","id","willingBenficiary2","value","0","autocomplete","off",1,"custom-control-input",3,"ngModel","ngModelChange"],["for","willingBenficiary2",1,"custom-control-label"],["for","financeType"],[2,"color","red"],["id","financeType",1,"form-control",3,"ngModel","ngModelChange"],["value",""],["value","1"],["value","2"],["value","3"],["value","4"],["for","ANIMAL_COST"],["for","INSURANCE"],["for","TRANSPORTATION"],["for","TOT_PROJECT_COST"],["for","MARGIN"],["for","BANK_LOAN"],["for","APP_HARD_COPY_SENT_DATE"],["for","submissionDate"],[3,"PlaceHolder","selectedDate","maxDate","selectedDateChange"],["align","center",1,"col-md-12"],["type","button",1,"btn","btn-success","btn-sm",3,"click"],["class","popup-modal",4,"ngIf"],[1,"popup-modal"],[1,"popup-content"],[1,"popup-header"],[1,"title"],["type","button",1,"close",2,"cursor","pointer",3,"click"],[1,"popup-body"],[1,"row","justify-content-center","align-items-center"],[1,"col-md-12"],["for","natureOfUnit"],["id","natureOfUnit",1,"form-control",3,"ngModel","ngModelChange"],["value","Live Stock-SHEEP"],["value","Live Stock-GOAT"],["value","Live Stock-COW"],["value","Live Stock-BUFFALO"],[1,"popup-footer","justify-content-center"],["type","button",1,"btn","btn-outline-success","btn-sm","btn-rounded",3,"click"],["type","button",1,"btn","btn-outline-danger","btn-sm","btn-rounded",3,"click"]],template:function(t,e){1&t&&(c.Ob(0,"div",0),c.Ob(1,"div",1),c.Ob(2,"h5",2),c.wc(3,"AH NATURE OF UNIT CHANGE"),c.Nb(),c.Nb(),c.Ob(4,"div",3),c.Ob(5,"div",4),c.Ob(6,"div",5),c.Ob(7,"div",6),c.Ob(8,"label",7),c.wc(9," APPLICANT NAME : "),c.Ob(10,"span",8),c.Ob(11,"b"),c.wc(12),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Ob(13,"div",5),c.Ob(14,"div",6),c.Ob(15,"label",9),c.wc(16," FATHER'S /HUSBAND'S NAME : "),c.Ob(17,"span",8),c.Ob(18,"b"),c.wc(19),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Ob(20,"div",5),c.Ob(21,"div",6),c.Ob(22,"label",10),c.wc(23," AADHAR : "),c.Ob(24,"span",8),c.Ob(25,"b"),c.wc(26),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Ob(27,"div",5),c.Ob(28,"div",6),c.Ob(29,"label",11),c.wc(30," SB ACCOUNT NO. : "),c.Ob(31,"span",8),c.Ob(32,"b"),c.wc(33),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Ob(34,"div",5),c.Ob(35,"div",6),c.Ob(36,"label",12),c.wc(37," IFSC CODE : "),c.Ob(38,"span",8),c.Ob(39,"b"),c.wc(40),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Ob(41,"div",5),c.Ob(42,"div",6),c.Ob(43,"label",13),c.wc(44," DATE OF BIRTH : "),c.Ob(45,"span",8),c.Ob(46,"b"),c.wc(47),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Ob(48,"div",5),c.Ob(49,"div",6),c.Ob(50,"label",14),c.wc(51," NATURE OF UNIT : "),c.Ob(52,"span",8),c.Ob(53,"b"),c.wc(54),c.Nb(),c.Nb(),c.Nb(),c.Ob(55,"div",15),c.Ob(56,"button",16),c.Vb("click",(function(){return e.btnUpdateNOUPopUp()})),c.wc(57," CHANGE NATURE OF UNIT "),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Ob(58,"div",5),c.Ob(59,"div",6),c.Ob(60,"label"),c.wc(61," IS WILLING BENFICIARIES "),c.Ob(62,"sup",17),c.wc(63,"*"),c.Nb(),c.Nb(),c.Ob(64,"div",18),c.Ob(65,"div",19),c.Ob(66,"input",20),c.Vb("ngModelChange",(function(t){return e.applicantData.willingBenficiary=t})),c.Nb(),c.Ob(67,"label",21),c.wc(68," YES "),c.Nb(),c.Nb(),c.Ob(69,"div",19),c.Ob(70,"input",22),c.Vb("ngModelChange",(function(t){return e.applicantData.willingBenficiary=t})),c.Nb(),c.Ob(71,"label",23),c.wc(72," NO "),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Ob(73,"div",5),c.Ob(74,"div",6),c.Ob(75,"label",24),c.wc(76,"Finance Type "),c.Ob(77,"span",25),c.wc(78,"*"),c.Nb(),c.Nb(),c.Ob(79,"select",26),c.Vb("ngModelChange",(function(t){return e.applicantData.financeType=t})),c.Ob(80,"option",27),c.wc(81,"-- SELECT FINANCE TYPE --"),c.Nb(),c.Ob(82,"option",28),c.wc(83,"Bank Linkage"),c.Nb(),c.Ob(84,"option",29),c.wc(85,"Self Finance"),c.Nb(),c.Ob(86,"option",30),c.wc(87,"Unnathi"),c.Nb(),c.Ob(88,"option",31),c.wc(89,"Sthree Nidhi"),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Ob(90,"div",5),c.Ob(91,"div",6),c.Ob(92,"label",32),c.wc(93," ANIMAL COST : "),c.Ob(94,"span",8),c.Ob(95,"b"),c.wc(96),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Ob(97,"div",5),c.Ob(98,"div",6),c.Ob(99,"label",33),c.wc(100," INSURANCE : "),c.Ob(101,"span",8),c.Ob(102,"b"),c.wc(103),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Ob(104,"div",5),c.Ob(105,"div",6),c.Ob(106,"label",34),c.wc(107," TRANSPORTATION : "),c.Ob(108,"span",8),c.Ob(109,"b"),c.wc(110),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Ob(111,"div",5),c.Ob(112,"div",6),c.Ob(113,"label",35),c.wc(114," TOTAL PROJECT COST : "),c.Ob(115,"span",8),c.Ob(116,"b"),c.wc(117),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Ob(118,"div",5),c.Ob(119,"div",6),c.Ob(120,"label",36),c.wc(121," MARGIN : "),c.Ob(122,"span",8),c.Ob(123,"b"),c.wc(124),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Ob(125,"div",5),c.Ob(126,"div",6),c.Ob(127,"label",37),c.wc(128," BANK LOAN : "),c.Ob(129,"span",8),c.Ob(130,"b"),c.wc(131),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Ob(132,"div",5),c.Ob(133,"div",6),c.Ob(134,"label",38),c.wc(135," APPLICATION HARD COPY SENT TO BANK DATE : "),c.Kb(136,"br"),c.Ob(137,"span",8),c.Ob(138,"b"),c.wc(139),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Ob(140,"div",5),c.Ob(141,"div",6),c.Ob(142,"label",39),c.wc(143," SUBMISSION DATE "),c.Ob(144,"span",25),c.wc(145,"*"),c.Nb(),c.Nb(),c.Ob(146,"app-date-picker",40),c.Vb("selectedDateChange",(function(t){return e.applicantData.submissionDate=t})),c.Nb(),c.Nb(),c.Nb(),c.Ob(147,"div",41),c.Ob(148,"button",42),c.Vb("click",(function(){return e.btnSubmit()})),c.wc(149," SUBMIT "),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.vc(150,E,32,1,"div",43)),2&t&&(c.xb(12),c.xc(e.personDetails.BEN_NAME),c.xb(7),c.xc(e.personDetails.BEN_FATHER_NAME),c.xb(7),c.xc(e.personDetails.UID_NUM),c.xb(7),c.xc(e.personDetails.ACCOUNT_NUMBER),c.xb(7),c.xc(e.personDetails.IFSC_CODE),c.xb(7),c.xc(e.personDetails.DOB_DT),c.xb(7),c.xc(e.personDetails.NATURE_OF_UINT),c.xb(12),c.ec("ngModel",e.applicantData.willingBenficiary),c.xb(4),c.ec("ngModel",e.applicantData.willingBenficiary),c.xb(9),c.ec("ngModel",e.applicantData.financeType),c.xb(17),c.xc(e.personDetails.ANIMAL_COST),c.xb(7),c.xc(e.personDetails.INSURANCE),c.xb(7),c.xc(e.personDetails.TRANSPORTATION),c.xb(7),c.xc(e.personDetails.TOT_PROJECT_COST),c.xb(7),c.xc(e.personDetails.MARGIN),c.xb(7),c.xc(e.personDetails.BANK_LOAN),c.xb(8),c.xc(e.personDetails.APP_HARD_COPY_SENT_DATE),c.xb(7),c.ec("PlaceHolder","Please Select Submission Date")("selectedDate",e.applicantData.submissionDate)("maxDate",e.maxDate),c.xb(4),c.ec("ngIf",e.showNatureOfUnitPopup))},directives:[C.m,C.b,C.h,C.i,C.p,C.j,C.q,A.a,n.m],styles:[""]}),t})(),canActivate:[s.a],data:{roles:U}},{path:"Grounding",component:I,canActivate:[s.a],data:{roles:U}}]}];let P=(()=>{class t{}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(e){return new(e||t)},imports:[[a.f.forChild(x)],a.f]}),t})();var y=i("PCNd");let L=(()=>{class t{}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(e){return new(e||t)},imports:[[n.c,P,C.c,C.n,o.b,y.sharedModule]]}),t})()},"l/Tn":function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));var n=i("fXoL");let a=(()=>{class t{constructor(){}getDatePickerConfig(){return{dateInputFormat:"DD-MM-YYYY",containerClass:"theme-dark-blue",selectFromOtherMonth:!0,isAnimated:!0,adaptivePosition:!0,showWeekNumbers:!1,returnFocusToInput:!0,isDisabled:!0,showClearButton:!0,clearButtonLabel:"Clear",clearPosition:"right",minMode:void 0}}getColor(t=null){return"green"===t?"theme-green":"blue"===t?"theme-blue":"dark-blue"===t?"theme-dark-blue":"red"===t?"theme-red":"orange"===t?"theme-orange":"theme-default"}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=n.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);