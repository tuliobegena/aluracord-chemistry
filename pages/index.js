import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import React from 'react';
import { useRouter } from 'next/router';
import appConfig from '../config.json';

function Titulo(props) {
  const Tag = props.tag || 'h1';
  return (
    <>
      <Tag>{props.children}</Tag>
      <style jsx>{`
            ${Tag} {
                color: ${appConfig.theme.colors.neutrals['000']};
                font-size: 24px;
                font-weight: 600;
            }
            `}</style>
    </>
  );
}

//Componente React
// function HomePage() {
//     // JSX
//     return (
//          <div>
//              <GlobalStyle />
//              <Titulo tag="h2">Hello, AlChemist!</Titulo>
//              <h2>Discord - Alura Matrix</h2>
//          </div>
//      )
//  }
//export default HomePage

export default function PaginaInicial() {
    //const username = 'tuliobgn';
    const [username, setUsername] = React.useState('tuliobgn');
    const roteamento = useRouter();

  return (
    <>
      <Box
        styleSheet={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          backgroundColor: appConfig.theme.colors.primary[300],
          //backgroundImage: 'url(https://w.wallhaven.cc/full/nm/wallhaven-nmdomy.jpg)',
          backgroundImage: 'url(https://w.wallhaven.cc/full/0j/wallhaven-0j1z9q.jpg)',
          backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
        }}
      >
        <Box
          styleSheet={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: {
              xs: 'column',
              sm: 'row',
            },
            width: '100%', maxWidth: '700px',
            borderRadius: '5px', padding: '32px', margin: '16px',
            boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
            backgroundColor: appConfig.theme.colors.neutrals[600],
          }}
        >
          {/* Formulário */}
          <Box
            as="form"
            onSubmit={function (infosDoEvento) {
                infosDoEvento.preventDefault();
                console.log('Form submetido')
                roteamento.push(`/chat?username=${username}`);
                //window.location.href = '/chat';
            }}
            styleSheet={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
            }}
          >
            <Titulo tag="h2">Hello, Chemist!</Titulo>
            <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[300] }}>
              {appConfig.name}
            </Text>

            <input
            type="text"
            value={username}
            onChange={function handler(event) {
                console.log('usuariodigitou', event.target.value);
                //Onde está o valor?
                const valor = event.target.value;
                //Trocar o valor da variável através do React
                setUsername(valor);
            }}
            />
            {/* <TextField
              fullWidth
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals[200],
                  mainColor: appConfig.theme.colors.neutrals[900],
                  mainColorHighlight: appConfig.theme.colors.primary[700],
                  backgroundColor: appConfig.theme.colors.neutrals[800],
                },
              }}
            /> */}
            <Button
              type='submit'
              label='Enter'
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["000"],
                mainColor: appConfig.theme.colors.primary[500],
                mainColorLight: appConfig.theme.colors.primary[500],
                mainColorStrong: appConfig.theme.colors.primary[800],
              }}
            />
          </Box>
          {/* Formulário */}


          {/* Photo Area */}
          <Box
            styleSheet={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: '200px',
              padding: '16px',
              backgroundColor: appConfig.theme.colors.neutrals[800],
              border: '1px solid',
              borderColor: appConfig.theme.colors.neutrals[999],
              borderRadius: '10px',
              flex: 1,
              minHeight: '240px',
            }}
          >
            <Image
              styleSheet={{
                borderRadius: '30%',
                marginBottom: '16px',
              }}
              src={`https://github.com/${username}.png`}
            />
            <Text
              variant="body4"
              styleSheet={{
                color: appConfig.theme.colors.neutrals[200],
                backgroundColor: appConfig.theme.colors.primary[900],
                padding: '3px 10px',
                borderRadius: '1000px'
              }}
            >
              {username}
            </Text>
          </Box>
          {/* Photo Area */}
        </Box>
      </Box>
    </>
  );
}