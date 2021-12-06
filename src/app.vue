<template>
  <div class="main-continer">
    <header>
      <div class="flex-container">
        <h1>System Usability Scale (SUS) Score Calculator</h1>
      </div>
    </header>
    <main>
      <div class="flex-container">
        <div v-for="(question, index) in questions" :key="index">
          <label :for="'question' + index">{{ index + 1 }}. {{ question.question }}</label>
          <div class="range-labels">
            <span>Strongly Disagree</span>
            <span>Disagree</span>
            <span>Neutral</span>
            <span>Agree</span>
            <span>Strongly Agree</span>
          </div>
          <input type="range"
                 min="1"
                 max="5"
                 v-model.number="question.value"
                 @input="calculateQuestionScore(index)"
                 class="slider"
                 :id="'question' + index">
        </div>
      </div>
    </main>
    <footer class="logo">
      <div class="footer-container">
        <div class="scores">
          <div>
            <span class="score">Total<br/>Score:</span>
            <span class="score-value">
            {{ score }}
            <span class="score-footnote">Scale of 0-40</span>
          </span>
          </div>
          <div>
            <span class="score">Normalized<br/>Score:</span>
            <span class="score-value">
            {{ normalizedScore }}
            <span class="score-footnote">Scale of 0-100</span>
          </span>
          </div>
        </div>
        <p><span class="credit">Calculator made with &hearts; by</span> <img src="https://cdn.markadkins.design/images/ma_portfolio_logo_light.svg" alt="Mark Adkins Design"></p>

      </div>
    </footer>
  </div>
</template>

<script>

export default {
  name: "app",
  data() {
    return {
      score: 0,
      normalizedScore: 0,
      questions: [
        {
          question: "I think that I would like to use this system frequently.",
          value: 3,
          score: 2,
          inverted: false
        },
        {
          question: "I found the system unnecessarily complex.",
          value: 3,
          score: 2,
          inverted: true
        },
        {
          question: "I thought the system was easy to use.",
          value: 3,
          score: 2,
          inverted: false
        },
        {
          question: "I think that I would need the support of a technical person to be able to use this system.",
          value: 3,
          score: 2,
          inverted: true
        },
        {
          question: "I found the various functions in this system were well integrated.",
          value: 3,
          score: 2,
          inverted: false
        },
        {
          question: "I thought there was too much inconsistency in this system.",
          value: 3,
          score: 2,
          inverted: true
        },
        {
          question: "I would imagine that most people would learn to use this system very quickly.",
          value: 3,
          score: 2,
          inverted: false
        },
        {
          question: "I found the system very cumbersome to use.",
          value: 3,
          score: 2,
          inverted: true
        },
        {
          question: "I felt very confident using the system.",
          value: 3,
          score: 2,
          inverted: false
        },
        {
          question: "I needed to learn a lot of things before I could get going with this system.",
          value: 3,
          score: 2,
          inverted: true
        },
      ],
      local: (location.hostname === "localhost")
    }
  },
  methods: {
    calculateQuestionScore(index) {
      if(this.questions[index].inverted === false) {
        this.questions[index].score = (this.questions[index].value - 1);
      } else {
        this.questions[index].score = (5 - this.questions[index].value);
      }
      this.calculateNormalizedScore();
    },
    calculateNormalizedScore() {
      let total = 0;
      for(let i = 0; i < this.questions.length; i++) {
        total += this.questions[i].score;
      }
      this.score = total;
      this.normalizedScore = total * 2.5;
    }
  },
  mounted() {
    this.calculateNormalizedScore();
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

* {
  font-family: 'Poppins', sans-serif;
}

html, body {
  width: 100%;
  min-height: 100%;
  margin: 0;
  padding: 0;
}

body {
  width: 100%;
  display: flex;
  justify-content: center;
}

.main-continer {
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.flex-container {
  width: 90%;
  max-width: 600px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

header, footer {
  color: #FFFFFF;
  background-color: #1a36bb;
  display: flex;
  justify-content: center;
}

header {
  background-color: #020829;
}

header .flex-container {
  max-width: 800px;
}

footer {
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  bottom: 0;
  width: 100%;
}

.footer-container {
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 800px;
  margin: auto;
}

main {
  color: #000000;
  padding-top: 36px;
  padding-bottom: 30vh;
  display: flex;
  justify-content: center;
}

main label {
  display: block;
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 12px;
}

main input[type="range"] {
  width: 90%;
  margin-left: 5%;
  margin-bottom: 36px;
  margin-top: 12px;
  -webkit-appearance: none;
  appearance: none;
  height: 16px;
  border-radius: 8px;
  background: #c5c5c5;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
}

main input[type="range"] {
  opacity: 1;
}
main input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  background: #1a36bb;
  cursor: pointer;
  border-radius: 50%;
}

main input[type="range"]::-moz-range-thumb {
  width: 25px;
  height: 25px;
  background: #1a36bb;
  cursor: pointer;
}

.range-labels {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.range-labels span {
  display: inline-block;
  width: 80px;
  text-align: center;
}

.scores {
  padding-top: 32px;
  display: flex;
  flex-direction: row;
  font-size: 48px;
  line-height: 32px;
}

.scores div {
  width: 50%;
}

.score {
  display: inline-block;
  font-size: 32px;
  line-height: 32px;
  font-weight: bold;
  margin-bottom: 20px;
}

.score-value {
  display: inline-block;
  margin-left: 24px;
}

.score-footnote {
  display: block;
  font-size: 16px;
  color: #FFFFFF;
  opacity: 0.6;
}

main p {
  font-size: 16px;
}

main .mag > span {
  font-size: 24px;
  font-weight: bold;
}

footer p {
  display: flex;
  align-items: center;
}

footer p span {
  margin: 12px 0 0 0;
}

footer p span.credit {
  margin: 0;
}

.footer-container p {
  margin-top: 0;
}

.logo img {
  margin: 0 0 0 8px;
  max-width: 80px;
}

header h1 {
  margin: 12px 0 12px 0;
  font-weight: normal;
}

@media screen and (max-width: 800px) {
  .scores {
    flex-direction: column;
  }
  .scores div {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 12px;
  }
  .score-value {
    margin-top: 8px;
  }
}
</style>