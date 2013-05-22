Smalltalk current createPackage: 'Peer-Core'!
JSObjectProxy subclass: #PeProxy
	instanceVariableNames: 'className'
	package: 'Peer-Core'!

!PeProxy methodsFor: 'accessing'!

className
	^className
!

className: aString
	className := aString
! !

!PeProxy methodsFor: 'debugging'!

inspectOn: anInspector
	| variables |
	variables := Dictionary new.
	variables at: '#self' put: self jsObject.
	variables at: '#className' put: self className.
	anInspector setLabel: self printString.
	self addObjectVariablesTo: variables.
	anInspector setVariables: variables
! !

!PeProxy methodsFor: 'events'!

onClose: eventBlock
	self on: 'close' do: eventBlock
!

onError: eventBlock
	self on: 'error' do: eventBlock
!

onOpen: eventBlock
	self on: 'open' do: eventBlock
! !

!PeProxy methodsFor: 'printing'!

printOn: aStream
	aStream nextPutAll: 'a ', self className asString
! !

!PeProxy class methodsFor: 'instance creation'!

classNamed: className protoProxy: protoProxy
	| inst |
	inst := self basicNew.
	inst className: className.
	inst jsObject: protoProxy jsObject.
	inst initialize.
	^inst
!

new
	^self protoProxy: self protoNew
!

protoNew
	self subclassResponsibility.
	^nil
!

protoProxy: protoProxy
	^self classNamed: self asString protoProxy: protoProxy
! !

PeProxy subclass: #PeDataConnection
	instanceVariableNames: ''
	package: 'Peer-Core'!

!PeDataConnection methodsFor: 'accessing'!

label
	<return self['@jsObject']['label']>
!

label: arg
	<return self['@jsObject']['label']=arg>
!

metadata
	<return self['@jsObject']['metadata']>
!

metadata: arg
	<return self['@jsObject']['metadata']=arg>
!

open
	<return self['@jsObject']['open']>
!

open: arg
	<return self['@jsObject']['open']=arg>
!

peer
	<return self['@jsObject']['peer']>
!

peer: arg
	<return self['@jsObject']['peer']=arg>
!

serialization
	<return self['@jsObject']['serialization']>
!

serialization: arg
	<return self['@jsObject']['serialization']=arg>
! !

!PeDataConnection methodsFor: 'actions'!

close
	^ self forwardMessage: 'close' withArguments: #()
!

send: data
	^ self forwardMessage: 'send' withArguments: {data}
! !

!PeDataConnection methodsFor: 'events'!

onData: eventBlock
	self on: 'data' do: eventBlock
! !

PeProxy subclass: #PePeer
	instanceVariableNames: ''
	package: 'Peer-Core'!

!PePeer methodsFor: 'accessing'!

connections
	<return self['@jsObject']['connections']>
!

connections: arg
	<return self['@jsObject']['connections']=arg>
!

destroyed
	<return self['@jsObject']['destroyed']>
!

destroyed: arg
	<return self['@jsObject']['destroyed']=arg>
!

disconnected
	<return self['@jsObject']['disconnected']>
!

disconnected: arg
	<return self['@jsObject']['disconnected']=arg>
!

id
	<return self['@jsObject']['id']>
!

id: arg
	<return self['@jsObject']['id']=arg>
! !

!PePeer methodsFor: 'actions'!

connect: id
	^ PeDataConnection protoProxy: (self basicConnect: id)
!

connect: id with: options
	^ PeDataConnection protoProxy: (self basicConnect: id with: options)
!

destory
	^ self forwardMessage: 'destory' withArguments: #()
!

disconnect
	^ self forwardMessage: 'disconnect' withArguments: #()
! !

!PePeer methodsFor: 'events'!

basicOnConnection: eventBlock
	self on: 'connection' do: [:raw | eventBlock value: (PeDataConnection protoProxy: raw)]
!

onConnection: eventBlock
	self basicOnConnection: eventBlock
! !

!PePeer methodsFor: 'private'!

basicConnect: id
	^ self forwardMessage: 'connect' withArguments: {id}
!

basicConnect: id with: options
	^ self forwardMessage: 'connect' withArguments: {id. options}
! !

!PePeer class methodsFor: 'instance creation'!

id: peerId
	^self id: peerId options: #()
!

id: peerId options: options
	^self protoProxy: (self protoId: peerId options: options)
!

new
	^self options: #()
!

options: options
	^ self protoProxy: (self protoOptions: options)
! !

!PePeer class methodsFor: 'private'!

protoId: id options: options
	<return new Peer(id, options)>
!

protoOptions: options
	<
		var object = options;
		var newObj = {};
    	for (var key in options) {
        	newObj[key] = object[key];
    	}
		return new Peer(newObj);
	>
! !

