(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"9/gt":function(t,e,i){"use strict";i.d(e,"a",(function(){return c}));var r=i("un/a"),n=i("fXoL"),o=i("tk/3"),s=i("kh7C");let c=(()=>{class t{constructor(t,e){this.httpClient=t,this.utils=e,this.dairyapp="",this.techurl="",this.dairyapp=e.baseUrl()+"api/officeModule/",this.techurl=e.baseUrl()+"api/TechnicianDetails/"}office_po_select(t){return this.httpClient.post(this.dairyapp+"office_po_select",t,this.utils.getPostHttpOptions()).pipe(Object(r.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}TechnisianDistricts(t){return this.httpClient.post(this.techurl+"TechnisianDistricts",t,this.utils.getPostHttpOptions()).pipe(Object(r.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}TechnisianDetails_Select(t){return this.httpClient.post(this.techurl+"TechnisianDetails_Select",t,this.utils.getPostHttpOptions()).pipe(Object(r.a)(this.utils.env.API_RETRY_COUNT)).toPromise()}}return t.\u0275fac=function(e){return new(e||t)(n.Sb(o.b),n.Sb(s.a))},t.\u0275prov=n.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},YRCj:function(t,e,i){"use strict";i.r(e),i.d(e,"OfficeModuleModule",(function(){return h}));var r=i("ofXK"),n=i("3Pt+"),o=i("tyNb"),s=i("njyG"),c=i("pOEc"),a=i("PCNd"),u=i("fXoL");i("JqCM"),i("mAmA"),i("mZtN"),i("kh7C"),i("d//k"),i("FCe2"),i("mrSG"),i("cpEJ"),i("9/gt"),i("l/Tn");let l=(()=>{class t{}return t.\u0275mod=u.Hb({type:t}),t.\u0275inj=u.Gb({factory:function(e){return new(e||t)},imports:[[r.c,c.FarmerModule,n.c,n.n,s.b,a.sharedModule],o.f]}),t})(),h=(()=>{class t{}return t.\u0275mod=u.Hb({type:t}),t.\u0275inj=u.Gb({factory:function(e){return new(e||t)},imports:[[r.c,l]]}),t})()},"l/Tn":function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));var r=i("fXoL");let n=(()=>{class t{constructor(){}getDatePickerConfig(){return{dateInputFormat:"DD-MM-YYYY",containerClass:"theme-dark-blue",selectFromOtherMonth:!0,isAnimated:!0,adaptivePosition:!0,showWeekNumbers:!1,returnFocusToInput:!0,isDisabled:!0,showClearButton:!0,clearButtonLabel:"Clear",clearPosition:"right",minMode:void 0}}getColor(t=null){return"green"===t?"theme-green":"blue"===t?"theme-blue":"dark-blue"===t?"theme-dark-blue":"red"===t?"theme-red":"orange"===t?"theme-orange":"theme-default"}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=r.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);