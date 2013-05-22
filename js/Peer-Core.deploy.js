smalltalk.addPackage('Peer-Core');
smalltalk.addClass('PeProxy', smalltalk.JSObjectProxy, ['className'], 'Peer-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "className",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@className"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"className",{},smalltalk.PeProxy)})},
messageSends: []}),
smalltalk.PeProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "className:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@className"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"className:",{aString:aString},smalltalk.PeProxy)})},
messageSends: []}),
smalltalk.PeProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "inspectOn:",
fn: function (anInspector){
var self=this;
var variables;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
variables=_st($Dictionary())._new();
_st(variables)._at_put_("#self",_st(self)._jsObject());
_st(variables)._at_put_("#className",_st(self)._className());
_st(anInspector)._setLabel_(_st(self)._printString());
_st(self)._addObjectVariablesTo_(variables);
_st(anInspector)._setVariables_(variables);
return self}, function($ctx1) {$ctx1.fill(self,"inspectOn:",{anInspector:anInspector,variables:variables},smalltalk.PeProxy)})},
messageSends: ["new", "at:put:", "jsObject", "className", "setLabel:", "printString", "addObjectVariablesTo:", "setVariables:"]}),
smalltalk.PeProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "onClose:",
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("close",eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onClose:",{eventBlock:eventBlock},smalltalk.PeProxy)})},
messageSends: ["on:do:"]}),
smalltalk.PeProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "onError:",
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("error",eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onError:",{eventBlock:eventBlock},smalltalk.PeProxy)})},
messageSends: ["on:do:"]}),
smalltalk.PeProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "onOpen:",
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("open",eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onOpen:",{eventBlock:eventBlock},smalltalk.PeProxy)})},
messageSends: ["on:do:"]}),
smalltalk.PeProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aStream)._nextPutAll_(_st("a ").__comma(_st(_st(self)._className())._asString()));
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.PeProxy)})},
messageSends: ["nextPutAll:", ",", "asString", "className"]}),
smalltalk.PeProxy);


smalltalk.addMethod(
smalltalk.method({
selector: "classNamed:protoProxy:",
fn: function (className,protoProxy){
var self=this;
var inst;
return smalltalk.withContext(function($ctx1) { 
var $1;
inst=_st(self)._basicNew();
_st(inst)._className_(className);
_st(inst)._jsObject_(_st(protoProxy)._jsObject());
_st(inst)._initialize();
$1=inst;
return $1;
}, function($ctx1) {$ctx1.fill(self,"classNamed:protoProxy:",{className:className,protoProxy:protoProxy,inst:inst},smalltalk.PeProxy.klass)})},
messageSends: ["basicNew", "className:", "jsObject:", "jsObject", "initialize"]}),
smalltalk.PeProxy.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "new",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._protoProxy_(_st(self)._protoNew());
return $1;
}, function($ctx1) {$ctx1.fill(self,"new",{},smalltalk.PeProxy.klass)})},
messageSends: ["protoProxy:", "protoNew"]}),
smalltalk.PeProxy.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "protoNew",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return nil;
}, function($ctx1) {$ctx1.fill(self,"protoNew",{},smalltalk.PeProxy.klass)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.PeProxy.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "protoProxy:",
fn: function (protoProxy){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._classNamed_protoProxy_(_st(self)._asString(),protoProxy);
return $1;
}, function($ctx1) {$ctx1.fill(self,"protoProxy:",{protoProxy:protoProxy},smalltalk.PeProxy.klass)})},
messageSends: ["classNamed:protoProxy:", "asString"]}),
smalltalk.PeProxy.klass);


smalltalk.addClass('PeDataConnection', smalltalk.PeProxy, [], 'Peer-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "close",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._forwardMessage_withArguments_("close",[]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"close",{},smalltalk.PeDataConnection)})},
messageSends: ["forwardMessage:withArguments:"]}),
smalltalk.PeDataConnection);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['label'];
return self}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.PeDataConnection)})},
messageSends: []}),
smalltalk.PeDataConnection);

smalltalk.addMethod(
smalltalk.method({
selector: "label:",
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['label']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"label:",{arg:arg},smalltalk.PeDataConnection)})},
messageSends: []}),
smalltalk.PeDataConnection);

smalltalk.addMethod(
smalltalk.method({
selector: "metadata",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['metadata'];
return self}, function($ctx1) {$ctx1.fill(self,"metadata",{},smalltalk.PeDataConnection)})},
messageSends: []}),
smalltalk.PeDataConnection);

