(self.webpackChunkspear=self.webpackChunkspear||[]).push([[877],{50877:(V,y,o)=>{o.r(y),o.d(y,{MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS:()=>T,MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR:()=>S,MAT_SLIDE_TOGGLE_VALUE_ACCESSOR:()=>E,MatSlideToggle:()=>C,MatSlideToggleChange:()=>w,MatSlideToggleModule:()=>z,MatSlideToggleRequiredValidator:()=>I,_MatSlideToggleBase:()=>D,_MatSlideToggleRequiredValidatorModule:()=>b});var u=o(60136),f=o(18486),m=o(43144),h=o(15671),e=o(56718),p=o(47405),R=o(33401),x=o(908),n=o(6606),M=o(35333),L=o(94055),A=["switch"],O=["*"],T=new e.InjectionToken("mat-slide-toggle-default-options",{providedIn:"root",factory:function(){return{disableToggleValue:!1}}}),E={provide:p.NG_VALUE_ACCESSOR,useExisting:(0,e.forwardRef)(function(){return C}),multi:!0},w=(0,m.Z)(function c(a,l){(0,h.Z)(this,c),this.source=a,this.checked=l}),P=0,B=(0,n.mixinTabIndex)((0,n.mixinColor)((0,n.mixinDisableRipple)((0,n.mixinDisabled)(function(){return(0,m.Z)(function c(a){(0,h.Z)(this,c),this._elementRef=a})}())))),D=function(){var c=function(a){(0,u.Z)(t,a);var l=(0,f.Z)(t);function t(i,d,s,v,_,k,g){var r;return(0,h.Z)(this,t),(r=l.call(this,i))._focusMonitor=d,r._changeDetectorRef=s,r.defaults=_,r._onChange=function(Z){},r._onTouched=function(){},r._required=!1,r._checked=!1,r.name=null,r.labelPosition="after",r.ariaLabel=null,r.ariaLabelledby=null,r.change=new e.EventEmitter,r.toggleChange=new e.EventEmitter,r.tabIndex=parseInt(v)||0,r.color=r.defaultColor=_.color||"accent",r._noopAnimations="NoopAnimations"===k,r.id=r._uniqueId="".concat(g).concat(++P),r}return(0,m.Z)(t,[{key:"required",get:function(){return this._required},set:function(d){this._required=(0,M.coerceBooleanProperty)(d)}},{key:"checked",get:function(){return this._checked},set:function(d){this._checked=(0,M.coerceBooleanProperty)(d),this._changeDetectorRef.markForCheck()}},{key:"inputId",get:function(){return"".concat(this.id||this._uniqueId,"-input")}},{key:"ngAfterContentInit",value:function(){var d=this;this._focusMonitor.monitor(this._elementRef,!0).subscribe(function(s){"keyboard"===s||"program"===s?(d._focused=!0,d._changeDetectorRef.markForCheck()):s||Promise.resolve().then(function(){d._focused=!1,d._onTouched(),d._changeDetectorRef.markForCheck()})})}},{key:"ngOnDestroy",value:function(){this._focusMonitor.stopMonitoring(this._elementRef)}},{key:"writeValue",value:function(d){this.checked=!!d}},{key:"registerOnChange",value:function(d){this._onChange=d}},{key:"registerOnTouched",value:function(d){this._onTouched=d}},{key:"setDisabledState",value:function(d){this.disabled=d,this._changeDetectorRef.markForCheck()}},{key:"toggle",value:function(){this.checked=!this.checked,this._onChange(this.checked)}},{key:"_emitChangeEvent",value:function(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}}]),t}(B);return c.\u0275fac=function(l){e.\u0275\u0275invalidFactory()},c.\u0275dir=e.\u0275\u0275defineDirective({type:c,inputs:{name:"name",id:"id",labelPosition:"labelPosition",ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],ariaDescribedby:["aria-describedby","ariaDescribedby"],required:"required",checked:"checked"},outputs:{change:"change",toggleChange:"toggleChange"},features:[e.\u0275\u0275InheritDefinitionFeature]}),c}(),C=function(){var c=function(a){(0,u.Z)(t,a);var l=(0,f.Z)(t);function t(i,d,s,v,_,k){var g;return(0,h.Z)(this,t),(g=l.call(this,i,d,s,v,_,k,"mat-mdc-slide-toggle-"))._labelId=g._uniqueId+"-label",g}return(0,m.Z)(t,[{key:"buttonId",get:function(){return"".concat(this.id||this._uniqueId,"-button")}},{key:"_handleClick",value:function(){this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new w(this,this.checked)))}},{key:"focus",value:function(){this._switchElement.nativeElement.focus()}},{key:"_createChangeEvent",value:function(d){return new w(this,d)}},{key:"_getAriaLabelledBy",value:function(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}}]),t}(D);return c.\u0275fac=function(l){return new(l||c)(e.\u0275\u0275directiveInject(e.ElementRef),e.\u0275\u0275directiveInject(x.FocusMonitor),e.\u0275\u0275directiveInject(e.ChangeDetectorRef),e.\u0275\u0275injectAttribute("tabindex"),e.\u0275\u0275directiveInject(T),e.\u0275\u0275directiveInject(R.ANIMATION_MODULE_TYPE,8))},c.\u0275cmp=e.\u0275\u0275defineComponent({type:c,selectors:[["mat-slide-toggle"]],viewQuery:function(l,t){var i;1&l&&e.\u0275\u0275viewQuery(A,5),2&l&&e.\u0275\u0275queryRefresh(i=e.\u0275\u0275loadQuery())&&(t._switchElement=i.first)},hostAttrs:[1,"mat-mdc-slide-toggle"],hostVars:11,hostBindings:function(l,t){2&l&&(e.\u0275\u0275hostProperty("id",t.id),e.\u0275\u0275attribute("tabindex",null)("aria-label",null)("name",null)("aria-labelledby",null),e.\u0275\u0275classProp("mat-mdc-slide-toggle-focused",t._focused)("mat-mdc-slide-toggle-checked",t.checked)("_mat-animation-noopable",t._noopAnimations))},inputs:{disabled:"disabled",disableRipple:"disableRipple",color:"color",tabIndex:"tabIndex"},exportAs:["matSlideToggle"],features:[e.\u0275\u0275ProvidersFeature([E]),e.\u0275\u0275InheritDefinitionFeature],ngContentSelectors:O,decls:17,vars:24,consts:[[1,"mdc-form-field"],["role","switch","type","button",1,"mdc-switch",3,"tabIndex","disabled","click"],["switch",""],[1,"mdc-switch__track"],[1,"mdc-switch__handle-track"],[1,"mdc-switch__handle"],[1,"mdc-switch__shadow"],[1,"mdc-elevation-overlay"],[1,"mdc-switch__ripple"],["mat-ripple","",1,"mat-mdc-slide-toggle-ripple","mat-mdc-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-switch__icons"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--on"],["d","M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--off"],["d","M20 13H4v-2h16v2z"],[1,"mdc-label",3,"for","click"]],template:function(l,t){if(1&l&&(e.\u0275\u0275projectionDef(),e.\u0275\u0275elementStart(0,"div",0)(1,"button",1,2),e.\u0275\u0275listener("click",function(){return t._handleClick()}),e.\u0275\u0275element(3,"div",3),e.\u0275\u0275elementStart(4,"div",4)(5,"div",5)(6,"div",6),e.\u0275\u0275element(7,"div",7),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(8,"div",8),e.\u0275\u0275element(9,"div",9),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(10,"div",10),e.\u0275\u0275namespaceSVG(),e.\u0275\u0275elementStart(11,"svg",11),e.\u0275\u0275element(12,"path",12),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(13,"svg",13),e.\u0275\u0275element(14,"path",14),e.\u0275\u0275elementEnd()()()()(),e.\u0275\u0275namespaceHTML(),e.\u0275\u0275elementStart(15,"label",15),e.\u0275\u0275listener("click",function(s){return s.stopPropagation()}),e.\u0275\u0275projection(16),e.\u0275\u0275elementEnd()()),2&l){var i=e.\u0275\u0275reference(2);e.\u0275\u0275classProp("mdc-form-field--align-end","before"==t.labelPosition),e.\u0275\u0275advance(1),e.\u0275\u0275classProp("mdc-switch--selected",t.checked)("mdc-switch--unselected",!t.checked)("mdc-switch--checked",t.checked)("mdc-switch--disabled",t.disabled),e.\u0275\u0275property("tabIndex",t.tabIndex)("disabled",t.disabled),e.\u0275\u0275attribute("id",t.buttonId)("name",t.name)("aria-label",t.ariaLabel)("aria-labelledby",t._getAriaLabelledBy())("aria-describedby",t.ariaDescribedby)("aria-required",t.required||null)("aria-checked",t.checked),e.\u0275\u0275advance(8),e.\u0275\u0275property("matRippleTrigger",i)("matRippleDisabled",t.disableRipple||t.disabled)("matRippleCentered",!0),e.\u0275\u0275advance(6),e.\u0275\u0275property("for",t.buttonId),e.\u0275\u0275attribute("id",t._labelId)}},dependencies:[n.MatRipple],styles:['.mdc-form-field{display:inline-flex;align-items:center;vertical-align:middle}.mdc-form-field[hidden]{display:none}.mdc-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{margin-left:auto;margin-right:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{padding-left:0;padding-right:4px}.mdc-form-field--nowrap>label{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{margin-left:0;margin-right:auto}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{padding-left:4px;padding-right:0}.mdc-form-field--space-between{justify-content:space-between}.mdc-form-field--space-between>label{margin:0}[dir=rtl] .mdc-form-field--space-between>label,.mdc-form-field--space-between>label[dir=rtl]{margin:0}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:var(--mdc-elevation-overlay-color, #fff)}.mdc-switch{align-items:center;background:none;border:none;cursor:pointer;display:inline-flex;flex-shrink:0;margin:0;outline:none;overflow:visible;padding:0;position:relative}.mdc-switch[hidden]{display:none}.mdc-switch:disabled{cursor:default;pointer-events:none}.mdc-switch__track{overflow:hidden;position:relative;width:100%}.mdc-switch__track::before,.mdc-switch__track::after{border:1px solid rgba(0,0,0,0);border-radius:inherit;box-sizing:border-box;content:"";height:100%;left:0;position:absolute;width:100%}@media screen and (forced-colors: active){.mdc-switch__track::before,.mdc-switch__track::after{border-color:currentColor}}.mdc-switch__track::before{transition:transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);transform:translateX(0)}.mdc-switch__track::after{transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);transform:translateX(-100%)}[dir=rtl] .mdc-switch__track::after,.mdc-switch__track[dir=rtl]::after{transform:translateX(100%)}.mdc-switch--selected .mdc-switch__track::before{transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);transform:translateX(100%)}[dir=rtl] .mdc-switch--selected .mdc-switch__track::before,.mdc-switch--selected .mdc-switch__track[dir=rtl]::before{transform:translateX(-100%)}.mdc-switch--selected .mdc-switch__track::after{transition:transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);transform:translateX(0)}.mdc-switch__handle-track{height:100%;pointer-events:none;position:absolute;top:0;transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);left:0;right:auto;transform:translateX(0)}[dir=rtl] .mdc-switch__handle-track,.mdc-switch__handle-track[dir=rtl]{left:auto;right:0}.mdc-switch--selected .mdc-switch__handle-track{transform:translateX(100%)}[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track,.mdc-switch--selected .mdc-switch__handle-track[dir=rtl]{transform:translateX(-100%)}.mdc-switch__handle{display:flex;pointer-events:auto;position:absolute;top:50%;transform:translateY(-50%);left:0;right:auto}[dir=rtl] .mdc-switch__handle,.mdc-switch__handle[dir=rtl]{left:auto;right:0}.mdc-switch__handle::before,.mdc-switch__handle::after{border:1px solid rgba(0,0,0,0);border-radius:inherit;box-sizing:border-box;content:"";width:100%;height:100%;left:0;position:absolute;top:0;transition:background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1),border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);z-index:-1}@media screen and (forced-colors: active){.mdc-switch__handle::before,.mdc-switch__handle::after{border-color:currentColor}}.mdc-switch__shadow{border-radius:inherit;bottom:0;left:0;position:absolute;right:0;top:0}.mdc-elevation-overlay{bottom:0;left:0;right:0;top:0}.mdc-switch__ripple{left:50%;position:absolute;top:50%;transform:translate(-50%, -50%);z-index:-1}.mdc-switch:disabled .mdc-switch__ripple{display:none}.mdc-switch__icons{height:100%;position:relative;width:100%;z-index:1}.mdc-switch__icon{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0;opacity:0;transition:opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-switch--selected .mdc-switch__icon--on,.mdc-switch--unselected .mdc-switch__icon--off{opacity:1;transition:opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-slide-toggle{display:inline-block;-webkit-tap-highlight-color:rgba(0,0,0,0);outline:0}.mat-mdc-slide-toggle .mdc-switch{width:var(--mdc-switch-track-width, 36px)}.mat-mdc-slide-toggle .mdc-switch.mdc-switch--selected:enabled .mdc-switch__handle::after{background:var(--mdc-switch-selected-handle-color, var(--mdc-theme-primary, #6200ee))}.mat-mdc-slide-toggle .mdc-switch.mdc-switch--selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after{background:var(--mdc-switch-selected-hover-handle-color, #310077)}.mat-mdc-slide-toggle .mdc-switch.mdc-switch--selected:enabled:focus:not(:active) .mdc-switch__handle::after{background:var(--mdc-switch-selected-focus-handle-color, #310077)}.mat-mdc-slide-toggle .mdc-switch.mdc-switch--selected:enabled:active .mdc-switch__handle::after{background:var(--mdc-switch-selected-pressed-handle-color, #310077)}.mat-mdc-slide-toggle .mdc-switch.mdc-switch--selected:disabled .mdc-switch__handle::after{background:var(--mdc-switch-disabled-selected-handle-color, #424242)}.mat-mdc-slide-toggle .mdc-switch.mdc-switch--unselected:enabled .mdc-switch__handle::after{background:var(--mdc-switch-unselected-handle-color, #616161)}.mat-mdc-slide-toggle .mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after{background:var(--mdc-switch-unselected-hover-handle-color, #212121)}.mat-mdc-slide-toggle .mdc-switch.mdc-switch--unselected:enabled:focus:not(:active) .mdc-switch__handle::after{background:var(--mdc-switch-unselected-focus-handle-color, #212121)}.mat-mdc-slide-toggle .mdc-switch.mdc-switch--unselected:enabled:active .mdc-switch__handle::after{background:var(--mdc-switch-unselected-pressed-handle-color, #212121)}.mat-mdc-slide-toggle .mdc-switch.mdc-switch--unselected:disabled .mdc-switch__handle::after{background:var(--mdc-switch-disabled-unselected-handle-color, #424242)}.mat-mdc-slide-toggle .mdc-switch .mdc-switch__handle::before{background:var(--mdc-switch-handle-surface-color, var(--mdc-theme-surface, #fff))}.mat-mdc-slide-toggle .mdc-switch:enabled .mdc-switch__shadow{box-shadow:var(--mdc-switch-handle-elevation, 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12))}.mat-mdc-slide-toggle .mdc-switch:disabled .mdc-switch__shadow{box-shadow:var(--mdc-switch-disabled-handle-elevation, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12))}.mat-mdc-slide-toggle .mdc-switch .mdc-switch__focus-ring-wrapper,.mat-mdc-slide-toggle .mdc-switch .mdc-switch__handle{height:var(--mdc-switch-handle-height, 20px)}.mat-mdc-slide-toggle .mdc-switch:disabled .mdc-switch__handle::after{opacity:var(--mdc-switch-disabled-handle-opacity, 0.38)}.mat-mdc-slide-toggle .mdc-switch .mdc-switch__handle{border-radius:var(--mdc-switch-handle-shape, 10px)}.mat-mdc-slide-toggle .mdc-switch .mdc-switch__handle{width:var(--mdc-switch-handle-width, 20px)}.mat-mdc-slide-toggle .mdc-switch .mdc-switch__handle-track{width:calc(100% - var(--mdc-switch-handle-width, 20px))}.mat-mdc-slide-toggle .mdc-switch.mdc-switch--selected:enabled .mdc-switch__icon{fill:var(--mdc-switch-selected-icon-color, var(--mdc-theme-on-primary, #fff))}.mat-mdc-slide-toggle .mdc-switch.mdc-switch--selected:disabled .mdc-switch__icon{fill:var(--mdc-switch-disabled-selected-icon-color, var(--mdc-theme-on-primary, #fff))}.mat-mdc-slide-toggle .mdc-switch.mdc-switch--unselected:enabled .mdc-switch__icon{fill:var(--mdc-switch-unselected-icon-color, var(--mdc-theme-on-primary, #fff))}.mat-mdc-slide-toggle .mdc-switch.mdc-switch--unselected:disabled .mdc-switch__icon{fill:var(--mdc-switch-disabled-unselected-icon-color, var(--mdc-theme-on-primary, #fff))}.mat-mdc-slide-toggle .mdc-switch.mdc-switch--selected:disabled .mdc-switch__icons{opacity:var(--mdc-switch-disabled-selected-icon-opacity, 0.38)}.mat-mdc-slide-toggle .mdc-switch.mdc-switch--unselected:disabled .mdc-switch__icons{opacity:var(--mdc-switch-disabled-unselected-icon-opacity, 0.38)}.mat-mdc-slide-toggle .mdc-switch.mdc-switch--selected .mdc-switch__icon{width:var(--mdc-switch-selected-icon-size, 18px);height:var(--mdc-switch-selected-icon-size, 18px)}.mat-mdc-slide-toggle .mdc-switch.mdc-switch--unselected .mdc-switch__icon{width:var(--mdc-switch-unselected-icon-size, 18px);height:var(--mdc-switch-unselected-icon-size, 18px)}.mat-mdc-slide-toggle .mdc-switch.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::before,.mat-mdc-slide-toggle .mdc-switch.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::after{background-color:var(--mdc-switch-selected-hover-state-layer-color, var(--mdc-theme-primary, #6200ee))}.mat-mdc-slide-toggle .mdc-switch.mdc-switch--selected:enabled:focus .mdc-switch__ripple::before,.mat-mdc-slide-toggle .mdc-switch.mdc-switch--selected:enabled:focus .mdc-switch__ripple::after{background-color:var(--mdc-switch-selected-focus-state-layer-color, var(--mdc-theme-primary, #6200ee))}.mat-mdc-slide-toggle .mdc-switch.mdc-switch--selected:enabled:active .mdc-switch__ripple::before,.mat-mdc-slide-toggle .mdc-switch.mdc-switch--selected:enabled:active .mdc-switch__ripple::after{background-color:var(--mdc-switch-selected-pressed-state-layer-color, var(--mdc-theme-primary, #6200ee))}.mat-mdc-slide-toggle .mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::before,.mat-mdc-slide-toggle .mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after{background-color:var(--mdc-switch-unselected-hover-state-layer-color, #424242)}.mat-mdc-slide-toggle .mdc-switch.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::before,.mat-mdc-slide-toggle .mdc-switch.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::after{background-color:var(--mdc-switch-unselected-focus-state-layer-color, #424242)}.mat-mdc-slide-toggle .mdc-switch.mdc-switch--unselected:enabled:active .mdc-switch__ripple::before,.mat-mdc-slide-toggle .mdc-switch.mdc-switch--unselected:enabled:active .mdc-switch__ripple::after{background-color:var(--mdc-switch-unselected-pressed-state-layer-color, #424242)}.mat-mdc-slide-toggle .mdc-switch.mdc-switch--selected:enabled:hover:not(:focus):hover .mdc-switch__ripple::before,.mat-mdc-slide-toggle .mdc-switch.mdc-switch--selected:enabled:hover:not(:focus).mdc-ripple-surface--hover .mdc-switch__ripple::before{opacity:var(--mdc-switch-selected-hover-state-layer-opacity, 0.04)}.mat-mdc-slide-toggle .mdc-switch.mdc-switch--selected:enabled:focus.mdc-ripple-upgraded--background-focused .mdc-switch__ripple::before,.mat-mdc-slide-toggle .mdc-switch.mdc-switch--selected:enabled:focus:not(.mdc-ripple-upgraded):focus .mdc-switch__ripple::before{transition-duration:75ms;opacity:var(--mdc-switch-selected-focus-state-layer-opacity, 0.12)}.mat-mdc-slide-toggle .mdc-switch.mdc-switch--selected:enabled:active:not(.mdc-ripple-upgraded) .mdc-switch__ripple::after{transition:opacity 150ms linear}.mat-mdc-slide-toggle .mdc-switch.mdc-switch--selected:enabled:active:not(.mdc-ripple-upgraded):active .mdc-switch__ripple::after{transition-duration:75ms;opacity:var(--mdc-switch-selected-pressed-state-layer-opacity, 0.1)}.mat-mdc-slide-toggle .mdc-switch.mdc-switch--selected:enabled:active.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-switch-selected-pressed-state-layer-opacity, 0.1)}.mat-mdc-slide-toggle .mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus):hover .mdc-switch__ripple::before,.mat-mdc-slide-toggle .mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus).mdc-ripple-surface--hover .mdc-switch__ripple::before{opacity:var(--mdc-switch-unselected-hover-state-layer-opacity, 0.04)}.mat-mdc-slide-toggle .mdc-switch.mdc-switch--unselected:enabled:focus.mdc-ripple-upgraded--background-focused .mdc-switch__ripple::before,.mat-mdc-slide-toggle .mdc-switch.mdc-switch--unselected:enabled:focus:not(.mdc-ripple-upgraded):focus .mdc-switch__ripple::before{transition-duration:75ms;opacity:var(--mdc-switch-unselected-focus-state-layer-opacity, 0.12)}.mat-mdc-slide-toggle .mdc-switch.mdc-switch--unselected:enabled:active:not(.mdc-ripple-upgraded) .mdc-switch__ripple::after{transition:opacity 150ms linear}.mat-mdc-slide-toggle .mdc-switch.mdc-switch--unselected:enabled:active:not(.mdc-ripple-upgraded):active .mdc-switch__ripple::after{transition-duration:75ms;opacity:var(--mdc-switch-unselected-pressed-state-layer-opacity, 0.1)}.mat-mdc-slide-toggle .mdc-switch.mdc-switch--unselected:enabled:active.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-switch-unselected-pressed-state-layer-opacity, 0.1)}.mat-mdc-slide-toggle .mdc-switch .mdc-switch__ripple{height:var(--mdc-switch-state-layer-size, 48px);width:var(--mdc-switch-state-layer-size, 48px)}.mat-mdc-slide-toggle .mdc-switch .mdc-switch__track{height:var(--mdc-switch-track-height, 14px)}.mat-mdc-slide-toggle .mdc-switch:disabled .mdc-switch__track{opacity:var(--mdc-switch-disabled-track-opacity, 0.12)}.mat-mdc-slide-toggle .mdc-switch:enabled .mdc-switch__track::after{background:var(--mdc-switch-selected-track-color, #d7bbff)}.mat-mdc-slide-toggle .mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after{background:var(--mdc-switch-selected-hover-track-color, #d7bbff)}.mat-mdc-slide-toggle .mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after{background:var(--mdc-switch-selected-focus-track-color, #d7bbff)}.mat-mdc-slide-toggle .mdc-switch:enabled:active .mdc-switch__track::after{background:var(--mdc-switch-selected-pressed-track-color, #d7bbff)}.mat-mdc-slide-toggle .mdc-switch:disabled .mdc-switch__track::after{background:var(--mdc-switch-disabled-selected-track-color, #424242)}.mat-mdc-slide-toggle .mdc-switch:enabled .mdc-switch__track::before{background:var(--mdc-switch-unselected-track-color, #e0e0e0)}.mat-mdc-slide-toggle .mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before{background:var(--mdc-switch-unselected-hover-track-color, #e0e0e0)}.mat-mdc-slide-toggle .mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before{background:var(--mdc-switch-unselected-focus-track-color, #e0e0e0)}.mat-mdc-slide-toggle .mdc-switch:enabled:active .mdc-switch__track::before{background:var(--mdc-switch-unselected-pressed-track-color, #e0e0e0)}.mat-mdc-slide-toggle .mdc-switch:disabled .mdc-switch__track::before{background:var(--mdc-switch-disabled-unselected-track-color, #424242)}.mat-mdc-slide-toggle .mdc-switch .mdc-switch__track{border-radius:var(--mdc-switch-track-shape, 7px)}.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,.mat-mdc-slide-toggle .mdc-switch__ripple::after{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:50%;pointer-events:none}.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty){transform:translateZ(0)}.mat-mdc-slide-toggle .mdc-switch__ripple::after{content:"";opacity:0}.mat-mdc-slide-toggle .mdc-switch:hover .mdc-switch__ripple::after{opacity:.04;transition:opacity 75ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mdc-switch .mdc-switch__ripple::after{opacity:.12}.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-mdc-focus-indicator::before{content:""}.mat-mdc-slide-toggle .mat-ripple-element{opacity:.12}.mat-mdc-slide-toggle .mat-mdc-focus-indicator::before{border-radius:50%}.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-elevation-overlay,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after{transition:none}'],encapsulation:2,changeDetection:0}),c}(),S={provide:p.NG_VALIDATORS,useExisting:(0,e.forwardRef)(function(){return I}),multi:!0},I=function(){var c=function(a){(0,u.Z)(t,a);var l=(0,f.Z)(t);function t(){return(0,h.Z)(this,t),l.apply(this,arguments)}return(0,m.Z)(t)}(p.CheckboxRequiredValidator);return c.\u0275fac=function(){var a;return function(t){return(a||(a=e.\u0275\u0275getInheritedFactory(c)))(t||c)}}(),c.\u0275dir=e.\u0275\u0275defineDirective({type:c,selectors:[["mat-slide-toggle","required","","formControlName",""],["mat-slide-toggle","required","","formControl",""],["mat-slide-toggle","required","","ngModel",""]],features:[e.\u0275\u0275ProvidersFeature([S]),e.\u0275\u0275InheritDefinitionFeature]}),c}(),b=function(){var c=(0,m.Z)(function a(){(0,h.Z)(this,a)});return c.\u0275fac=function(l){return new(l||c)},c.\u0275mod=e.\u0275\u0275defineNgModule({type:c}),c.\u0275inj=e.\u0275\u0275defineInjector({}),c}(),z=function(){var c=(0,m.Z)(function a(){(0,h.Z)(this,a)});return c.\u0275fac=function(l){return new(l||c)},c.\u0275mod=e.\u0275\u0275defineNgModule({type:c}),c.\u0275inj=e.\u0275\u0275defineInjector({imports:[b,n.MatCommonModule,n.MatRippleModule,L.CommonModule,b,n.MatCommonModule]}),c}()}}]);