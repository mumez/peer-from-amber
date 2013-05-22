smalltalk.addPackage('Peer-Core');
smalltalk.addClass('PeProxy', smalltalk.JSObjectProxy, ['className'], 'Peer-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "className",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@className"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"className",{},smalltalk.PeProxy)})},
args: [],
source: "className\x0a\x09^className",
messageSends: [],
referencedClasses: []
}),
smalltalk.PeProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "className:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@className"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"className:",{aString:aString},smalltalk.PeProxy)})},
args: ["aString"],
source: "className: aString\x0a\x09className := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.PeProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "inspectOn:",
category: 'debugging',
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
args: ["anInspector"],
source: "inspectOn: anInspector\x0a\x09| variables |\x0a\x09variables := Dictionary new.\x0a\x09variables at: '#self' put: self jsObject.\x0a\x09variables at: '#className' put: self className.\x0a\x09anInspector setLabel: self printString.\x0a\x09self addObjectVariablesTo: variables.\x0a\x09anInspector setVariables: variables",
messageSends: ["new", "at:put:", "jsObject", "className", "setLabel:", "printString", "addObjectVariablesTo:", "setVariables:"],
referencedClasses: ["Dictionary"]
}),
smalltalk.PeProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "onClose:",
category: 'events',
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("close",eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onClose:",{eventBlock:eventBlock},smalltalk.PeProxy)})},
args: ["eventBlock"],
source: "onClose: eventBlock\x0a\x09self on: 'close' do: eventBlock",
messageSends: ["on:do:"],
referencedClasses: []
}),
smalltalk.PeProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "onError:",
category: 'events',
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("error",eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onError:",{eventBlock:eventBlock},smalltalk.PeProxy)})},
args: ["eventBlock"],
source: "onError: eventBlock\x0a\x09self on: 'error' do: eventBlock",
messageSends: ["on:do:"],
referencedClasses: []
}),
smalltalk.PeProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "onOpen:",
category: 'events',
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("open",eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onOpen:",{eventBlock:eventBlock},smalltalk.PeProxy)})},
args: ["eventBlock"],
source: "onOpen: eventBlock\x0a\x09self on: 'open' do: eventBlock",
messageSends: ["on:do:"],
referencedClasses: []
}),
smalltalk.PeProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
category: 'printing',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aStream)._nextPutAll_(_st("a ").__comma(_st(_st(self)._className())._asString()));
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.PeProxy)})},
args: ["aStream"],
source: "printOn: aStream\x0a\x09aStream nextPutAll: 'a ', self className asString",
messageSends: ["nextPutAll:", ",", "asString", "className"],
referencedClasses: []
}),
smalltalk.PeProxy);


smalltalk.addMethod(
smalltalk.method({
selector: "classNamed:protoProxy:",
category: 'instance creation',
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
args: ["className", "protoProxy"],
source: "classNamed: className protoProxy: protoProxy\x0a\x09| inst |\x0a\x09inst := self basicNew.\x0a\x09inst className: className.\x0a\x09inst jsObject: protoProxy jsObject.\x0a\x09inst initialize.\x0a\x09^inst",
messageSends: ["basicNew", "className:", "jsObject:", "jsObject", "initialize"],
referencedClasses: []
}),
smalltalk.PeProxy.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "new",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._protoProxy_(_st(self)._protoNew());
return $1;
}, function($ctx1) {$ctx1.fill(self,"new",{},smalltalk.PeProxy.klass)})},
args: [],
source: "new\x0a\x09^self protoProxy: self protoNew",
messageSends: ["protoProxy:", "protoNew"],
referencedClasses: []
}),
smalltalk.PeProxy.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "protoNew",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return nil;
}, function($ctx1) {$ctx1.fill(self,"protoNew",{},smalltalk.PeProxy.klass)})},
args: [],
source: "protoNew\x0a\x09self subclassResponsibility.\x0a\x09^nil",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.PeProxy.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "protoProxy:",
category: 'instance creation',
fn: function (protoProxy){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._classNamed_protoProxy_(_st(self)._asString(),protoProxy);
return $1;
}, function($ctx1) {$ctx1.fill(self,"protoProxy:",{protoProxy:protoProxy},smalltalk.PeProxy.klass)})},
args: ["protoProxy"],
source: "protoProxy: protoProxy\x0a\x09^self classNamed: self asString protoProxy: protoProxy",
messageSends: ["classNamed:protoProxy:", "asString"],
referencedClasses: []
}),
smalltalk.PeProxy.klass);


