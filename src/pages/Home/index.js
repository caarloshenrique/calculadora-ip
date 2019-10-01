import React, { Component } from 'react';
import { Container, Form, Card, Title, Description, Input, Button, CardModal, Toggle } from './styles';
import ParticleContainer from '../../components/Particles/index'
import Drawer from 'react-drag-drawer'
import { css } from 'emotion'

export default class Home extends Component {
  state = {
      octetOne: '',
      octetTwo: '',
      octetThree: '',
      octetFour: '',
      ip: {
        adress: '-',
        class: '-',
        mask: '-',
        network: '-',
        firstHost: '-',
        lastHost: '-',
        broadcast: '-',
        valid: 'false',
        reserved: 'false',
        binary: '-'
      },
      regular: false
  };

  toggle = (type, value) => event => {
    this.validaIP()
    this.setState(state => {
      return {
        [type]: value
      };
    });
  };

  validaIP = () => {
    if( this.ehOctetoValido(this.state.octetFour)
        && this.ehOctetoValido(this.state.octetThree)
        && this.ehOctetoValido(this.state.octetTwo)
        && this.ehOctetoValido(this.state.octetOne)
      ) {
        this.classificaIP()
        
    } else {
      console.log('IP inválido')
    }
  }

  ehOctetoValido = (octeto) => {
    if (octeto >= 0 && octeto <= 255) {
      return true
    }
  }

  classificaIP = () => {
    if (this.state.octetFour > 0 && this.state.octetFour < 127) {
      this.setState(prevState => ({
        ip: {
            ...prevState.ip,
            class: 'A',
            mask: '255.0.0.0',
            network: this.state.octetFour + '.0.0.0',
            firstHost: this.state.octetFour + '.0.0.1',
            lastHost: this.state.octetFour + '.255.255.254',
            broadcast: this.state.octetFour + '.255.255.255',
            valid: 'true',
        }
      }))
      if (this.ehIpReservado()) {
        this.setState(prevState => ({
          ip: {
            ...prevState.ip,
            reserved: 'true',
          }
        }))
      }
      this.sintetizaEndereco()
      this.converteBinario()
    }

    if (this.state.octetFour > 127 && this.state.octetFour < 192) {
      this.setState(prevState => ({
        ip: {
            ...prevState.ip,
            class: 'B',
            mask: '255.255.0.0',
            network: this.state.octetFour + '.' + 
                     this.state.octetThree + '.0.0',
            firstHost: this.state.octetFour + '.' + 
                       this.state.octetThree + '.0.1',
            lastHost: this.state.octetFour + '.' + 
                      this.state.octetThree + '.255.254',
            broadcast: this.state.octetFour + '.' + 
                       this.state.octetThree + '.255.255',
            valid: 'true'
        }
      }))
      if (this.ehIpReservado()) {
        this.setState(prevState => ({
          ip: {
            ...prevState.ip,
            reserved: 'true',
          }
        }))
      }
      this.sintetizaEndereco()
      this.converteBinario()
    }

    if (this.state.octetFour > 191 && this.state.octetFour < 224) {
      this.setState(prevState => ({
        ip: {
            ...prevState.ip,
            class: 'C',
            mask: '255.255.255.0',
            network: this.state.octetFour + '.' + 
                     this.state.octetThree + '.' +
                     this.state.octetTwo + '.0',
            firstHost: this.state.octetFour + '.' + 
                       this.state.octetThree + '.' +
                       this.state.octetTwo +'.1',
            lastHost: this.state.octetFour + '.' + 
                      this.state.octetThree + '.' +
                      this.state.octetTwo + '.254',
            broadcast: this.state.octetFour + '.' + 
                       this.state.octetThree + '.' +
                       this.state.octetTwo + '.255',
            valid: 'true'
        }
      }))
      if (this.ehIpReservado()) {
        this.setState(prevState => ({
          ip: {
            ...prevState.ip,
            reserved: 'true',
          }
        }))
      }
      this.sintetizaEndereco()
      this.converteBinario()
    }

    if (this.state.octetFour > 223 && this.state.octetFour < 240) {
      this.setState(prevState => ({
        ip: {
            ...prevState.ip,
            class: 'D',
            mask: 'Não possui máscara (Multicast)',
            network: '-',
            firstHost: '-',
            lastHost: '-',
            broadcast: '-',
        }
      }))
      this.sintetizaEndereco()
    }

    if (this.state.octetFour > 239 && this.state.octetFour < 255) {
      this.setState(prevState => ({
        ip: {
            ...prevState.ip,
            class: 'E',
            mask: 'Não possui máscara (Destinado a testes)',
            network: '-',
            firstHost: '-',
            lastHost: '-',
            broadcast: '-',
        }
      }))
      this.sintetizaEndereco()
    }

    if (this.ehIpLoopBack()) {
      this.setState(prevState => ({
        ip: {
            ...prevState.ip,
            class: 'IP de LoopBack',
            mask: '-',
            network: '-',
            firstHost: '-',
            lastHost: '-',
            broadcast: '-',
        }
      }))
      this.sintetizaEndereco()
      this.converteBinario()
    }
  }

