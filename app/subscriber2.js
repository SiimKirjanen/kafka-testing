const kafka = require('kafka-node');

var options = {
	  // connect directly to kafka broker (instantiates a KafkaClient)
	  kafkaHost: 'localhost:9092',
	  groupId: 'skynet-application',
	  autoCommit: true,
	  autoCommitIntervalMs: 5000,
	  sessionTimeout: 15000,
	  fetchMaxBytes: 10 * 1024 * 1024, // 10 MB
	  // An array of partition assignment protocols ordered by preference. 'roundrobin' or 'range' string for
	  // built ins (see below to pass in custom assignment protocol)
	  protocol: ['roundrobin'],
	  // Offsets to use for new groups other options could be 'earliest' or 'none'
	  // (none will emit an error if no offsets were saved) equivalent to Java client's auto.offset.reset
	  fromOffset: 'latest',
	  // how to recover from OutOfRangeOffset error (where save offset is past server retention)
	  // accepts same value as fromOffset
	  outOfRangeOffset: 'earliest'
};
	
var consumerGroup = new kafka.ConsumerGroup(options, 'skynet');

consumerGroup.on('message', async function (message) {
	console.log('Getting a message ', message.value);
});

consumerGroup.on('error', function onError(error) {
  console.error(error);
});