smalltalk.addMethod(
smalltalk.method({
selector: "metadata:",
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['metadata']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"metadata:",{arg:arg},smalltalk.PeDataConnection)})},
messageSends: []}),
smalltalk.PeDataConnection);

smalltalk.addMethod(
smalltalk.method({
selector: "onData:",
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("data",eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onData:",{eventBlock:eventBlock},smalltalk.PeDataConnection)})},
messageSends: ["on:do:"]}),
smalltalk.PeDataConnection);

smalltalk.addMethod(
smalltalk.method({
selector: "open",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['open'];
return self}, function($ctx1) {$ctx1.fill(self,"open",{},smalltalk.PeDataConnection)})},
messageSends: []}),
smalltalk.PeDataConnection);

smalltalk.addMethod(
smalltalk.method({
selector: "open:",
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['open']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"open:",{arg:arg},smalltalk.PeDataConnection)})},
messageSends: []}),
smalltalk.PeDataConnection);

smalltalk.addMethod(
smalltalk.method({
selector: "peer",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['peer'];
return self}, function($ctx1) {$ctx1.fill(self,"peer",{},smalltalk.PeDataConnection)})},
messageSends: []}),
smalltalk.PeDataConnection);

smalltalk.addMethod(
smalltalk.method({
selector: "peer:",
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['peer']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"peer:",{arg:arg},smalltalk.PeDataConnection)})},
messageSends: []}),
smalltalk.PeDataConnection);

smalltalk.addMethod(
smalltalk.method({
selector: "send:",
fn: function (data){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._forwardMessage_withArguments_("send",[data]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"send:",{data:data},smalltalk.PeDataConnection)})},
messageSends: ["forwardMessage:withArguments:"]}),
smalltalk.PeDataConnection);

smalltalk.addMethod(
smalltalk.method({
selector: "serialization",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['serialization'];
return self}, function($ctx1) {$ctx1.fill(self,"serialization",{},smalltalk.PeDataConnection)})},
messageSends: []}),
smalltalk.PeDataConnection);

smalltalk.addMethod(
smalltalk.method({
selector: "serialization:",
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['serialization']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"serialization:",{arg:arg},smalltalk.PeDataConnection)})},
messageSends: []}),
smalltalk.PeDataConnection);



smalltalk.addClass('PePeer', smalltalk.PeProxy, [], 'Peer-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "basicConnect:",
fn: function (id){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._forwardMessage_withArguments_("connect",[id]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"basicConnect:",{id:id},smalltalk.PePeer)})},
messageSends: ["forwardMessage:withArguments:"]}),
smalltalk.PePeer);

smalltalk.addMethod(
smalltalk.method({
selector: "basicConnect:with:",
fn: function (id,options){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._forwardMessage_withArguments_("connect",[id,options]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"basicConnect:with:",{id:id,options:options},smalltalk.PePeer)})},
messageSends: ["forwardMessage:withArguments:"]}),
smalltalk.PePeer);

smalltalk.addMethod(
smalltalk.method({
selector: "basicOnConnection:",
fn: function (eventBlock){
var self=this;
function $PeDataConnection(){return smalltalk.PeDataConnection||(typeof PeDataConnection=="undefined"?nil:PeDataConnection)}
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("connection",(function(raw){
return smalltalk.withContext(function($ctx2) {
return _st(eventBlock)._value_(_st($PeDataConnection())._protoProxy_(raw));
}, function($ctx2) {$ctx2.fillBlock({raw:raw},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"basicOnConnection:",{eventBlock:eventBlock},smalltalk.PePeer)})},
messageSends: ["on:do:", "value:", "protoProxy:"]}),
smalltalk.PePeer);

smalltalk.addMethod(
smalltalk.method({
selector: "connect:",
fn: function (id){
var self=this;
function $PeDataConnection(){return smalltalk.PeDataConnection||(typeof PeDataConnection=="undefined"?nil:PeDataConnection)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($PeDataConnection())._protoProxy_(_st(self)._basicConnect_(id));
return $1;
}, function($ctx1) {$ctx1.fill(self,"connect:",{id:id},smalltalk.PePeer)})},
messageSends: ["protoProxy:", "basicConnect:"]}),
smalltalk.PePeer);

smalltalk.addMethod(
smalltalk.method({
selector: "connect:with:",
fn: function (id,options){
var self=this;
function $PeDataConnection(){return smalltalk.PeDataConnection||(typeof PeDataConnection=="undefined"?nil:PeDataConnection)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($PeDataConnection())._protoProxy_(_st(self)._basicConnect_with_(id,options));
return $1;
}, function($ctx1) {$ctx1.fill(self,"connect:with:",{id:id,options:options},smalltalk.PePeer)})},
messageSends: ["protoProxy:", "basicConnect:with:"]}),
smalltalk.PePeer);

smalltalk.addMethod(
smalltalk.method({
selector: "connections",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['connections'];
return self}, function($ctx1) {$ctx1.fill(self,"connections",{},smalltalk.PePeer)})},
messageSends: []}),
smalltalk.PePeer);

