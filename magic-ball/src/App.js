import React, { Component } from 'react';
import './App.css';

class Magic8Ball extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      answer: '',
      isShaking: false,
    };
  }

  handleInputChange = (event) => {
    this.setState({ question: event.target.value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    if (this.state.question) {
      this.shakeMagic8Ball();
    }
  };

  shakeMagic8Ball = () => {
    const answers = [
      'Бесспорно!',
      'Предрешено!',
      'Никаких сомнений',
      'Определённо да',
      'Можешь быть уверен в этом',
      'Мне кажется — «да»',
      'Вероятнее всего',
      'Хорошие перспективы',
      'Знаки говорят — «да»',
      'Пока не ясно, попробуй снова',
      'Спроси позже',
      'Лучше не рассказывать',
      'Сейчас нельзя предсказать',
      'Сконцентрируйся и спроси опять',
      'Даже не думай',
      'Мой ответ — «нет»',
      'По моим данным — «нет»',
      'Перспективы не очень хорошие',
      'Весьма сомнительно',
    ];

    const randomAnswer = answers[Math.floor(Math.random() * answers.length)];

    this.setState({ answer: '', isShaking: true });

    setTimeout(() => {
      this.setState({ answer: randomAnswer, isShaking: false });
    }, 1000);
  };

  render() {
    const { question, answer, isShaking } = this.state;

    return (
      <div className={`magic-8-ball ${isShaking ? 'shake' : ''}`}>
        <h1 className="title">Магічна куля</h1>
        <form className="question-form" onSubmit={this.handleFormSubmit}>
          <input
            type="text"
            value={question}
            onChange={this.handleInputChange}
            placeholder="Задайте свой вопрос..."
          />
          <button type="submit">Задать вопрос</button>
        </form>
        {answer && (
          <div className="answer">
            <h2>Ответ:</h2>
            <p>{answer}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Magic8Ball;