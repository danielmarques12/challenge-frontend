import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import Speech from '../../assets/voice-speech.jpg';
import { Container, Form } from './styles';

import api from '../../services/api';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      error: '',
    };
  }

  handleSignUp = async (event) => {
    event.preventDefault();

    const { name, email, password } = this.state;
    if (!name || !email || !password) {
      this.setState({ error: 'Preencha todos os dados para se cadastrar' });
    } else {
      try {
        await api.post('/users', { name, email, password });
        this.props.history.push('/');
      } catch (error) {
        console.log(error);
        this.setState({ error: 'Ocorreu um erro ao registrar sua conta' });
      }
    }
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSignUp}>
          <img src={Speech} alt="Airbnb logo" />
          <input
            type="text"
            placeholder="Nome"
            onChange={(event) => this.setState({ name: event.target.value })}
          />
          <input
            type="email"
            placeholder="E-mail"
            onChange={(event) => this.setState({ email: event.target.value })}
          />
          <input
            type="password"
            placeholder="Senha"
            onChange={(event) =>
              this.setState({ password: event.target.value })
            }
          />
          <button type="submit">Realizar Cadastro</button>
          <hr />
          <Link to="/"> Fazer login</Link>
        </Form>
      </Container>
    );
  }
}

export default withRouter(SignUp);