smalltalk.addClass('PeDataConnection', smalltalk.PeProxy, [], 'Peer-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "close",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._forwardMessage_withArguments_("close",[]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"close",{},smalltalk.PeDataConnection)})},
args: [],
source: "close\x0a\x09^ self forwardMessage: 'close' withArguments: #()",
messageSends: ["forwardMessage:withArguments:"],
referencedClasses: []
}),
smalltalk.PeDataConnection);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['label'];
return self}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.PeDataConnection)})},
args: [],
source: "label\x0a\x09<return self['@jsObject']['label']>",
messageSends: [],
referencedClasses: []
}),
smalltalk.PeDataConnection);

smalltalk.addMethod(
smalltalk.method({
selector: "label:",
category: 'accessing',
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['label']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"label:",{arg:arg},smalltalk.PeDataConnection)})},
args: ["arg"],
source: "label: arg\x0a\x09<return self['@jsObject']['label']=arg>",
messageSends: [],
referencedClasses: []
}),
smalltalk.PeDataConnection);

smalltalk.addMethod(
smalltalk.method({
selector: "metadata",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['metadata'];
return self}, function($ctx1) {$ctx1.fill(self,"metadata",{},smalltalk.PeDataConnection)})},
args: [],
source: "metadata\x0a\x09<return self['@jsObject']['metadata']>",
messageSends: [],
referencedClasses: []
}),
smalltalk.PeDataConnection);

smalltalk.addMethod(
smalltalk.method({
selector: "metadata:",
category: 'accessing',
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['metadata']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"metadata:",{arg:arg},smalltalk.PeDataConnection)})},
args: ["arg"],
source: "metadata: arg\x0a\x09<return self['@jsObject']['metadata']=arg>",
messageSends: [],
referencedClasses: []
}),
smalltalk.PeDataConnection);

smalltalk.addMethod(
smalltalk.method({
selector: "onData:",
category: 'events',
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("data",eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onData:",{eventBlock:eventBlock},smalltalk.PeDataConnection)})},
args: ["eventBlock"],
source: "onData: eventBlock\x0a\x09self on: 'data' do: eventBlock",
messageSends: ["on:do:"],
referencedClasses: []
}),
smalltalk.PeDataConnection);

smalltalk.addMethod(
smalltalk.method({
selector: "open",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['open'];
return self}, function($ctx1) {$ctx1.fill(self,"open",{},smalltalk.PeDataConnection)})},
args: [],
source: "open\x0a\x09<return self['@jsObject']['open']>",
messageSends: [],
referencedClasses: []
}),
smalltalk.PeDataConnection);

smalltalk.addMethod(
smalltalk.method({
selector: "open:",
category: 'accessing',
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['open']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"open:",{arg:arg},smalltalk.PeDataConnection)})},
args: ["arg"],
source: "open: arg\x0a\x09<return self['@jsObject']['open']=arg>",
messageSends: [],
referencedClasses: []
}),
smalltalk.PeDataConnection);

smalltalk.addMethod(
smalltalk.method({
selector: "peer",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['peer'];
return self}, function($ctx1) {$ctx1.fill(self,"peer",{},smalltalk.PeDataConnection)})},
args: [],
source: "peer\x0a\x09<return self['@jsObject']['peer']>",
messageSends: [],
referencedClasses: []
}),
smalltalk.PeDataConnection);

