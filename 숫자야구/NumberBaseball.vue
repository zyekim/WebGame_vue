<template>
  <div>
    <h1>{{result}}</h1>
    <form @submit.prevent="onSubmitForm">
      <input ref="answer" minlength="4" maxlength="4" type="text" v-model="value">
      <button>입력</button>
    </form>
    <p>시도 {{tries.length}} / 5</p>

    <ul>
      <li v-for="(t,index) in tries" :key="index">
        <p>{{t.try}}</p>
        <p>{{t.result}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
const getNumbers = (n)=> {
  let numbers = '';
  for (let i = 0; i < n; i++) {
    numbers += Math.ceil(Math.random() * 9,1);
  }
  return numbers;
}

export default {
  data(){
    return{
      result:'',
      value:'',
      tries:[],
      answer: getNumbers(4),
    }
  },
  methods:{
    onSubmitForm(){
      console.log(this.answer, this.tries);
      if(this.value === this.answer){
        this.result = '홈런';
        setTimeout(() => {
          alert('게임을 다시 실행하시겠습니까?');
          this.answer = '';
          this.result = '';
          this.value = '';
          this.tries = [];
        },200);
      }else{
        let strike = 0;
        let ball =0;
        console.log(this.value, typeof(this.value));
        const answerArray = this.value.split('').map((v)=>parseInt(v));
        for (let j = 0; j < 4; j += 1) {
          if(answerArray[j] === this.answer[j]){
            strike++;
          }else if(this.answer.includes(answerArray[j])){
            ball++;
          }
        }
        this.tries.push({
          try:this.value,
          result:`${strike} 스트라이크, ${ball} 볼 입니다.`,
        })
        this.value ='';
      }
    }
  }
}
</script>

<style>

</style>