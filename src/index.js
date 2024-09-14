import initMongoDB from './db/initMongoDB.js';
import setupServer from './server.js';

const bootstrap = async () => {
  await initMongoDB();
  setupServer();
};
bootstrap();

// const test = {
//   _id: '66e3c1c399d9e733f477d374',
//   name: 'Dr. Mark Thompson',
//   avatar_url: 'https://ftp.goit.study/img/avatars/1.jpg',
//   experience: '20 years',
//   reviews: [
//     {
//       reviewer: 'Susan Roberts',
//       rating: 4.8,
//       comment: "I've had an excellent experience with Dr. Thompson. His expertise has been invaluable.",
//     },
//     {
//       reviewer: 'David Lee',
//       rating: 4.6,
//       comment: "Dr. Thompson's guidance has helped me improve my relationships and well-being.",
//     },
//   ],
//   price_per_hour: 180,
//   rating: 4.7,
//   license: 'Licensed Psychologist (License #54321)',
//   specialization: 'Relationship Counseling',
//   initial_consultation: 'Free 60-minute initial consultation',
//   about:
//     "Dr. Mark Thompson is a highly experienced and licensed psychologist specializing in Relationship Counseling. With 20 years of practice, he has helped individuals navigate and improve their relationships, leading to better well-being and personal growth. Dr. Thompson is known for his expertise and ability to provide invaluable insights to his clients. His approach to therapy is tailored to each individual's unique needs, ensuring a supportive and effective counseling experience.",
// };

// const { _id, ...rest } = test;

// const test1 = {
//   ...rest,
//   userId: '1',
//   isFavorite: true,
//   prevId: _id,
// };