smalltalk.addMethod(
smalltalk.method({
selector: "peer:",
category: 'accessing',
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['peer']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"peer:",{arg:arg},smalltalk.PeDataConnection)})},
args: ["arg"],
source: "peer: arg\x0a\x09<return self['@jsObject']['peer']=arg>",
messageSends: [],
referencedClasses: []
}),
smalltalk.PeDataConnection);

smalltalk.addMethod(
smalltalk.method({
selector: "send:",
category: 'actions',
fn: function (data){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._forwardMessage_withArguments_("send",[data]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"send:",{data:data},smalltalk.PeDataConnection)})},
args: ["data"],
source: "send: data\x0a\x09^ self forwardMessage: 'send' withArguments: {data}",
messageSends: ["forwardMessage:withArguments:"],
referencedClasses: []
}),
smalltalk.PeDataConnection);

smalltalk.addMethod(
smalltalk.method({
selector: "serialization",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['serialization'];
return self}, function($ctx1) {$ctx1.fill(self,"serialization",{},smalltalk.PeDataConnection)})},
args: [],
source: "serialization\x0a\x09<return self['@jsObject']['serialization']>",
messageSends: [],
referencedClasses: []
}),
smalltalk.PeDataConnection);

smalltalk.addMethod(
smalltalk.method({
selector: "serialization:",
category: 'accessing',
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['serialization']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"serialization:",{arg:arg},smalltalk.PeDataConnection)})},
args: ["arg"],
source: "serialization: arg\x0a\x09<return self['@jsObject']['serialization']=arg>",
messageSends: [],
referencedClasses: []
}),
smalltalk.PeDataConnection);



smalltalk.addClass('PePeer', smalltalk.PeProxy, [], 'Peer-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "basicConnect:",
category: 'private',
fn: function (id){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._forwardMessage_withArguments_("connect",[id]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"basicConnect:",{id:id},smalltalk.PePeer)})},
args: ["id"],
source: "basicConnect: id\x0a\x09^ self forwardMessage: 'connect' withArguments: {id}",
messageSends: ["forwardMessage:withArguments:"],
referencedClasses: []
}),
smalltalk.PePeer);

smalltalk.addMethod(
smalltalk.method({
selector: "basicConnect:with:",
category: 'private',
fn: function (id,options){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._forwardMessage_withArguments_("connect",[id,options]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"basicConnect:with:",{id:id,options:options},smalltalk.PePeer)})},
args: ["id", "options"],
source: "basicConnect: id with: options\x0a\x09^ self forwardMessage: 'connect' withArguments: {id. options}",
messageSends: ["forwardMessage:withArguments:"],
referencedClasses: []
}),
smalltalk.PePeer);