smalltalk.addMethod(
smalltalk.method({
selector: "connections:",
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['connections']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"connections:",{arg:arg},smalltalk.PePeer)})},
messageSends: []}),
smalltalk.PePeer);

smalltalk.addMethod(
smalltalk.method({
selector: "destory",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._forwardMessage_withArguments_("destory",[]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"destory",{},smalltalk.PePeer)})},
messageSends: ["forwardMessage:withArguments:"]}),
smalltalk.PePeer);

smalltalk.addMethod(
smalltalk.method({
selector: "destroyed",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['destroyed'];
return self}, function($ctx1) {$ctx1.fill(self,"destroyed",{},smalltalk.PePeer)})},
messageSends: []}),
smalltalk.PePeer);

smalltalk.addMethod(
smalltalk.method({
selector: "destroyed:",
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['destroyed']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"destroyed:",{arg:arg},smalltalk.PePeer)})},
messageSends: []}),
smalltalk.PePeer);

smalltalk.addMethod(
smalltalk.method({
selector: "disconnect",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._forwardMessage_withArguments_("disconnect",[]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"disconnect",{},smalltalk.PePeer)})},
messageSends: ["forwardMessage:withArguments:"]}),
smalltalk.PePeer);

smalltalk.addMethod(
smalltalk.method({
selector: "disconnected",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['disconnected'];
return self}, function($ctx1) {$ctx1.fill(self,"disconnected",{},smalltalk.PePeer)})},
messageSends: []}),
smalltalk.PePeer);

smalltalk.addMethod(
smalltalk.method({
selector: "disconnected:",
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['disconnected']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"disconnected:",{arg:arg},smalltalk.PePeer)})},
messageSends: []}),
smalltalk.PePeer);

smalltalk.addMethod(
smalltalk.method({
selector: "id",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['id'];
return self}, function($ctx1) {$ctx1.fill(self,"id",{},smalltalk.PePeer)})},
messageSends: []}),
smalltalk.PePeer);

smalltalk.addMethod(
smalltalk.method({
selector: "id:",
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['id']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"id:",{arg:arg},smalltalk.PePeer)})},
messageSends: []}),
smalltalk.PePeer);

smalltalk.addMethod(
smalltalk.method({
selector: "onConnection:",
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._basicOnConnection_(eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onConnection:",{eventBlock:eventBlock},smalltalk.PePeer)})},
messageSends: ["basicOnConnection:"]}),
smalltalk.PePeer);


smalltalk.addMethod(
smalltalk.method({
selector: "id:",
fn: function (peerId){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._id_options_(peerId,[]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"id:",{peerId:peerId},smalltalk.PePeer.klass)})},
messageSends: ["id:options:"]}),
smalltalk.PePeer.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "id:options:",
fn: function (peerId,options){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._protoProxy_(_st(self)._protoId_options_(peerId,options));
return $1;
}, function($ctx1) {$ctx1.fill(self,"id:options:",{peerId:peerId,options:options},smalltalk.PePeer.klass)})},
messageSends: ["protoProxy:", "protoId:options:"]}),
smalltalk.PePeer.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "new",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._options_([]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"new",{},smalltalk.PePeer.klass)})},
messageSends: ["options:"]}),
smalltalk.PePeer.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "options:",
fn: function (options){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._protoProxy_(_st(self)._protoOptions_(options));
return $1;
}, function($ctx1) {$ctx1.fill(self,"options:",{options:options},smalltalk.PePeer.klass)})},
messageSends: ["protoProxy:", "protoOptions:"]}),
smalltalk.PePeer.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "protoId:options:",
fn: function (id,options){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return new Peer(id, options);
return self}, function($ctx1) {$ctx1.fill(self,"protoId:options:",{id:id,options:options},smalltalk.PePeer.klass)})},
messageSends: []}),
smalltalk.PePeer.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "protoOptions:",
fn: function (options){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		var object = options;
		var newObj = {};
    	for (var key in options) {
        	newObj[key] = object[key];
    	}
		return new Peer(newObj);
	;
return self}, function($ctx1) {$ctx1.fill(self,"protoOptions:",{options:options},smalltalk.PePeer.klass)})},
messageSends: []}),
smalltalk.PePeer.klass);


