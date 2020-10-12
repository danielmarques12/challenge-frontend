import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';
import api from '../../services/api';
import Container from '../../components/container';
import {} from './styles';

class Transcription extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: '',
    };
  }

  componentDidMount() {
    const token = localStorage.getItem('@challenge-Token');

    if (token) {
      this.setState({ token: `Bearer ${token}` });
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    this.setState({ loading: true, error: false });

    try {
      const { newRepo, repositories } = this.state;

      if (newRepo === '') throw 'Você precisa indicar um repositório';

      const hasRepo = repositories.find((repo) => repo.name === newRepo);

      if (hasRepo) throw new Error('Repositório duplicado');

      const response = await api.get(`/repos/${newRepo}`);

      const data = {
        name: response.data.full_name,
      };

      this.setState({
        repositories: [...repositories, data],
        newRepo: '',
      });
    } catch (error) {
      this.setState({ error: true });
    } finally {
      this.setState({ loading: true });
    }
  };

  render() {
    const { token } = this.state;

    return token;
  }
}

export default withRouter(Transcription);