smalltalk.addMethod(
smalltalk.method({
selector: "basicOnConnection:",
category: 'events',
fn: function (eventBlock){
var self=this;
function $PeDataConnection(){return smalltalk.PeDataConnection||(typeof PeDataConnection=="undefined"?nil:PeDataConnection)}
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("connection",(function(raw){
return smalltalk.withContext(function($ctx2) {
return _st(eventBlock)._value_(_st($PeDataConnection())._protoProxy_(raw));
}, function($ctx2) {$ctx2.fillBlock({raw:raw},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"basicOnConnection:",{eventBlock:eventBlock},smalltalk.PePeer)})},
args: ["eventBlock"],
source: "basicOnConnection: eventBlock\x0a\x09self on: 'connection' do: [:raw | eventBlock value: (PeDataConnection protoProxy: raw)]",
messageSends: ["on:do:", "value:", "protoProxy:"],
referencedClasses: ["PeDataConnection"]
}),
smalltalk.PePeer);

smalltalk.addMethod(
smalltalk.method({
selector: "connect:",
category: 'actions',
fn: function (id){
var self=this;
function $PeDataConnection(){return smalltalk.PeDataConnection||(typeof PeDataConnection=="undefined"?nil:PeDataConnection)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($PeDataConnection())._protoProxy_(_st(self)._basicConnect_(id));
return $1;
}, function($ctx1) {$ctx1.fill(self,"connect:",{id:id},smalltalk.PePeer)})},
args: ["id"],
source: "connect: id\x0a\x09^ PeDataConnection protoProxy: (self basicConnect: id)",
messageSends: ["protoProxy:", "basicConnect:"],
referencedClasses: ["PeDataConnection"]
}),
smalltalk.PePeer);

smalltalk.addMethod(
smalltalk.method({
selector: "connect:with:",
category: 'actions',
fn: function (id,options){
var self=this;
function $PeDataConnection(){return smalltalk.PeDataConnection||(typeof PeDataConnection=="undefined"?nil:PeDataConnection)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($PeDataConnection())._protoProxy_(_st(self)._basicConnect_with_(id,options));
return $1;
}, function($ctx1) {$ctx1.fill(self,"connect:with:",{id:id,options:options},smalltalk.PePeer)})},
args: ["id", "options"],
source: "connect: id with: options\x0a\x09^ PeDataConnection protoProxy: (self basicConnect: id with: options)",
messageSends: ["protoProxy:", "basicConnect:with:"],
referencedClasses: ["PeDataConnection"]
}),
smalltalk.PePeer);

smalltalk.addMethod(
smalltalk.method({
selector: "connections",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['connections'];
return self}, function($ctx1) {$ctx1.fill(self,"connections",{},smalltalk.PePeer)})},
args: [],
source: "connections\x0a\x09<return self['@jsObject']['connections']>",
messageSends: [],
referencedClasses: []
}),
smalltalk.PePeer);

smalltalk.addMethod(
smalltalk.method({
selector: "connections:",
category: 'accessing',
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['connections']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"connections:",{arg:arg},smalltalk.PePeer)})},
args: ["arg"],
source: "connections: arg\x0a\x09<return self['@jsObject']['connections']=arg>",
messageSends: [],
referencedClasses: []
}),
smalltalk.PePeer);

smalltalk.addMethod(
smalltalk.method({
selector: "destory",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._forwardMessage_withArguments_("destory",[]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"destory",{},smalltalk.PePeer)})},
args: [],
source: "destory\x0a\x09^ self forwardMessage: 'destory' withArguments: #()",
messageSends: ["forwardMessage:withArguments:"],
referencedClasses: []
}),
smalltalk.PePeer);

smalltalk.addMethod(
smalltalk.method({
selector: "destroyed",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['destroyed'];
return self}, function($ctx1) {$ctx1.fill(self,"destroyed",{},smalltalk.PePeer)})},
args: [],
source: "destroyed\x0a\x09<return self['@jsObject']['destroyed']>",
messageSends: [],
referencedClasses: []
}),
smalltalk.PePeer);

smalltalk.addMethod(
smalltalk.method({
selector: "destroyed:",
category: 'accessing',
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['destroyed']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"destroyed:",{arg:arg},smalltalk.PePeer)})},
args: ["arg"],
source: "destroyed: arg\x0a\x09<return self['@jsObject']['destroyed']=arg>",
messageSends: [],
referencedClasses: []
}),
smalltalk.PePeer);

smalltalk.addMethod(
smalltalk.method({
selector: "disconnect",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._forwardMessage_withArguments_("disconnect",[]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"disconnect",{},smalltalk.PePeer)})},
args: [],
source: "disconnect\x0a\x09^ self forwardMessage: 'disconnect' withArguments: #()",
messageSends: ["forwardMessage:withArguments:"],
referencedClasses: []
}),
smalltalk.PePeer);

smalltalk.addMethod(
smalltalk.method({
selector: "disconnected",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['disconnected'];
return self}, function($ctx1) {$ctx1.fill(self,"disconnected",{},smalltalk.PePeer)})},
args: [],
source: "disconnected\x0a\x09<return self['@jsObject']['disconnected']>",
messageSends: [],
referencedClasses: []
}),
smalltalk.PePeer);

