const kafka = require('kafka-node');
const client = new kafka.KafkaClient({
  kafkaHost:'localhost:9092'
});
const Producer = kafka.Producer;
const producer = new Producer(client);
const topic = 'skynet';

producer.on('ready', () => {
  let counter = 0;
  
  setInterval(() => {
    const payloads = [
      {
        topic: topic,
        messages: [`Message number ${counter}`],
      },
    ];

    producer.send(payloads, (err, data) => {
      if (err) {
        console.log(err);
      }
	  counter++;
      console.log('Counter ' + counter);
    });
  }, 200);
});

producer.on('error', err => {
  console.log(err);
});