const { Kafka } = require('kafkajs')

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:9092'],
});

const producer = kafka.producer();

async function produce() {
	await producer.connect();
	let counter = 0;
	
	setInterval(async () => {
		counter++;
		console.log('Producing message nr ' + counter);
		
		await producer.send({
			topic: 'skynet',
			  messages: [
				{ value: 'Message nr ' + counter },
			  ],
		});
	}, 1000);
}

produce();