smalltalk.addMethod(
smalltalk.method({
selector: "disconnected:",
category: 'accessing',
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['disconnected']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"disconnected:",{arg:arg},smalltalk.PePeer)})},
args: ["arg"],
source: "disconnected: arg\x0a\x09<return self['@jsObject']['disconnected']=arg>",
messageSends: [],
referencedClasses: []
}),
smalltalk.PePeer);

smalltalk.addMethod(
smalltalk.method({
selector: "id",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['id'];
return self}, function($ctx1) {$ctx1.fill(self,"id",{},smalltalk.PePeer)})},
args: [],
source: "id\x0a\x09<return self['@jsObject']['id']>",
messageSends: [],
referencedClasses: []
}),
smalltalk.PePeer);

smalltalk.addMethod(
smalltalk.method({
selector: "id:",
category: 'accessing',
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['id']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"id:",{arg:arg},smalltalk.PePeer)})},
args: ["arg"],
source: "id: arg\x0a\x09<return self['@jsObject']['id']=arg>",
messageSends: [],
referencedClasses: []
}),
smalltalk.PePeer);

smalltalk.addMethod(
smalltalk.method({
selector: "onConnection:",
category: 'events',
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._basicOnConnection_(eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onConnection:",{eventBlock:eventBlock},smalltalk.PePeer)})},
args: ["eventBlock"],
source: "onConnection: eventBlock\x0a\x09self basicOnConnection: eventBlock",
messageSends: ["basicOnConnection:"],
referencedClasses: []
}),
smalltalk.PePeer);


smalltalk.addMethod(
smalltalk.method({
selector: "id:",
category: 'instance creation',
fn: function (peerId){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._id_options_(peerId,[]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"id:",{peerId:peerId},smalltalk.PePeer.klass)})},
args: ["peerId"],
source: "id: peerId\x0a\x09^self id: peerId options: #()",
messageSends: ["id:options:"],
referencedClasses: []
}),
smalltalk.PePeer.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "id:options:",
category: 'instance creation',
fn: function (peerId,options){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._protoProxy_(_st(self)._protoId_options_(peerId,options));
return $1;
}, function($ctx1) {$ctx1.fill(self,"id:options:",{peerId:peerId,options:options},smalltalk.PePeer.klass)})},
args: ["peerId", "options"],
source: "id: peerId options: options\x0a\x09^self protoProxy: (self protoId: peerId options: options)",
messageSends: ["protoProxy:", "protoId:options:"],
referencedClasses: []
}),
smalltalk.PePeer.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "new",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._options_([]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"new",{},smalltalk.PePeer.klass)})},
args: [],
source: "new\x0a\x09^self options: #()",
messageSends: ["options:"],
referencedClasses: []
}),
smalltalk.PePeer.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "options:",
category: 'instance creation',
fn: function (options){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._protoProxy_(_st(self)._protoOptions_(options));
return $1;
}, function($ctx1) {$ctx1.fill(self,"options:",{options:options},smalltalk.PePeer.klass)})},
args: ["options"],
source: "options: options\x0a\x09^ self protoProxy: (self protoOptions: options)",
messageSends: ["protoProxy:", "protoOptions:"],
referencedClasses: []
}),
smalltalk.PePeer.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "protoId:options:",
category: 'private',
fn: function (id,options){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return new Peer(id, options);
return self}, function($ctx1) {$ctx1.fill(self,"protoId:options:",{id:id,options:options},smalltalk.PePeer.klass)})},
args: ["id", "options"],
source: "protoId: id options: options\x0a\x09<return new Peer(id, options)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.PePeer.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "protoOptions:",
category: 'private',
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
args: ["options"],
source: "protoOptions: options\x0a\x09<\x0a\x09\x09var object = options;\x0a\x09\x09var newObj = {};\x0a    \x09for (var key in options) {\x0a        \x09newObj[key] = object[key];\x0a    \x09}\x0a\x09\x09return new Peer(newObj);\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.PePeer.klass);


