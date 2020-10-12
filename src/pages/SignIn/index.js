import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import api from '../../services/api';
import { login } from '../../services/auth';

import { Form, Container } from './styles';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: '',
    };
  }

  handleSignIn = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    if (!email || !password) {
      this.setState({ error: 'Preencha e-mail e senha para continuar' });
    } else {
      try {
        const response = await api.post('/sessions', { email, password });
        login(response.data.token);
      } catch (error) {
        this.setState({
          error: 'Houve um problema com o login, verifique suas credenciais',
        });
      }
    }
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSignIn}>
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
          <button type="submit">Entrar</button>
          <hr />
          <Link to="/signup">Crie uma conta gratuitamente</Link>
        </Form>
      </Container>
    );
  }
}

export default withRouter(SignIn);
