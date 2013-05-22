Smalltalk current createPackage: 'Peer-Examples'!
Widget subclass: #PeExampleChat
	instanceVariableNames: 'peer connection'
	package: 'Peer-Examples'!
!PeExampleChat commentStamp!
PeExampleChat main!

!PeExampleChat methodsFor: 'accessing'!

connection
	^connection
!

peer
	^peer
! !

!PeExampleChat methodsFor: 'event handling'!

handleConnect
	| conn |
	 conn := self peer connect: '#remoteId' asJQuery val with: #{'serialization'->'json'}.
	 conn onOpen: [ self setUpConnection: conn].
	 conn onError: [:err | window alert: err]
!

handleSend
	| msg  canvas |
	msg := '#text' asJQuery val.
	self connection send: msg.
	
	canvas := HTMLCanvas onJQuery: '#messages' asJQuery.
	canvas div: [
		canvas span style: 'color: royalblue'; with: 'You: '.
		canvas span: msg.
	].
	
	'#text' asJQuery val: ''
! !

!PeExampleChat methodsFor: 'initialize-release'!

initialize
	super initialize.
	peer := PePeer options: self defaultOptions.
	peer onOpen: [:id |
		'#peerId' asJQuery val: id.
		console log: '##peer ID## ', id
	].
	peer onConnection: [:conn |
		self setUpConnection: conn
	].
! !

!PeExampleChat methodsFor: 'private'!

defaultOptions
	^ #{'key'-> 'lwjd5qra8257b9'. 'debug'-> true}
!

setUpConnection: aConnection
	| canvas |
	connection := aConnection.
	
	'#chat_area' asJQuery show.
	
	canvas := HTMLCanvas onJQuery: '#messages' asJQuery.
	canvas p: 'Now chatting with ', connection peer asString.
	
	connection onData: [:data |
		canvas div: [
			canvas span style: 'color: tomato'; with: connection peer, ': '.
			canvas span: data.
		].
	].
	
	connection onClose: [:err |
		window alert: connection peer asString, ' has left the chat'
	].
! !

!PeExampleChat methodsFor: 'rendering'!

renderOn: html
	
	html h1: 'Peer to Peer Chat'.
	
	html div: [
			html label for: 'peerId'; with: 'Your PeerJS id is: '.
			html input type: 'text'; id: 'peerId'; at: 'disabled' put: 'disabled'; value: self peer id.
	].
	html div: [
			html label for: 'remoteId'; with: 'Connect to peer: '.
			html input type: 'text'; id: 'remoteId'; placeholder: 'Someone else''s id'.
			html input type: 'button'; value: 'connect'; onClick: [self handleConnect]
	].
	html div id: 'chat_area'; style: 'display: none'; with: [
		html div style: 'margin: 10px'; id: 'messages'.
		html input type: 'text'; id: 'text'; placeholder: 'Enter message'. 
		html input type: 'button'; value: 'send'; onClick: [self handleSend]
	].
	
	html div style: 'font-size: 80%; margin-top : 15px; border : 1px solid; background-color : #F5F5F5' ; with: [
		html div: [
				html span style: 'color: red'; with: 'Google Chrome 26.0.1403.0 or above is required.'.
				html div: [
					html span: 'See: '.
					html a href: 'http://peerjs.com/status'; with: 'PeerJS WebRTC Status'
				]
		].
		html div: 'Your browser version: ', navigator userAgent.
		html div: 'Note that this demo may also fail if you are behind stringent firewalls or both you and the remote peer and behind symmetric NATs.'
	]
! !

!PeExampleChat class methodsFor: 'opening'!

main
	self new appendToJQuery: 'body' asJQuery
! !