  ehIpReservado = () => {
    if (this.state.octetOne == 0) {
      return true
    }
  }

  ehIpLoopBack = () => {
    if (this.state.octetFour == 127) {
      return true
    }
  }

 converteBinario = () => {
   const octetFour = parseInt(this.state.octetFour)
   const octetThree = parseInt(this.state.octetThree)
   const octetTwo = parseInt(this.state.octetTwo)
   const octetOne = parseInt(this.state.octetOne)
   let binary = octetFour.toString(2) + '.' +
                 octetThree.toString(2) + '.' +
                 octetTwo.toString(2) + '.' +
                 octetOne.toString(2)
    this.setState(prevState => ({
      ip: {
        ...prevState.ip,
        binary: binary
      }
    }))
  }

  sintetizaEndereco = () => {
    let adress = this.state.octetFour + '.' +
                  this.state.octetThree + '.' +
                  this.state.octetTwo + '.' +
                  this.state.octetOne
    this.setState(prevState => ({
        ip: {
          ...prevState.ip,
            adress: adress
        }
    }))
  }

  render() {
    const { regular } = this.state
  return (
    <Container>
      <ParticleContainer />
      <Card>
        <Title>Calculadora Endereçamento IP</Title>
        <Description>Informe um endereço IPv4</Description>
        <Form>
            <Input
                type="number" 
                name="octetFour"
                value={this.state.octetFour}
                onChange={e => this.setState({ octetFour: e.target.value })}>
            </Input>
            <Input
                type="number" 
                name="octetThree"
                value={this.state.octetThree}
                onChange={e => this.setState({ octetThree: e.target.value })}>
            </Input>
            <Input
                type="number" 
                name="octetTwo"
                value={this.state.octetTwo}
                onChange={e => this.setState({ octetTwo: e.target.value })}>
            </Input>
            <Input
                type="number" 
                name="octetoOne"
                value={this.state.octetOne}
                onChange={e => this.setState({ octetOne: e.target.value })}>
            </Input>
        </Form>
        <Button type="submit" onClick={this.toggle("regular", true)}>Calcular</Button>
      </Card>

      <Drawer
          open={regular}
          onRequestClose={this.toggle("regular", false)}
          modalElementClass={ModalElement}
        >
          <CardModal>
            Endereço IP: {this.state.ip.adress}
            <br/>
            Classe: {this.state.ip.class}
            <br/>
            Máscara: {this.state.ip.mask}
            <br/>
            Rede: {this.state.ip.network}
            <br/>
            Primeiro Host: {this.state.ip.firstHost}
            <br/>
            Último Host: {this.state.ip.lastHost}
            <br/>
            Broadcast: {this.state.ip.broadcast}
            <br/>
            IP Válido: {this.state.ip.valid}
            <br/>
            IP Reservado: {this.state.ip.reserved}
            <br/>
            Binário: {this.state.ip.binary}
            <Toggle onClick={this.toggle("regular", false)}>
              Fechar
            </Toggle>
          </CardModal>
        </Drawer>

    </Container>
  );
  }
}

const modal = css`
  position: absolute;
  top: 30px;
  background-color: white;
  width: 100%;
  max-width: 700px;
  min-height: 100%;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

const ModalElement = css`
  ${modal} text-align: center;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

