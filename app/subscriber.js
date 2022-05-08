const kafka = require('kafka-node');
const client = new kafka.KafkaClient({
  kafkaHost:'localhost:9092'
});
const Consumer = kafka.Consumer;

const consumer = new Consumer(
  client,
  [
    {
      topic: 'skynet',
      partition: 0,
    },
  ],
  {
    autoCommit: false,
  },
);

consumer.on('message', message => {
  console.log('Consumer message ' + message);
});

consumer.on('error', err => {
  console.log(err);
});