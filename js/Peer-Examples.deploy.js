smalltalk.addPackage('Peer-Examples');
smalltalk.addClass('PeExampleChat', smalltalk.Widget, ['peer', 'connection'], 'Peer-Examples');
smalltalk.addMethod(
smalltalk.method({
selector: "connection",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@connection"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"connection",{},smalltalk.PeExampleChat)})},
messageSends: []}),
smalltalk.PeExampleChat);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultOptions",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=smalltalk.HashedCollection._fromPairs_([_st("key").__minus_gt("lwjd5qra8257b9"),_st("debug").__minus_gt(true)]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultOptions",{},smalltalk.PeExampleChat)})},
messageSends: ["->"]}),
smalltalk.PeExampleChat);

smalltalk.addMethod(
smalltalk.method({
selector: "handleConnect",
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
messageSends: ["connect:with:", "val", "asJQuery", "->", "peer", "onOpen:", "setUpConnection:", "onError:", "alert:"]}),
smalltalk.PeExampleChat);

smalltalk.addMethod(
smalltalk.method({
selector: "handleSend",
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
messageSends: ["val", "asJQuery", "send:", "connection", "onJQuery:", "div:", "style:", "span", "with:", "span:", "val:"]}),
smalltalk.PeExampleChat);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
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
messageSends: ["initialize", "options:", "defaultOptions", "onOpen:", "val:", "asJQuery", "log:", ",", "onConnection:", "setUpConnection:"]}),
smalltalk.PeExampleChat);

smalltalk.addMethod(
smalltalk.method({
selector: "peer",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@peer"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"peer",{},smalltalk.PeExampleChat)})},
messageSends: []}),
smalltalk.PeExampleChat);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
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
$19=_st(html)._div();
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
messageSends: ["h1:", "div:", "for:", "label", "with:", "type:", "input", "id:", "at:put:", "value:", "id", "peer", "placeholder:", "onClick:", "handleConnect", "div", "style:", "handleSend", "span", "span:", "href:", "a", ",", "userAgent"]}),
smalltalk.PeExampleChat);

smalltalk.addMethod(
smalltalk.method({
selector: "setUpConnection:",
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
messageSends: ["show", "asJQuery", "onJQuery:", "p:", ",", "asString", "peer", "onData:", "div:", "style:", "span", "with:", "span:", "onClose:", "alert:"]}),
smalltalk.PeExampleChat);


smalltalk.addMethod(
smalltalk.method({
selector: "main",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._new())._appendToJQuery_(_st("body")._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"main",{},smalltalk.PeExampleChat.klass)})},
messageSends: ["appendToJQuery:", "asJQuery", "new"]}),
smalltalk.PeExampleChat.klass);


