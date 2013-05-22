smalltalk.addPackage('Peer-Examples');
smalltalk.addClass('PeExampleChat', smalltalk.Widget, ['peer', 'connection'], 'Peer-Examples');
smalltalk.PeExampleChat.comment="PeExampleChat main"
smalltalk.addMethod(
smalltalk.method({
selector: "connection",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@connection"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"connection",{},smalltalk.PeExampleChat)})},
args: [],
source: "connection\x0a\x09^connection",
messageSends: [],
referencedClasses: []
}),
smalltalk.PeExampleChat);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultOptions",
category: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=smalltalk.HashedCollection._fromPairs_([_st("key").__minus_gt("lwjd5qra8257b9"),_st("debug").__minus_gt(true)]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultOptions",{},smalltalk.PeExampleChat)})},
args: [],
source: "defaultOptions\x0a\x09^ #{'key'-> 'lwjd5qra8257b9'. 'debug'-> true}",
messageSends: ["->"],
referencedClasses: []
}),
smalltalk.PeExampleChat);

smalltalk.addMethod(
smalltalk.method({
selector: "handleConnect",
category: 'event handling',
fn: function (){
var self=this;
var conn;
return smalltalk.withContext(function($ctx1) { 
conn=_st(_st(self)._peer())._connect_with_(_st(_st("#remoteId")._asJQuery())._val(),smalltalk.HashedCollection._fromPairs_([_st("serialization").__minus_gt("json")]));
_st(conn)._onOpen_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self)._setUpConnection_(conn);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(conn)._onError_((function(err){
return smalltalk.withContext(function($ctx2) {
return _st(window)._alert_(err);
}, function($ctx2) {$ctx2.fillBlock({err:err},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"handleConnect",{conn:conn},smalltalk.PeExampleChat)})},
args: [],
source: "handleConnect\x0a\x09| conn |\x0a\x09 conn := self peer connect: '#remoteId' asJQuery val with: #{'serialization'->'json'}.\x0a\x09 conn onOpen: [ self setUpConnection: conn].\x0a\x09 conn onError: [:err | window alert: err]",
messageSends: ["connect:with:", "val", "asJQuery", "->", "peer", "onOpen:", "setUpConnection:", "onError:", "alert:"],
referencedClasses: []
}),
smalltalk.PeExampleChat);

smalltalk.addMethod(
smalltalk.method({
selector: "handleSend",
category: 'event handling',
fn: function (){
var self=this;
var msg,canvas;
function $HTMLCanvas(){return smalltalk.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
msg=_st(_st("#text")._asJQuery())._val();
_st(_st(self)._connection())._send_(msg);
canvas=_st($HTMLCanvas())._onJQuery_(_st("#messages")._asJQuery());
_st(canvas)._div_((function(){
return smalltalk.withContext(function($ctx2) {
$1=_st(canvas)._span();
_st($1)._style_("color: royalblue");
$2=_st($1)._with_("You: ");
$2;
return _st(canvas)._span_(msg);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(_st("#text")._asJQuery())._val_("");
return self}, function($ctx1) {$ctx1.fill(self,"handleSend",{msg:msg,canvas:canvas},smalltalk.PeExampleChat)})},
args: [],
source: "handleSend\x0a\x09| msg  canvas |\x0a\x09msg := '#text' asJQuery val.\x0a\x09self connection send: msg.\x0a\x09\x0a\x09canvas := HTMLCanvas onJQuery: '#messages' asJQuery.\x0a\x09canvas div: [\x0a\x09\x09canvas span style: 'color: royalblue'; with: 'You: '.\x0a\x09\x09canvas span: msg.\x0a\x09].\x0a\x09\x0a\x09'#text' asJQuery val: ''",
messageSends: ["val", "asJQuery", "send:", "connection", "onJQuery:", "div:", "style:", "span", "with:", "span:", "val:"],
referencedClasses: ["HTMLCanvas"]
}),
smalltalk.PeExampleChat);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
function $PePeer(){return smalltalk.PePeer||(typeof PePeer=="undefined"?nil:PePeer)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.Widget.fn.prototype._initialize.apply(_st(self), []);
self["@peer"]=_st($PePeer())._options_(_st(self)._defaultOptions());
_st(self["@peer"])._onOpen_((function(id){
return smalltalk.withContext(function($ctx2) {
_st(_st("#peerId")._asJQuery())._val_(id);
return _st(console)._log_(_st("##peer ID## ").__comma(id));
}, function($ctx2) {$ctx2.fillBlock({id:id},$ctx1)})}));
_st(self["@peer"])._onConnection_((function(conn){
return smalltalk.withContext(function($ctx2) {
return _st(self)._setUpConnection_(conn);
}, function($ctx2) {$ctx2.fillBlock({conn:conn},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.PeExampleChat)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09peer := PePeer options: self defaultOptions.\x0a\x09peer onOpen: [:id |\x0a\x09\x09'#peerId' asJQuery val: id.\x0a\x09\x09console log: '##peer ID## ', id\x0a\x09].\x0a\x09peer onConnection: [:conn |\x0a\x09\x09self setUpConnection: conn\x0a\x09].",
messageSends: ["initialize", "options:", "defaultOptions", "onOpen:", "val:", "asJQuery", "log:", ",", "onConnection:", "setUpConnection:"],
referencedClasses: ["PePeer"]
}),
smalltalk.PeExampleChat);

smalltalk.addMethod(
smalltalk.method({
selector: "peer",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@peer"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"peer",{},smalltalk.PeExampleChat)})},
args: [],
source: "peer\x0a\x09^peer",
messageSends: [],
referencedClasses: []
}),
smalltalk.PeExampleChat);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$13,$14,$15,$16,$17,$18,$12,$19,$21,$22,$23,$24,$20;
_st(html)._h1_("Peer to Peer Chat");
_st(html)._div_((function(){
return smalltalk.withContext(function($ctx2) {
$1=_st(html)._label();
_st($1)._for_("peerId");
$2=_st($1)._with_("Your PeerJS id is: ");
$2;
$3=_st(html)._input();
_st($3)._type_("text");
_st($3)._id_("peerId");
_st($3)._at_put_("disabled","disabled");
$4=_st($3)._value_(_st(_st(self)._peer())._id());
return $4;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(html)._div_((function(){
return smalltalk.withContext(function($ctx2) {
$5=_st(html)._label();
_st($5)._for_("remoteId");
$6=_st($5)._with_("Connect to peer: ");
$6;
$7=_st(html)._input();
_st($7)._type_("text");
_st($7)._id_("remoteId");
$8=_st($7)._placeholder_("Someone else's id");
$8;
$9=_st(html)._input();
_st($9)._type_("button");
_st($9)._value_("connect");
$10=_st($9)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(self)._handleConnect();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
return $10;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$11=_st(html)._div();
_st($11)._id_("chat_area");
_st($11)._style_("display: none");
$12=_st($11)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$13=_st(html)._div();
_st($13)._style_("margin: 10px");
$14=_st($13)._id_("messages");
$14;
$15=_st(html)._input();
_st($15)._type_("text");
_st($15)._id_("text");
$16=_st($15)._placeholder_("Enter message");
$16;
$17=_st(html)._input();
_st($17)._type_("button");
_st($17)._value_("send");
$18=_st($17)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(self)._handleSend();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
return $18;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$19=_st(html)._footerDiv();
_st($19)._style_("font-size: 80%; margin-top : 15px; border : 1px solid; background-color : #F5F5F5");
$20=_st($19)._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(html)._div_((function(){
return smalltalk.withContext(function($ctx3) {
$21=_st(html)._span();
_st($21)._style_("color: red");
$22=_st($21)._with_("Google Chrome 26.0.1403.0 or above is required.");
$22;
return _st(html)._div_((function(){
return smalltalk.withContext(function($ctx4) {
_st(html)._span_("See: ");
$23=_st(html)._a();
_st($23)._href_("http://peerjs.com/status");
$24=_st($23)._with_("PeerJS WebRTC Status");
return $24;
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
_st(html)._div_(_st("Your browser version: ").__comma(_st(navigator)._userAgent()));
return _st(html)._div_("Note that this demo may also fail if you are behind stringent firewalls or both you and the remote peer and behind symmetric NATs.");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.PeExampleChat)})},
args: ["html"],
source: "renderOn: html\x0a\x09\x0a\x09html h1: 'Peer to Peer Chat'.\x0a\x09\x0a\x09html div: [\x0a\x09\x09\x09html label for: 'peerId'; with: 'Your PeerJS id is: '.\x0a\x09\x09\x09html input type: 'text'; id: 'peerId'; at: 'disabled' put: 'disabled'; value: self peer id.\x0a\x09].\x0a\x09html div: [\x0a\x09\x09\x09html label for: 'remoteId'; with: 'Connect to peer: '.\x0a\x09\x09\x09html input type: 'text'; id: 'remoteId'; placeholder: 'Someone else''s id'.\x0a\x09\x09\x09html input type: 'button'; value: 'connect'; onClick: [self handleConnect]\x0a\x09].\x0a\x09html div id: 'chat_area'; style: 'display: none'; with: [\x0a\x09\x09html div style: 'margin: 10px'; id: 'messages'.\x0a\x09\x09html input type: 'text'; id: 'text'; placeholder: 'Enter message'. \x0a\x09\x09html input type: 'button'; value: 'send'; onClick: [self handleSend]\x0a\x09].\x0a\x09\x0a\x09html footerDiv style: 'font-size: 80%; margin-top : 15px; border : 1px solid; background-color : #F5F5F5' ; with: [\x0a\x09\x09html div: [\x0a\x09\x09\x09\x09html span style: 'color: red'; with: 'Google Chrome 26.0.1403.0 or above is required.'.\x0a\x09\x09\x09\x09html div: [\x0a\x09\x09\x09\x09\x09html span: 'See: '.\x0a\x09\x09\x09\x09\x09html a href: 'http://peerjs.com/status'; with: 'PeerJS WebRTC Status'\x0a\x09\x09\x09\x09]\x0a\x09\x09].\x0a\x09\x09html div: 'Your browser version: ', navigator userAgent.\x0a\x09\x09html div: 'Note that this demo may also fail if you are behind stringent firewalls or both you and the remote peer and behind symmetric NATs.'\x0a\x09]\x0a\x09",
messageSends: ["h1:", "div:", "for:", "label", "with:", "type:", "input", "id:", "at:put:", "value:", "id", "peer", "placeholder:", "onClick:", "handleConnect", "div", "style:", "handleSend", "footerDiv", "span", "span:", "href:", "a", ",", "userAgent"],
referencedClasses: []
}),
smalltalk.PeExampleChat);

smalltalk.addMethod(
smalltalk.method({
selector: "setUpConnection:",
category: 'private',
fn: function (aConnection){
var self=this;
var canvas;
function $HTMLCanvas(){return smalltalk.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self["@connection"]=aConnection;
_st(_st("#chat_area")._asJQuery())._show();
canvas=_st($HTMLCanvas())._onJQuery_(_st("#messages")._asJQuery());
_st(canvas)._p_(_st("Now chatting with ").__comma(_st(_st(self["@connection"])._peer())._asString()));
_st(self["@connection"])._onData_((function(data){
return smalltalk.withContext(function($ctx2) {
return _st(canvas)._div_((function(){
return smalltalk.withContext(function($ctx3) {
$1=_st(canvas)._span();
_st($1)._style_("color: tomato");
$2=_st($1)._with_(_st(_st(self["@connection"])._peer()).__comma(": "));
$2;
return _st(canvas)._span_(data);
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({data:data},$ctx1)})}));
_st(self["@connection"])._onClose_((function(err){
return smalltalk.withContext(function($ctx2) {
return _st(window)._alert_(_st(_st(_st(self["@connection"])._peer())._asString()).__comma(" has left the chat"));
}, function($ctx2) {$ctx2.fillBlock({err:err},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"setUpConnection:",{aConnection:aConnection,canvas:canvas},smalltalk.PeExampleChat)})},
args: ["aConnection"],
source: "setUpConnection: aConnection\x0a\x09| canvas |\x0a\x09connection := aConnection.\x0a\x09\x0a\x09'#chat_area' asJQuery show.\x0a\x09\x0a\x09canvas := HTMLCanvas onJQuery: '#messages' asJQuery.\x0a\x09canvas p: 'Now chatting with ', connection peer asString.\x0a\x09\x0a\x09connection onData: [:data |\x0a\x09\x09canvas div: [\x0a\x09\x09\x09canvas span style: 'color: tomato'; with: connection peer, ': '.\x0a\x09\x09\x09canvas span: data.\x0a\x09\x09].\x0a\x09].\x0a\x09\x0a\x09connection onClose: [:err |\x0a\x09\x09window alert: connection peer asString, ' has left the chat'\x0a\x09].\x0a\x09\x0a\x09",
messageSends: ["show", "asJQuery", "onJQuery:", "p:", ",", "asString", "peer", "onData:", "div:", "style:", "span", "with:", "span:", "onClose:", "alert:"],
referencedClasses: ["HTMLCanvas"]
}),
smalltalk.PeExampleChat);


smalltalk.addMethod(
smalltalk.method({
selector: "main",
category: 'opening',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._new())._appendToJQuery_(_st("body")._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"main",{},smalltalk.PeExampleChat.klass)})},
args: [],
source: "main\x0a\x09self new appendToJQuery: 'body' asJQuery",
messageSends: ["appendToJQuery:", "asJQuery", "new"],
referencedClasses: []
}),
smalltalk.PeExampleChat.klass);


