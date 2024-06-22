const mongoose = require('mongoose');

// MongoDB 연결 설정
const uri = 'mongodb://localhost:27017/testdatabase'; // 로컬 MongoDB 서버 URL 및 데이터베이스 이름

mongoose.connect(uri)
	.then(() => {
		console.log('MongoDB 연결 성공');
		mongoose.connection.close(); // 테스트 후 연결 종료
	})
	.catch((err) => {
		console.error('MongoDB 연결 실패:', err);
	});