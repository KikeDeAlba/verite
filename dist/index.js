var p=function(){if(!(P>1)){var n,e=!1;while(T!==void 0){var a=T;T=void 0,K++;while(a!==void 0){var s=a.o;if(a.o=void 0,a.f&=-3,!(8&a.f)&&d(a))try{a.c()}catch(B){if(!e)n=B,e=!0}a=s}}if(K=0,P--,e)throw n}else P--};var S=function(n){if(Y!==void 0){var e=n.n;if(e===void 0||e.t!==Y){if(e={i:0,S:n,p:Y.s,n:void 0,t:Y,e:void 0,x:void 0,r:e},Y.s!==void 0)Y.s.n=e;if(Y.s=e,n.n=e,32&Y.f)n.S(e);return e}else if(e.i===-1){if(e.i=0,e.n!==void 0){if(e.n.p=e.p,e.p!==void 0)e.p.n=e.n;e.p=Y.s,e.n=void 0,Y.s.n=e,Y.s=e}return e}}},E=function(n){this.v=n,this.i=0,this.n=void 0,this.t=void 0},o=function(n){return new E(n)},d=function(n){for(var e=n.s;e!==void 0;e=e.n)if(e.S.i!==e.i||!e.S.h()||e.S.i!==e.i)return!0;return!1},q=function(n){for(var e=n.s;e!==void 0;e=e.n){var a=e.S.n;if(a!==void 0)e.r=a;if(e.S.n=e,e.i=-1,e.n===void 0){n.s=e;break}}},k=function(n){var e=n.s,a=void 0;while(e!==void 0){var s=e.p;if(e.i===-1){if(e.S.U(e),s!==void 0)s.n=e.n;if(e.n!==void 0)e.n.p=s}else a=e;if(e.S.n=e.r,e.r!==void 0)e.r=void 0;e=s}n.s=a},c=function(n){E.call(this,void 0),this.x=n,this.s=void 0,this.g=l-1,this.f=4};var y=function(n){var e=n.u;if(n.u=void 0,typeof e=="function"){P++;var a=Y;Y=void 0;try{e()}catch(s){throw n.f&=-2,n.f|=8,x(n),s}finally{Y=a,p()}}},x=function(n){for(var e=n.s;e!==void 0;e=e.n)e.S.U(e);n.x=void 0,n.s=void 0,y(n)},r=function(n){if(Y!==this)throw new Error("Out-of-order effect");if(k(this),Y=n,this.f&=-2,8&this.f)x(this);p()},g=function(n){this.x=n,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32},m=function(n){var e=new g(n);try{e.c()}catch(a){throw e.d(),a}return e.d.bind(e)},C=Symbol.for("preact-signals"),Y=void 0,T=void 0,P=0,K=0,l=0;E.prototype.brand=C;E.prototype.h=function(){return!0};E.prototype.S=function(n){if(this.t!==n&&n.e===void 0){if(n.x=this.t,this.t!==void 0)this.t.e=n;this.t=n}};E.prototype.U=function(n){if(this.t!==void 0){var{e,x:a}=n;if(e!==void 0)e.x=a,n.e=void 0;if(a!==void 0)a.e=e,n.x=void 0;if(n===this.t)this.t=a}};E.prototype.subscribe=function(n){var e=this;return m(function(){var a=e.value,s=Y;Y=void 0;try{n(a)}finally{Y=s}})};E.prototype.valueOf=function(){return this.value};E.prototype.toString=function(){return this.value+""};E.prototype.toJSON=function(){return this.value};E.prototype.peek=function(){var n=Y;Y=void 0;try{return this.value}finally{Y=n}};Object.defineProperty(E.prototype,"value",{get:function(){var n=S(this);if(n!==void 0)n.i=this.i;return this.v},set:function(n){if(n!==this.v){if(K>100)throw new Error("Cycle detected");this.v=n,this.i++,l++,P++;try{for(var e=this.t;e!==void 0;e=e.x)e.t.N()}finally{p()}}}});(c.prototype=new E).h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32)return!0;if(this.f&=-5,this.g===l)return!0;if(this.g=l,this.f|=1,this.i>0&&!d(this))return this.f&=-2,!0;var n=Y;try{q(this),Y=this;var e=this.x();if(16&this.f||this.v!==e||this.i===0)this.v=e,this.f&=-17,this.i++}catch(a){this.v=a,this.f|=16,this.i++}return Y=n,k(this),this.f&=-2,!0};c.prototype.S=function(n){if(this.t===void 0){this.f|=36;for(var e=this.s;e!==void 0;e=e.n)e.S.S(e)}E.prototype.S.call(this,n)};c.prototype.U=function(n){if(this.t!==void 0){if(E.prototype.U.call(this,n),this.t===void 0){this.f&=-33;for(var e=this.s;e!==void 0;e=e.n)e.S.U(e)}}};c.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var n=this.t;n!==void 0;n=n.x)n.t.N()}};Object.defineProperty(c.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var n=S(this);if(this.h(),n!==void 0)n.i=this.i;if(16&this.f)throw this.v;return this.v}});g.prototype.c=function(){var n=this.S();try{if(8&this.f)return;if(this.x===void 0)return;var e=this.x();if(typeof e=="function")this.u=e}finally{n()}};g.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,y(this),q(this),P++;var n=Y;return Y=this,r.bind(this,n)};g.prototype.N=function(){if(!(2&this.f))this.f|=2,this.o=T,T=this};g.prototype.d=function(){if(this.f|=8,!(1&this.f))x(this)};class f{signalsBoutique={};createSignal(n,e){return this.signalsBoutique[n]=o(e)}updateSignal(n,e){this.signalsBoutique[n]=o(e)}}class u{static instance;coreManager;constructor(n){if(u.instance)throw new Error("BoutiqueCoreAccessor is a singleton class");u.instance=this,this.coreManager=new f;for(let e in n)this.coreManager.createSignal(e,n[e])}get boutique(){return this.coreManager.signalsBoutique}updateSignal(n,e){this.coreManager.updateSignal(n,e)}}function M(n){const e=new u(n);return{updateSignal:(a,s)=>e.updateSignal(a,s),boutique:e.boutique}}var J=M;export{J as default,M as createBoutique};
