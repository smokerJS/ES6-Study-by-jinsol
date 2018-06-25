// 객체 디스트럭처링 4 : 중첩객체



const person = {
  name: 'Lee',
  address: {
    zipCode: '03068',
    city: 'Seoul'
  }
};

const { address: { city } } = person;
console.log(city); // 'Seoul'