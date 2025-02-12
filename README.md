# 📄 Documentação do Portfólio de Ayran Vieira

## 1. Introdução
Este projeto é um portfólio desenvolvido por **Ayran Vieira**, um desenvolvedor web júnior especializado em **React** e **Tailwind CSS**. O projeto inclui integração com backend via **Axios** para o envio de emails a partir do formulário de contato.

## 2. Tecnologias Utilizadas
- **Front-end:** React, Tailwind CSS, Axios  
- **Back-end:** Node.js, Express, Nodemailer  

## 3. Instalação e Configuração
### Clone o repositório:
```bash
git clone https://github.com/ayrandev/MY-PORTIFOLY
cd portfolio
```

### Instale as dependências:
```bash
npm install
```

### Configure o backend no arquivo `.env`:
```env
PORT=3000
EMAIL_USER=seuemail@example.com
EMAIL_PASS=sua_senha
```

### Rode o backend:
```bash
node server.js
```

### Rode o frontend:
```bash
npm run dev
```

## 4. API Endpoints
- `POST /api/contato` → Envia um email com os dados do formulário de contato  

## 5. Uso do Axios no Front-end
Exemplo de requisição no React para enviar um email via formulário:
```javascript
import axios from 'axios';

const enviarEmail = async (dados) => {
  try {
    const response = await axios.post('http://localhost:3000/api/contato', dados);
    console.log('Email enviado com sucesso:', response.data);
  } catch (error) {
    console.error('Erro ao enviar email:', error);
  }
};
```
