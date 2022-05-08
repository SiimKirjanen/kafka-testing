const { Kafka } = require('kafkajs')

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:9092'],
});

const consumer = kafka.consumer({ groupId: 'skynet-application' })

async function cunsume() {
	await consumer.connect():
	await consumer.subscribe({ topic: 'skynet'}):

	await consumer.run({
	  eachMessage: async ({ topic, partition, message }) => {
		console.log({
		  value: message.value.toString(),
		})
	  },
	});
}


cunsume();



